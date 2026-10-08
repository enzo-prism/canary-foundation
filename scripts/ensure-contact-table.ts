// Idempotent setup for the existing contact schema. Never drops or alters data.
import { Pool, neonConfig } from "@neondatabase/serverless";
import ws from "ws";

neonConfig.webSocketConstructor = ws;
if (!process.env.DATABASE_URL) {
  throw new Error("DATABASE_URL must be configured before contact setup.");
}
const pool = new Pool({ connectionString: process.env.DATABASE_URL });
try {
  await pool.query(`CREATE TABLE IF NOT EXISTS public.contact_messages (
    id serial PRIMARY KEY,
    name text NOT NULL,
    email text NOT NULL,
    subject text NOT NULL,
    message text NOT NULL,
    created_at timestamp DEFAULT now() NOT NULL
  )`);
  const { rows } = await pool.query(`
    SELECT column_name, data_type, is_nullable
    FROM information_schema.columns
    WHERE table_schema = 'public' AND table_name = 'contact_messages'
  `);
  const expected = {
    id: "integer", name: "text", email: "text", subject: "text",
    message: "text", created_at: "timestamp without time zone",
  };
  for (const [name, type] of Object.entries(expected)) {
    if (!rows.some(row => row.column_name === name &&
      row.data_type === type && row.is_nullable === "NO")) {
      throw new Error("Contact table does not match the expected schema. No existing columns were changed.");
    }
  }
  console.log("Contact table is ready; existing records were preserved.");
} catch (error) {
  const code = error && typeof error === "object" && "code" in error
    ? String(error.code) : "unknown";
  console.error("Contact setup failed", {
    code: /^[A-Z0-9_]{1,20}$/.test(code) ? code : "unknown",
  });
  process.exitCode = 1;
} finally {
  await pool.end();
}
