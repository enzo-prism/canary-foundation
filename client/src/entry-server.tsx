import { PassThrough } from "node:stream";
import { renderToPipeableStream } from "react-dom/server";
import { Router } from "wouter";
import { QueryClient } from "@tanstack/react-query";
import App from "./App";
import { normalizeRoutePath } from "@shared/seo";

// Wait for lazy route modules before emitting HTML, so every client receives
// the complete page, including clients that never execute JavaScript.
export function render(url: string): Promise<string> {
  return new Promise((resolve, reject) => {
    const client = new QueryClient();
    const output = new PassThrough();
    const chunks: Buffer[] = [];
    let failed = false;
    const timer = setTimeout(() => {
      stream.abort();
      reject(new Error(`Page rendering timed out: ${url}`));
    }, 15000);
    output.on("data", (chunk: Buffer) => chunks.push(chunk));
    output.on("error", reject);
    output.on("end", () => {
      clearTimeout(timer);
      client.clear();
      if (!failed) resolve(Buffer.concat(chunks).toString("utf8"));
    });
    const stream = renderToPipeableStream(
      <Router ssrPath={normalizeRoutePath(url)}>
        <App queryClientInstance={client} />
      </Router>,
      {
        onAllReady() { stream.pipe(output); },
        onError(error) {
          failed = true;
          clearTimeout(timer);
          client.clear();
          reject(error);
        },
      },
    );
  });
}
