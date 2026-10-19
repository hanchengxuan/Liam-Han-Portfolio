import type { ReactNode } from 'react';
import Image from 'next/image';
import ThemeToggle from './theme-toggle';
import portrait from './liam-han.jpg';
import Icon, { type IconName } from './icons';

const navItems = ['About', 'Skills', 'Experience', 'Projects', 'Certifications', 'Education', 'Contact'];
const cvHref = './liam-han-cv.pdf';
const email = 'hanchengxuan98@gmail.com';

const skillGroups = [
  {
    label: 'Frontend',
    icon: 'frontend',
    items: ['React', 'TypeScript', 'JavaScript', 'Next.js', 'GraphQL', 'Axios'],
  },
  {
    label: 'Backend',
    icon: 'backend',
    items: ['Python', 'Flask', 'FastAPI', 'Node.js', 'NestJS', 'REST APIs', 'JWT'],
  },
  {
    label: 'AI Systems',
    icon: 'brain',
    items: ['AI Agents', 'Tool Calling', 'RAG', 'Prompt Engineering', 'Workflow Orchestration'],
  },
  {
    label: 'Database',
    icon: 'database',
    items: ['PostgreSQL', 'SQL Server', 'Azure Cosmos DB', 'Redis'],
  },
  {
    label: 'Cloud & DevOps',
    icon: 'cloud',
    items: ['Azure Functions', 'Azure DevOps Pipelines', 'AWS', 'Docker', 'Git', 'GitHub Actions'],
  },
] satisfies { label: string; icon: IconName; items: string[] }[];

const experiences = [
  {
    role: 'Software Engineer',
    company: 'Kimia',
    logo: './assets/kimia.png',
    initials: '',
    location: 'Sydney, Australia',
    period: 'Jun 2026–Present',
    summary: 'Build AI agents, data access controls, module entitlements, and notifications for a chemical intelligence platform.',
    copy: 'Delivered Access Data Scopes from design to production within a month. Built a notification system supporting 30+ in-app and email topics, and an Ask Kimia workflow that brings knowledge base updates from lengthy SME-dependent waits to seconds.',
    bullets: ['Built and shipped Ask Kimia with multi-step tool execution, streamed responses, failure handling, and run-level tracing using TypeScript, Node.js, and NestJS.', 'Built a React and TypeScript review-and-apply workflow so users can inspect agent-proposed updates before changing workspace data.', 'Built Access Data Scopes with NestJS and PostgreSQL, enforcing product and document permissions across the application, public APIs, and AI assistant retrieval.', 'Designed database-backed organisation module access and entitlements, with administrative controls for customer modules, roles, and product tiers.', 'Built event-driven notifications with BullMQ daily and weekly digests, per-user email limits, Resend idempotency, and PostHog engagement telemetry.', 'Developed agent tools, run lifecycle, failure recovery, and server-side assistant capabilities across NestJS and Python FastAPI services.'],
  },
  {
    role: 'Software Engineer',
    company: 'Axify.AI',
    logo: './assets/axify.svg',
    initials: '',
    location: 'Sydney, Australia',
    period: 'Nov 2024–Jun 2026',
    summary: 'Built a customer-facing agent portal, conversational AI systems, and automated call analytics.',
    copy: 'Replaced manual CSV configuration updates with self-service settings, reducing turnaround from days to seconds. The conversational AI systems handled 31K+ calls, 3K+ bookings, and 3K+ SMS events in a monthly production reporting period.',
    bullets: ['Built React and TypeScript interfaces for agent configuration and analytics, backed by Python, Flask, FastAPI, SQL Server, and Azure Cosmos DB.', 'Built a configuration pipeline translating customer settings into runtime agent workflows, FAQs, voice, and booking rules through APIs and Azure Cosmos DB.', 'Built an automated call analytics pipeline using Azure services and AI classification, turning conversations into searchable records and customer-facing insights.', 'Built Python conversational agents combining LLM intent detection with multi-turn booking, change, cancellation, FAQ, and human-handoff workflows.'],
  },
  {
    role: 'Software Engineer',
    company: 'AI Consulting Group',
    logo: './assets/aicg.png',
    initials: '',
    location: 'Sydney, Australia',
    period: 'Mar 2024–Nov 2024',
    summary: 'Developed a client delivery platform, admin interfaces, reporting dashboards, and GPT-powered publishing tools.',
    copy: 'Automated article generation to reduce manual content creation and supported client website improvements through SEO tools and UI updates.',
    bullets: ['Built delivery platform interfaces and dashboards using React, TypeScript, Axios, Next.js, Node.js, and GraphQL.', 'Built GPT-powered workflows to generate articles for client websites and optimize SEO.', 'Contributed to website UI improvements.'],
  },
  {
    role: 'Software Engineer',
    company: 'Thick AI',
    logo: null,
    initials: 'TA',
    location: 'Remote, China',
    period: 'Sep 2023–Mar 2024',
    summary: 'Built a clinical decision-support web application using Python, Flask, and JavaScript.',
    copy: 'Enabled users to upload clinical data, select machine learning models, and view prediction results.',
    bullets: ['Contributed to data handling, REST APIs, model training, and prediction workflows.', 'Worked with structured datasets, file inputs, and client-server communication.', 'Used Docker-based containerization to support application logic and model processing.'],
  },
];

