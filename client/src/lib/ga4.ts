// Allowlisted GA4 generate_lead helper.
// Uses the existing measurement ID initialized by initGA() in analytics.ts.
// Do not add a second gtag config call here.

export const generateLeadMethods = {
  form: "form",
  donate: "donate",
} as const;

export type GenerateLeadMethod =
  (typeof generateLeadMethods)[keyof typeof generateLeadMethods];

export type GenerateLeadParams = {
  form_id?: string;
  form_name?: string;
  lead_source?: string;
  location?: string;
  method?: GenerateLeadMethod;
  contact_method?: GenerateLeadMethod;
};

export const CONTACT_FORM_ID = "contact_form";
export const DONORBOX_FORM_ID = "donorbox_canary_campaign";

const ALLOWED_GENERATE_LEAD_KEYS = [
  "form_id",
  "form_name",
  "lead_source",
  "location",
  "method",
  "contact_method",
] as const;

const SAFE_PARAM_VALUE = /^[A-Za-z0-9._-]{1,80}$/;

function isSafeLeadParamValue(value: unknown): value is string {
  return typeof value === "string" && SAFE_PARAM_VALUE.test(value);
}

export function sanitizeGenerateLeadParams(
  params: GenerateLeadParams,
): Record<string, string> {
  const sanitized: Record<string, string> = {};

  for (const key of ALLOWED_GENERATE_LEAD_KEYS) {
    const value = params[key];
    if (isSafeLeadParamValue(value)) {
      sanitized[key] = value;
    }
  }

  return sanitized;
}

export function contactFormLeadParams(): GenerateLeadParams {
  return {
    form_id: CONTACT_FORM_ID,
    form_name: CONTACT_FORM_ID,
    lead_source: "website_contact_form",
    location: "contact",
    method: generateLeadMethods.form,
    contact_method: generateLeadMethods.form,
  };
}

export function donorboxLeadParams(
  location: "donate_primary" | "donate_secondary",
): GenerateLeadParams {
  return {
    form_id: DONORBOX_FORM_ID,
    form_name: DONORBOX_FORM_ID,
    lead_source: "website_donorbox_cta",
    location,
    method: generateLeadMethods.donate,
    contact_method: generateLeadMethods.donate,
  };
}

function getGtag(): ((...args: unknown[]) => void) | null {
  if (typeof window === "undefined" || typeof window.gtag !== "function") {
    return null;
  }

  return window.gtag;
}

export function trackGenerateLead(params: GenerateLeadParams): void {
  const sanitizedParams = sanitizeGenerateLeadParams(params);
  getGtag()?.("event", "generate_lead", sanitizedParams);
}

export function trackContactFormLead(): void {
  trackGenerateLead(contactFormLeadParams());
}

export function trackDonorboxLead(
  location: "donate_primary" | "donate_secondary",
): void {
  trackGenerateLead(donorboxLeadParams(location));
}
