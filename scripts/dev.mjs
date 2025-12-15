import { spawn } from "node:child_process";
import net from "node:net";
import process from "node:process";
import { createRequire } from "node:module";

const require = createRequire(import.meta.url);
// Load tsx via --import so we avoid the CLI's Unix socket IPC server.
const tsxLoader = require.resolve("tsx");

const DEFAULT_PORT = 5000;
const MAX_PORT_SEARCH_RANGE = 25;
const isReplit = process.env.REPL_ID !== undefined;

function parsePort(value) {
  if (!value) return undefined;
  const parsed = Number.parseInt(value, 10);
  if (Number.isNaN(parsed) || parsed <= 0 || parsed > 65535) return undefined;
  return parsed;
}

async function isPortAvailable(port, host = "0.0.0.0") {
  return new Promise((resolve) => {
    const server = net
      .createServer()
      .once("error", (err) => {
        if (err?.code === "EADDRINUSE" || err?.code === "EACCES") {
          resolve(false);
          return;
        }
        resolve(false);
      })
      .once("listening", () => {
        server.close(() => resolve(true));
      });

    server.listen({ port, host });
  });
}

async function findAvailablePort(startPort) {
  for (let port = startPort; port < startPort + MAX_PORT_SEARCH_RANGE; port += 1) {
    if (await isPortAvailable(port)) return port;
  }
  return startPort;
}

async function main() {
  const envPort = parsePort(process.env.PORT);
  const shouldAutoPickPort = !isReplit && envPort === undefined;
  const selectedPort = shouldAutoPickPort
    ? await findAvailablePort(DEFAULT_PORT)
    : envPort ?? DEFAULT_PORT;

  if (selectedPort !== DEFAULT_PORT) {
    console.log(
      `[dev] Port ${DEFAULT_PORT} is unavailable; starting on ${selectedPort}`,
    );
  }
  if (!isReplit) {
    console.log(`[dev] Preview: http://localhost:${selectedPort}`);
  }

  const child = spawn(
    process.execPath,
    ["--import", tsxLoader, "server/index.ts"],
    {
      stdio: "inherit",
      env: {
        ...process.env,
        NODE_ENV: "development",
        PORT: String(selectedPort),
      },
    },
  );

  const forwardSignal = (signal) => {
    if (child.killed) return;
    child.kill(signal);
  };

  process.on("SIGINT", () => forwardSignal("SIGINT"));
  process.on("SIGTERM", () => forwardSignal("SIGTERM"));

  child.on("exit", (code, signal) => {
    if (signal) {
      process.kill(process.pid, signal);
      return;
    }

    process.exit(code ?? 0);
  });
}

main().catch((err) => {
  console.error("[dev] Failed to start dev server:", err);
  process.exit(1);
});