const projects = [
  { name: 'TripFlow', link: 'https://github.com/hanchengxuan/tripflow', description: 'Shared travel itineraries and group expense tracking.' },
  { name: 'ForkIt', link: 'https://github.com/hanchengxuan/ForkIt', description: 'A group dinner decider for finding a restaurant together.' },
  { name: 'Grocery Goblin', link: 'https://github.com/hanchengxuan/grocery-goblin', description: 'An Australian grocery basket and price comparison project.' },
];

const certifications = [
  { title: 'Azure Fundamentals', code: 'AZ-900', level: 'Fundamentals', badge: 'cert-fundamentals.svg', link: 'https://learn.microsoft.com/en-us/credentials/certifications/azure-fundamentals/' },
  { title: 'Azure Administrator Associate', code: 'AZ-104', level: 'Associate', badge: 'cert-associate.svg', link: 'https://learn.microsoft.com/en-us/credentials/certifications/azure-administrator/' },
  { title: 'Power BI Data Analyst Associate', code: 'PL-300', level: 'Associate', badge: 'cert-associate.svg', link: 'https://learn.microsoft.com/en-us/credentials/certifications/power-bi-data-analyst-associate/' },
];

const technologyAssets: Record<string, string | undefined> = {
  React: 'react', TypeScript: 'typescript', JavaScript: 'javascript', 'Next.js': 'nextjs', GraphQL: 'graphql', Axios: 'axios',
  Python: 'python', Flask: 'flask', FastAPI: 'fastapi', 'Node.js': 'nodejs', NestJS: 'nestjs',
  PostgreSQL: 'postgresql', 'SQL Server': 'sqlserver', 'Azure Cosmos DB': 'cosmosdb', Redis: 'redis',
  'Azure Functions': 'azure', 'Azure DevOps Pipelines': 'azuredevops', AWS: 'aws', Docker: 'docker', Git: 'git', 'GitHub Actions': 'githubactions',
};
const skillSymbols: Record<string, IconName | undefined> = {
  'REST APIs': 'api', JWT: 'key', 'AI Agents': 'brain', 'Tool Calling': 'tool', RAG: 'search', 'Prompt Engineering': 'prompt', 'Workflow Orchestration': 'workflow',
};

function SkillIcon({ skill, fallback }: { skill: string; fallback: IconName }) {
  const asset = technologyAssets[skill];
  return asset
    ? <span className="flex h-7 w-7 shrink-0 items-center justify-center rounded bg-white p-1"><Image src={`./assets/${asset}.svg`} width={20} height={20} alt="" className="h-5 w-5 object-contain" /></span>
    : <Icon name={skillSymbols[skill] ?? fallback} className="h-5 w-5 text-accent" />;
}

function Section({ id, title, children }: { id: string; title: string; children: ReactNode }) {
  return <section id={id} className="scroll-mt-44 border-t border-accent/25 py-10 md:scroll-mt-28 md:py-14">
    <h2 className="mb-8 text-2xl font-bold text-ink md:text-3xl">{title}</h2>
    {children}
  </section>;
}

