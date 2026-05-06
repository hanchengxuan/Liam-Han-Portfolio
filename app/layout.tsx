import type { Metadata } from 'next';
import type { ReactNode } from 'react';
import './globals.css';

export const metadata: Metadata = {
  title: 'Liam (Chengxuan) Han | Portfolio',
  description: 'Hacker-style portfolio for Liam (Chengxuan) Han, software engineer building AI, automation, and production web systems.',
};

export default function RootLayout({ children }: Readonly<{ children: ReactNode }>) {
  return (<html lang="en"><body>{children}</body></html>);
}
