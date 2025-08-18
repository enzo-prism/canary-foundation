import { useEffect, useRef } from 'react';
import { useLocation } from 'wouter';
import { trackPageView } from '../lib/analytics';

/**
 * Custom hook to track page views in a single-page application
 * Automatically tracks route changes using wouter's useLocation
 */
export const useAnalytics = () => {
  const [location] = useLocation();
  const prevLocationRef = useRef<string>(location);
  const isFirstMount = useRef(true);
  
  useEffect(() => {
    // Skip the first mount as GA already tracks initial page view
    if (isFirstMount.current) {
      isFirstMount.current = false;
      return;
    }
    
    // Only track if location actually changed
    if (location !== prevLocationRef.current) {
      trackPageView(location);
      prevLocationRef.current = location;
    }
  }, [location]);
};

/**
 * Hook to track scroll depth
 */
export const useScrollTracking = () => {
  const tracked = useRef<Set<number>>(new Set());
  
  useEffect(() => {
    const handleScroll = () => {
      const scrollHeight = document.documentElement.scrollHeight - window.innerHeight;
      const scrolled = window.scrollY;
      const percentage = Math.round((scrolled / scrollHeight) * 100);
      
      // Track at 25%, 50%, 75%, and 100%
      const milestones = [25, 50, 75, 100];
      
      milestones.forEach(milestone => {
        if (percentage >= milestone && !tracked.current.has(milestone)) {
          tracked.current.add(milestone);
          // Import dynamically to avoid circular dependency
          import('../lib/analytics').then(({ trackScrollDepth }) => {
            trackScrollDepth(milestone);
          });
        }
      });
    };
    
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);
};

/**
 * Hook to track time spent on page
 */
export const useEngagementTracking = () => {
  const startTimeRef = useRef<number>(Date.now());
  const [location] = useLocation();
  
  useEffect(() => {
    // Reset start time on route change
    startTimeRef.current = Date.now();
    
    return () => {
      // Track engagement time when leaving the page
      const timeSpent = Math.round((Date.now() - startTimeRef.current) / 1000);
      if (timeSpent > 3) { // Only track if user spent more than 3 seconds
        import('../lib/analytics').then(({ trackEngagementTime }) => {
          trackEngagementTime(timeSpent);
        });
      }
    };
  }, [location]);
};

/**
 * Hook to track element visibility (useful for tracking if users see certain sections)
 */
export const useVisibilityTracking = (
  elementRef: React.RefObject<HTMLElement>,
  eventName: string,
  options?: { threshold?: number; triggerOnce?: boolean }
) => {
  const hasTracked = useRef(false);
  
  useEffect(() => {
    if (!elementRef.current) return;
    
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            if (!hasTracked.current || !options?.triggerOnce) {
              import('../lib/analytics').then(({ trackEvent }) => {
                trackEvent('element_visible', 'visibility', eventName);
              });
              
              if (options?.triggerOnce) {
                hasTracked.current = true;
              }
            }
          }
        });
      },
      {
        threshold: options?.threshold || 0.5
      }
    );
    
    observer.observe(elementRef.current);
    
    return () => {
      if (elementRef.current) {
        observer.unobserve(elementRef.current);
      }
    };
  }, [elementRef, eventName, options]);
};