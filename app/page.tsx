'use client';

import { useMemo, useState, type ReactNode } from 'react';

const navItems = ['About', 'Skills', 'Experience', 'Projects', 'Contact'];
const resumeHref = './resume-liam-han.pdf';
const roles = ['Full Stack', 'AI', 'Frontend', 'Automation'] as const;
type Role = (typeof roles)[number];

const roleCopy: Record<Role, string> = {
  'Full Stack': 'Web applications, backend services, APIs, dashboards, and deployment-ready product work.',
  AI: 'Conversational AI, speech workflows, prompt-driven tools, and practical AI integrations.',
  Frontend: 'React and TypeScript interfaces with clean layouts, reusable components, and usable admin/product flows.',
  Automation: 'Data processing, workflow automation, integrations, and tools that reduce manual work.',
};

const skillGroups = [
  {
    label: 'Frontend',
    roles: ['Full Stack', 'Frontend'],
    items: ['React', 'TypeScript', 'JavaScript', 'Next.js', 'GraphQL', 'Axios'],
  },
  {
    label: 'Backend',
    roles: ['Full Stack', 'Automation'],
    items: ['Python', 'Flask', 'FastAPI', 'Node.js', 'APIs', 'JWT', 'Secure Authentication'],
  },
  {
    label: 'Automation & AI',
    roles: ['AI', 'Automation'],
    items: ['Prompt Engineering', 'LLM Workflows', 'Workflow Automation', 'Conversational AI', 'Speech-to-Text', 'Text-to-Speech'],
  },
  {
    label: 'Database',
    roles: ['Full Stack', 'Automation'],
    items: ['SQL Server', 'Cosmos DB', 'Firebase'],
  },
  {
    label: 'Cloud & DevOps',
    roles: ['Full Stack', 'Automation'],
    items: ['Azure', 'AWS', 'GCP', 'Docker', 'Git', 'CI/CD'],
  },
];

const experiences = [
  {
    role: 'Full Stack Engineer',
    company: 'Axify.AI',
    location: 'Sydney',
    period: 'Nov 2024–Present',
    summary: 'Build production AI booking and venue-operations systems across frontend, backend, data, and AI workflows.',
    copy: 'The platform supports 31K+ managed calls, 31K+ interactions, 3K+ bookings, 3K+ SMS events, 180+ venues, and $1.38M+ estimated booking revenue.',
    bullets: ['Built React/TypeScript dashboards and workflow screens for operational teams.', 'Developed Python, Flask, and FastAPI services connected to SQL Server and Cosmos DB.', 'Worked on conversational AI workflows using ElevenLabs, Deepgram, and Whisper.', 'Supported Dockerized services and CI/CD delivery for production work.'],
  },
  {
    role: 'Software Engineer',
    company: 'AI Consulting Group',
    location: 'Sydney',
    period: 'Mar 2024–Nov 2024',
    summary: 'Shipped admin platforms, dashboards, search tools, and GPT-enabled internal workflows.',
    copy: 'Worked across React, TypeScript, Next.js, Node.js, GraphQL, Firebase, Redis messaging, and GCP.',
    bullets: ['Built frontend and backend features for internal product tools.', 'Integrated GPT-enabled workflows and prompt patterns into practical interfaces.', 'Worked on testing, deployment, and API integration tasks.'],
  },
  {
    role: 'Software Engineer',
    company: 'Thick AI',
    location: 'Remote, China',
    period: 'Sep 2023–Mar 2024',
    summary: 'Developed Python, React, and JavaScript systems for APIs, authentication, data handling, and model workflows.',
    copy: 'Supported backend API delivery and model-training/prediction workflows from data preparation through deployment.',
    bullets: ['Built REST API features and authentication-related backend work.', 'Prepared and handled data for model-training and prediction workflows.', 'Used Docker to package and run services consistently across environments.'],
  },
];

