import type { ReactNode } from 'react';

const navItems = ['About', 'Skills', 'Experience', 'Projects', 'Contact'];
const resumeHref = './resume-liam-han.pdf';

const skillGroups = [
  {
    label: 'Frontend',
    items: ['React', 'TypeScript', 'JavaScript', 'Next.js', 'GraphQL', 'Axios'],
  },
  {
    label: 'Backend',
    items: ['Python', 'Flask', 'FastAPI', 'Node.js', 'APIs', 'JWT', 'Secure Authentication'],
  },
  {
    label: 'Automation & AI',
    items: ['Prompt Engineering', 'LLM-enabled Workflows', 'Workflow Automation', 'Conversational AI', 'Speech-to-Text', 'Text-to-Speech'],
  },
  {
    label: 'Database',
    items: ['SQL Server', 'Cosmos DB', 'Firebase'],
  },
  {
    label: 'Cloud & DevOps',
    items: ['Azure', 'AWS', 'GCP', 'Docker', 'Git', 'CI/CD'],
  },
];

const experiences = [
  {
    role: 'Full Stack Engineer',
    company: 'Axify.AI',
    location: 'Sydney',
    period: 'Nov 2024–Present',
    copy: 'Build production AI booking and venue-operations systems across React, TypeScript, Python, Flask, FastAPI, APIs, SQL Server, and Cosmos DB. The platform supports 31K+ managed calls, 31K+ interactions, 3K+ bookings, 3K+ SMS events, 180+ venues, and $1.38M+ estimated booking revenue.',
    bullets: ['Conversational AI workflows using ElevenLabs, Deepgram, and Whisper for speech-first customer experiences.', 'Dashboards, workflow automation, CI/CD pipelines, and Dockerized services for reliable production delivery.'],
  },
  {
    role: 'Software Engineer',
    company: 'AI Consulting Group',
    location: 'Sydney',
    period: 'Mar 2024–Nov 2024',
    copy: 'Shipped admin platforms, dashboards, and search tools with React, TypeScript, Next.js, Node.js, GraphQL, Firebase, and GCP.',
    bullets: ['Integrated GPT-enabled workflows and prompt-engineering patterns into practical internal tools.', 'Worked across Redis messaging, testing, deployment, and frontend/backend product delivery.'],
  },
  {
    role: 'Software Engineer',
    company: 'Thick AI',
    location: 'Remote, China',
    period: 'Sep 2023–Mar 2024',
    copy: 'Developed Python, React, and JavaScript systems spanning backend APIs, authentication, data handling, and REST integrations.',
    bullets: ['Supported model-training and prediction workflows from data preparation through API delivery.', 'Used Docker to package and run services consistently across environments.'],
  },
];

const projects = [
  {
    name: 'Axify Portal',
    repo: 'hanchengxuan/Axify-Portal',
    link: 'https://github.com/hanchengxuan/Axify-Portal',
    access: 'private production repo',
    description: 'A production internal portal for managing operational workflows, dashboards, and business data across service processes.',
    stack: 'React, TypeScript, Python, SQL Server, Cosmos DB, Docker, Azure',
  },
  {
    name: 'Conversational AI',
    repo: 'hanchengxuan/conversational-ai',
    link: 'https://github.com/hanchengxuan/conversational-ai',
    access: 'private production repo',
    description: 'A speech-enabled AI assistant platform supporting voice interaction workflows, backend orchestration, and frontend experimentation.',
    stack: 'Python, React, TypeScript, Azure, STT/TTS APIs, Docker',
  },
  {
    name: 'SkillShift',
    repo: 'hanchengxuan/SkillShift',
    link: 'https://github.com/hanchengxuan/SkillShift',
    access: 'public repo',
    description: 'A full-stack learning and productivity application showing end-to-end product design, structured UI development, and fast iteration.',
    stack: 'TypeScript, React, Node.js, modern frontend tooling',
  },
  {
    name: 'Grocery Goblin',
    repo: 'hanchengxuan/grocery-goblin',
    link: 'https://github.com/hanchengxuan/grocery-goblin',
    access: 'personal project',
    description: 'A personal grocery savings assistant that compares basket prices, imports store offers, and supports product/image-based item lookup.',
    stack: 'FastAPI, Python, React, TypeScript, OCR/image processing, product search APIs, automation scripts',
  },
];

function Section({ id, eyebrow, title, children }: { id: string; eyebrow: string; title: string; children: ReactNode }) {
  return <section id={id} className="scroll-mt-24 border border-terminal/20 bg-black/35 p-6 shadow-glow backdrop-blur md:p-8"><p className="mb-2 text-xs uppercase tracking-[0.35em] text-terminal/70">{eyebrow}</p><h2 className="mb-6 text-2xl font-bold text-white md:text-3xl">{title}</h2>{children}</section>;
}

