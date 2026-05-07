'use client';

import { useMemo, useState, type ReactNode } from 'react';

const navItems = ['About', 'Impact', 'Skills', 'Experience', 'Projects', 'Contact'];
const resumeHref = './resume-liam-han.pdf';
const email = 'hanchengxuan98@gmail.com';
const roles = ['Full Stack', 'AI', 'Frontend', 'Automation'] as const;
type Role = (typeof roles)[number];

const roleCopy: Record<Role, string> = {
  'Full Stack': 'Web applications, backend services, APIs, dashboards, and deployment-ready product work.',
  AI: 'Conversational AI, speech workflows, prompt-driven tools, and practical AI integrations.',
  Frontend: 'React and TypeScript interfaces with clean layouts, reusable components, and usable admin/product flows.',
  Automation: 'Data processing, workflow automation, integrations, and tools that reduce manual work.',
};

const impactMetrics = [
  { value: '31K+', label: 'managed calls supported' },
  { value: '31K+', label: 'customer interactions' },
  { value: '3K+', label: 'bookings processed' },
  { value: '180+', label: 'venues supported' },
  { value: '$1.38M+', label: 'estimated booking revenue' },
];

const highlights = [
  'Built conversational AI booking workflows with speech-to-text and text-to-speech integrations.',
  'Developed dashboards, admin tools, and operational workflows for venue/service teams.',
  'Worked across React, TypeScript, Python APIs, databases, Docker, and cloud deployment flows.',
  'Built personal full-stack projects from product idea to working application structure.',
];

const lookingFor = ['Full Stack Engineer', 'Frontend Engineer', 'AI Engineer', 'Software Engineer'];

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
    caseStudy: {
      problem: 'Operations needed clearer tools for managing venue/service workflows, dashboards, and business data without relying on scattered manual checks.',
      role: 'Worked across frontend screens, Python service integration, database-backed workflows, and deployment-aware local infrastructure.',
      work: ['React/TypeScript dashboard and workflow UI', 'Python services connected to SQL Server and Cosmos DB', 'Dockerized local setup, migrations, and operational data views'],
      outcome: 'Helped support production venue operations with clearer workflow screens and more maintainable internal tooling.',
      next: 'Add more self-serve analytics and tighter monitoring around workflow bottlenecks.',
    },
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
    caseStudy: {
      problem: 'Customer-facing voice workflows needed reliable speech handling, assistant orchestration, and ways to test interaction patterns quickly.',
      role: 'Worked on backend orchestration, frontend experimentation, and STT/TTS integration paths.',
      work: ['Python services for assistant workflow handling', 'React/TypeScript screens for testing and iteration', 'Azure deployment flow plus speech API integrations'],
      outcome: 'Created a practical base for experimenting with voice-first workflows instead of treating the assistant as a standalone chat demo.',
      next: 'Improve observability around failed calls, latency, and handoff points.',
    },
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
    caseStudy: {
      problem: 'Learning/productivity tools often become disconnected notes rather than a structured workflow for progress and iteration.',
      role: 'Built the product surface, UI structure, and application flow as a public project.',
      work: ['TypeScript application structure', 'Reusable React interface patterns', 'Product-style screens and iteration flow'],
      outcome: 'Shows frontend/product thinking through a complete app surface rather than only isolated components.',
      next: 'Add stronger persistence, analytics, and progress recommendation flows.',
    },
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
    caseStudy: {
      problem: 'Grocery prices and offers are hard to compare across stores when the data is split across catalogues, search results, and receipts/images.',
      role: 'Built the backend architecture, importer flow, pricing logic, and early AI-assisted lookup direction.',
      work: ['FastAPI backend for catalog/import workflows', 'Basket pricing and product lookup logic', 'OCR/image-processing path for identifying items'],
      outcome: 'A useful personal project for demonstrating full-stack implementation, automation, and practical AI/OCR features.',
      next: 'Improve real-world catalogue coverage and add more reliable product matching across stores.',
    },
  },
];

function Section({ id, eyebrow, title, children }: { id: string; eyebrow: string; title: string; children: ReactNode }) {
  return <section id={id} className="scroll-mt-24 border border-terminal/20 bg-black/35 p-6 shadow-glow backdrop-blur md:p-8"><p className="mb-2 text-xs uppercase tracking-[0.35em] text-terminal/70">{eyebrow}</p><h2 className="mb-6 text-2xl font-bold text-white md:text-3xl">{title}</h2>{children}</section>;
}