const projects = [
  {
    id: 'axify',
    name: 'Axify Portal',
    repo: 'hanchengxuan/Axify-Portal',
    link: 'https://github.com/hanchengxuan/Axify-Portal',
    access: 'private production repo',
    roles: ['Full Stack', 'Frontend', 'Automation'],
    description: 'A production internal portal for managing operational workflows, dashboards, and business data across service processes.',
    stack: ['React', 'TypeScript', 'Python', 'SQL Server', 'Cosmos DB', 'Docker', 'Azure'],
    details: ['Built dashboard and workflow interfaces for internal users.', 'Connected frontend flows with Python services and operational databases.', 'Worked with Dockerized local infrastructure, migrations, and deployment-aware delivery.'],
  },
  {
    id: 'conversational-ai',
    name: 'Conversational AI',
    repo: 'hanchengxuan/conversational-ai',
    link: 'https://github.com/hanchengxuan/conversational-ai',
    access: 'private production repo',
    roles: ['AI', 'Full Stack', 'Automation'],
    description: 'A speech-enabled AI assistant platform supporting voice interaction workflows, backend orchestration, and frontend experimentation.',
    stack: ['Python', 'React', 'TypeScript', 'Azure', 'STT/TTS APIs', 'Docker'],
    details: ['Worked on speech-first AI workflows using STT and TTS integrations.', 'Built backend orchestration services and supporting frontend screens.', 'Tested different voice interaction patterns for practical customer workflows.'],
  },
  {
    id: 'skillshift',
    name: 'SkillShift',
    repo: 'hanchengxuan/SkillShift',
    link: 'https://github.com/hanchengxuan/SkillShift',
    access: 'public repo',
    roles: ['Frontend', 'Full Stack'],
    description: 'A full-stack learning and productivity application showing end-to-end product design, structured UI development, and fast iteration.',
    stack: ['TypeScript', 'React', 'Node.js', 'Modern frontend tooling'],
    details: ['Designed a complete application surface rather than a single isolated demo.', 'Focused on reusable UI structure and fast product iteration.', 'Useful as a public example of frontend/product-building style.'],
  },
  {
    id: 'grocery-goblin',
    name: 'Grocery Goblin',
    repo: 'hanchengxuan/grocery-goblin',
    link: 'https://github.com/hanchengxuan/grocery-goblin',
    access: 'personal project',
    roles: ['Full Stack', 'AI', 'Automation'],
    description: 'A personal grocery savings assistant that compares basket prices, imports store offers, and supports product/image-based item lookup.',
    stack: ['FastAPI', 'Python', 'React', 'TypeScript', 'OCR/image processing', 'Product search APIs', 'Automation scripts'],
    details: ['Built importer-friendly backend architecture for store offers and catalog data.', 'Added basket pricing and product lookup flows for grocery comparison.', 'Explored image/OCR-based item identification as a practical AI feature.'],
  },
];

function Section({ id, eyebrow, title, children }: { id: string; eyebrow: string; title: string; children: ReactNode }) {
  return <section id={id} className="scroll-mt-24 border border-terminal/20 bg-black/35 p-6 shadow-glow backdrop-blur md:p-8"><p className="mb-2 text-xs uppercase tracking-[0.35em] text-terminal/70">{eyebrow}</p><h2 className="mb-6 text-2xl font-bold text-white md:text-3xl">{title}</h2>{children}</section>;
}

