'use client';

import { useEffect, useState } from 'react';

type Theme = 'light' | 'dark';

export default function ThemeToggle() {
  const [theme, setTheme] = useState<Theme>('light');

  useEffect(() => {
    setTheme(document.documentElement.dataset.theme === 'dark' ? 'dark' : 'light');
  }, []);

  function chooseTheme(nextTheme: Theme) {
    document.documentElement.dataset.theme = nextTheme;
    setTheme(nextTheme);
    try {
      localStorage.setItem('portfolio-theme', nextTheme);
    } catch {
      // Theme switching still works when browser storage is unavailable.
    }
  }

  return <div role="group" aria-label="Color theme" className="flex border border-accent/75 p-1 text-xs">
    {(['light', 'dark'] satisfies Theme[]).map((option) => <button
      key={option}
      type="button"
      aria-pressed={theme === option}
      onClick={() => chooseTheme(option)}
      className={`px-3 py-2 ${theme === option ? 'bg-accent font-bold text-on-accent' : 'text-muted hover:text-accent'}`}
    >{option === 'light' ? 'Light' : 'Dark'}</button>)}
  </div>;
}
