import assert from "node:assert/strict";
import { isDurableContactReceipt } from "../shared/contact-receipt";

const stored = {
  success: true,
  status: "stored",
  persisted: true,
  message: "Thank you. Your message has been securely received.",
};
assert.equal(isDurableContactReceipt(stored), true);
for (const receipt of [
  null,
  {},
  { ...stored, persisted: false },
  { ...stored, persisted: "true" },
  { ...stored, status: "stored_temporarily" },
  { ...stored, status: "received" },
  { ...stored, success: false },
  { ...stored, message: null },
]) {
  assert.equal(isDurableContactReceipt(receipt), false,
    "Temporary, failed, and malformed receipts must not clear the form or count as leads");
}
console.log("Durable and non-durable contact receipt checks passed.");
