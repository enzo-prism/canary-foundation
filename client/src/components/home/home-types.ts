import type { Dispatch, Ref, SetStateAction } from "react";
import type { LucideIcon } from "lucide-react";

export type TimelineEvent = {
  year: number;
  title: string;
  description: string;
  icon: LucideIcon;
  category: string;
};

export type HeroImage = {
  src: string;
  alt: string;
  title: string;
};

export type ProgramCard = {
  title: string;
  description: string;
  href: string;
  icon: LucideIcon;
};

export type HomeInteractiveProps = {
  timelineEvents: TimelineEvent[];
  selectedTimelineItem: number | null;
  setSelectedTimelineItem: Dispatch<SetStateAction<number | null>>;
  timelineRef: Ref<HTMLDivElement>;
  scrollTimeline: (direction: -1 | 1) => void;
  prefersReducedMotion: boolean;
  videoRef: Ref<HTMLVideoElement>;
  isVideoPlaying: boolean;
  setIsVideoPlaying: Dispatch<SetStateAction<boolean>>;
  programCards: ProgramCard[];
  heroImages: HeroImage[];
  currentSlide: number;
  setCurrentSlide: Dispatch<SetStateAction<number>>;
  nextSlide: () => void;
  prevSlide: () => void;
  isCarouselPlaying: boolean;
  setIsCarouselPlaying: Dispatch<SetStateAction<boolean>>;
};
