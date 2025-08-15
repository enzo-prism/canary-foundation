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
        transform: `translateY(${scrollY * 0.1}px)`,
      }}
      aria-hidden="true"
    >
      {/* Background dot grid */}
      <div 
        className="absolute inset-0 opacity-60"
        style={{
          backgroundImage: `radial-gradient(circle at 1px 1px, rgba(250,199,46,0.5) 1px, transparent 0)`,
          backgroundSize: '20px 20px',
        }}
      />
      
      {/* Animated node network using SVG */}
      <svg 
        className="absolute inset-0 w-full h-full" 
        xmlns="http://www.w3.org/2000/svg"
        style={{
          filter: 'blur(0.2px)',
        }}
      >
        <defs>
          <pattern id="grid" width="60" height="60" patternUnits="userSpaceOnUse">
            <circle cx="30" cy="30" r="1.5" fill="rgba(250, 199, 46, 0.2)" />
          </pattern>
          
          <linearGradient id="pulse" x1="0%" y1="0%" x2="100%" y2="0%">
            <stop offset="0%" stopColor="rgba(250, 199, 46, 0)" />
            <stop offset="50%" stopColor="rgba(250, 199, 46, 0.8)" />
            <stop offset="100%" stopColor="rgba(250, 199, 46, 0)" />
          </linearGradient>
          
          <radialGradient id="nodeGlow">
            <stop offset="0%" stopColor="rgba(250, 199, 46, 0.8)" />
            <stop offset="50%" stopColor="rgba(250, 199, 46, 0.4)" />
            <stop offset="100%" stopColor="rgba(250, 199, 46, 0)" />
          </radialGradient>
          
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
        
        {/* Static connection lines - More visible */}
        <g opacity="0.3">
          {Array.from({ length: 15 }, (_, i) => (
            <g key={i}>
              <line 
                x1={`${15 + (i * 60)}%`} 
                y1="25%" 
                x2={`${35 + (i * 60)}%`} 
                y2="35%" 
                stroke="rgba(250, 199, 46, 0.6)" 
                strokeWidth="1"
                className="biomarker-drift"
                style={{ 
                  animationDelay: `${i * 0.4}s`,
                  transform: 'translateZ(0)',
                }}
              />
              <line 
                x1={`${25 + (i * 55)}%`} 
                y1="65%" 
                x2={`${45 + (i * 55)}%`} 
                y2="75%" 
                stroke="rgba(250, 199, 46, 0.6)" 
                strokeWidth="1"
                className="biomarker-drift"
                style={{ 
                  animationDelay: `${i * 0.6}s`,
                  transform: 'translateZ(0)',
                }}
              />
            </g>
          ))}
        </g>
        
        {/* Animated pulse lines - More active */}
        <g opacity="0.9">
          {Array.from({ length: 6 }, (_, i) => (
            <line 
              key={i}
              x1={`${20 + (i * 40)}%`} 
              y1={`${30 + (i * 20)}%`} 
              x2={`${40 + (i * 40)}%`} 
              y2={`${40 + (i * 20)}%`} 
              stroke="url(#pulse)" 
              strokeWidth="2"
              strokeDasharray="30 70"
              className="signal-flow"
              style={{ 
                animationDelay: `${i * 0.8}s`,
                animationDuration: `${3 + i * 0.5}s`,
              }}
            />
          ))}
        </g>
        
        {/* Floating nodes - More active */}
        <g>
          {Array.from({ length: 20 }, (_, i) => (
            <circle 
              key={i}
              cx={`${20 + (i * 25) % 80}%`} 
              cy={`${30 + (i * 30) % 60}%`} 
              r={i % 6 === 0 ? "3" : "2"} 
              fill="rgba(250, 199, 46, 0.4)" 
              className="biomarker-pulse"
              style={{ 
                animationDelay: `${i * 0.2}s`,
                transform: 'translateZ(0)',
              }}
            />
          ))}
        </g>
        
        {/* Additional animated particles for more activity */}
        <g opacity="0.6">
          {Array.from({ length: 8 }, (_, i) => (
            <circle 
              key={`extra-${i}`}
              cx={`${10 + (i * 30)}%`} 
              cy={`${15 + (i * 25)}%`} 
              r="15" 
              fill="url(#nodeGlow)" 
              className="signal-flow"
              style={{ 
                animationDelay: `${i * 0.5}s`,
                animationDuration: '3s',
              }}
            />
          ))}
        </g>
        
        {/* Moving gradient waves */}
        <g opacity="0.3">
          {Array.from({ length: 4 }, (_, i) => (
            <rect 
              key={`wave-${i}`}
              x="-100%" 
              y={`${i * 25}%`}
              width="300%" 
              height="25%"
              fill="url(#pulse)"
              className="signal-flow"
              style={{ 
                animationDelay: `${i * 1.2}s`,
                animationDuration: '5s',
              }}
            />
          ))}
        </g>
      </svg>
      
      {/* Overlay gradient for text legibility */}
      <div 
        className="absolute inset-0 bg-gradient-to-b from-white/30 via-transparent to-white/30"
      />
    </div>
  );
};

export default BiomarkerGrid;