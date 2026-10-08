import { useCallback, useEffect, useRef, useState } from "react";
import splashPhoto from "@assets/canary-long-beach-april-2005.jpg";
import { cn } from "@/lib/utils";

export const HOME_OPENING_SPLASH_STORAGE_KEY = "canary.homeOpeningSplash.shown";
export const HOME_OPENING_SPLASH_HOLD_MS = 11000;
export const HOME_OPENING_SPLASH_FADE_MS = 500;
export const HOME_OPENING_SPLASH_PHOTO_MS = 5000;
export const HOME_OPENING_SPLASH_TITLE_MS = 3000;
export const HOME_OPENING_SPLASH_CAPTION = "Canary Ovarian Cancer Team 2004";
export const HOME_OPENING_SPLASH_TITLE = "THE BEGINNING.";

type SplashPhase = "hidden" | "visible" | "fading";

function prefersReducedMotion(): boolean {
  if (typeof window === "undefined") {
    return false;
  }

  return window.matchMedia("(prefers-reduced-motion: reduce)").matches;
}

// Survives wouter remounts on `/`, resets on a full document load.
let playedDuringThisDocument = false;

export function shouldPlayHomeOpeningSplash(): boolean {
  if (typeof window === "undefined") {
    return false;
  }

  if (playedDuringThisDocument) {
    return false;
  }

  try {
    const alreadyShownThisSession =
      sessionStorage.getItem(HOME_OPENING_SPLASH_STORAGE_KEY) === "1";

    // Reloads and in-app navigation must not replay the intro this session.
    if (alreadyShownThisSession) {
      return false;
    }

    playedDuringThisDocument = true;
    return true;
  } catch {
    playedDuringThisDocument = true;
    return true;
  }
}

function markHomeOpeningSplashShown(): void {
  try {
    sessionStorage.setItem(HOME_OPENING_SPLASH_STORAGE_KEY, "1");
  } catch {
    // Private mode / blocked storage: still play for this visit.
  }
}

export default function HomeOpeningSplash() {
  const [phase, setPhase] = useState<SplashPhase>("hidden");
  const [photoReady, setPhotoReady] = useState(false);
  const [scene, setScene] = useState<"photo" | "title" | "caption">("photo");
  const overlayRef = useRef<HTMLDivElement>(null);
  const skipRef = useRef<HTMLButtonElement>(null);
  const photoRef = useRef<HTMLImageElement>(null);
  const wasVisibleRef = useRef(false);

  // Claim the once-per-session intro only after React commits this component.
  // Lazy hydration may abandon a render; render-time mutation would skip it.
  useEffect(() => {
    if (shouldPlayHomeOpeningSplash()) setPhase("visible");
  }, []);

  useEffect(() => {
    if (phase !== "hidden") {
      wasVisibleRef.current = true;
    } else if (wasVisibleRef.current) {
      document.getElementById("main-content")?.focus({ preventScroll: true });
      wasVisibleRef.current = false;
    }
  }, [phase]);

  useEffect(() => {
    if (photoRef.current?.complete) {
      setPhotoReady(true);
    }
  }, [phase]);

  useEffect(() => {
    if (phase === "hidden") {
      return;
    }

    markHomeOpeningSplashShown();
  }, [phase]);

  const dismiss = useCallback(() => {
    setPhase((current) => {
      if (current === "hidden" || current === "fading") {
        return current;
      }

      return prefersReducedMotion() ? "hidden" : "fading";
    });
  }, []);

  useEffect(() => {
    if (phase !== "visible") {
      return;
    }

    if (!photoReady) {
      return;
    }

    const titleTimer = window.setTimeout(() => setScene("title"), HOME_OPENING_SPLASH_PHOTO_MS);
    const captionTimer = window.setTimeout(() => setScene("caption"), HOME_OPENING_SPLASH_PHOTO_MS + HOME_OPENING_SPLASH_TITLE_MS);
    const timer = window.setTimeout(dismiss, HOME_OPENING_SPLASH_HOLD_MS);
    return () => {
      window.clearTimeout(titleTimer);
      window.clearTimeout(captionTimer);
      window.clearTimeout(timer);
    };
  }, [dismiss, phase, photoReady]);

  useEffect(() => {
    if (phase !== "fading") {
      return;
    }

    const timer = window.setTimeout(() => {
      setPhase("hidden");
    }, HOME_OPENING_SPLASH_FADE_MS);
    return () => window.clearTimeout(timer);
  }, [phase]);

  useEffect(() => {
    if (phase === "hidden") {
      return;
    }

    const onKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Tab") {
        event.preventDefault();
        skipRef.current?.focus();
      }
      if (event.key === "Escape") {
        event.preventDefault();
        dismiss();
      }
    };

    window.addEventListener("keydown", onKeyDown);
    return () => window.removeEventListener("keydown", onKeyDown);
  }, [dismiss, phase]);

  useEffect(() => {
    if (phase === "hidden") {
      return;
    }

    const previousOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    overlayRef.current?.focus({ preventScroll: true });

    return () => {
      document.body.style.overflow = previousOverflow;
    };
  }, [phase]);

  if (phase === "hidden") {
    return null;
  }

  return (
    <div
      ref={overlayRef}
      role="dialog"
      aria-modal="true"
      aria-label={HOME_OPENING_SPLASH_TITLE}
      tabIndex={-1}
      onClick={dismiss}
      className={cn(
        "fixed inset-0 z-[200] flex cursor-pointer items-center justify-center overflow-hidden bg-black outline-none",
        "transition-opacity duration-500 ease-out",
        phase === "fading" ? "opacity-0" : "opacity-100",
        "motion-reduce:transition-none",
      )}
    >
      <img
        src={splashPhoto}
        alt="Canary Foundation gathering in Long Beach, April 2005"
        onLoad={() => setPhotoReady(true)}
        onError={() => setPhotoReady(true)}
        ref={photoRef}
        className={cn(
          "absolute inset-0 h-full w-full object-cover",
          photoReady ? "opacity-100" : "opacity-0",
        )}
      />
      <div
        className={cn(
          "absolute inset-0 bg-black/50",
          photoReady && scene !== "photo" ? "opacity-100" : "opacity-0",
        )}
        aria-hidden="true"
      />
      {photoReady && scene !== "photo" && <div className="relative z-10 max-w-5xl px-6 text-center">
        <p className="sr-only">Press Escape or click to skip.</p>
        <p className={cn(
          "font-sans font-bold uppercase text-white [text-shadow:0_2px_24px_rgba(0,0,0,0.75)]",
          scene === "caption" ? "text-2xl tracking-[0.08em] sm:text-3xl md:text-4xl" : "text-4xl tracking-[0.22em] sm:text-5xl md:text-6xl lg:text-7xl",
        )}>
          {scene === "caption" ? HOME_OPENING_SPLASH_CAPTION : HOME_OPENING_SPLASH_TITLE}
        </p>
      </div>}
      <button
        ref={skipRef}
        type="button"
        onClick={dismiss}
        className="absolute bottom-8 right-6 z-20 min-h-11 rounded-full border border-white/40 bg-black/60 px-6 text-sm font-medium text-white transition-colors hover:bg-black/80 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-white md:right-10"
      >
        Skip intro
      </button>
    </div>
  );
}