export default function Home() {
  return <main className="mx-auto min-h-screen max-w-6xl px-4 py-6 md:px-8 md:py-10">
    <nav className="sticky top-4 z-10 mb-10 flex flex-wrap items-center justify-between gap-4 border border-terminal/25 bg-void/85 px-4 py-3 backdrop-blur"><a href="#top" className="text-sm font-bold text-terminal">~/liam-han</a><div className="flex flex-wrap gap-3 text-xs text-terminal/75 md:text-sm">{navItems.map((item) => <a key={item} href={'#' + item.toLowerCase()} className="hover:text-white">{item}</a>)}<a href={resumeHref} download className="text-white hover:text-terminal">Resume</a></div></nav>
    <header id="top" className="mb-12 grid gap-8 md:grid-cols-[1.25fr_0.75fr] md:items-center"><div><p className="mb-4 text-terminal">Full Stack Software Engineer</p><h1 className="text-4xl font-black leading-tight text-white md:text-6xl">Liam <span className="text-terminal">(Chengxuan)</span> Han</h1><p className="mt-6 max-w-2xl text-lg leading-8 text-emerald-100/80">I build web applications, backend services, conversational AI workflows, and automation tools for real business use cases.</p><div className="mt-8 flex flex-wrap gap-3"><a href="#projects" className="border border-terminal bg-terminal px-5 py-3 text-sm font-bold text-black hover:bg-white">View Projects</a><a href={resumeHref} download className="border border-terminal/50 px-5 py-3 text-sm font-bold text-terminal hover:border-white hover:text-white">Download Resume</a></div></div><div className="border border-terminal/25 bg-black/50 p-5 text-sm leading-7 text-terminal/85 shadow-glow"><p className="text-white">Overview</p><p>{'>'} Full Stack Engineer</p><p>{'>'} React, TypeScript, Python</p><p>{'>'} AI workflows and automation</p><p>{'>'} Azure, Docker, CI/CD</p></div></header>
    <div className="grid gap-6">
      <Section id="about" eyebrow="01 // About" title="About"><p className="max-w-3xl leading-8 text-emerald-100/80">I work across frontend, backend, and AI workflow development. My recent work includes venue booking automation, conversational AI, dashboards, admin platforms, secure APIs, and data processing systems. Some production code is private, but the selected projects below show the main areas I work in.</p></Section>
      <Section id="skills" eyebrow="02 // Skills" title="Stack and operating mode."><div className="grid gap-4 md:grid-cols-2">{skillGroups.map((group) => <article key={group.label} className="border border-terminal/15 bg-emerald-950/20 p-4"><h3 className="mb-3 text-sm font-bold uppercase tracking-[0.25em] text-terminal">{group.label}</h3><div className="flex flex-wrap gap-2">{group.items.map((skill) => <span key={skill} className="border border-terminal/15 bg-black/35 px-3 py-2 text-sm text-emerald-50/85"># {skill}</span>)}</div></article>)}</div></Section>
      <Section id="experience" eyebrow="03 // Experience" title="Production systems, measurable outcomes."><div className="space-y-5">{experiences.map((job) => <article key={job.company} className="border-l-2 border-terminal/60 bg-black/25 p-5"><div className="flex flex-wrap items-baseline justify-between gap-2"><h3 className="text-xl font-bold text-white">{job.role} — {job.company}</h3><p className="text-sm text-terminal/80">{job.location} · {job.period}</p></div><p className="mt-3 leading-7 text-emerald-100/80">{job.copy}</p><ul className="mt-3 space-y-2 text-sm leading-6 text-emerald-100/70">{job.bullets.map((bullet) => <li key={bullet}>$ {bullet}</li>)}</ul></article>)}</div></Section>
      <Section id="projects" eyebrow="04 // Projects" title="Selected repositories and shipped work."><div className="grid gap-5 md:grid-cols-2 2xl:grid-cols-4">{projects.map((project) => <article key={project.repo} className="flex min-h-80 flex-col overflow-hidden border border-terminal/20 bg-black/45 p-5 transition hover:-translate-y-1 hover:border-terminal"><p className="break-words text-xs uppercase tracking-[0.18em] text-terminal/60">{project.repo}</p><h3 className="mt-3 text-xl font-bold text-white">{project.name}</h3><p className="mt-1 text-xs uppercase tracking-[0.16em] text-emerald-100/45">{project.access}</p><p className="mt-4 leading-7 text-emerald-100/75">{project.description}</p><p className="mt-4 flex-1 text-sm leading-6 text-emerald-100/60"><span className="font-bold text-terminal">Tech stack:</span> {project.stack}</p><a href={project.link} target="_blank" rel="noreferrer" className="mt-5 text-sm font-bold text-terminal hover:text-white">open repo →</a></article>)}</div><p className="mt-5 text-sm text-emerald-100/55">Note: selected company repositories are private; public repositories are included where they can be opened directly.</p></Section>
      <Section id="contact" eyebrow="05 // Contact" title="Contact"><div className="grid gap-4 md:grid-cols-3"><a className="border border-terminal/20 bg-black/40 p-5 hover:border-terminal" href="mailto:hanchengxuan98@gmail.com"><span className="block text-terminal">email</span>hanchengxuan98@gmail.com</a><a className="border border-terminal/20 bg-black/40 p-5 hover:border-terminal" href="https://github.com/hanchengxuan" target="_blank" rel="noreferrer"><span className="block text-terminal">github</span>@hanchengxuan</a><a className="border border-terminal/20 bg-black/40 p-5 hover:border-terminal" href="https://www.linkedin.com/in/chengxuan-han" target="_blank" rel="noreferrer"><span className="block text-terminal">linkedin</span>/in/chengxuan-han</a></div></Section>
    </div>
  </main>;
}
