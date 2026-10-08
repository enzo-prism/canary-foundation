/**
 * Mutation proof for the homepage intro browser suite.
 * Reverts each runtime guard, expects the matching Playwright case to go
 * red, then restores the source. Uses the Vite dev server so we do not
 * rebuild dist between cases.
 */
import assert from "node:assert/strict";
import { spawn, spawnSync, type ChildProcess } from "node:child_process";
import { readFileSync, writeFileSync } from "node:fs";
import { createServer } from "node:net";
import { resolve } from "node:path";

const root = resolve(import.meta.dirname, "..");
const introPath = resolve(root, "client/src/components/home/home-intro.tsx");
const original = readFileSync(introPath, "utf8");

type Mutation = {
  name: string;
  caseName: string;
  apply: (source: string) => string;
};

const mutations: Mutation[] = [
  {
    name: "timer starts on mount instead of image load",
    caseName: "catchup",
    apply: (source) => source
      .replace(
        `  useEffect(() => {
    const image = imageRef.current;
    if (!image) return;
    if (image.complete && image.naturalWidth === 0) {
      showFinalFrame("failed");
      return;
    }
    if (image.complete && image.naturalWidth > 0) {
      startFromLoad(readHomeIntroImageLoadMark(image));
    }
  }, [showFinalFrame, startFromLoad]);`,
        `  useEffect(() => {
    startFromLoad(performance.now());
  }, [startFromLoad]);`,
      )
      .replace(
        `    if (!image || image.naturalWidth === 0) {
      showFinalFrame("failed");
      return;
    }
    startFromLoad(readHomeIntroImageLoadMark(image, true));`,
        `    if (!image || image.naturalWidth === 0) {
      showFinalFrame("failed");
      return;
    }
    // mutated: keep the mount-started timer`,
      ),
  },
  {
    name: "ignore reduced motion in JS",
    caseName: "reduced-motion",
    apply: (source) => source
      .replace(
        `    if (prefersReducedMotionNow()) {
      loadMarkRef.current = null;
      setPhase("hold");
      return;
    }
    `,
        "",
      )
      .replace(`      if (reduced) setPhase("hold");\n`, "")
      .replace(`    if (prefersReducedMotion) return;\n    if (imageState !== "ready" || loadMarkRef.current === null) return;`,
        `    if (imageState !== "ready" || loadMarkRef.current === null) return;`),
  },
  {
    name: "ignore reduced motion in JS and CSS",
    caseName: "reduced-motion",
    apply: (source) => source
      .replace(
        `    if (prefersReducedMotionNow()) {
      loadMarkRef.current = null;
      setPhase("hold");
      return;
    }
    `,
        "",
      )
      .replace(`      if (reduced) setPhase("hold");\n`, "")
      .replace(`    if (prefersReducedMotion) return;\n    if (imageState !== "ready" || loadMarkRef.current === null) return;`,
        `    if (imageState !== "ready" || loadMarkRef.current === null) return;`)
      .replaceAll(" motion-reduce:opacity-100", ""),
  },
  {
    name: "drop the complete / failed-image mount check",
    caseName: "abort",
    apply: (source) => source.replace(
      `    if (image.complete && image.naturalWidth === 0) {
      showFinalFrame("failed");
      return;
    }
    if (image.complete && image.naturalWidth > 0) {
      startFromLoad(readHomeIntroImageLoadMark(image));
    }`,
      `    if (image.complete && image.naturalWidth > 0) {
      startFromLoad(readHomeIntroImageLoadMark(image));
    }`,
    ),
  },
  {
    name: "remove onError",
    caseName: "error",
    apply: (source) => source.replace(`\n            onError={onError}`, ""),
  },
  {
    name: "drop the terminal failed/timeout guard",
    caseName: "late-load",
    apply: (source) => source.replace(
      `    if (finalRef.current) {
      setImageState("ready");
      return;
    }
    `,
      "",
    ),
  },
  {
    name: "timeout hides a photo that already decoded",
    caseName: "timeout-race",
    apply: (source) => source.replace(
      `    const timer = window.setTimeout(() => {
      if (loadMarkRef.current !== null || finalRef.current) return;
      const image = imageRef.current;
      if (image && image.complete && image.naturalWidth > 0) {
        startFromLoad(readHomeIntroImageLoadMark(image, true));
        return;
      }
      showFinalFrame("timeout");
    }, HOME_INTRO_MAX_WAIT_MS);`,
      `    const timer = window.setTimeout(() => {
      showFinalFrame("timeout");
    }, HOME_INTRO_MAX_WAIT_MS);`,
    ),
  },
  {
    name: "reuse the first-visit load mark on remount",
    caseName: "remount",
    apply: (source) => source.replace(
      "    const mark = ensureGeneration() === 1 ? loadMark : performance.now();",
      "    const mark = loadMark;",
    ),
  },
  {
    name: "drop the load-mark / final-frame max-wait guard",
    caseName: "srcset-switch",
    apply: (source) => source.replace(
      "      if (loadMarkRef.current !== null || finalRef.current) return;\n",
      "",
    ),
  },
  {
    name: "drop naturalWidth so a broken decode is treated as ready",
    caseName: "corrupt",
    apply: (source) => source.replace(
      `    const timer = window.setTimeout(() => {
      if (loadMarkRef.current !== null || finalRef.current) return;
      const image = imageRef.current;
      if (image && image.complete && image.naturalWidth > 0) {
        startFromLoad(readHomeIntroImageLoadMark(image, true));
        return;
      }
      showFinalFrame("timeout");
    }, HOME_INTRO_MAX_WAIT_MS);`,
      `    const timer = window.setTimeout(() => {
      const image = imageRef.current;
      globalThis.__mutateDropNaturalWidth = true;
      if (image && image.complete) {
        startFromLoad(readHomeIntroImageLoadMark(image, true));
        return;
      }
      showFinalFrame("timeout");
    }, HOME_INTRO_MAX_WAIT_MS);`,
    ),
  },
];

