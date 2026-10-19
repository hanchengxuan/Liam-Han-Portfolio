import type { ReactNode } from 'react';
import Image from 'next/image';
import ThemeToggle from './theme-toggle';
import portrait from './liam-han.jpg';

const navItems = ['About', 'Experience', 'Skills', 'Projects', 'Education', 'Contact'];
const cvHref = './liam-han-cv.pdf';
const email = 'hanchengxuan98@gmail.com';

const skillGroups = [
  {
    label: 'Frontend',
    items: ['React', 'TypeScript', 'JavaScript', 'Next.js', 'GraphQL', 'Axios'],
  },
  {
    label: 'Backend',
    items: ['Python', 'Flask', 'FastAPI', 'Node.js', 'NestJS', 'REST APIs', 'JWT'],
  },
  {
    label: 'AI Systems',
    items: ['AI Agents', 'Tool Calling', 'RAG', 'Prompt Engineering', 'Workflow Orchestration'],
  },
  {
    label: 'Database',
    items: ['PostgreSQL', 'SQL Server', 'Azure Cosmos DB', 'Redis'],
  },
  {
    label: 'Cloud & DevOps',
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
    summary: 'Developed a client delivery platform, admin interfaces, reporting dashboards, and GPT-powered publishing tools.',
    copy: 'Automated article generation to reduce manual content creation and supported client website improvements through SEO tools and UI updates.',
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
    description: 'A grocery savings assistant that compares basket prices, imports store offers, and explores product/image-based item lookup.',
    stack: ['FastAPI', 'Python', 'React', 'TypeScript', 'OCR/image processing'],
    details: ['Built backend importer, basket pricing, and product lookup flows.', 'Explored OCR/image-assisted item identification as a practical AI feature.'],
  },
];

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

    <Section id="experience" title="Work experience">
      <ol className="space-y-10">
        {experiences.map((job) => <li key={job.company} className="grid gap-4 border-b border-accent/15 pb-10 last:border-b-0 last:pb-0 md:grid-cols-[0.65fr_1.35fr] md:gap-10">
          <div>
            <p className="text-sm font-bold text-accent">{job.period}</p>
            <h3 className="mt-3 text-xl font-bold text-ink">{job.company}</h3>
            <p className="mt-2 text-sm text-muted">{job.role}</p>
            <p className="mt-2 text-sm text-muted">{job.location}</p>
          </div>
          <div>
            <p className="mb-4 leading-7 text-ink">{job.summary}</p>
            <ul className="list-disc space-y-3 pl-5 text-sm leading-7 text-muted">{job.bullets.map((bullet) => <li key={bullet}>{bullet}</li>)}</ul>
            <p className="mt-5 border-l border-accent/40 pl-4 text-sm leading-7 text-muted">{job.copy}</p>
          </div>
        </li>)}
      </ol>
    </Section>

    <Section id="skills" title="Skills & tools">
      <dl className="divide-y divide-accent/15">
        {skillGroups.map((group) => <div key={group.label} className="grid gap-3 py-5 first:pt-0 md:grid-cols-[0.65fr_1.35fr] md:gap-10">
          <dt className="font-bold text-ink">{group.label}</dt>
          <dd className="flex flex-wrap gap-2">{group.items.map((skill) => <span key={skill} className="border border-accent/20 bg-tint px-3 py-2 text-sm text-muted">{skill}</span>)}</dd>
        </div>)}
      </dl>
    </Section>

    <Section id="projects" title="Selected projects">
      <div className="grid gap-x-10 gap-y-8 md:grid-cols-2">
        {projects.map((project) => <article key={project.id} className="border-t border-accent/20 pt-5">
          <h3 className="text-xl font-bold text-ink">{project.name}</h3>
          <p className="mt-2 text-xs leading-6 text-muted">{project.access}</p>
          <p className="mt-4 leading-7 text-muted">{project.description}</p>
          <ul className="mt-4 list-disc space-y-2 pl-5 text-sm leading-7 text-muted">{project.details.map((detail) => <li key={detail}>{detail}</li>)}</ul>
          <p className="mt-4 text-sm leading-7 text-accent">{project.stack.join(' · ')}</p>
          <a href={project.link} target={project.link.startsWith('#') ? undefined : '_blank'} rel="noreferrer" className="mt-4 inline-block text-sm font-bold text-accent underline underline-offset-4 hover:text-ink">{project.link.startsWith('#') ? 'View work experience →' : 'Open repository →'}</a>
        </article>)}
      </div>
      <p className="mt-8 text-sm leading-7 text-muted">Company repositories are private. Public repositories are linked where available.</p>
    </Section>

    <Section id="education" title="Education & certifications">
      <div className="grid gap-8 md:grid-cols-2 md:gap-12">
        <div>
          <h3 className="mb-4 text-lg font-bold text-ink">Education</h3>
          <ul className="space-y-5 leading-7 text-muted">
            <li>Master of Information Technology (Artificial Intelligence)<span className="block text-sm">University of New South Wales</span></li>
            <li>Bachelor of Computer Science<span className="block text-sm">Yancheng Institute of Technology</span></li>
          </ul>
        </div>
        <div>
          <h3 className="mb-4 text-lg font-bold text-ink">Microsoft certifications</h3>
          <ul className="space-y-3 leading-7 text-muted">
            <li>Microsoft Certified: Azure Fundamentals</li>
            <li>Microsoft Certified: Azure Administrator Associate</li>
            <li>Microsoft Certified: Power BI Data Analyst Associate</li>
          </ul>
        </div>
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
