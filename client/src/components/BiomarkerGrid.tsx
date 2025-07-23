import React, { useEffect, useRef, useState } from 'react';

const BiomarkerGrid: React.FC = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  const [scrollY, setScrollY] = useState(0);

  // Check for reduced motion preference
  const prefersReducedMotion = typeof window !== 'undefined' && 
    window.matchMedia('(prefers-reduced-motion: reduce)').matches;

  // Handle scroll for parallax effect
  useEffect(() => {
    const handleScroll = () => {
      setScrollY(window.scrollY);
    };

    if (!prefersReducedMotion) {
      window.addEventListener('scroll', handleScroll);
      return () => window.removeEventListener('scroll', handleScroll);
    }
  }, [prefersReducedMotion]);

  if (prefersReducedMotion) {
    // Static fallback for reduced motion
    return (
      <div 
        className="absolute inset-0 opacity-20"
        style={{
          backgroundImage: `radial-gradient(circle at 1px 1px, rgba(242,242,242,0.8) 1px, transparent 0)`,
          backgroundSize: '12px 12px',
        }}
        aria-hidden="true"
      />
    );
  }

  return (
    <div 
      ref={containerRef}
      className="absolute inset-0 overflow-hidden"
      style={{ 
        clipPath: 'polygon(0 0, 60% 0, 60% 100%, 0 100%)', // Mask left 60% for text legibility
        transform: `translateY(${scrollY * 0.3}px)`,
      }}
      aria-hidden="true"
    >
      {/* Background dot grid */}
      <div 
        className="absolute inset-0 opacity-30"
        style={{
          backgroundImage: `radial-gradient(circle at 1px 1px, rgba(242,242,242,0.6) 1px, transparent 0)`,
          backgroundSize: '8px 8px',
        }}
      />
      
      {/* Animated node network using SVG */}
      <svg 
        className="absolute inset-0 w-full h-full" 
        xmlns="http://www.w3.org/2000/svg"
        style={{
          filter: 'blur(0.5px)',
        }}
      >
        <defs>
          <pattern id="grid" width="40" height="40" patternUnits="userSpaceOnUse">
            <circle cx="20" cy="20" r="1.5" fill="rgba(33, 33, 33, 0.12)" />
          </pattern>
          
          <linearGradient id="pulse" x1="0%" y1="0%" x2="100%" y2="0%">
            <stop offset="0%" stopColor="rgba(250, 199, 46, 0)" />
            <stop offset="50%" stopColor="rgba(250, 199, 46, 0.8)" />
            <stop offset="100%" stopColor="rgba(250, 199, 46, 0)" />
          </linearGradient>
          
          <filter id="glow">
            <feGaussianBlur stdDeviation="2" result="coloredBlur"/>
            <feMerge> 
              <feMergeNode in="coloredBlur"/>
              <feMergeNode in="SourceGraphic"/>
            </feMerge>
          </filter>
        </defs>
        
        {/* Background pattern */}
        <rect width="100%" height="100%" fill="url(#grid)" />
        
        {/* Static connection lines */}
        <g opacity="0.1">
          {Array.from({ length: 20 }, (_, i) => (
            <g key={i}>
              <line 
                x1={`${10 + (i * 40)}%`} 
                y1="20%" 
                x2={`${30 + (i * 40)}%`} 
                y2="40%" 
                stroke="rgba(33, 33, 33, 0.3)" 
                strokeWidth="1"
                className="biomarker-drift"
                style={{ 
                  animationDelay: `${i * 0.2}s`,
                  transform: 'translateZ(0)',
                }}
              />
              <line 
                x1={`${20 + (i * 35)}%`} 
                y1="60%" 
                x2={`${40 + (i * 35)}%`} 
                y2="80%" 
                stroke="rgba(33, 33, 33, 0.3)" 
                strokeWidth="1"
                className="biomarker-drift"
                style={{ 
                  animationDelay: `${i * 0.3}s`,
                  transform: 'translateZ(0)',
                }}
              />
            </g>
          ))}
        </g>
        
        {/* Animated pulse lines */}
        <g filter="url(#glow)">
          {Array.from({ length: 6 }, (_, i) => (
            <line 
              key={i}
              x1={`${15 + (i * 25)}%`} 
              y1={`${20 + (i * 15)}%`} 
              x2={`${35 + (i * 25)}%`} 
              y2={`${40 + (i * 15)}%`} 
              stroke="url(#pulse)" 
              strokeWidth="3"
              strokeDasharray="20 60"
              className="signal-flow"
              style={{ 
                animationDelay: `${i * 0.5}s`,
                animationDuration: `${1.5 + i * 0.2}s`,
              }}
            />
          ))}
        </g>
        
        {/* Floating nodes */}
        <g>
          {Array.from({ length: 30 }, (_, i) => (
            <circle 
              key={i}
              cx={`${10 + (i * 15) % 80}%`} 
              cy={`${20 + (i * 20) % 70}%`} 
              r={i % 12 === 0 ? "3" : "2"} 
              fill="rgba(33, 33, 33, 0.15)" 
              className="biomarker-pulse"
              style={{ 
                animationDelay: `${i * 0.1}s`,
                transform: 'translateZ(0)',
              }}
            />
          ))}
        </g>
      </svg>
      
      {/* Overlay gradient for text legibility */}
      <div 
        className="absolute inset-0 bg-gradient-to-r from-white/80 via-white/60 to-transparent"
        style={{ width: '50%' }}
      />
    </div>
  );
};

export default BiomarkerGrid;