import { useState, useEffect, useRef } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { ChevronLeft, ChevronRight, Pause, Play } from "lucide-react";
import Header from "@/components/header";
import Footer from "@/components/footer";
import { Heart, Handshake, GraduationCap, Stethoscope, Users, Droplets, Shield, HandHeart, Users2, Share2, MapPin, Microscope, Building, Award, Lightbulb, Star, Target, TrendingUp, ArrowLeft, ArrowRight } from "lucide-react";
import { Link } from "wouter";
import BiomarkerGrid from "@/components/BiomarkerGrid";
import { trackClick, trackVideo } from "@/lib/analytics";
import { DON_LISTWIN_TITLE } from "@/data/leadership";
import canaryChallengeLogo from "@assets/canary challenge logo big_1752514995292.webp";
import canaryFinishLine from "@assets/Canary Challenge Finish Line_1752514185862.webp";
import canaryVolunteers from "@assets/Canary Challenge Volunteers_1752514185862.webp";
import canaryBooth from "@assets/Canary Challenge Booth_1752514185862.webp";
import canaryBiker from "@assets/Canary Challenge Biker_1752514185863.webp";
import canaryAnimatedVideo from "@assets/canary foundation animated video_1753284730466.mp4";

const FEATURED_REPORT_PATH = "/blog/canary-foundation-program-report-2025";
