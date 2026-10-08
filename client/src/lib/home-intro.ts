// Homepage intro timing and copy. Keep these constants together so Don can
// adjust the 5s / 3s / 3s sequence without hunting through the component.
//
// Photo: attached_assets/canary-long-beach-april-2005.jpg
// The current homepage hero is copy-only. This is the only founding-era
// group/team photograph in the repo, and the existing (overlay) splash already
// used it with "THE BEGINNING." Filename dates it April 2005; the caption
// uses Don's requested "Canary Ovarian Cancer Team 2004" wording.

export const HOME_INTRO_PHOTO_ALONE_MS = 5_000;
export const HOME_INTRO_TITLE_MS = 3_000;
export const HOME_INTRO_CAPTION_MS = 3_000;
export const HOME_INTRO_FADE_MS = 800;
export const HOME_INTRO_MAX_WAIT_MS = 8_000;

export const HOME_INTRO_TITLE = "THE BEGINNING";
export const HOME_INTRO_CAPTION = "Canary Ovarian Cancer Team 2004";

export const HOME_INTRO_IMAGE_ALT =
  "Canary Foundation group standing in front of the Canary Fund bus, Long Beach, April 2005";

export const HOME_INTRO_IMAGE_WEBP = "/home-intro/canary-long-beach-april-2005.webp";
export const HOME_INTRO_IMAGE_WEBP_960 = "/home-intro/canary-long-beach-april-2005-960.webp";
export const HOME_INTRO_IMAGE_WEBP_1280 = "/home-intro/canary-long-beach-april-2005-1280.webp";
export const HOME_INTRO_IMAGE_JPG = "/home-intro/canary-long-beach-april-2005.jpg";
export const HOME_INTRO_IMAGE_SRCSET = `${HOME_INTRO_IMAGE_WEBP_960} 960w, ${HOME_INTRO_IMAGE_WEBP_1280} 1280w, ${HOME_INTRO_IMAGE_WEBP} 1920w`;
export const HOME_INTRO_IMAGE_SIZES = "100vw";

export const HOME_INTRO_SOURCE_PHOTO = "attached_assets/canary-long-beach-april-2005.jpg";

export type HomeIntroPhase = "photo" | "title" | "caption" | "hold";
export type HomeIntroImageState = "pending" | "ready" | "failed" | "timeout";

declare global {
  interface Window {
    __homeIntroLoadedAt?: number;
  }
}

export function nextHomeIntroPhase(phase: HomeIntroPhase): HomeIntroPhase {
  switch (phase) {
    case "photo":
      return "title";
    case "title":
      return "caption";
    case "caption":
      return "hold";
    case "hold":
      return "hold";
    default: {
      const exhaustive: never = phase;
      return exhaustive;
    }
  }
}

export function homeIntroDelayMs(phase: HomeIntroPhase): number | null {
  switch (phase) {
    case "photo":
      return HOME_INTRO_PHOTO_ALONE_MS;
    case "title":
      return HOME_INTRO_TITLE_MS;
    case "caption":
      return HOME_INTRO_CAPTION_MS;
    case "hold":
      return null;
    default: {
      const exhaustive: never = phase;
      return exhaustive;
    }
  }
}

export function homeIntroElapsedPhase(elapsedMs: number): HomeIntroPhase {
  const titleAt = HOME_INTRO_PHOTO_ALONE_MS;
  const captionAt = titleAt + HOME_INTRO_TITLE_MS;
  const holdAt = captionAt + HOME_INTRO_CAPTION_MS;
  if (elapsedMs >= holdAt) return "hold";
  if (elapsedMs >= captionAt) return "caption";
  if (elapsedMs >= titleAt) return "title";
  return "photo";
}

export function homeIntroRemainingMs(phase: HomeIntroPhase, elapsedMs: number): number | null {
  switch (phase) {
    case "photo":
      return Math.max(0, HOME_INTRO_PHOTO_ALONE_MS - elapsedMs);
    case "title":
      return Math.max(0, HOME_INTRO_PHOTO_ALONE_MS + HOME_INTRO_TITLE_MS - elapsedMs);
    case "caption":
      return Math.max(
        0,
        HOME_INTRO_PHOTO_ALONE_MS + HOME_INTRO_TITLE_MS + HOME_INTRO_CAPTION_MS - elapsedMs,
      );
    case "hold":
      return null;
    default: {
      const exhaustive: never = phase;
      return exhaustive;
    }
  }
}

function readDatasetLoadMark(image: HTMLImageElement, now: number): number | null {
  const fromDataset = Number(image.dataset.loadedAt);
  if (Number.isFinite(fromDataset) && fromDataset >= 0 && fromDataset <= now + 50) {
    return fromDataset;
  }
  const globalMark = (window as Window & { __homeIntroLoadedAt?: number }).__homeIntroLoadedAt;
  if (typeof globalMark === "number" && globalMark >= 0 && globalMark <= now + 50) {
    return globalMark;
  }
  return null;
}

function readResourceLoadMark(image: HTMLImageElement): number | null {
  try {
    const resources = performance.getEntriesByType("resource") as PerformanceResourceTiming[];
    const candidates = [image.currentSrc, image.src].filter(Boolean);
    for (const candidate of candidates) {
      const path = new URL(candidate, window.location.href).pathname;
      const match = [...resources].reverse().find((entry) => {
        try {
          return new URL(entry.name).pathname === path && entry.responseEnd > 0;
        } catch {
          return entry.name.includes(path) && entry.responseEnd > 0;
        }
      });
      if (match) return match.responseEnd;
    }
    const fallback = [...resources].reverse().find((entry) => (
      entry.name.includes("/home-intro/canary-long-beach-april-2005") && entry.responseEnd > 0
    ));
    if (fallback) return fallback.responseEnd;
  } catch {
    // Private mode / missing Performance Observer: fall through.
  }
  return null;
}

// Prefer the real image load time (inline onload mark or resource timing
// responseEnd) so phases land at load+5s/+8s/+11s, not hydration+5s.
// `fallbackNow` is for a load event that just fired; complete-on-mount
// without a mark uses 0 (navigation start) so a preloaded photo still catches up.
export function readHomeIntroImageLoadMark(
  image: HTMLImageElement,
  fallbackNow = false,
): number {
  const now = performance.now();
  return readDatasetLoadMark(image, now)
    ?? readResourceLoadMark(image)
    ?? (fallbackNow ? now : (image.complete && image.naturalWidth > 0 ? 0 : now));
}
