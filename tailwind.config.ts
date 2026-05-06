import type { Config } from 'tailwindcss';

const config: Config = {
  content: ['./app/**/*.{js,ts,jsx,tsx,mdx}', './components/**/*.{js,ts,jsx,tsx,mdx}'],
  theme: { extend: { colors: { terminal: '#00ff9c', matrix: '#0aff64', void: '#05080f' }, fontFamily: { mono: ['var(--font-mono)', 'ui-monospace', 'SFMono-Regular', 'Menlo', 'Monaco', 'Consolas', 'monospace'] }, boxShadow: { glow: '0 0 40px rgba(0, 255, 156, 0.22)' } } },
  plugins: [],
};
export default config;
