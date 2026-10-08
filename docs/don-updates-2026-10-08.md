# Don Listwin updates, 8 October 2026

User authorized applying the Foundation changes and replying to Don after publication.

- Remove the canceled QuickBooks summary from homepage and Financials cards, descriptive copy, SEO metadata, and the document-drop plan. No financial reconciliation drafts or example charts are published. The approved 2025 public-inspection Form 990 remains available; Narrative and Overview stay pending.
- Replace unconfirmed independent-audit assertions with financial stewardship and board-oversight wording.
- Feature the existing Moffitt announcement first in homepage Latest News. Reuse its canonical article; do not duplicate it.
- Homepage intro: photograph for 5 seconds, THE BEGINNING. for 3 seconds, Canary Ovarian Cancer Team 2004 for 3 seconds, then dismiss. Keep Skip, Escape, focus restoration, and reduced-motion handling. Reloads and in-app navigation do not replay in the same browser-tab session. Preserve Don’s requested caption pending confirmation of the photo label, April 2005.
- Keep held science routes, Q4/CTUC drafts, and the future UCSD announcement unpublished.

Validation: TypeScript, production build/postbuild, financial and splash checks, web cleanse, SEO/crawl generation, oral-history downloads, GA4 privacy, team-update safety, awards, route loading, production server/crawler checks, full SSR, platform hardening, and 244 redirect checks passed. Existing platform-test payloads were updated to include the inquiryType field already required by the contact endpoint; application contact behavior is unchanged.

Browser review confirmed mobile cards and navigation, title and team-caption phases, automatic dismissal, no replay after reload, and immediate Escape dismissal under reduced motion. GitHub source and Replit production remain separate states until publishing and public readback complete.

Final production browser review caught React hydration error 421 during the router’s initial mounted-state update. Wrap that update in startTransition so the lazy route finishes hydration and retains its server-rendered content while the intro mounts. See https://react.dev/errors/421.
