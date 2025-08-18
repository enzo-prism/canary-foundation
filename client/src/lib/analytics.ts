// Google Analytics 4 implementation
declare global {
  interface Window {
    dataLayer: any[];
    gtag: (...args: any[]) => void;
  }
}

// Configuration
const GA_MEASUREMENT_ID = 'G-D368QS08VY'; // Hardcoded as requested

// Initialize Google Analytics
export const initGA = () => {
  if (!GA_MEASUREMENT_ID) {
    console.warn('Google Analytics: No measurement ID configured');
    return;
  }

  // Check if already initialized
  if (typeof window !== 'undefined' && typeof window.gtag === 'function') {
    console.log('Google Analytics: Already initialized');
    return;
  }

  // Add Google Analytics script to the head
  const script1 = document.createElement('script');
  script1.async = true;
  script1.src = `https://www.googletagmanager.com/gtag/js?id=${GA_MEASUREMENT_ID}`;
  script1.onload = () => {
    console.log('Google Analytics: Script loaded successfully');
  };
  script1.onerror = () => {
    console.error('Google Analytics: Failed to load script');
  };
  document.head.appendChild(script1);

  // Initialize dataLayer and gtag
  window.dataLayer = window.dataLayer || [];
  window.gtag = function gtag() {
    window.dataLayer.push(arguments);
  };
  
  // Configure GA
  window.gtag('js', new Date());
  window.gtag('config', GA_MEASUREMENT_ID, {
    page_path: window.location.pathname,
    send_page_view: true // Send initial page view
  });

  console.log('Google Analytics: Initialized with ID', GA_MEASUREMENT_ID);
};

// Track page views - useful for single-page applications
export const trackPageView = (url: string) => {
  if (typeof window === 'undefined' || !window.gtag) {
    console.warn('Google Analytics: Not initialized, cannot track page view');
    return;
  }
  
  if (!GA_MEASUREMENT_ID) return;
  
  // Clean the URL to ensure consistency
  const cleanUrl = url.startsWith('/') ? url : `/${url}`;
  
  window.gtag('config', GA_MEASUREMENT_ID, {
    page_path: cleanUrl,
    page_title: document.title
  });
  
  console.log('Google Analytics: Page view tracked', cleanUrl);
};

// Track custom events
export const trackEvent = (
  action: string, 
  category?: string, 
  label?: string, 
  value?: number
) => {
  if (typeof window === 'undefined' || !window.gtag) {
    console.warn('Google Analytics: Not initialized, cannot track event');
    return;
  }
  
  const eventData: any = {
    event_category: category,
    event_label: label,
    value: value,
  };
  
  // Remove undefined values
  Object.keys(eventData).forEach(key => 
    eventData[key] === undefined && delete eventData[key]
  );
  
  window.gtag('event', action, eventData);
  
  console.log('Google Analytics: Event tracked', action, eventData);
};

// Track user interactions with specific elements
export const trackClick = (elementName: string, category: string = 'engagement') => {
  trackEvent('click', category, elementName);
};

// Track form submissions
export const trackFormSubmission = (formName: string) => {
  trackEvent('form_submit', 'form', formName);
};

// Track search queries
export const trackSearch = (searchTerm: string) => {
  if (typeof window === 'undefined' || !window.gtag) return;
  
  window.gtag('event', 'search', {
    search_term: searchTerm
  });
};

// Track scroll depth
export const trackScrollDepth = (percentage: number) => {
  trackEvent('scroll', 'engagement', `${percentage}%`);
};

// Track file downloads
export const trackDownload = (fileName: string, fileType?: string) => {
  trackEvent('file_download', 'download', fileName, undefined);
  if (fileType && window.gtag) {
    window.gtag('event', 'file_download', {
      file_name: fileName,
      file_extension: fileType
    });
  }
};

// Track external link clicks
export const trackOutboundLink = (url: string) => {
  trackEvent('click', 'outbound', url);
};

// Track video interactions
export const trackVideo = (action: 'play' | 'pause' | 'complete', videoTitle: string) => {
  trackEvent(`video_${action}`, 'video', videoTitle);
};

// Track timing (e.g., how long something takes)
export const trackTiming = (category: string, variable: string, time: number, label?: string) => {
  if (typeof window === 'undefined' || !window.gtag) return;
  
  window.gtag('event', 'timing_complete', {
    name: variable,
    value: time,
    event_category: category,
    event_label: label
  });
};

// Track exceptions/errors
export const trackException = (description: string, fatal: boolean = false) => {
  if (typeof window === 'undefined' || !window.gtag) return;
  
  window.gtag('event', 'exception', {
    description: description,
    fatal: fatal
  });
};

// Utility to track user properties
export const setUserProperties = (properties: Record<string, any>) => {
  if (typeof window === 'undefined' || !window.gtag) return;
  
  window.gtag('set', 'user_properties', properties);
};

// Track user engagement time
export const trackEngagementTime = (seconds: number) => {
  trackEvent('user_engagement', 'engagement', 'time_on_site', seconds);
};