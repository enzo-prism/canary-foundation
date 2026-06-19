import { Pool, neonConfig } from "@neondatabase/serverless";
import { drizzle } from "drizzle-orm/neon-serverless";
import ws from "ws";
import * as schema from "@shared/schema";

// Neon's serverless driver needs a WebSocket implementation in Node.
neonConfig.webSocketConstructor = ws;

const connectionString = process.env.DATABASE_URL;

export const isDatabaseConfigured = Boolean(connectionString);

// Only construct a pool when a connection string is present. When it is not
// (e.g. a static/preview run without a provisioned database), `db` stays null
// and callers fall back to in-memory storage — no connection is attempted.
export const db = connectionString
  ? drizzle(new Pool({ connectionString }), { schema })
  : null;
