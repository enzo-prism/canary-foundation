// Run with npx tsx scripts/test-oral-history-downloads.ts. Uses local fixtures;
// never downloads the real recordings or requires database configuration.
import assert from "node:assert/strict";
import express from "express";
import type { AddressInfo } from "node:net";
import { createOralHistoryDownloadHandler } from "../server/oral-history-downloads";

let calls = 0;
let mode: "ok" | "range" | "missing" | "html" | "timeout" | "oversized" | "unsatisfiable" | "stream" = "ok";
let onUpstreamAbort = () => {};
let lastUrl = "";
let lastOptions: RequestInit | undefined;
const fetchMedia: typeof fetch = async (url, options) => {
  calls++;
  lastUrl = String(url);
  lastOptions = options;
  if (mode === "stream") {
    options?.signal?.addEventListener("abort", () => onUpstreamAbort(), { once: true });
    return new Response(new ReadableStream({
      start(controller) { controller.enqueue(new TextEncoder().encode("MP3")); },
    }), { headers: { "Content-Type": "audio/mpeg" } });
  }
  if (mode === "timeout") {
    return new Promise((_resolve, reject) => {
      options?.signal?.addEventListener("abort", () => reject(new Error("aborted")), { once: true });
    });
  }
  if (mode === "missing") return new Response("missing", { status: 404 });
  if (mode === "html") return new Response("<html>not audio</html>", { headers: { "Content-Type": "text/html" } });
  if (mode === "unsatisfiable") return new Response(null, { status: 416, headers: { "Content-Range": "bytes */8" } });
  const partial = mode === "range";
  return new Response(options?.method === "HEAD" ? null : partial ? "MP" : "MP3-DATA", {
    status: partial ? 206 : 200,
    headers: {
      "Content-Type": "audio/mpeg",
      "Content-Length": mode === "oversized" ? String(257 * 1024 * 1024) : partial ? "2" : "8",
      ...(partial ? { "Content-Range": "bytes 0-1/8" } : {}),
    },
  });
};
const app = express();
app.get("/api/oral-history/episodes/:episode/download", createOralHistoryDownloadHandler({ fetchMedia, headerTimeoutMs: 30, idleTimeoutMs: 200 }));
const server = app.listen(0, "127.0.0.1");
await new Promise<void>((resolve) => server.once("listening", resolve));
const base = `http://127.0.0.1:${(server.address() as AddressInfo).port}/api/oral-history/episodes`;
try {
  for (const episode of ["0", "5", "constructor", "__proto__", "https%3A%2F%2Fevil.example"]) {
    assert.equal((await fetch(`${base}/${episode}/download`)).status, 404);
  }
  assert.equal(calls, 0, "Invalid episodes must not trigger upstream requests");
  assert.equal((await fetch(`${base}/1/download`, { headers: { Range: "bytes=0-1,3-4" } })).status, 400);
  assert.equal(calls, 0);
  for (const episode of [1, 2, 3, 4]) {
    const response = await fetch(`${base}/${episode}/download`);
    assert.equal(response.status, 200);
    assert.equal(await response.text(), "MP3-DATA");
    assert.match(response.headers.get("content-disposition")!, new RegExp(`^attachment; filename="canary-oral-history-episode-${episode}-`));
    assert.equal(response.headers.get("content-type"), "audio/mpeg");
    assert.match(lastUrl, /^https:\/\/www\.listwinventures\.com\/media\/oral-history\/caltech-2025\/episode-[1-4]-[\d-]+\.mp3$/);
    assert.equal(lastOptions?.redirect, "error");
    assert.equal(lastOptions?.signal?.aborted, true, "Completed requests release upstream resources");
  }
  const head = await fetch(`${base}/1/download`, { method: "HEAD" });
  assert.equal(head.status, 200);
  assert.equal(await head.text(), "");
  assert.equal(lastOptions?.method, "HEAD");
  mode = "range";
  const partial = await fetch(`${base}/1/download`, { headers: { Range: "bytes=0-1" } });
  assert.equal(partial.status, 206);
  assert.equal(partial.headers.get("content-range"), "bytes 0-1/8");
  assert.equal(await partial.text(), "MP");
  assert.equal(new Headers(lastOptions?.headers).get("range"), "bytes=0-1");
  mode = "unsatisfiable";
  const unsatisfiable = await fetch(`${base}/1/download`, { headers: { Range: "bytes=99-" } });
  assert.equal(unsatisfiable.status, 416);
  assert.equal(unsatisfiable.headers.get("content-range"), "bytes */8");
  for (const failure of ["missing", "html", "oversized", "timeout"] as const) {
    mode = failure;
    const response = await fetch(`${base}/1/download`);
    assert.equal(response.status, failure === "timeout" ? 504 : 502);
    assert.equal(response.headers.get("content-disposition"), null);
    assert.match((await response.json()).error, /temporarily unavailable/);
  }
  mode = "stream";
  let aborted = false;
  onUpstreamAbort = () => { aborted = true; };
  const streamingResponse = await fetch(`${base}/1/download`);
  await streamingResponse.body!.cancel();
  await new Promise((resolve) => setTimeout(resolve, 50));
  assert.equal(aborted, true, "Closing a download aborts the upstream fetch before idle timeout");
  const stalledResponse = await fetch(`${base}/1/download`);
  await assert.rejects(stalledResponse.text(), undefined, "An idle upstream stream must be terminated");
  console.log("Oral history downloads passed: allowlist, four attachments, HEAD, ranges, upstream errors, size limit, header/idle timeouts, and client cancellation.");
} finally {
  await new Promise<void>((resolve, reject) => server.close((error) => error ? reject(error) : resolve()));
}
