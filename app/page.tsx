'use client';

import { useMemo, useState, type ReactNode } from 'react';

const navItems = ['About', 'Skills', 'Experience', 'Projects', 'Credentials', 'Contact'];
const resumes = {
  fullStack: './resume-liam-han.pdf',
  ai: './resume-liam-han-ai-engineer.pdf',
};
const email = 'hanchengxuan98@gmail.com';
const roles = ['Full Stack', 'AI', 'Frontend', 'Automation'] as const;
type Role = (typeof roles)[number];

const focusProfiles: Record<Role, { title: string; headline: string; bullets: string[] }> = {
  'Full Stack': {
    title: 'Full Stack Software Engineer',
    headline: 'Sydney-based engineer with 3+ years building customer-facing web applications, backend services, and AI-powered products.',
    bullets: ['React and TypeScript interfaces', 'Python, Node.js, and NestJS APIs', 'Data access controls and cloud delivery'],
  },
  AI: {
    title: 'AI Engineer',
    headline: 'I build production AI agents that connect language models to application tools, business workflows, and permission-aware data.',
    bullets: ['Multi-step tool execution and streaming', 'Conversational AI and booking workflows', 'Review-and-apply agent updates'],
  },
  Frontend: {
    title: 'Frontend Engineer',
    headline: 'I build clean React interfaces for dashboards, portals, admin tools, and product workflows.',
    bullets: ['React + TypeScript UI systems', 'Reusable components and forms', 'Dashboard and portal experience'],
  },
  Automation: {
    title: 'Automation Engineer',
    headline: 'I build workflow automation, integrations, and internal tools that reduce manual operations.',
    bullets: ['Event-driven notifications and digests', 'Self-service agent configuration', 'API and data integrations'],
  },
};

const lookingFor = ['Full Stack Engineer', 'Frontend Engineer', 'AI Engineer', 'Software Engineer'];

const skillGroups = [
  {
    label: 'Frontend',
    roles: ['Full Stack', 'Frontend'],
    items: ['React', 'TypeScript', 'JavaScript', 'Next.js', 'GraphQL', 'Axios'],
  },
  {
    label: 'Backend',
    roles: ['Full Stack', 'AI', 'Automation'],
    items: ['Python', 'Flask', 'FastAPI', 'Node.js', 'NestJS', 'REST APIs', 'JWT'],
  },
  {
    label: 'AI & Automation',
    roles: ['Full Stack', 'AI', 'Automation'],
    items: ['AI Agents', 'Tool Calling', 'RAG', 'Prompt Engineering', 'Workflow Automation'],
  },
  {
    label: 'Database',
    roles: ['Full Stack', 'Automation'],
    items: ['PostgreSQL', 'SQL Server', 'Azure Cosmos DB', 'Redis'],
  },
  {
    label: 'Cloud & DevOps',
    roles: ['Full Stack', 'Automation'],
    items: ['Azure Functions', 'Azure DevOps Pipelines', 'AWS', 'Docker', 'Git', 'GitHub Actions'],
  },
];

