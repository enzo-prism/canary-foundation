import { useCallback, useEffect, useRef, useState } from "react";
import { cn } from "@/lib/utils";
import {
  HOME_INTRO_CAPTION,
  HOME_INTRO_FADE_MS,
  HOME_INTRO_IMAGE_ALT,
  HOME_INTRO_IMAGE_JPG,
  HOME_INTRO_IMAGE_SIZES,
  HOME_INTRO_IMAGE_SRCSET,
  HOME_INTRO_MAX_WAIT_MS,
  HOME_INTRO_TITLE,
  type HomeIntroImageState,
  type HomeIntroPhase,
  homeIntroElapsedPhase,
  homeIntroRemainingMs,
  nextHomeIntroPhase,
  readHomeIntroImageLoadMark,
} from "@/lib/home-intro";

function prefersReducedMotionNow(): boolean {
  return window.matchMedia("(prefers-reduced-motion: reduce)").matches;
}

// First mount in this JS runtime (SSR + hydrate) may catch up from a
// pre-hydration load. Later mounts are SPA returns to "/" and must start
// a fresh 5s/3s/3s sequence instead of reusing the first visit's mark.
let homeIntroMounts = 0;

export function HomeIntro() {
  const [phase, setPhase] = useState<HomeIntroPhase>("photo");
  const [imageState, setImageState] = useState<HomeIntroImageState>("pending");
  const [prefersReducedMotion, setPrefersReducedMotion] = useState(false);
  const imageRef = useRef<HTMLImageElement>(null);
  const sectionRef = useRef<HTMLElement>(null);
  const loadMarkRef = useRef<number | null>(null);
  const finalRef = useRef(false);
  // Count this instance once via a ref, not a useState initializer. StrictMode
  // double-invokes lazy useState inits in dev and would bump the counter to 2
  // on the first visit, disabling pre-hydration catch-up.
  const generationRef = useRef<number | null>(null);

  const ensureGeneration = (): number => {
    if (generationRef.current === null) {
      homeIntroMounts += 1;
      generationRef.current = homeIntroMounts;
    }
    return generationRef.current;
  };

  // Failed / hung images jump to the final frame (not a skip). The copy is
  // the point of the sequence, the reserved height stays put, and the
  // destination matches reduced-motion and the successful hold. Once we
  // enter failed/timeout, that state is terminal: a late onLoad must not
  // restart the sequence.
  const showFinalFrame = useCallback((state: HomeIntroImageState) => {
    loadMarkRef.current = null;
    finalRef.current = true;
    setImageState(state);
    setPhase("hold");
  }, []);

  const startFromLoad = useCallback((loadMark: number) => {
    if (finalRef.current) {
      setImageState("ready");
      return;
    }
    setImageState("ready");
    if (prefersReducedMotionNow()) {
      loadMarkRef.current = null;
      setPhase("hold");
      return;
    }
    if (loadMarkRef.current !== null) {
      return;
    }
    const mark = ensureGeneration() === 1 ? loadMark : performance.now();
    loadMarkRef.current = mark;
    setPhase(homeIntroElapsedPhase(performance.now() - mark));
  }, []);

  useEffect(() => {
    const media = window.matchMedia("(prefers-reduced-motion: reduce)");
    const syncPreference = () => {
      const reduced = media.matches;
      setPrefersReducedMotion(reduced);
      if (reduced) setPhase("hold");
    };
    syncPreference();
    media.addEventListener("change", syncPreference);
    return () => media.removeEventListener("change", syncPreference);
  }, []);

  useEffect(() => {
    ensureGeneration();
  }, []);

  useEffect(() => {
    const image = imageRef.current;
    if (!image) return;
    if (image.complete && image.naturalWidth === 0) {
      showFinalFrame("failed");
      return;
    }
    if (image.complete && image.naturalWidth > 0) {
      startFromLoad(readHomeIntroImageLoadMark(image));
    }
  }, [showFinalFrame, startFromLoad]);

  useEffect(() => {
    const section = sectionRef.current;
    if (prefersReducedMotion) {
      section?.setAttribute("data-max-wait", "skipped");
      return () => section?.removeAttribute("data-max-wait");
    }
    // Client-only mount signal for tests: SSR already paints data-image-state
    // and must not be mistaken for the 8s timer actually being armed.
    section?.setAttribute("data-max-wait", "armed");
    section?.setAttribute("data-max-wait-at", String(performance.now()));
    const timer = window.setTimeout(() => {
      if (loadMarkRef.current !== null || finalRef.current) return;
      const image = imageRef.current;
      if (image && image.complete && image.naturalWidth > 0) {
        startFromLoad(readHomeIntroImageLoadMark(image, true));
        return;
      }
      showFinalFrame("timeout");
    }, HOME_INTRO_MAX_WAIT_MS);
    return () => {
      window.clearTimeout(timer);
      section?.removeAttribute("data-max-wait");
      section?.removeAttribute("data-max-wait-at");
    };
  }, [prefersReducedMotion, showFinalFrame, startFromLoad]);

  useEffect(() => {
    if (prefersReducedMotion) return;
    if (imageState !== "ready" || loadMarkRef.current === null) return;
    const elapsed = performance.now() - loadMarkRef.current;
    const caughtUp = homeIntroElapsedPhase(elapsed);
    if (caughtUp !== phase) {
      setPhase(caughtUp);
      return;
    }
    const wait = homeIntroRemainingMs(phase, elapsed);
    if (wait === null) return;
    const timer = window.setTimeout(() => {
      setPhase((current) => nextHomeIntroPhase(current));
    }, wait);
    return () => window.clearTimeout(timer);
  }, [imageState, phase, prefersReducedMotion]);

  const onLoad = useCallback(() => {
    const image = imageRef.current;
    if (!image || image.naturalWidth === 0) {
      showFinalFrame("failed");
      return;
    }
    startFromLoad(readHomeIntroImageLoadMark(image, true));
  }, [showFinalFrame, startFromLoad]);

  const onError = useCallback(() => {
    showFinalFrame("failed");
  }, [showFinalFrame]);

  const showTitle = phase !== "photo";
  const showCaption = phase === "caption" || phase === "hold";
  const hideBrokenImage = imageState === "failed" || imageState === "timeout";

  return (
    <section
      id="home-intro"
      ref={sectionRef}
      aria-label="The beginning of Canary Foundation"
      data-phase={phase}
      data-image-state={imageState}
      className="relative isolate w-full overflow-hidden bg-black"
    >
      <noscript>
        <style>
          {`#home-intro .home-intro-overlay,#home-intro .home-intro-title,#home-intro .home-intro-caption{opacity:1!important}`}
        </style>
      </noscript>
      <div className="relative min-h-[calc(100svh-4.75rem)] w-full">
        <picture>
          <source
            type="image/webp"
            srcSet={HOME_INTRO_IMAGE_SRCSET}
            sizes={HOME_INTRO_IMAGE_SIZES}
          />
          <img
            id="home-intro-photo"
            ref={imageRef}
            src={HOME_INTRO_IMAGE_JPG}
            alt={HOME_INTRO_IMAGE_ALT}
            width={1920}
            height={1280}
            fetchPriority="high"
            decoding="async"
            onLoad={onLoad}
            onError={onError}
            className={cn(
              "absolute inset-0 h-full w-full object-cover object-[center_58%] transition-opacity ease-out",
              hideBrokenImage ? "opacity-0" : "opacity-100",
            )}
            style={{ transitionDuration: `${HOME_INTRO_FADE_MS}ms` }}
          />
        </picture>
        <script
          dangerouslySetInnerHTML={{
            __html: "(function(){var i=document.getElementById(\"home-intro-photo\");if(!i)return;function mark(){if(!i.dataset.loadedAt){i.dataset.loadedAt=String(performance.now());}if(!window.__homeIntroLoadedAt){window.__homeIntroLoadedAt=performance.now();}}if(i.complete&&i.naturalWidth>0)mark();else i.addEventListener(\"load\",mark,{once:true});})();",
          }}
        />
        <div
          aria-hidden="true"
          className={cn(
            "home-intro-overlay absolute inset-0 bg-black/55 transition-opacity ease-out motion-reduce:opacity-100",
            showTitle ? "opacity-100" : "opacity-0",
          )}
          style={{ transitionDuration: `${HOME_INTRO_FADE_MS}ms` }}
        />
        <div className="relative z-10 flex min-h-[calc(100svh-4.75rem)] items-center justify-center px-5 py-12 sm:px-8">
          <div className="max-w-5xl text-center">
            <p
              className={cn(
                "home-intro-title font-[Georgia,'Times_New_Roman',serif] font-normal uppercase leading-[1.05] text-white transition-opacity ease-out motion-reduce:opacity-100",
                "text-[clamp(2.15rem,9vw,5.4rem)] tracking-[0.06em]",
                "[text-shadow:0_2px_18px_rgba(0,0,0,0.7)]",
                showTitle ? "opacity-100" : "opacity-0",
              )}
              style={{ transitionDuration: `${HOME_INTRO_FADE_MS}ms` }}
            >
              {HOME_INTRO_TITLE}
            </p>
            <p
              className={cn(
                "home-intro-caption mt-4 font-[Georgia,'Times_New_Roman',serif] font-normal text-white transition-opacity ease-out motion-reduce:opacity-100 sm:mt-5",
                "text-[clamp(1.05rem,3.6vw,1.7rem)] leading-snug tracking-[0.02em]",
                "[text-shadow:0_2px_14px_rgba(0,0,0,0.7)]",
                showCaption ? "opacity-100" : "opacity-0",
              )}
              style={{ transitionDuration: `${HOME_INTRO_FADE_MS}ms` }}
            >
              {HOME_INTRO_CAPTION}
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
