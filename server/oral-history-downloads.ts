import type { RequestHandler } from "express";
import { Readable, Transform } from "node:stream";
import { pipeline } from "node:stream/promises";

// Only these public recordings may be proxied. Never accept an upstream URL
// from a request or follow upstream redirects.
const episodeFiles: Record<string, string> = {
  "1": "episode-1-2025-03-25.mp3",
  "2": "episode-2-2025-04-02.mp3",
  "3": "episode-3-2025-04-07.mp3",
  "4": "episode-4-2025-04-28.mp3",
};
const MEDIA_BASE = "https://www.listwinventures.com/media/oral-history/caltech-2025/";
const MAX_DOWNLOAD_BYTES = 256 * 1024 * 1024;

export function createOralHistoryDownloadHandler({
  fetchMedia = fetch,
  headerTimeoutMs = 15_000,
  idleTimeoutMs = 30_000,
  downloadTimeoutMs = 15 * 60_000,
}: {
  fetchMedia?: typeof fetch;
  headerTimeoutMs?: number;
  idleTimeoutMs?: number;
  downloadTimeoutMs?: number;
} = {}): RequestHandler {
  return async (req, res) => {
    const filename = Object.hasOwn(episodeFiles, req.params.episode)
      ? episodeFiles[req.params.episode]
      : undefined;
    if (!filename) {
      res.status(404).json({ error: "Episode not found" });
      return;
    }
    const range = req.get("Range");
    if (range && !/^bytes=(?:\d+-\d*|-\d+)$/.test(range)) {
      res.status(400).json({ error: "Only a single byte range is supported" });
      return;
    }

    const controller = new AbortController();
    let timedOut = false;
    const abortForTimeout = () => {
      timedOut = true;
      controller.abort();
    };
    const headerTimer = setTimeout(abortForTimeout, headerTimeoutMs);
    const downloadTimer = setTimeout(abortForTimeout, downloadTimeoutMs);
    let idleTimer: ReturnType<typeof setTimeout> | undefined;
    const resetIdleTimer = () => {
      clearTimeout(idleTimer);
      idleTimer = setTimeout(abortForTimeout, idleTimeoutMs);
    };
    const onClose = () => controller.abort();
    res.once("close", onClose);

    try {
      const upstream = await fetchMedia(`${MEDIA_BASE}${filename}`, {
        method: req.method === "HEAD" ? "HEAD" : "GET",
        headers: { "Accept-Encoding": "identity", ...(range ? { Range: range } : {}) },
        redirect: "error",
        signal: controller.signal,
      });
      clearTimeout(headerTimer);
      if (upstream.status === 416) {
        await upstream.body?.cancel();
        const contentRange = upstream.headers.get("content-range");
        if (contentRange && /^bytes \*\/\d+$/.test(contentRange)) {
          res.setHeader("Content-Range", contentRange);
        }
        res.status(416).end();
        return;
      }
      if (![200, 206].includes(upstream.status) ||
          !/^audio\/(mpeg|mp3)(?:;|$)/i.test(upstream.headers.get("content-type") || "")) {
        await upstream.body?.cancel();
        throw new Error("Recording unavailable");
      }
      const length = upstream.headers.get("content-length");
      if (length && (!/^\d+$/.test(length) || Number(length) > MAX_DOWNLOAD_BYTES)) {
        await upstream.body?.cancel();
        throw new Error("Invalid recording size");
      }
      const contentRange = upstream.headers.get("content-range");
      if (upstream.status === 206 && (!range || !contentRange || !/^bytes \d+-\d+\/\d+$/.test(contentRange))) {
        await upstream.body?.cancel();
        throw new Error("Invalid recording range");
      }
      res.status(upstream.status);
      res.setHeader("Content-Type", "audio/mpeg");
      res.setHeader("Content-Disposition", `attachment; filename="canary-oral-history-${filename}"`);
      res.setHeader("X-Content-Type-Options", "nosniff");
      res.setHeader("Cache-Control", "private, no-store");
      res.setHeader("Accept-Ranges", "bytes");
      if (length) res.setHeader("Content-Length", length);
      if (contentRange) res.setHeader("Content-Range", contentRange);
      if (req.method === "HEAD") {
        await upstream.body?.cancel();
        res.end();
        return;
      }
      if (!upstream.body) throw new Error("Missing recording body");
      let bytes = 0;
      const sizeLimit = new Transform({
        transform(chunk, _encoding, callback) {
          bytes += chunk.length;
          resetIdleTimer();
          callback(bytes > MAX_DOWNLOAD_BYTES ? new Error("Recording exceeded size limit") : null, chunk);
        },
      });
      resetIdleTimer();
      // pipeline applies backpressure: even long recordings are never buffered
      // in memory in full. Closing the browser cancels the upstream transfer.
      await pipeline(
        Readable.fromWeb(upstream.body as Parameters<typeof Readable.fromWeb>[0]),
        sizeLimit,
        res,
        { signal: controller.signal },
      );
    } catch {
      if (!res.headersSent && !res.destroyed) {
        for (const name of ["Content-Length", "Content-Disposition", "Content-Range", "Accept-Ranges"]) {
          res.removeHeader(name);
        }
        res.status(timedOut ? 504 : 502).json({ error: "Audio download is temporarily unavailable. Please try again." });
      } else if (!res.destroyed) {
        res.destroy();
      }
    } finally {
      clearTimeout(headerTimer);
      clearTimeout(downloadTimer);
      clearTimeout(idleTimer);
      res.off("close", onClose);
      controller.abort();
    }
  };
}