async function freePort(): Promise<number> {
  return await new Promise((resolvePort, reject) => {
    const server = createServer();
    server.listen(0, "127.0.0.1", () => {
      const address = server.address();
      if (!address || typeof address === "string") {
        server.close();
        reject(new Error("Could not allocate a port"));
        return;
      }
      const { port } = address;
      server.close(() => resolvePort(port));
    });
    server.on("error", reject);
  });
}

async function startDevServer(): Promise<{ url: string; stop: () => void }> {
  const port = await freePort();
  const child: ChildProcess = spawn(process.execPath, ["scripts/dev.mjs"], {
    cwd: root,
    env: { ...process.env, NODE_ENV: "development", PORT: String(port) },
    stdio: ["ignore", "pipe", "pipe"],
  });
  let output = "";
  child.stdout?.on("data", (chunk) => { output += String(chunk); });
  child.stderr?.on("data", (chunk) => { output += String(chunk); });
  const url = `http://127.0.0.1:${port}`;
  const deadline = Date.now() + 30_000;
  while (Date.now() < deadline) {
    try {
      const response = await fetch(url, { redirect: "manual" });
      if (response.ok || response.status === 301) {
        return { url, stop: () => { child.kill("SIGTERM"); } };
      }
    } catch {
      if (child.exitCode !== null) {
        throw new Error(`Dev server exited: ${output}`);
      }
    }
    await new Promise((resolveWait) => setTimeout(resolveWait, 200));
  }
  child.kill("SIGTERM");
  throw new Error(`Dev server did not start: ${output}`);
}

function runCase(url: string, caseName?: string): { status: number; output: string } {
  const env = {
    ...process.env,
    BASE_URL: url,
  };
  if (caseName) env.HOME_INTRO_CASE = caseName;
  else delete env.HOME_INTRO_CASE;
  const result = spawnSync(
    process.execPath,
    ["--import", "tsx", "scripts/test-home-intro-browser.ts"],
    {
      cwd: root,
      env,
      encoding: "utf8",
    },
  );
  return {
    status: result.status ?? 1,
    output: `${result.stdout ?? ""}\n${result.stderr ?? ""}`,
  };
}

