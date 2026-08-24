import { useCallback, useEffect, useRef, useState } from "react";
import splashPhoto from "@assets/canary-long-beach-april-2005.jpg";
import { cn } from "@/lib/utils";

export const HOME_OPENING_SPLASH_STORAGE_KEY = "canary.homeOpeningSplash.shown";
export const HOME_OPENING_SPLASH_HOLD_MS = 6000;
export const HOME_OPENING_SPLASH_FADE_MS = 500;
export const HOME_OPENING_SPLASH_TITLE = "THE BEGINNING.";

type SplashPhase = "hidden" | "visible" | "fading";

function prefersReducedMotion(): boolean {
  if (typeof window === "undefined") {
    return false;
  }

  return window.matchMedia("(prefers-reduced-motion: reduce)").matches;
}

function wasDocumentReloaded(): boolean {
  const navigation = performance.getEntriesByType("navigation")[0] as
    | PerformanceNavigationTiming
    | undefined;
  return navigation?.type === "reload";
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

    // Hard refresh replays once for this document. In-app navigation remounts
    // the overlay but must not replay after it has already run.
    if (alreadyShownThisSession && !wasDocumentReloaded()) {
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
  const [phase, setPhase] = useState<SplashPhase>(() =>
    shouldPlayHomeOpeningSplash() ? "visible" : "hidden",
  );
  const overlayRef = useRef<HTMLDivElement>(null);

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

    const timer = window.setTimeout(dismiss, HOME_OPENING_SPLASH_HOLD_MS);
    return () => window.clearTimeout(timer);
  }, [dismiss, phase]);

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
      )}
    >
      <img
        src={splashPhoto}
        alt="Canary Foundation gathering in Long Beach, April 2005"
        className="absolute inset-0 h-full w-full object-cover"
      />
      <div
        className="absolute inset-0 bg-black/50"
        aria-hidden="true"
      />
      <div className="relative z-10 px-6 text-center">
        <p className="sr-only">Press Escape or click to skip.</p>
        <h1 className="font-sans text-4xl font-bold uppercase tracking-[0.22em] text-white [text-shadow:0_2px_24px_rgba(0,0,0,0.75)] sm:text-5xl md:text-6xl lg:text-7xl">
          {HOME_OPENING_SPLASH_TITLE}
        </h1>
      </div>
    </div>
  );
}