const experiences = [
  {
    role: 'Software Engineer',
    company: 'Kimia',
    location: 'Sydney, Australia',
    period: 'Jun 2026–Present',
    summary: 'Build AI agents, data access controls, module entitlements, and notifications for a chemical intelligence platform.',
    copy: 'Delivered Access Data Scopes from design to production within a month. Built a notification system supporting 30+ in-app and email topics, and an Ask Kimia workflow that brings knowledge base updates from lengthy SME-dependent waits to seconds.',
    bullets: ['Built and shipped Ask Kimia with multi-step tool execution, streamed responses, failure handling, and run-level tracing using TypeScript, Node.js, and NestJS.', 'Built a React and TypeScript review-and-apply workflow so users can inspect agent-proposed updates before changing workspace data.', 'Built Access Data Scopes with NestJS and PostgreSQL, enforcing product and document permissions across the application, public APIs, and AI assistant retrieval.', 'Designed database-backed organisation module access and entitlements, with administrative controls for customer modules, roles, and product tiers.', 'Built event-driven notifications with BullMQ daily and weekly digests, per-user email limits, Resend idempotency, and PostHog engagement telemetry.', 'Developed agent tools, run lifecycle, failure recovery, and server-side assistant capabilities across NestJS and Python FastAPI services.'],
  },
  {
    role: 'Software Engineer',
    company: 'Axify.AI',
    location: 'Sydney, Australia',
    period: 'Nov 2024–Jun 2026',
    summary: 'Built a customer-facing agent portal, conversational AI systems, and automated call analytics.',
    copy: 'Replaced manual CSV configuration updates with self-service settings, reducing turnaround from days to seconds. The conversational AI systems handled 31K+ calls, 3K+ bookings, and 3K+ SMS events in a monthly production reporting period.',
    bullets: ['Built React and TypeScript interfaces for agent configuration and analytics, backed by Python, Flask, FastAPI, SQL Server, and Azure Cosmos DB.', 'Built a configuration pipeline translating customer settings into runtime agent workflows, FAQs, voice, and booking rules through APIs and Azure Cosmos DB.', 'Built an automated call analytics pipeline using Azure services and AI classification, turning conversations into searchable records and customer-facing insights.', 'Built Python conversational agents combining LLM intent detection with multi-turn booking, change, cancellation, FAQ, and human-handoff workflows.'],
  },
  {
    role: 'Software Engineer',
    company: 'AI Consulting Group',
    location: 'Sydney, Australia',
    period: 'Mar 2024–Nov 2024',
    summary: 'Developed a client delivery platform, admin interfaces, reporting dashboards, and GPT-powered content automation.',
    copy: 'Automated article generation to reduce manual content creation and supported client website improvements through SEO automation and UI updates.',
    bullets: ['Built delivery platform interfaces and dashboards using React, TypeScript, Axios, Next.js, Node.js, and GraphQL.', 'Built GPT-powered workflows to generate articles for client websites and optimize SEO.', 'Contributed to website UI improvements.'],
  },
  {
    role: 'Software Engineer',
    company: 'Thick AI',
    location: 'Remote, China',
    period: 'Sep 2023–Mar 2024',
    summary: 'Built a clinical decision-support web application using Python, Flask, and JavaScript.',
    copy: 'Enabled users to upload clinical data, select machine learning models, and view prediction results.',
    bullets: ['Contributed to data handling, REST APIs, model training, and prediction workflows.', 'Worked with structured datasets, file inputs, and client-server communication.', 'Used Docker-based containerization to support application logic and model processing.'],
  },
];

