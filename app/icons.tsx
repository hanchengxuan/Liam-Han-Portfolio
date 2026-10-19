const paths = {
  frontend: ['M4 4h16v16H4z', 'M4 9h16', 'm10 12-3 3 3 3', 'm14 12 3 3-3 3'],
  backend: ['M4 3h16v7H4z', 'M4 14h16v7H4z', 'M7 6.5h.01', 'M7 17.5h.01', 'M11 6.5h6', 'M11 17.5h6'],
  brain: ['M12 4v16', 'M12 5a4 4 0 0 0-7-1 4 4 0 0 0-2 7 4 4 0 0 0 2 7 4 4 0 0 0 7 1', 'M12 5a4 4 0 0 1 7-1 4 4 0 0 1 2 7 4 4 0 0 1-2 7 4 4 0 0 1-7 1', 'M5 11h3m8 0h3', 'M6 17v-3m12 3v-3'],
  database: ['M4 6c0-4 16-4 16 0s-16 4-16 0', 'M4 6v12c0 4 16 4 16 0V6', 'M4 12c0 4 16 4 16 0'],
  cloud: ['M6 18a5 5 0 0 1-1-9 7 7 0 0 1 13-2 5.5 5.5 0 0 1 0 11', 'm9 16 3-3 3 3', 'M12 13v9'],
  api: ['M12 3v5', 'M5 16v-5h14v5', 'M12 8v3', 'M2 16h6v5H2z', 'M16 16h6v5h-6z'],
  key: ['M14 5a5 5 0 1 1-7 7l-5 5v4h4v-3h3l3-3', 'M16 7h.01'],
  tool: ['m8 5-6 7 6 7', 'm16 5 6 7-6 7', 'm14 3-4 18'],
  search: ['M10 3a7 7 0 1 1 0 14 7 7 0 0 1 0-14', 'm15 15 6 6', 'M7 8h6m-6 4h4'],
  prompt: ['M4 3h16v14H9l-5 4z', 'M8 8h8m-8 4h5'],
  workflow: ['M9 2h6v5H9z', 'M2 17h6v5H2z', 'M16 17h6v5h-6z', 'M12 7v5H5v5', 'M12 12h7v5'],
  graduation: ['m2 9 10-5 10 5-10 5z', 'M6 11v6c4 3 8 3 12 0v-6', 'M22 9v8'],
  chevron: ['m6 9 6 6 6-6'],
  external: ['M14 3h7v7', 'm10 14 11-11', 'M10 3H3v18h18v-7'],
  github: ['M9 19c-4 1-4-2-6-2', 'M15 22v-4a4 4 0 0 0-1-3c4 0 7-2 7-6a5 5 0 0 0-1-3 5 5 0 0 0 0-4s-2-1-4 1a12 12 0 0 0-8 0C6 1 4 2 4 2a5 5 0 0 0 0 4 5 5 0 0 0-1 3c0 4 3 6 7 6a4 4 0 0 0-1 3v4'],
};

export type IconName = keyof typeof paths;

export default function Icon({ name, className = 'h-5 w-5' }: { name: IconName; className?: string }) {
  return <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true" className={`shrink-0 ${className}`}>
    {paths[name].map((d) => <path key={d} d={d} />)}
  </svg>;
}
