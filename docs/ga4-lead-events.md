# GA4 `generate_lead` events

## Purpose

The existing GA4 property `G-D368QS08VY` (property `311697082`, account Canary Foundation / `2044674`) stays the only measurement ID on this site. `initGA()` in `client/src/lib/analytics.ts` remains the only `gtag('config', ...)` bootstrap.

This layer adds the recommended `generate_lead` event so successful contact submissions and outbound donate starts can be marked as key events in GA Admin after the events start arriving.

Do not add a second GA4 property, a second measurement ID, GTM, or a second `gtag('config', ...)` call.

## Events

| Trigger | Event | Distinguishing params |
| --- | --- | --- |
| Successful contact form POST (`/api/contact` mutation `onSuccess`) | `generate_lead` | `method=form`, `contact_method=form`, `form_id=contact_form`, `form_name=contact_form`, `lead_source=website_contact_form`, `location=contact` |
| Donate page "Donate Online" CTA to Donorbox (`donate_donorbox_primary`) | `generate_lead` | `method=donate`, `contact_method=donate`, `form_id=donorbox_canary_campaign`, `form_name=donorbox_canary_campaign`, `lead_source=website_donorbox_cta`, `location=donate_primary` |
| Donate page "Donate Online" CTA to Donorbox (`donate_donorbox_secondary`) | `generate_lead` | same donate params, `location=donate_secondary` |

The existing `form_submit` event from `trackFormSubmission("contact_form")` and the existing `click` / outbound events on the Donorbox CTAs are unchanged.

## Donate is an outbound CTA, not a completed gift

There is no on-site donate form. Online giving leaves the site to `https://donorbox.org/canary-campaign`. Donate `generate_lead` fires on those two "Donate Online" CTA clicks as an outbound donate start. It is **not** a confirmed completed gift and must not be treated as donation revenue.

Do not fire `generate_lead` on:

- Header or mobile "Take Action" links that only navigate to `/donate`
- `mailto:` links (contact email, donate email)
- Other Donorbox `window.open` buttons on science/home pages (not the donate-page conversion CTAs)

## Click-to-call is not present

There are no Foundation `tel:` CTAs. Contact is email plus mailing address only. Footer and header have no phone number. The Vehicles For Charity number `1-866-628-2277` on `/donate` is plain text for a third-party vehicle-donation partner; it is not a `tel:` link and is not a Foundation lead.

No `tel:` click handler was added. Do not convert that number into a `tel:` link.

## Privacy

Only the allowlisted params above are sent. The sanitizer in `client/src/lib/ga4.ts` drops any other key and any value that is not a short `[A-Za-z0-9._-]` token.

Never send:

- names
- emails
- phone numbers
- message bodies or subjects
- Donorbox amounts or gift details

## Implementation

- `client/src/lib/ga4.ts`: allowlisted `generate_lead` helper (does not call `gtag('config')`)
- `client/src/pages/contact.tsx`: `trackContactFormLead()` on mutation `onSuccess` only (not validation failure or API error)
- `client/src/pages/donate.tsx`: `trackDonorboxLead()` on the two Donorbox "Donate Online" CTAs

## Local verification

```bash
npm run test:ga4-lead
npm run check
```

After deploy, use GA4 DebugView / Realtime to confirm `generate_lead` arrives, then mark it as a key event in GA Admin. Marking the key event is not done in this repository.