export default function Home() {
  return <main className="mx-auto min-h-screen max-w-6xl px-4 py-6 md:px-8 md:py-10">
    <nav aria-label="Main navigation" className="sticky top-4 z-10 mb-10 flex flex-wrap items-center justify-between gap-4 border border-accent/25 bg-canvas px-4 py-3">
      <div className="flex w-full items-center justify-between gap-6 md:w-auto">
        <a href="#top" className="text-sm font-bold text-accent">~/liam-han</a>
        <ThemeToggle />
      </div>
      <div className="flex flex-wrap gap-3 text-xs text-accent md:text-sm">
        {navItems.map((item) => <a key={item} href={'#' + item.toLowerCase()} className="hover:text-ink">{item}</a>)}
      </div>
    </nav>

    <header id="top" className="mb-12 grid gap-8 md:grid-cols-[1.25fr_0.75fr] md:items-center md:gap-10">
      <div>
        <p className="mb-4 text-accent">Software Engineer · Sydney</p>
        <h1 className="text-4xl font-black leading-tight text-ink md:text-6xl">Liam <span className="text-accent">(Chengxuan)</span> Han</h1>
        <p className="mt-6 max-w-2xl text-lg leading-8 text-muted">I build software that connects people, data, and AI — from customer-facing web applications to production agents and backend services.</p>
        <p className="mt-4 text-sm leading-7 text-muted">Currently at Kimia. Previously at Axify.AI, AI Consulting Group, and Thick AI.</p>
        <div className="mt-8 flex flex-wrap gap-3">
          <a href={cvHref} download="Liam_Han_CV.pdf" className="border border-accent bg-accent px-5 py-3 text-sm font-bold text-on-accent hover:bg-accent-hover">Download CV</a>
          <a href="#experience" className="border border-accent/50 px-5 py-3 text-sm font-bold text-accent hover:border-accent hover:text-ink">View experience</a>
        </div>
      </div>
      <div className="aspect-square w-full max-w-md justify-self-center overflow-hidden border border-accent/20 bg-tint md:justify-self-end">
        <Image src={portrait} alt="Liam Han outdoors in a park" priority sizes="(min-width: 768px) 400px, 100vw" className="h-full w-full scale-[1.65] object-cover object-[55%_44%]" />
      </div>
    </header>

    <Section id="about" title="About me">
      <div className="grid gap-6 md:grid-cols-[1.5fr_1fr] md:gap-12">
        <p className="max-w-[70ch] leading-8 text-muted">I’m a Sydney-based Software Engineer with 3+ years of experience building production software with React, TypeScript, Python, and Node.js. At Kimia, I work on AI agents, permission-aware data access, and platform workflows. Previously at Axify.AI, I built conversational agents, self-service configuration, and call analytics. I work across requirements, interfaces, APIs, database design, testing, CI/CD, and cloud delivery.</p>
        <div className="self-start border-l border-accent/30 pl-5">
          <h3 className="mb-3 font-bold text-ink">Looking for</h3>
          <p className="leading-7 text-muted">Software Engineer and AI Engineer roles in Sydney or remote, building user-facing products and AI-enabled systems.</p>
        </div>
      </div>
    </Section>

    <Section id="skills" title="Skills & tools">
      <div className="grid gap-7 md:grid-cols-2">
        {skillGroups.map((group) => <article key={group.label}>
          <h3 className="mb-4 flex items-center gap-3 font-bold text-ink"><Icon name={group.icon} className="h-6 w-6 text-accent" />{group.label}</h3>
          <ul className="flex flex-wrap gap-2">
            {group.items.map((skill) => <li key={skill} className="inline-flex items-center gap-2 border border-accent/20 bg-surface px-3 py-2 text-sm text-muted"><SkillIcon skill={skill} fallback={group.icon} />{skill}</li>)}
          </ul>
        </article>)}
      </div>
    </Section>

    <Section id="experience" title="Work experience">
      <div className="divide-y divide-accent/20 border-y border-accent/20">
        {experiences.map((job, index) => <details key={job.company} open={index === 0} className="group">
          <summary className="flex cursor-pointer list-none items-start gap-4 py-6 marker:content-none [&::-webkit-details-marker]:hidden">
            <span className={`flex h-14 w-14 shrink-0 items-center justify-center rounded-lg border border-accent/15 p-2 ${job.company === 'Axify.AI' ? 'bg-[#171a18]' : 'bg-white'}`}>
              {job.logo ? <Image src={job.logo} alt="" width={40} height={40} className="h-10 w-10 object-contain" /> : <span className="font-bold text-[#3f6952]">{job.initials}</span>}
            </span>
            <div className="min-w-0 flex-1">
              <div className="flex flex-wrap items-baseline justify-between gap-x-6 gap-y-2"><h3 className="text-lg font-bold text-ink md:text-xl">{job.company}</h3><p className="text-sm text-accent">{job.period}</p></div>
              <p className="mt-2 text-sm text-muted">{job.role} · {job.location}</p>
              <p className="mt-3 text-sm leading-7 text-muted">{job.summary}</p>
              <span className="mt-3 inline-block text-xs font-bold text-accent"><span className="group-open:hidden">View details</span><span className="hidden group-open:inline">Hide details</span></span>
            </div>
            <Icon name="chevron" className="mt-2 h-5 w-5 text-accent transition-transform group-open:rotate-180" />
          </summary>
          <div className="pb-7 md:pl-[4.5rem]">
            <ul className="list-disc space-y-3 pl-5 text-sm leading-7 text-muted">{job.bullets.map((bullet) => <li key={bullet}>{bullet}</li>)}</ul>
            <p className="mt-5 border-l border-accent/40 pl-4 text-sm leading-7 text-muted">{job.copy}</p>
          </div>
        </details>)}
      </div>
    </Section>

    <section id="projects" className="scroll-mt-44 border-t border-accent/25 py-7 md:scroll-mt-28 md:py-8">
      <h2 className="mb-4 text-lg font-bold text-ink">Side projects</h2>
      <ul className="space-y-3">
        {projects.map((project) => <li key={project.name} className="flex items-start gap-3 text-sm leading-7">
          <Icon name="github" className="mt-1 h-4 w-4 text-accent" />
          <div><a href={project.link} target="_blank" rel="noreferrer" className="inline-flex items-center gap-2 font-bold text-accent underline underline-offset-4 hover:text-ink">{project.name}<Icon name="external" className="h-3 w-3" /></a><span className="text-muted"> — {project.description}</span></div>
        </li>)}
      </ul>
    </section>

    <Section id="certifications" title="Microsoft certifications">
      <div className="grid gap-6 md:grid-cols-3">
        {certifications.map((cert) => <article key={cert.code} className="flex items-start gap-4 border-t border-accent/20 pt-5">
          <Image src={`./assets/${cert.badge}`} width={72} height={72} alt="" className="h-[4.5rem] w-[4.5rem] shrink-0" />
          <div><p className="text-xs leading-6 text-muted">Microsoft Certified · {cert.code}</p><h3 className="mt-2 font-bold leading-7 text-ink">{cert.title}</h3><a href={cert.link} target="_blank" rel="noreferrer" className="mt-3 inline-flex items-center gap-2 text-xs text-accent underline underline-offset-4 hover:text-ink">About this certification<Icon name="external" className="h-3 w-3" /></a></div>
        </article>)}
      </div>
    </Section>

    <Section id="education" title="Education">
      <div className="grid gap-8 md:grid-cols-2 md:gap-12">
        <article className="flex items-start gap-4"><span className="flex h-12 w-12 shrink-0 items-center justify-center bg-tint text-accent"><Icon name="graduation" className="h-7 w-7" /></span><div><p className="text-sm text-accent">Master’s degree</p><h3 className="mt-2 text-lg font-bold leading-7 text-ink">University of New South Wales</h3><p className="mt-3 leading-7 text-muted">Master of Information Technology</p><p className="mt-1 text-sm text-muted">Artificial Intelligence</p></div></article>
        <article className="flex items-start gap-4"><span className="flex h-12 w-12 shrink-0 items-center justify-center bg-tint text-accent"><Icon name="graduation" className="h-7 w-7" /></span><div><p className="text-sm text-accent">Bachelor’s degree</p><h3 className="mt-2 text-lg font-bold leading-7 text-ink">Yancheng Institute of Technology</h3><p className="mt-3 leading-7 text-muted">Bachelor of Computer Science</p></div></article>
      </div>
    </Section>

    <Section id="contact" title="Let’s chat">
      <p className="max-w-2xl text-lg leading-8 text-muted">Have a role in mind, a project to build, or just want to say hi? <a href={`mailto:${email}`} className="font-bold text-accent underline underline-offset-4 hover:text-ink">Email me</a> or <a href="https://www.linkedin.com/in/chengxuan-han/" target="_blank" rel="noreferrer" className="font-bold text-accent underline underline-offset-4 hover:text-ink">connect with me on LinkedIn</a>.</p>
      <div className="mt-6 flex flex-wrap gap-x-6 gap-y-3 text-sm">
        <a href={`mailto:${email}`} className="break-all text-muted underline underline-offset-4 hover:text-accent">{email}</a>
        <a href="https://github.com/hanchengxuan" target="_blank" rel="noreferrer" className="text-accent underline underline-offset-4 hover:text-ink">Find me on GitHub →</a>
      </div>
    </Section>
    <footer className="border-t border-accent/20 pt-6 text-xs leading-6 text-muted">Liam (Chengxuan) Han · Sydney, Australia</footer>
  </main>;
}
