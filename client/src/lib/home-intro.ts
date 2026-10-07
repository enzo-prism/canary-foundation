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

export const HOME_INTRO_TITLE = "THE BEGINNING";
export const HOME_INTRO_CAPTION = "Canary Ovarian Cancer Team 2004";

export const HOME_INTRO_IMAGE_ALT =
  "Canary Foundation group standing in front of the Canary Fund bus, Long Beach, April 2005";

export const HOME_INTRO_IMAGE_WEBP = "/home-intro/canary-long-beach-april-2005.webp";
export const HOME_INTRO_IMAGE_WEBP_960 = "/home-intro/canary-long-beach-april-2005-960.webp";
export const HOME_INTRO_IMAGE_JPG = "/home-intro/canary-long-beach-april-2005.jpg";
export const HOME_INTRO_IMAGE_SRCSET = `${HOME_INTRO_IMAGE_WEBP_960} 960w, ${HOME_INTRO_IMAGE_WEBP} 1920w`;
export const HOME_INTRO_IMAGE_SIZES = "100vw";

export const HOME_INTRO_SOURCE_PHOTO = "attached_assets/canary-long-beach-april-2005.jpg";

export type HomeIntroPhase = "photo" | "title" | "caption" | "hold";

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
