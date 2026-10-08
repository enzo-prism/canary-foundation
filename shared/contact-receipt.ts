export interface DurableContactReceipt {
  success: true;
  status: "stored";
  persisted: true;
  message: string;
}

// A successful HTTP response alone does not prove that an inquiry was retained.
export function isDurableContactReceipt(
  value: unknown,
): value is DurableContactReceipt {
  if (!value || typeof value !== "object") return false;
  const receipt = value as Record<string, unknown>;
  return receipt.success === true &&
    receipt.status === "stored" &&
    receipt.persisted === true &&
    typeof receipt.message === "string";
}
