'use client';

import { useEffect } from 'react';

export function DynamicFavicon() {
  useEffect(() => {
    const updateFavicon = () => {
      const isDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
      const favicon = document.querySelector("link[rel*='icon']") as HTMLLinkElement;
      
      if (favicon) {
        // Use white logo for dark mode, black logo for light mode
        favicon.href = isDark ? '/logo-white.png' : '/logo.png';
      }
    };

    // Update on mount
    updateFavicon();

    // Listen for theme changes
    const mediaQuery = window.matchMedia('(prefers-color-scheme: dark)');
    mediaQuery.addEventListener('change', updateFavicon);

    return () => mediaQuery.removeEventListener('change', updateFavicon);
  }, []);

  return null;
}
