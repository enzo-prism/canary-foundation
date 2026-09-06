# Design and loading polish — 6 September 2026

Baseline source: `2f0861d`. This follows the SEO/AEO work without changing canonical routes, published report contents, or donation destinations. The work was performed in the same isolated checkout with separate navigation, homepage, performance, and review agents.

## Audited journey and changes

1. **Homepage → choose research.** The former centered hero combined a moving biomarker background, text glow, pulsing buttons, and a full-yellow statistics band. The new editorial hero uses a serif headline, warm neutral surfaces, restrained yellow actions, and four direct cancer-program links. Research comes before the historical timeline. The homepage's repeated cards now use consistent fine borders, spacing, and smaller Lucide icons.
2. **Research hub → program.** Program choices previously followed a long introduction and leadership section. Four clearly labeled, fully clickable program links now appear at the top. Existing research context remains below them.
3. **Navigation → deeper pages.** The science menu now groups overview, programs, and centers into a readable wider panel. Mobile sections use large accordion controls. Active-page indication, Escape/focus restoration, pointer-outside closing, and breakpoint cleanup were checked. The charcoal footer is a labeled directory with a clear support action.
4. **Media and motion.** Reveal effects are short and run once. The decorative background no longer renders or updates React state on scroll. The logo film and gallery begin paused; visitors can explicitly play them. The 2.6 MB logo film uses `preload="none"` and was not requested during initial browser loading. Preference changes pause media, but a visitor can still explicitly choose playback. Reduced-motion styles suppress decorative transitions.
5. **Opening intro.** The requested historical photo, wording, and six-second duration remain. A visible Skip intro button makes the exit obvious; keyboard focus stays within the intro and returns to main content on dismissal. The headline is no longer a second page H1. Intro eligibility is claimed after React commits, so an abandoned hydration render cannot silently consume it. The intro still affects perceived first-visit loading; this update does not claim a measured LCP improvement.

## Loading implementation

- Initial route metadata remains authoritative in server HTML. The full blog catalog is no longer imported by the critical client entry; metadata resolution loads on subsequent SPA navigation.
- Vite's build manifest supplies the exact route module and its static dependencies for initial module preloads, avoiding a sequential request waterfall for lazy hydration.
- Hover/focus intent prefetch loads route modules while respecting data-saving and 2G connection hints. Subsequent async metadata updates ignore stale navigation results.
- A quiet, accessible skeleton replaces the full-screen plain loading message.
- Below-fold images are lazy/async with dimensions or reserved frames. Program and media sections retain full initial server HTML for crawling.

The original entry was 340,020 bytes (107,936 gzip). The integrated design build is 291,217 bytes (93,931 gzip bytes), approximately 291 KB (94 KB gzip), about **14% smaller uncompressed / 13% smaller gzip for the entry**. This is an entry-bundle comparison, not a whole-page transfer or field performance result. The current full homepage JavaScript dependency graph is about 122 KB gzip before optional content/media. `npm run test:loading` reports the exact entry sizes for each build. Avoiding the unrequested 2.6 MB film is an additional initial-network saving.

## Verification

- Fresh TypeScript check and production build.
- All 47 public pages: full SSR body, metadata/schema, one H1, canonical redirects, real 404s, and initial-HTML link reachability.
- Loading tests: route/module parity, manifest coverage, generated preloads, and no full blog body in the initial entry.
- Existing SEO, crawl, web-cleanse, awards, approved team updates, splash, GA4, and production HTTP checks.
- Desktop (1440px), mobile (390px), and reduced-motion browser checks; normal layout and navigation showed no overflow or hydration errors. Header/footer automated axe checks found no violations; this is not a claim of full-site WCAG conformance.
- Playback checked separately from initial-load network behavior. Screenshots document the audited before state and implemented desktop/mobile surfaces in [design-polish-assets](./design-polish-assets/).

## Source and production state

The source update is intended for GitHub main following the same authorized workflow. **Replit publication is separate** and was not performed by this task. The existing deployment instructions and dependency-advisory follow-ups in the SEO/AEO audit still apply. Publish the complete `dist` tree, including the browser manifest and SSR chunks, then verify live assets and behavior.

Design review used the [Web Interface Guidelines](https://github.com/vercel-labs/web-interface-guidelines/blob/main/command.md), with actual browser captures and interaction checks. No new fonts, animation libraries, or runtime dependencies were introduced.
