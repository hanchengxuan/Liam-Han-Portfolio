import type { Metadata } from 'next';
import type { ReactNode } from 'react';
import './globals.css';

export const metadata: Metadata = {
  title: 'Liam (Chengxuan) Han | Portfolio',
  description: 'Liam (Chengxuan) Han is a Sydney-based Software Engineer with 3+ years building production web applications, AI agents, data access controls, and workflow automation.',
};

const themeScript = `(() => {
  let theme = window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light';
  try {
    const saved = localStorage.getItem('portfolio-theme');
    if (saved === 'light' || saved === 'dark') theme = saved;
  } catch {}
  document.documentElement.dataset.theme = theme;
})();`;

export default function RootLayout({ children }: Readonly<{ children: ReactNode }>) {
  return (<html lang="en" suppressHydrationWarning><head><script dangerouslySetInnerHTML={{ __html: themeScript }} /></head><body>{children}</body></html>);
}