const projects = [
  {
    id: 'kimia',
    name: 'Ask Kimia & Platform Foundations',
    repo: 'Kimia · Professional work',
    link: '#experience',
    access: 'Production work · private company code',
    roles: ['Full Stack', 'AI', 'Frontend', 'Automation'],
    description: 'An LLM agent connected to application APIs, with streamed responses, multi-step tools, and a review-and-apply workflow for knowledge base updates. Platform access controls restrict retrieval to products and documents available to the user and assistant.',
    stack: ['React', 'TypeScript', 'NestJS', 'FastAPI', 'PostgreSQL', 'Redis', 'BullMQ'],
    details: ['Built agent execution, failure recovery, and run-level tracing alongside review-and-apply interfaces.', 'Delivered Access Data Scopes, module entitlements, and event-driven notifications with scheduled digests.'],
  },
  {
    id: 'axify',
    name: 'Axify Portal',
    repo: 'hanchengxuan/Axify-Portal',
    link: 'https://github.com/hanchengxuan/Axify-Portal',
    access: 'Production work · private repo',
    roles: ['Full Stack', 'Frontend', 'Automation'],
    description: "A customer-facing control portal for Axify's hospitality voice AI. Venue teams configure their agent persona, FAQs, operating hours, workflows, reservation rules, integrations, and reporting settings, then monitor calls and agent performance.",
    stack: ['React', 'TypeScript', 'Python', 'SQL Server', 'Cosmos DB', 'Azure'],
    details: ['Built self-serve agent settings and configuration flows that sync to the live voice agent.', 'Built call-log, transcript, review feedback, and dashboard views for venue teams.'],
  },
  {
    id: 'conversational-ai',
    name: 'Conversational AI',
    repo: 'hanchengxuan/conversational-ai',
    link: 'https://github.com/hanchengxuan/conversational-ai',
    access: 'Production work · private repo',
    roles: ['AI', 'Full Stack', 'Automation'],
    description: 'A hospitality voice AI concierge that answers calls, handles reservations and booking changes, qualifies enquiries, answers venue FAQs, sends SMS links, and hands off when needed.',
    stack: ['Python', 'Twilio', 'Deepgram', 'ElevenLabs', 'Azure', 'Docker'],
    details: ['Built Python agents combining LLM-based intent detection with multi-turn business workflows.', 'Supported reservation, private-event, accommodation, FAQ, SMS, and human-handoff flows.'],
  },
  {
    id: 'skillshift',
    name: 'SkillShift',
    repo: 'hanchengxuan/SkillShift',
    link: 'https://github.com/hanchengxuan/SkillShift',
    access: 'Built independently · public repo',
    roles: ['Frontend', 'Full Stack'],
    description: 'A full-stack learning and productivity app focused on structured progress tracking, clean product flows, and reusable frontend architecture.',
    stack: ['TypeScript', 'React', 'Node.js', 'Modern frontend tooling'],
    details: ['Designed and built the product surface end to end.', 'Used it to show practical frontend/product thinking beyond isolated components.'],
  },
  {
    id: 'grocery-goblin',
    name: 'Grocery Goblin',
    repo: 'hanchengxuan/grocery-goblin',
    link: 'https://github.com/hanchengxuan/grocery-goblin',
    access: 'Built independently · personal project',
    roles: ['Full Stack', 'AI', 'Automation'],
    description: 'A grocery savings assistant that compares basket prices, imports store offers, and explores product/image-based item lookup.',
    stack: ['FastAPI', 'Python', 'React', 'TypeScript', 'OCR/image processing'],
    details: ['Built backend importer, basket pricing, and product lookup flows.', 'Explored OCR/image-assisted item identification as a practical AI feature.'],
  },
];

function Section({ id, eyebrow, title, children }: { id: string; eyebrow: string; title: string; children: ReactNode }) {
  return <section id={id} className="scroll-mt-24 border border-terminal/20 bg-black/35 p-6 shadow-glow backdrop-blur md:p-8"><p className="mb-2 text-xs uppercase tracking-[0.35em] text-terminal/70">{eyebrow}</p><h2 className="mb-6 text-2xl font-bold text-white md:text-3xl">{title}</h2>{children}</section>;
}

