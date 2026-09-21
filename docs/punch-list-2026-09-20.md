# Canary punch-list verification — September 20, 2026

Baseline: GitHub main `50606358`. Implementation was prepared in an isolated checkout. Source publication and Replit production publication are distinct. This document must not be used as evidence that pending client approvals have arrived.

## Item-by-item result

| Request | Verified before changes | This implementation / remaining boundary |
| --- | --- | --- |
| Top-level oral history | Don accepted the proposed move on April 23, following his April 21 request. Main still used `/about/founders-story` plus a blog duplicate. | `/oral-history` now serves the existing complete founder/interview experience; desktop/mobile navigation and contextual links point there. Old founder/blog URLs 301 there; metadata, entity links, preloads and sitemap agree. |
| Audio listen/download | Four public MP3 recordings and players already existed in CF's founder page, but the action was “Open audio.” | Four labeled players use preload=none. Explicit same-origin MP3 downloads send attachment filenames and stream fixed public sources. HEAD and range support allow bounded verification and resuming. |
| Q4 overview and CTUC October space | July 7 email requests preparation; reply says approved copy/assets are needed. Two private content-free shells already exist. No later approved final materials were located in the focused email search. | Added concrete intake and release checklist in `q4-ctuc-readiness-2026-09-20.md`. No unapproved facts, public placeholders, routes or sitemap entries created. Approved copy, scope and timing still needed. |
| Six-second splash | PR #4 merged August 24; previous and current live observations establish the intro is already deployed. The email thread has an unsent, trashed preview-promise draft; no sent preview or subsequent approval located. | Existing splash behavior preserved, regression test passed. Follow-up draft asks Don to review the actual live intro and approve retaining it in the next release. No claim of new approval or production publication. |
| Remove 800+ bubble | PR #2 merged August 14. Live pancreas report has no 800+ bubble; existing test enforces absence. | No further clinical-copy change. Follow-up draft asks Heidi whether the already-live result resolves her request. |
| Don's title everywhere | Live staff is already Founder, Chairman & CEO. Main staff, board, council, homepage, centers, founder story and relevant blog use the shared title. | Fixed two remaining current awards-copy references; preserved historical quotations and other people's roles. Source sweep has no Co-Chair label for Don. |
| “Both websites” inquiry line | September 18 message does not name both sites. CF already has a live contact form with Subject and Message. | No contact changes. Draft asks Don which two sites he means before implementation. |

## Oral-history migration and downloads

The source page component remains `client/src/pages/founders-story.tsx`; only its public canonical address changes. The legacy blog summary record was removed from the public catalog because its full experience is now represented by the canonical page. Git history preserves the earlier record. Existing episode transcripts, complete PDF/TXT transcripts, recording dates and the Computer History Museum links remain available.

The server download endpoint accepts only episode IDs 1–4. It accepts no arbitrary upstream URL and follows no redirects. It streams with backpressure, caps bytes, stops on client disconnect, supports a single byte range, and bounds header, idle and overall time. Source recordings remain on the existing Listwin Ventures host; that host is an operational dependency. This change does not imply any new file-upload or private-source-file approval.

## Fresh validation

- TypeScript and production browser/SSR/Express build passed.
- SEO metadata and crawl generation passed; 46 canonical pages after consolidating two old oral-history pages into one.
- SSR HTTP test passed for all 46 canonical pages plus two 404s, one H1 each, complete initial content, metadata/schema, internal discovery and query-preserving 301 aliases.
- Oral-history HTTP assertions prove four players/download links and canonical-only sitemap membership.
- Route-loading, web-cleanse, team-updates, awards, splash, GA4 and platform hardening tests passed.
- Dedicated download tests cover all four attachments, invalid episodes/ranges, HEAD, upstream errors, byte cap, header/idle timeout and client cancellation.
- Real upstream HEAD and 16-byte range checks passed for all four recordings. Integrated server HEAD and range checks confirmed attachment headers and 206 behavior. Full recordings were not unnecessarily downloaded.
- Static link check passed for 53 external URLs; this does not certify every remote page.
- Browser review at desktop 1280px and mobile 390px found no document overflow. Four player/download pairs rendered. No hydration errors observed; local HTTP produced the expected Hotjar HTTPS warning. Native audio playback crashed the Codex in-app browser. Chrome fallback verified Episode 1 playback advancing to 16.99 seconds, readyState 4 and no media error; playback was paused afterward. All four upstream audio responses and download streams passed separate checks.
- Production dependency audit still reports 5 existing findings (1 high, 3 moderate, 1 low). These were present in the prior September audit; no dependency remediation is claimed here.

## Release and follow-up state

This source release implements the oral-history migration, downloads and remaining title corrections; Q4/CTUC content and clarification-dependent contact changes are not complete. Replit publication has not occurred in this pass. The saved CanaryWebsite URL returned an access page, and the in-app Google sign-in flow did not complete. An authenticated project session is required.

The next production release must preserve the full dist tree, including SSR modules and the browser manifest. Before publication, obtain the splash review required by the current user request and review the existing dependency findings. After publication, verify `/oral-history`, both 301 aliases, all four download headers/ranges, awards availability, sitemap, live asset identity and representative desktop/mobile behavior. Do not mark production complete from a main push.

Two exact follow-up drafts were prepared for user review outside the repository: Don's splash review/site clarification and Heidi's completed removal/Q4 content request. Sending remains subject to the user's explicit final-message approval. No email is claimed sent in this record.