export default function Home() {
  const [selectedRole, setSelectedRole] = useState<Role>('Full Stack');
  const [openJob, setOpenJob] = useState(experiences[0].company);
  const [activeProjectId, setActiveProjectId] = useState(projects[0].id);

  const filteredSkillGroups = useMemo(() => skillGroups.filter((group) => group.roles.includes(selectedRole)), [selectedRole]);
  const filteredProjects = useMemo(() => projects.filter((project) => project.roles.includes(selectedRole)), [selectedRole]);
  const activeProject = filteredProjects.find((project) => project.id === activeProjectId) ?? filteredProjects[0];

  function chooseRole(role: Role) {
    setSelectedRole(role);
    const firstProject = projects.find((project) => project.roles.includes(role));
    if (firstProject) setActiveProjectId(firstProject.id);
  }

  return <main className="mx-auto min-h-screen max-w-6xl px-4 py-6 md:px-8 md:py-10">
    <nav className="sticky top-4 z-10 mb-10 flex flex-wrap items-center justify-between gap-4 border border-terminal/25 bg-void/85 px-4 py-3 backdrop-blur"><a href="#top" className="text-sm font-bold text-terminal">~/liam-han</a><div className="flex flex-wrap gap-3 text-xs text-terminal/75 md:text-sm">{navItems.map((item) => <a key={item} href={'#' + item.toLowerCase()} className="hover:text-white">{item}</a>)}<a href={resumeHref} download className="text-white hover:text-terminal">Resume</a></div></nav>
    <header id="top" className="mb-12 grid gap-8 md:grid-cols-[1.25fr_0.75fr] md:items-center"><div><p className="mb-4 text-terminal">Full Stack Software Engineer</p><h1 className="text-4xl font-black leading-tight text-white md:text-6xl">Liam <span className="text-terminal">(Chengxuan)</span> Han</h1><p className="mt-6 max-w-2xl text-lg leading-8 text-emerald-100/80">I build web applications, backend services, conversational AI workflows, and automation tools for real business use cases.</p><div className="mt-8 flex flex-wrap gap-3"><a href="#projects" className="border border-terminal bg-terminal px-5 py-3 text-sm font-bold text-black hover:bg-white">View Projects</a><a href={resumeHref} download className="border border-terminal/50 px-5 py-3 text-sm font-bold text-terminal hover:border-white hover:text-white">Download Resume</a></div></div><div className="border border-terminal/25 bg-black/50 p-5 text-sm leading-7 text-terminal/85 shadow-glow"><p className="text-white">Choose a focus</p><div className="mt-4 grid gap-2">{roles.map((role) => <button key={role} type="button" onClick={() => chooseRole(role)} className={`border px-4 py-2 text-left transition ${selectedRole === role ? 'border-terminal bg-terminal text-black' : 'border-terminal/20 bg-black/35 text-emerald-100/80 hover:border-terminal hover:text-white'}`}>{role}</button>)}</div><p className="mt-4 text-emerald-100/70">{roleCopy[selectedRole]}</p></div></header>
    <div className="grid gap-6">
      <Section id="about" eyebrow="01 // About" title="About"><p className="max-w-3xl leading-8 text-emerald-100/80">I work across frontend, backend, and AI workflow development. My recent work includes venue booking automation, conversational AI, dashboards, admin platforms, secure APIs, and data processing systems. Some production code is private, but the selected projects below show the main areas I work in.</p></Section>
      <Section id="skills" eyebrow="02 // Skills" title={`${selectedRole} stack`}><div className="grid gap-4 md:grid-cols-2">{filteredSkillGroups.map((group) => <article key={group.label} className="border border-terminal/15 bg-emerald-950/20 p-4"><h3 className="mb-3 text-sm font-bold uppercase tracking-[0.25em] text-terminal">{group.label}</h3><div className="flex flex-wrap gap-2">{group.items.map((skill) => <span key={skill} className="border border-terminal/15 bg-black/35 px-3 py-2 text-sm text-emerald-50/85"># {skill}</span>)}</div></article>)}</div></Section>
      <Section id="experience" eyebrow="03 // Experience" title="Experience"><div className="space-y-4">{experiences.map((job) => { const isOpen = openJob === job.company; return <article key={job.company} className="border-l-2 border-terminal/60 bg-black/25"><button type="button" onClick={() => setOpenJob(isOpen ? '' : job.company)} className="w-full p-5 text-left"><div className="flex flex-wrap items-baseline justify-between gap-2"><h3 className="text-xl font-bold text-white">{job.role} — {job.company}</h3><p className="text-sm text-terminal/80">{job.location} · {job.period}</p></div><p className="mt-3 leading-7 text-emerald-100/80">{job.summary}</p><p className="mt-3 text-sm font-bold text-terminal">{isOpen ? 'Hide details ↑' : 'View details ↓'}</p></button>{isOpen && <div className="border-t border-terminal/10 px-5 pb-5"><p className="pt-4 leading-7 text-emerald-100/70">{job.copy}</p><ul className="mt-3 space-y-2 text-sm leading-6 text-emerald-100/70">{job.bullets.map((bullet) => <li key={bullet}>• {bullet}</li>)}</ul></div>}</article>; })}</div></Section>
      <Section id="projects" eyebrow="04 // Projects" title="Projects"><div className="grid gap-5 lg:grid-cols-[0.95fr_1.05fr]"><div className="grid gap-4">{filteredProjects.map((project) => <button key={project.id} type="button" onClick={() => setActiveProjectId(project.id)} className={`border p-5 text-left transition hover:-translate-y-1 ${activeProject?.id === project.id ? 'border-terminal bg-emerald-950/30 shadow-glow' : 'border-terminal/20 bg-black/45 hover:border-terminal'}`}><p className="break-words text-xs uppercase tracking-[0.18em] text-terminal/60">{project.repo}</p><h3 className="mt-3 text-xl font-bold text-white">{project.name}</h3><p className="mt-1 text-xs uppercase tracking-[0.16em] text-emerald-100/45">{project.access}</p><p className="mt-4 leading-7 text-emerald-100/75">{project.description}</p></button>)}</div>{activeProject && <article className="border border-terminal/25 bg-black/55 p-6"><p className="text-xs uppercase tracking-[0.25em] text-terminal/60">Project details</p><h3 className="mt-3 text-2xl font-bold text-white">{activeProject.name}</h3><p className="mt-4 leading-7 text-emerald-100/75">{activeProject.description}</p><div className="mt-5"><p className="mb-2 text-sm font-bold text-terminal">Tech stack</p><div className="flex flex-wrap gap-2">{activeProject.stack.map((item) => <span key={item} className="border border-terminal/15 bg-emerald-950/25 px-3 py-2 text-sm text-emerald-50/85">{item}</span>)}</div></div><div className="mt-5"><p className="mb-2 text-sm font-bold text-terminal">Highlights</p><ul className="space-y-2 text-sm leading-6 text-emerald-100/70">{activeProject.details.map((detail) => <li key={detail}>• {detail}</li>)}</ul></div><a href={activeProject.link} target="_blank" rel="noreferrer" className="mt-6 inline-block border border-terminal/50 px-4 py-3 text-sm font-bold text-terminal hover:border-white hover:text-white">Open repository →</a></article>}</div><p className="mt-5 text-sm text-emerald-100/55">Note: selected company repositories are private; public repositories are included where they can be opened directly.</p></Section>
      <Section id="contact" eyebrow="05 // Contact" title="Contact"><div className="grid gap-4 md:grid-cols-3"><a className="border border-terminal/20 bg-black/40 p-5 hover:border-terminal" href="mailto:hanchengxuan98@gmail.com"><span className="block text-terminal">email</span>hanchengxuan98@gmail.com</a><a className="border border-terminal/20 bg-black/40 p-5 hover:border-terminal" href="https://github.com/hanchengxuan" target="_blank" rel="noreferrer"><span className="block text-terminal">github</span>@hanchengxuan</a><a className="border border-terminal/20 bg-black/40 p-5 hover:border-terminal" href="https://www.linkedin.com/in/chengxuan-han" target="_blank" rel="noreferrer"><span className="block text-terminal">linkedin</span>/in/chengxuan-han</a></div></Section>
    </div>
  </main>;
}
