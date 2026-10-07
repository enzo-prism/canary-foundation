import { useCallback, useEffect, useRef, useState } from "react";
import { cn } from "@/lib/utils";
import {
  HOME_INTRO_CAPTION,
  HOME_INTRO_FADE_MS,
  HOME_INTRO_IMAGE_ALT,
  HOME_INTRO_IMAGE_JPG,
  HOME_INTRO_IMAGE_SIZES,
  HOME_INTRO_IMAGE_SRCSET,
  HOME_INTRO_TITLE,
  type HomeIntroPhase,
  homeIntroDelayMs,
  nextHomeIntroPhase,
} from "@/lib/home-intro";

export function HomeIntro() {
  const [phase, setPhase] = useState<HomeIntroPhase>("photo");
  const [imageReady, setImageReady] = useState(false);
  const [prefersReducedMotion, setPrefersReducedMotion] = useState(false);
  const imageRef = useRef<HTMLImageElement>(null);

  const markImageReady = useCallback(() => {
    setImageReady(true);
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
    const image = imageRef.current;
    if (image?.complete && image.naturalWidth > 0) {
      markImageReady();
    }
  }, [markImageReady]);

  useEffect(() => {
    if (!imageReady || prefersReducedMotion) return;
    const delay = homeIntroDelayMs(phase);
    if (delay === null) return;
    const timer = window.setTimeout(() => {
      setPhase((current) => nextHomeIntroPhase(current));
    }, delay);
    return () => window.clearTimeout(timer);
  }, [imageReady, phase, prefersReducedMotion]);

  const showTitle = phase !== "photo";
  const showCaption = phase === "caption" || phase === "hold";

  return (
    <section
      id="home-intro"
      aria-label="The beginning of Canary Foundation"
      data-phase={phase}
      className="relative isolate w-full overflow-hidden bg-black"
    >
      <div className="relative min-h-[calc(100svh-4.75rem)] w-full">
        <picture>
          <source
            type="image/webp"
            srcSet={HOME_INTRO_IMAGE_SRCSET}
            sizes={HOME_INTRO_IMAGE_SIZES}
          />
          <img
            ref={imageRef}
            src={HOME_INTRO_IMAGE_JPG}
            alt={HOME_INTRO_IMAGE_ALT}
            width={1920}
            height={1280}
            fetchPriority="high"
            decoding="async"
            onLoad={markImageReady}
            onError={markImageReady}
            className="absolute inset-0 h-full w-full object-contain object-center md:object-cover"
          />
        </picture>
        <div
          aria-hidden="true"
          className={cn(
            "absolute inset-0 bg-black/55 transition-opacity ease-out motion-reduce:opacity-100",
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