function restoreSource() {
  writeFileSync(introPath, original);
}

function isCommentLine(line: string): boolean {
  return /^\s*\/\//.test(line) || /^\s*\/\*|\*\/\s*$/.test(line);
}

function sourceMarker(from: string, against: string): { includes?: string; excludes?: string } {
  const againstLines = new Set(against.split("\n"));
  const added = from.split("\n").find((line) => (
    line.trim().length > 0 && !isCommentLine(line) && !againstLines.has(line)
  ));
  if (added) return { includes: added.trim() };
  const fromLines = new Set(from.split("\n"));
  const removed = against.split("\n").find((line) => (
    line.trim().length > 0 && !isCommentLine(line) && !fromLines.has(line)
  ));
  if (removed) return { excludes: removed.trim() };
  throw new Error("patch must add or remove a unique line");
}

async function waitForServedSource(
  url: string,
  marker: { includes?: string; excludes?: string },
  label: string,
) {
  const deadline = Date.now() + 10_000;
  let last = "";
  while (Date.now() < deadline) {
    const candidates = [
      `${url}/src/components/home/home-intro.tsx`,
      `${url}/@fs${introPath}`,
    ];
    for (const candidate of candidates) {
      try {
        const response = await fetch(candidate, { cache: "no-store" });
        if (!response.ok) continue;
        const type = response.headers.get("content-type") ?? "";
        if (!type.includes("javascript") && !type.includes("typescript")) continue;
        last = await response.text();
        if (!last.includes("HomeIntro")) continue;
        const hasInclude = !marker.includes || last.includes(marker.includes);
        const missingExclude = !marker.excludes || !last.includes(marker.excludes);
        if (hasInclude && missingExclude) {
          // File watchers invalidate the imported module after this fetch.
          await new Promise((resolveWait) => setTimeout(resolveWait, 700));
          return;
        }
      } catch {
        // Vite may still be transforming.
      }
    }
    await new Promise((resolveWait) => setTimeout(resolveWait, 200));
  }
  throw new Error(
    `${label}: Vite did not serve the expected source (${JSON.stringify(marker)}). Last body length ${last.length}.`,
  );
}

async function main() {
  const { url, stop } = await startDevServer();
  const results: string[] = [];
  const onSignal = (signal: NodeJS.Signals) => {
    restoreSource();
    stop();
    process.exit(signal === "SIGINT" ? 130 : 143);
  };
  process.on("SIGINT", onSignal);
  process.on("SIGTERM", onSignal);
  process.on("exit", restoreSource);
  try {
    for (const mutation of mutations) {
      try {
        const mutated = mutation.apply(original);
        assert.notEqual(mutated, original, `${mutation.name}: patch must change the source`);
        const marker = sourceMarker(mutated, original);
        writeFileSync(introPath, mutated);
        await waitForServedSource(url, marker, mutation.name);
        const failed = runCase(url, mutation.caseName);
        if (failed.status === 0) {
          throw new Error(
            `${mutation.name}: expected HOME_INTRO_CASE=${mutation.caseName} to fail, but it passed.\n${failed.output}`,
          );
        }
        results.push(`RED  ${mutation.name} (${mutation.caseName})`);
        console.log(`RED  ${mutation.name}`);
      } finally {
        restoreSource();
        await waitForServedSource(
          url,
          { includes: "if (loadMarkRef.current !== null || finalRef.current) return;" },
          "restore",
        );
      }
    }

    restoreSource();
    await waitForServedSource(
      url,
      { includes: "if (loadMarkRef.current !== null || finalRef.current) return;" },
      "restore-all",
    );
    const restored = runCase(url);
    if (restored.status !== 0) {
      throw new Error(`Restored source failed the full browser suite:\n${restored.output}`);
    }
    results.push("GREEN restored all browser cases");
    console.log("Homepage intro mutation proof passed.");
    for (const line of results) console.log(`  ${line}`);
  } finally {
    restoreSource();
    process.off("SIGINT", onSignal);
    process.off("SIGTERM", onSignal);
    stop();
  }
}

await main();