export default function Home() {
  const [selectedRole, setSelectedRole] = useState<Role>('Full Stack');
  const [openJob, setOpenJob] = useState(experiences[0].company);
  const [copiedEmail, setCopiedEmail] = useState(false);

  const activeFocus = focusProfiles[selectedRole];
  const resumeHref = selectedRole === 'AI' ? resumes.ai : resumes.fullStack;
  const resumeLabel = selectedRole === 'AI' ? 'AI Engineer' : 'Full Stack';
  const filteredSkillGroups = useMemo(() => skillGroups.filter((group) => group.roles.includes(selectedRole)), [selectedRole]);
  const focusedProjects = useMemo(() => projects.filter((project) => project.roles.includes(selectedRole)), [selectedRole]);

  function chooseRole(role: Role) {
    setSelectedRole(role);
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
    <header id="top" className="mb-12 grid gap-8 md:grid-cols-[1.25fr_0.75fr] md:items-center"><div><p className="mb-4 text-terminal">{activeFocus.title}</p><h1 className="text-4xl font-black leading-tight text-white md:text-6xl">Liam <span className="text-terminal">(Chengxuan)</span> Han</h1><p className="mt-6 max-w-2xl text-lg leading-8 text-emerald-100/80">{activeFocus.headline}</p><ul className="mt-5 grid gap-2 text-sm text-emerald-100/70 sm:grid-cols-3">{activeFocus.bullets.map((bullet) => <li key={bullet} className="border border-terminal/15 bg-black/25 px-3 py-2">{bullet}</li>)}</ul><div className="mt-8 flex flex-wrap gap-3"><a href="#projects" className="border border-terminal bg-terminal px-5 py-3 text-sm font-bold text-black hover:bg-white">View Projects</a><a href={resumeHref} download className="border border-terminal/50 px-5 py-3 text-sm font-bold text-terminal hover:border-white hover:text-white">Download {resumeLabel} Resume</a></div></div><div className="border border-terminal/25 bg-black/50 p-5 text-sm leading-7 text-terminal/85 shadow-glow"><p className="text-white">Choose a focus</p><div className="mt-4 grid gap-2">{roles.map((role) => <button key={role} type="button" onClick={() => chooseRole(role)} aria-pressed={selectedRole === role} className={`border px-4 py-2 text-left transition ${selectedRole === role ? 'border-terminal bg-terminal text-black' : 'border-terminal/20 bg-black/35 text-emerald-100/80 hover:border-terminal hover:text-white'}`}>{role}</button>)}</div><p className="mt-4 text-emerald-100/70">This focus updates the headline, key strengths, skill stack, and highlighted projects.</p></div></header>
    <div className="grid gap-6">
      <Section id="about" eyebrow="01 // About" title="About"><div className="grid gap-6 lg:grid-cols-[1.1fr_0.9fr]"><p className="leading-8 text-emerald-100/80">I’m a Sydney-based Full-Stack Engineer with 3+ years of experience building production software with React, TypeScript, Python, and Node.js. At Kimia, I build AI agents, permission-aware data access, and platform workflows. Previously at Axify.AI, I built conversational agents, self-service configuration, and call analytics. I work across requirements, interfaces, APIs, database design, testing, CI/CD, and cloud delivery.</p><div className="border border-terminal/15 bg-black/30 p-5"><p className="font-bold text-white">Looking for</p><div className="mt-3 flex flex-wrap gap-2">{lookingFor.map((item) => <span key={item} className="border border-terminal/20 px-3 py-2 text-sm text-emerald-100/80">{item}</span>)}</div><p className="mt-4 text-sm leading-6 text-emerald-100/60">Interested in Sydney or remote roles where I can build user-facing products, automation systems, or AI-enabled workflows.</p></div></div></Section>
      <Section id="skills" eyebrow="02 // Skills" title={`${selectedRole} skills`}><div className="grid gap-4 md:grid-cols-2">{filteredSkillGroups.map((group) => <article key={group.label} className="border border-terminal/15 bg-emerald-950/20 p-4"><h3 className="mb-3 text-sm font-bold uppercase tracking-[0.25em] text-terminal">{group.label}</h3><div className="flex flex-wrap gap-2">{group.items.map((skill) => <span key={skill} className="border border-terminal/15 bg-black/35 px-3 py-2 text-sm text-emerald-50/85"># {skill}</span>)}</div></article>)}</div></Section>
      <Section id="experience" eyebrow="03 // Experience" title="Experience"><div className="space-y-4">{experiences.map((job) => { const isOpen = openJob === job.company; return <article key={job.company} className="border-l-2 border-terminal/60 bg-black/25"><button type="button" onClick={() => setOpenJob(isOpen ? '' : job.company)} aria-expanded={isOpen} aria-controls={`job-${job.company.replaceAll(/[^a-z0-9]/gi, '-').toLowerCase()}`} className="w-full p-5 text-left"><div className="flex flex-wrap items-baseline justify-between gap-2"><h3 className="text-xl font-bold text-white">{job.role} — {job.company}</h3><p className="text-sm text-terminal/80">{job.location} · {job.period}</p></div><p className="mt-3 leading-7 text-emerald-100/80">{job.summary}</p><p className="mt-3 text-sm font-bold text-terminal">{isOpen ? 'Hide details ↑' : 'View details ↓'}</p></button>{isOpen && <div id={`job-${job.company.replaceAll(/[^a-z0-9]/gi, '-').toLowerCase()}`} className="border-t border-terminal/10 px-5 pb-5"><p className="pt-4 leading-7 text-emerald-100/70">{job.copy}</p><ul className="mt-3 space-y-2 text-sm leading-6 text-emerald-100/70">{job.bullets.map((bullet) => <li key={bullet}>• {bullet}</li>)}</ul></div>}</article>; })}</div></Section>
      <Section id="projects" eyebrow="04 // Projects" title={`${selectedRole} projects`}><p className="mb-5 text-sm leading-6 text-emerald-100/60">Showing projects most relevant to the selected focus. Switch focus above to change this list.</p><div className="grid gap-5 md:grid-cols-2">{focusedProjects.map((project) => <article key={project.id} className="border border-terminal/20 bg-black/45 p-5 transition hover:-translate-y-1 hover:border-terminal"><p className="break-words text-xs uppercase tracking-[0.18em] text-terminal/60">{project.repo}</p><div className="mt-3"><h3 className="text-xl font-bold text-white">{project.name}</h3><p className="mt-1 text-xs uppercase tracking-[0.16em] text-emerald-100/45">{project.access}</p></div><p className="mt-4 leading-7 text-emerald-100/75">{project.description}</p><div className="mt-5"><p className="mb-2 text-sm font-bold text-terminal">Tech stack</p><div className="flex flex-wrap gap-2">{project.stack.map((item) => <span key={item} className="border border-terminal/15 bg-emerald-950/25 px-3 py-2 text-sm text-emerald-50/85">{item}</span>)}</div></div><ul className="mt-5 space-y-2 text-sm leading-6 text-emerald-100/70">{project.details.map((detail) => <li key={detail}>• {detail}</li>)}</ul><a href={project.link} target={project.link.startsWith('#') ? undefined : '_blank'} rel="noreferrer" className="mt-5 inline-block border border-terminal/50 px-4 py-3 text-sm font-bold text-terminal hover:border-white hover:text-white">{project.link.startsWith('#') ? 'View work experience →' : 'Open repository →'}</a></article>)}</div><p className="mt-5 text-sm text-emerald-100/55">Note: company repositories are private; public repositories are included where they can be opened directly.</p></Section>
      <Section id="credentials" eyebrow="05 // Credentials" title="Education & Certifications"><div className="grid gap-8 md:grid-cols-2"><div><h3 className="mb-3 text-lg font-bold text-white">Education</h3><ul className="space-y-4 leading-7 text-emerald-100/80"><li>Master of Information Technology (Artificial Intelligence)<span className="block text-sm text-emerald-100/70">University of New South Wales</span></li><li>Bachelor of Computer Science<span className="block text-sm text-emerald-100/70">Yancheng Institute of Technology</span></li></ul></div><div><h3 className="mb-3 text-lg font-bold text-white">Microsoft Certifications</h3><ul className="space-y-3 leading-7 text-emerald-100/80"><li>Microsoft Certified: Azure Fundamentals</li><li>Microsoft Certified: Azure Administrator Associate</li><li>Microsoft Certified: Power BI Data Analyst Associate</li></ul></div></div><div className="mt-8 border-t border-terminal/20 pt-5"><h3 className="font-bold text-white">Download my resume</h3><div className="mt-4 flex flex-wrap gap-3"><a href={resumes.fullStack} download className="border border-terminal/50 px-4 py-3 text-sm text-terminal hover:border-white hover:text-white">Full Stack Resume (PDF)</a><a href={resumes.ai} download className="border border-terminal/50 px-4 py-3 text-sm text-terminal hover:border-white hover:text-white">AI Engineer Resume (PDF)</a></div></div></Section>
      <Section id="contact" eyebrow="06 // Contact" title="Contact"><div className="grid gap-4 md:grid-cols-3"><button type="button" onClick={copyEmail} className="border border-terminal/20 bg-black/40 p-5 text-left hover:border-terminal"><span className="block text-terminal">email</span><span className="block break-words">{email}</span><span className="mt-3 block text-xs uppercase tracking-[0.16em] text-emerald-100/45">{copiedEmail ? 'Copied' : 'Click to copy'}</span></button><a className="border border-terminal/20 bg-black/40 p-5 hover:border-terminal" href="https://github.com/hanchengxuan" target="_blank" rel="noreferrer"><span className="block text-terminal">github</span>@hanchengxuan</a><a className="border border-terminal/20 bg-black/40 p-5 hover:border-terminal" href="https://www.linkedin.com/in/chengxuan-han" target="_blank" rel="noreferrer"><span className="block text-terminal">linkedin</span>/in/chengxuan-han</a></div></Section>
    </div>
  </main>;
}
