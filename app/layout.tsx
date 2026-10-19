import type { Metadata } from 'next';
import type { ReactNode } from 'react';
import './globals.css';

export const metadata: Metadata = {
  title: 'Liam (Chengxuan) Han | Portfolio',
  description: 'Liam (Chengxuan) Han is a Sydney-based Full-Stack Engineer with 3+ years building production web applications, AI agents, data access controls, and workflow automation.',
};

export default function RootLayout({ children }: Readonly<{ children: ReactNode }>) {
  return (<html lang="en"><body>{children}</body></html>);
}
