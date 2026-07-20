import { useState, useEffect } from 'react';

export type LayoutMode = 'full' | 'sidebar-only' | 'both' | 'narrow';

const layoutConfig: Record<LayoutMode, { pageWidth: number; contentWidth: number }> = {
  full: { pageWidth: 100, contentWidth: 100 },
  'sidebar-only': { pageWidth: 100, contentWidth: 80 },
  both: { pageWidth: 90, contentWidth: 80 },
  narrow: { pageWidth: 60, contentWidth: 50 },
};

export function useLayout() {
  const [mode, setMode] = useState<LayoutMode>(() => {
    const saved = localStorage.getItem('layoutMode');
    return (saved as LayoutMode) || 'both';
  });

  useEffect(() => {
    const config = layoutConfig[mode];
    document.documentElement.style.setProperty('--page-max-width', `${config.pageWidth}%`);
    document.documentElement.style.setProperty('--content-max-width', `${config.contentWidth}%`);
    localStorage.setItem('layoutMode', mode);
  }, [mode]);

  return {
    mode,
    setMode,
  };
}
