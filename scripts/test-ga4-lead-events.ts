import assert from "node:assert/strict";
import { readFileSync } from "node:fs";
import { resolve } from "node:path";
import {
  CONTACT_FORM_ID,
  DONORBOX_FORM_ID,
  contactFormLeadParams,
  donorboxLeadParams,
  sanitizeGenerateLeadParams,
} from "../client/src/lib/ga4";

const root = resolve(import.meta.dirname, "..");
const read = (path: string) => readFileSync(resolve(root, path), "utf8");

const analytics = read("client/src/lib/analytics.ts");
const ga4 = read("client/src/lib/ga4.ts");
const contact = read("client/src/pages/contact.tsx");
const donate = read("client/src/pages/donate.tsx");
const header = read("client/src/components/header.tsx");
const app = read("client/src/App.tsx");

assert.match(
  analytics,
  /const GA_MEASUREMENT_ID = 'G-D368QS08VY'/,
  "Existing GA4 measurement ID must stay G-D368QS08VY",
);
assert.equal(
  analytics.includes("gtag('config', GA_MEASUREMENT_ID"),
  true,
  "initGA / page views must keep the existing gtag config",
);
assert.doesNotMatch(
  ga4,
  /gtag\(['"]config['"]/,
  "The generate_lead helper must not add a second gtag config",
);
assert.doesNotMatch(
  [ga4, contact, donate, header, app].join("\n"),
  /G-[A-Z0-9]+/,
  "No new measurement ID may be introduced outside analytics.ts",
);
assert.match(app, /initGA\(\)/, "App shell must keep initGA()");

assert.match(
  contact,
  /onSuccess:[\s\S]*trackFormSubmission\("contact_form"\)[\s\S]*trackContactFormLead\(\)/,
  "Contact success must keep form_submit and fire generate_lead",
);
assert.doesNotMatch(
  contact.slice(contact.indexOf("onError:")),
  /trackContactFormLead|trackGenerateLead/,
  "Contact generate_lead must not fire on API error",
);
assert.doesNotMatch(
  contact.slice(contact.indexOf("const onSubmit"), contact.indexOf("return (")),
  /trackContactFormLead|trackGenerateLead/,
  "Contact generate_lead must wait for mutation success, not the submit click",
);
assert.doesNotMatch(
  contact,
  /mailto:[\s\S]{0,200}trackContactFormLead|trackGenerateLead/,
  "mailto links must not fire generate_lead",
);

assert.match(
  donate,
  /trackClick\("donate_donorbox_primary", "cta"\)[\s\S]*trackDonorboxLead\("donate_primary"\)/,
  "Primary Donorbox CTA must fire generate_lead",
);
assert.match(
  donate,
  /trackClick\("donate_donorbox_secondary", "cta"\)[\s\S]*trackDonorboxLead\("donate_secondary"\)/,
  "Secondary Donorbox CTA must fire generate_lead",
);
assert.match(
  donate,
  /call <span className="font-semibold text-dark">1-866-628-2277<\/span>/,
  "Vehicles For Charity number must remain plain text",
);
assert.doesNotMatch(
  donate,
  /href=["']tel:/,
  "Donate page must not invent tel: links",
);
assert.doesNotMatch(
  donate,
  /mailto:[\s\S]{0,80}trackDonorboxLead|trackGenerateLead/,
  "Donate mailto links must not fire generate_lead",
);

assert.match(header, /trackClick\("take_action_header", "cta"\)/);
assert.match(header, /trackClick\("take_action_mobile", "cta"\)/);
assert.doesNotMatch(
  header,
  /trackDonorboxLead|trackContactFormLead|trackGenerateLead|generate_lead/,
  "Header Take Action must not fire generate_lead",
);

const contactParams = contactFormLeadParams();
assert.deepEqual(contactParams, {
  form_id: CONTACT_FORM_ID,
  form_name: "contact_form",
  lead_source: "website_contact_form",
  location: "contact",
  method: "form",
  contact_method: "form",
});

const primaryDonate = donorboxLeadParams("donate_primary");
const secondaryDonate = donorboxLeadParams("donate_secondary");
assert.deepEqual(primaryDonate, {
  form_id: DONORBOX_FORM_ID,
  form_name: "donorbox_canary_campaign",
  lead_source: "website_donorbox_cta",
  location: "donate_primary",
  method: "donate",
  contact_method: "donate",
});
assert.equal(secondaryDonate.location, "donate_secondary");
assert.equal(secondaryDonate.lead_source, "website_donorbox_cta");

assert.deepEqual(
  sanitizeGenerateLeadParams({
    ...contactParams,
    form_id: "not a token",
    lead_source: "website_contact_form;drop",
  } as typeof contactParams),
  {
    form_name: "contact_form",
    location: "contact",
    method: "form",
    contact_method: "form",
  },
  "Unsafe tokens must be dropped",
);

assert.deepEqual(
  sanitizeGenerateLeadParams({
    form_id: "contact_form",
    form_name: "Ada Lovelace <ada@example.com>",
    lead_source: "website_contact_form",
    location: "contact",
    method: "form",
    contact_method: "form",
  }),
  {
    form_id: "contact_form",
    lead_source: "website_contact_form",
    location: "contact",
    method: "form",
    contact_method: "form",
  },
  "PII-like values must be dropped",
);

assert.equal(
  Object.prototype.hasOwnProperty.call(
    sanitizeGenerateLeadParams({
      form_id: "contact_form",
      // @ts-expect-error extra keys must never be forwarded
      email: "ada@example.com",
      value: "100",
    }),
    "email",
  ),
  false,
  "Non-allowlisted keys must be dropped",
);

console.log("GA4 generate_lead helper, wiring, and privacy checks passed.");
