# Foundation publishing status

This file replaces the outstanding-work lists in earlier audits. Don's latest instructions take precedence over older requests.

## Complete

- QuickBooks summary canceled on 8 October; slot and public references removed. Never treat it as a pending document.
- Approved 2025 public-inspection Form 990 posted; leave the original unchanged.
- Moffitt announcement published and featured first on the homepage. Cinelli announcement also published. Neither is the pending UCSD release.
- Staff and board approved by Don on 7 October. Homepage and About use his approved $100M directly raised and $1B grant-support wording.
- Intro timing applied; photo-date question already sent. Await Don's answer before changing 2004.

## Awaiting client content

| Item | Owner | Next input |
| --- | --- | --- |
| Q4 general overview | Heidi and Don | Current milestones, reporting cutoff and final public copy; resume next week |
| Financial narrative and overview | Don and Candy | Reconciled, approved Word and slide files; no draft charts |
| UCSD news announcement | Don and Peter | Final release, partner approval, embargo and date; Don says weeks away |
| Permanent CTUC section | Heidi and Don | Approved name, purpose, partners and supporting assets |
| Held science pages | Heidi and Don | Approved replacement copy and destination one page at a time |
| Photo caption | Don | Confirm 2004 against April 2005 photo label |

The approved ovarian source says **160 blood samples collected from 90 patients and 60 healthy women**, which distinguishes samples from people. The website restores this source wording. Do not infer a corrected total or assume repeat sampling; Heidi can clarify before a new summary reuses the counts.

## Contact operations

A labeled public test on 8 October returned `500`. A read-only Replit database check found `public.contact_messages` absent. No SMTP, Resend, SendGrid, Postmark or contact notification keys were configured in the workspace. Repair storage with the additive, idempotent `npm run db:contact-setup`; check production with a non-sensitive labeled test, then confirm its reference is durably retained without exposing other inquiries.

Staff notification ownership and delivery remain a separate acceptance check. Storage success alone does not prove that a person will respond. Retain the existing public contact email as a fallback. Do not create a new staff recipient or claim delivery until it is configured and verified.

GA4 uses the existing Foundation property. Connected-account access returned `403`; Search Console returned an authentication error. Restore existing access without creating a duplicate property. Donorbox outbound clicks are donation starts, not completed gifts.

## Announcements

Use the editable one-page Word template prepared in the task outputs. Each item needs a project name, approved text and figures, sources, image permissions, approver and publication timing. Keep Q4 and UCSD preparations outside public assets until approved.
