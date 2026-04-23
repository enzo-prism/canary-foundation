#!/bin/bash

set -euo pipefail

PROJECT_ROOT="$(cd "$(dirname "${BASH_SOURCE[0]}")/.." && pwd)"

build_production_bundle() {
  (
    cd "$PROJECT_ROOT"
    npm run build
    node postbuild.js
  )
}

find_available_port() {
  node --input-type=module <<'EOF'
import net from "node:net";

const server = net.createServer();
server.listen(0, "127.0.0.1", () => {
  const address = server.address();
  if (!address || typeof address === "string") {
    process.exitCode = 1;
    server.close();
    return;
  }

  console.log(address.port);
  server.close();
});
EOF
}

wait_for_server_ready() {
  local attempts="${1:-40}"

  for ((attempt = 1; attempt <= attempts; attempt++)); do
    if ! kill -0 "${TEST_SERVER_PID}" 2>/dev/null; then
      return 1
    fi

    if curl -fsS "${TEST_BASE_URL}/robots.txt" >/dev/null 2>&1; then
      return 0
    fi

    sleep 1
  done

  return 1
}

extract_header_value() {
  local headers="$1"
  local header_name="$2"

  echo "${headers}" | sed -n "s/^${header_name}:[[:space:]]*//Ip" | head -n 1
}

start_production_server() {
  local log_file="${1:-$PROJECT_ROOT/dist/server.log}"

  mkdir -p "$(dirname "$log_file")"

  TEST_PORT="${PORT:-$(find_available_port)}"
  TEST_BASE_URL="http://127.0.0.1:${TEST_PORT}"
  TEST_SERVER_LOG="$log_file"

  (
    cd "$PROJECT_ROOT"
    PORT="${TEST_PORT}" NODE_ENV=production node dist/index.js >"${TEST_SERVER_LOG}" 2>&1
  ) &
  TEST_SERVER_PID=$!

  export TEST_PORT TEST_BASE_URL TEST_SERVER_LOG TEST_SERVER_PID

  if ! wait_for_server_ready; then
    echo "Production server failed to become ready on ${TEST_BASE_URL}." >&2
    tail -n 50 "${TEST_SERVER_LOG}" >&2 || true
    return 1
  fi
}

stop_production_server() {
  if [[ -n "${TEST_SERVER_PID:-}" ]]; then
    kill "${TEST_SERVER_PID}" 2>/dev/null || true
    wait "${TEST_SERVER_PID}" 2>/dev/null || true
  fi
}