export default function Home() {
  const [selectedRole, setSelectedRole] = useState<Role>('Full Stack');
  const [selectedTech, setSelectedTech] = useState<string | null>(null);
  const [openJob, setOpenJob] = useState(experiences[0].company);
  const [activeProjectId, setActiveProjectId] = useState(projects[0].id);
  const [showCaseStudy, setShowCaseStudy] = useState(false);
  const [copiedEmail, setCopiedEmail] = useState(false);

  const roleProjects = useMemo(() => projects.filter((project) => project.roles.includes(selectedRole)), [selectedRole]);
  const filteredSkillGroups = useMemo(() => skillGroups.filter((group) => group.roles.includes(selectedRole)), [selectedRole]);
  const visibleTech = useMemo(() => Array.from(new Set(roleProjects.flatMap((project) => project.stack))).sort(), [roleProjects]);
  const filteredProjects = useMemo(() => selectedTech ? roleProjects.filter((project) => project.stack.includes(selectedTech)) : roleProjects, [roleProjects, selectedTech]);
  const activeProject = filteredProjects.find((project) => project.id === activeProjectId) ?? filteredProjects[0];

  function chooseRole(role: Role) {
    const firstProject = projects.find((project) => project.roles.includes(role));
    setSelectedRole(role);
    setSelectedTech(null);
    setShowCaseStudy(false);
    if (firstProject) setActiveProjectId(firstProject.id);
  }

  function chooseTech(tech: string | null) {
    const nextProjects = tech ? roleProjects.filter((project) => project.stack.includes(tech)) : roleProjects;
    setSelectedTech(tech);
    setShowCaseStudy(false);
    if (nextProjects[0]) setActiveProjectId(nextProjects[0].id);
  }

  async function copyEmail() {
    try {
      await navigator.clipboard.writeText(email);
      setCopiedEmail(true);
      window.setTimeout(() => setCopiedEmail(false), 1800);
    } catch {
      window.location.href = `mailto:${email}`;
    }
  }

  return <main className="mx-auto min-h-screen max-w-6xl px-4 py-6 md:px-8 md:py-10">
    <nav className="sticky top-4 z-10 mb-10 flex flex-wrap items-center justify-between gap-4 border border-terminal/25 bg-void/85 px-4 py-3 backdrop-blur"><a href="#top" className="text-sm font-bold text-terminal">~/liam-han</a><div className="flex flex-wrap gap-3 text-xs text-terminal/75 md:text-sm">{navItems.map((item) => <a key={item} href={'#' + item.toLowerCase()} className="hover:text-white">{item}</a>)}<a href={resumeHref} download className="text-white hover:text-terminal">Resume</a></div></nav>
    <header id="top" className="mb-12 grid gap-8 md:grid-cols-[1.25fr_0.75fr] md:items-center"><div><p className="mb-4 text-terminal">Full Stack Software Engineer</p><h1 className="text-4xl font-black leading-tight text-white md:text-6xl">Liam <span className="text-terminal">(Chengxuan)</span> Han</h1><p className="mt-6 max-w-2xl text-lg leading-8 text-emerald-100/80">I build web applications, backend services, conversational AI workflows, and automation tools for real business use cases.</p><div className="mt-8 flex flex-wrap gap-3"><a href="#projects" className="border border-terminal bg-terminal px-5 py-3 text-sm font-bold text-black hover:bg-white">View Projects</a><a href={resumeHref} download className="border border-terminal/50 px-5 py-3 text-sm font-bold text-terminal hover:border-white hover:text-white">Download Resume</a></div></div><div className="border border-terminal/25 bg-black/50 p-5 text-sm leading-7 text-terminal/85 shadow-glow"><p className="text-white">Choose a focus</p><div className="mt-4 grid gap-2">{roles.map((role) => <button key={role} type="button" onClick={() => chooseRole(role)} className={`border px-4 py-2 text-left transition ${selectedRole === role ? 'border-terminal bg-terminal text-black' : 'border-terminal/20 bg-black/35 text-emerald-100/80 hover:border-terminal hover:text-white'}`}>{role}</button>)}</div><p className="mt-4 text-emerald-100/70">{roleCopy[selectedRole]}</p></div></header>
    <div className="grid gap-6">
      <Section id="about" eyebrow="01 // About" title="About"><div className="grid gap-6 lg:grid-cols-[1.1fr_0.9fr]"><p className="leading-8 text-emerald-100/80">I work across frontend, backend, and AI workflow development. My recent work includes venue booking automation, conversational AI, dashboards, admin platforms, secure APIs, and data processing systems. Some production code is private, but the selected projects below show the main areas I work in.</p><div className="border border-terminal/15 bg-black/30 p-5"><p className="font-bold text-white">Looking for</p><div className="mt-3 flex flex-wrap gap-2">{lookingFor.map((item) => <span key={item} className="border border-terminal/20 px-3 py-2 text-sm text-emerald-100/80">{item}</span>)}</div><p className="mt-4 text-sm leading-6 text-emerald-100/60">Interested in Sydney or remote roles where I can build user-facing products, automation systems, or AI-enabled workflows.</p></div></div></Section>
      <Section id="impact" eyebrow="02 // Impact" title="Selected impact"><div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-5">{impactMetrics.map((metric) => <article key={metric.label} className="border border-terminal/15 bg-emerald-950/20 p-4"><p className="text-3xl font-black text-terminal">{metric.value}</p><p className="mt-2 text-sm leading-6 text-emerald-100/70">{metric.label}</p></article>)}</div><div className="mt-5 grid gap-3 md:grid-cols-2">{highlights.map((item) => <p key={item} className="border-l-2 border-terminal/50 bg-black/25 p-4 leading-7 text-emerald-100/75">{item}</p>)}</div></Section>
      <Section id="skills" eyebrow="03 // Skills" title={`${selectedRole} stack`}><div className="grid gap-4 md:grid-cols-2">{filteredSkillGroups.map((group) => <article key={group.label} className="border border-terminal/15 bg-emerald-950/20 p-4"><h3 className="mb-3 text-sm font-bold uppercase tracking-[0.25em] text-terminal">{group.label}</h3><div className="flex flex-wrap gap-2">{group.items.map((skill) => <span key={skill} className="border border-terminal/15 bg-black/35 px-3 py-2 text-sm text-emerald-50/85"># {skill}</span>)}</div></article>)}</div></Section>
      <Section id="experience" eyebrow="04 // Experience" title="Experience"><div className="space-y-4">{experiences.map((job) => { const isOpen = openJob === job.company; return <article key={job.company} className="border-l-2 border-terminal/60 bg-black/25"><button type="button" onClick={() => setOpenJob(isOpen ? '' : job.company)} className="w-full p-5 text-left"><div className="flex flex-wrap items-baseline justify-between gap-2"><h3 className="text-xl font-bold text-white">{job.role} — {job.company}</h3><p className="text-sm text-terminal/80">{job.location} · {job.period}</p></div><p className="mt-3 leading-7 text-emerald-100/80">{job.summary}</p><p className="mt-3 text-sm font-bold text-terminal">{isOpen ? 'Hide details ↑' : 'View details ↓'}</p></button>{isOpen && <div className="border-t border-terminal/10 px-5 pb-5"><p className="pt-4 leading-7 text-emerald-100/70">{job.copy}</p><ul className="mt-3 space-y-2 text-sm leading-6 text-emerald-100/70">{job.bullets.map((bullet) => <li key={bullet}>• {bullet}</li>)}</ul></div>}</article>; })}</div></Section>
      <Section id="projects" eyebrow="05 // Projects" title="Projects"><div className="mb-5 flex flex-wrap gap-2"><button type="button" onClick={() => chooseTech(null)} className={`border px-3 py-2 text-sm transition ${selectedTech === null ? 'border-terminal bg-terminal text-black' : 'border-terminal/20 text-emerald-100/75 hover:border-terminal hover:text-white'}`}>All tech</button>{visibleTech.map((tech) => <button key={tech} type="button" onClick={() => chooseTech(tech)} className={`border px-3 py-2 text-sm transition ${selectedTech === tech ? 'border-terminal bg-terminal text-black' : 'border-terminal/20 text-emerald-100/75 hover:border-terminal hover:text-white'}`}>{tech}</button>)}</div><div className="grid gap-5 lg:grid-cols-[0.95fr_1.05fr]"><div className="grid gap-4">{filteredProjects.map((project) => <button key={project.id} type="button" onClick={() => { setActiveProjectId(project.id); setShowCaseStudy(false); }} className={`border p-5 text-left transition hover:-translate-y-1 ${activeProject?.id === project.id ? 'border-terminal bg-emerald-950/30 shadow-glow' : 'border-terminal/20 bg-black/45 hover:border-terminal'}`}><p className="break-words text-xs uppercase tracking-[0.18em] text-terminal/60">{project.repo}</p><h3 className="mt-3 text-xl font-bold text-white">{project.name}</h3><p className="mt-1 text-xs uppercase tracking-[0.16em] text-emerald-100/45">{project.access}</p><p className="mt-4 leading-7 text-emerald-100/75">{project.description}</p></button>)}</div>{activeProject && <article className="border border-terminal/25 bg-black/55 p-6"><p className="text-xs uppercase tracking-[0.25em] text-terminal/60">Project details</p><h3 className="mt-3 text-2xl font-bold text-white">{activeProject.name}</h3><p className="mt-4 leading-7 text-emerald-100/75">{activeProject.description}</p><div className="mt-5"><p className="mb-2 text-sm font-bold text-terminal">Tech stack</p><div className="flex flex-wrap gap-2">{activeProject.stack.map((item) => <button key={item} type="button" onClick={() => chooseTech(item)} className="border border-terminal/15 bg-emerald-950/25 px-3 py-2 text-sm text-emerald-50/85 hover:border-terminal">{item}</button>)}</div></div><div className="mt-5"><p className="mb-2 text-sm font-bold text-terminal">Highlights</p><ul className="space-y-2 text-sm leading-6 text-emerald-100/70">{activeProject.details.map((detail) => <li key={detail}>• {detail}</li>)}</ul></div><button type="button" onClick={() => setShowCaseStudy(!showCaseStudy)} className="mt-6 border border-terminal/50 px-4 py-3 text-sm font-bold text-terminal hover:border-white hover:text-white">{showCaseStudy ? 'Hide case study ↑' : 'View case study ↓'}</button>{showCaseStudy && <div className="mt-5 space-y-4 border-t border-terminal/10 pt-5 text-sm leading-6 text-emerald-100/70"><div><p className="font-bold text-terminal">Problem</p><p className="mt-1">{activeProject.caseStudy.problem}</p></div><div><p className="font-bold text-terminal">My role</p><p className="mt-1">{activeProject.caseStudy.role}</p></div><div><p className="font-bold text-terminal">Key work</p><ul className="mt-1 space-y-1">{activeProject.caseStudy.work.map((item) => <li key={item}>• {item}</li>)}</ul></div><div><p className="font-bold text-terminal">Outcome</p><p className="mt-1">{activeProject.caseStudy.outcome}</p></div><div><p className="font-bold text-terminal">Next improvement</p><p className="mt-1">{activeProject.caseStudy.next}</p></div></div>}<a href={activeProject.link} target="_blank" rel="noreferrer" className="mt-6 inline-block border border-terminal/50 px-4 py-3 text-sm font-bold text-terminal hover:border-white hover:text-white">Open repository →</a></article>}</div><p className="mt-5 text-sm text-emerald-100/55">Note: selected company repositories are private; public repositories are included where they can be opened directly.</p></Section>
      <Section id="contact" eyebrow="06 // Contact" title="Contact"><div className="grid gap-4 md:grid-cols-4"><button type="button" onClick={copyEmail} className="border border-terminal/20 bg-black/40 p-5 text-left hover:border-terminal"><span className="block text-terminal">copy email</span>{copiedEmail ? 'Copied' : email}</button><a className="border border-terminal/20 bg-black/40 p-5 hover:border-terminal" href={`mailto:${email}`}><span className="block text-terminal">email</span>{email}</a><a className="border border-terminal/20 bg-black/40 p-5 hover:border-terminal" href="https://github.com/hanchengxuan" target="_blank" rel="noreferrer"><span className="block text-terminal">github</span>@hanchengxuan</a><a className="border border-terminal/20 bg-black/40 p-5 hover:border-terminal" href="https://www.linkedin.com/in/chengxuan-han" target="_blank" rel="noreferrer"><span className="block text-terminal">linkedin</span>/in/chengxuan-han</a></div></Section>
    </div>
  </main>;
}
