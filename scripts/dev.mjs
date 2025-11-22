import { spawn } from "node:child_process";
import process from "node:process";
import { createRequire } from "node:module";

const require = createRequire(import.meta.url);
// Load tsx via --import so we avoid the CLI's Unix socket IPC server.
const tsxLoader = require.resolve("tsx");

const child = spawn(process.execPath, ["--import", tsxLoader, "server/index.ts"], {
  stdio: "inherit",
  env: {
    ...process.env,
    NODE_ENV: "development",
  },
});

child.on("exit", (code, signal) => {
  if (signal) {
    process.kill(process.pid, signal);
    return;
  }

  process.exit(code ?? 0);
});
