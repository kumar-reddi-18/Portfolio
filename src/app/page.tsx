import Image from "next/image";
import Reveal from "@/components/Reveal";
import CountUp from "@/components/CountUp";
import ThemeToggle from "@/components/ThemeToggle";
import { site } from "@/site";
import {
  contact,
  work,
  otherWork,
  services,
  process,
  experience,
  stack,
  type Project,
} from "@/content";

const nav = [
  { label: "Work", href: "#work" },
  { label: "Services", href: "#services" },
  { label: "About", href: "#about" },
];

const stats = [
  { to: 4, suffix: "+ years", label: "building production software" },
  { to: 25, suffix: " lakh+", label: "businesses use the product I helped build at Swipe" },
  { to: 100, suffix: "+", label: "features shipped to production" },
];

/* ---------- Small pieces ---------- */

function SectionHeading({ label, title }: { label: string; title: string }) {
  return (
    <Reveal className="mb-12">
      <p className="font-mono text-xs uppercase tracking-[0.14em] text-subtle mb-3">{label}</p>
      <h2 className="text-2xl sm:text-3xl font-semibold tracking-tight">{title}</h2>
    </Reveal>
  );
}

function ExtLink({ href, children }: { href: string; children: React.ReactNode }) {
  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      className="underline decoration-line hover:decoration-fg transition-colors"
    >
      {children}
    </a>
  );
}

function BrowserBar({ label, hint }: { label: string; hint?: React.ReactNode }) {
  return (
    <div className="flex items-center gap-3 border-b border-line bg-bg px-4 py-2.5">
      <div className="flex gap-1.5" aria-hidden>
        <span className="size-2.5 rounded-full bg-line" />
        <span className="size-2.5 rounded-full bg-line" />
        <span className="size-2.5 rounded-full bg-line" />
      </div>
      <span className="flex-1 truncate text-center font-mono text-xs text-subtle">{label}</span>
      <span className="text-xs text-subtle group-hover:text-fg transition-colors">
        {hint ?? <span className="nudge">↗</span>}
      </span>
    </div>
  );
}

const frameShadow =
  "shadow-[0_1px_2px_rgba(0,0,0,0.04),0_12px_32px_-12px_rgba(0,0,0,0.18)]";

function BrowserFrame({ project }: { project: Project }) {
  return (
    <a
      href={project.link.href}
      target="_blank"
      rel="noopener noreferrer"
      aria-label={`Visit ${project.title}`}
      className={`group block overflow-hidden rounded-xl border border-line bg-surface ${frameShadow} transition-transform duration-500 hover:-translate-y-1`}
    >
      <BrowserBar
        label={project.link.label}
        hint={
          project.fullImage ? (
            <span className="[@media(hover:none)]:hidden">Hover to scroll</span>
          ) : undefined
        }
      />
      <div className="relative aspect-[16/10] overflow-hidden">
        {project.fullImage ? (
          <Image
            src={project.fullImage}
            alt={`${project.title} website`}
            width={1200}
            height={3000}
            sizes="(min-width: 1024px) 560px, 100vw"
            className="scroll-shot absolute left-0 w-full h-auto"
          />
        ) : (
          <Image
            src={project.image!}
            alt={`${project.title} website`}
            fill
            sizes="(min-width: 1024px) 560px, 100vw"
            className="object-cover object-top transition-transform duration-700 ease-out group-hover:scale-[1.03]"
          />
        )}
      </div>
    </a>
  );
}

function ProjectMeta({ project }: { project: Project }) {
  return (
    <dl className="grid grid-cols-[4.5rem_1fr] gap-y-1.5 text-sm">
      <dt className="text-subtle">Role</dt>
      <dd>{project.role}</dd>
      <dt className="text-subtle">Stack</dt>
      <dd>{project.stack}</dd>
      <dt className="text-subtle">Link</dt>
      <dd>
        <ExtLink href={project.link.href}>
          {project.link.label} <span className="nudge">↗</span>
        </ExtLink>
      </dd>
    </dl>
  );
}

/** Three real project screenshots, stacked and gently floating. Fans out on hover. */
function HeroStack() {
  const byTitle = (t: string) => work.find((p) => p.title === t)!;
  // Back to front: the last card sits on top. AcctSnap is the featured one.
  const cards = [
    {
      p: byTitle("Swipe"),
      pos: "right-0 top-0 w-[72%]",
      rest: "rotate-[5deg]",
      hover: "group-hover:translate-x-4 group-hover:-translate-y-3 group-hover:rotate-[8deg]",
      float: "float-c",
    },
    {
      p: byTitle("RioCabs"),
      pos: "left-0 top-[16%] w-[72%]",
      rest: "-rotate-[5deg]",
      hover: "group-hover:-translate-x-4 group-hover:-rotate-[8deg]",
      float: "float-b",
    },
    {
      p: byTitle("AcctSnap"),
      pos: "left-[14%] bottom-0 w-[72%]",
      rest: "rotate-[1deg]",
      hover: "group-hover:translate-y-4 group-hover:rotate-0",
      float: "float-a",
    },
  ];
  return (
    <div className="group relative mx-auto h-[300px] w-full max-w-[520px] sm:h-[380px] lg:h-[420px]">
      {cards.map(({ p, pos, rest, hover, float }) => (
        <div key={p.title} className={`absolute ${pos} ${float}`}>
          <div
            className={`stack-card overflow-hidden rounded-lg border border-line bg-surface ${frameShadow} ${rest} ${hover}`}
          >
            <div className="flex items-center gap-1 border-b border-line bg-bg px-2.5 py-1.5" aria-hidden>
              <span className="size-1.5 rounded-full bg-line" />
              <span className="size-1.5 rounded-full bg-line" />
              <span className="size-1.5 rounded-full bg-line" />
              <span className="ml-2 font-mono text-[10px] text-subtle">{p.link.label}</span>
            </div>
            <div className="relative aspect-[16/10]">
              <Image
                src={p.image!}
                alt=""
                fill
                priority
                sizes="(min-width: 1024px) 380px, 70vw"
                className="object-cover object-top"
              />
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}

const serviceIcons = [
  // Browser window
  <svg key="web" viewBox="0 0 32 32" fill="none" stroke="currentColor" strokeWidth="1.5" className="size-8">
    <rect x="3" y="6" width="26" height="20" rx="2.5" />
    <path d="M3 11h26" />
    <circle cx="6.5" cy="8.5" r=".6" fill="currentColor" />
    <circle cx="9" cy="8.5" r=".6" fill="currentColor" />
    <path d="M8 16h9M8 20h6" strokeLinecap="round" />
    <rect x="20" y="15" width="5" height="6" rx="1" />
  </svg>,
  // App / dashboard
  <svg key="app" viewBox="0 0 32 32" fill="none" stroke="currentColor" strokeWidth="1.5" className="size-8">
    <rect x="4" y="4" width="10" height="10" rx="2" />
    <rect x="18" y="4" width="10" height="6" rx="2" />
    <rect x="18" y="14" width="10" height="14" rx="2" />
    <rect x="4" y="18" width="10" height="10" rx="2" />
    <path d="M21 24l2-3 2 2" strokeLinecap="round" strokeLinejoin="round" />
  </svg>,
  // Connected nodes
  <svg key="api" viewBox="0 0 32 32" fill="none" stroke="currentColor" strokeWidth="1.5" className="size-8">
    <circle cx="16" cy="16" r="4" />
    <circle cx="6" cy="7" r="2.5" />
    <circle cx="26" cy="7" r="2.5" />
    <circle cx="6" cy="25" r="2.5" />
    <circle cx="26" cy="25" r="2.5" />
    <path d="M8 9l5 4.5M24 9l-5 4.5M8 23l5-4.5M24 23l-5-4.5" />
  </svg>,
];

function MailIcon() {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" className="size-[18px] shrink-0" aria-hidden>
      <rect x="2.5" y="4.5" width="19" height="15" rx="2.5" />
      <path d="m3 7 8.1 5.6a1.6 1.6 0 0 0 1.8 0L21 7" />
    </svg>
  );
}

function WhatsAppIcon() {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" className="size-[18px] shrink-0" aria-hidden>
      {/* Chat bubble with tail */}
      <path strokeWidth="1.8" d="M3.2 20.8l1.3-4.4a9 9 0 1 1 3.3 3.2Z" />
      {/* Phone handset */}
      <path
        strokeWidth="3.6"
        transform="translate(7.3 7.3) scale(0.4)"
        d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"
      />
    </svg>
  );
}

/* ---------- Structured data (helps Google understand who this site is about) ---------- */

const jsonLd = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "Person",
      "@id": `${site.url}/#person`,
      name: site.name,
      url: site.url,
      jobTitle: site.jobTitle,
      email: `mailto:${contact.email}`,
      sameAs: [contact.linkedin, contact.github],
      knowsAbout: stack.split(", "),
      worksFor: { "@type": "Organization", name: "Swipe", url: "https://getswipe.in" },
      address: { "@type": "PostalAddress", addressCountry: "IN" },
    },
    {
      "@type": "ProfessionalService",
      "@id": `${site.url}/#service`,
      name: `${site.name} — Web Development`,
      url: site.url,
      description: site.description,
      founder: { "@id": `${site.url}/#person` },
      areaServed: "Worldwide",
      address: { "@type": "PostalAddress", addressCountry: "IN" },
      hasOfferCatalog: {
        "@type": "OfferCatalog",
        name: "Services",
        itemListElement: services.map((s) => ({
          "@type": "Offer",
          itemOffered: { "@type": "Service", name: s.title, description: s.body },
        })),
      },
    },
    {
      "@type": "WebSite",
      "@id": `${site.url}/#website`,
      url: site.url,
      name: site.name,
      publisher: { "@id": `${site.url}/#person` },
      inLanguage: "en",
    },
  ],
};

/* ---------- Page ---------- */

export default function Home() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd).replace(/</g, "\\u003c") }}
      />
      <header className="sticky top-0 z-20 border-b border-line/70 bg-bg/80 backdrop-blur-md">
        <div className="mx-auto flex h-16 max-w-5xl items-center justify-between px-6 sm:h-[72px]">
          <a
            href="#"
            className="flex items-center text-xl font-semibold leading-none tracking-tight sm:text-2xl"
          >
            Kumar Reddi
          </a>
          <nav className="flex items-center gap-4 text-sm leading-none text-muted sm:gap-6">
            {nav.map((item) => (
              <a
                key={item.href}
                href={item.href}
                className="hidden sm:inline hover:text-fg transition-colors"
              >
                {item.label}
              </a>
            ))}
            <ThemeToggle />
            <a
              href="#contact"
              className="rounded-md bg-fg px-4 py-2.5 font-medium text-bg hover:opacity-85 transition-opacity"
            >
              Contact
            </a>
          </nav>
        </div>
      </header>

      <main className="mx-auto max-w-5xl px-6">
        {/* Intro */}
        <section className="relative pt-16 pb-24 sm:pt-24 sm:pb-28">
          <div className="dot-grid pointer-events-none absolute -inset-x-6 inset-y-0 -z-10" aria-hidden />

          <div className="grid items-center gap-14 lg:grid-cols-12 lg:gap-8">
            <div className="intro lg:col-span-7">
              <p className="flex items-center gap-2 text-sm text-muted mb-8">
                <span className="relative flex size-2" aria-hidden>
                  <span className="absolute inset-0 rounded-full bg-accent opacity-40 motion-safe:animate-ping" />
                  <span className="relative size-2 rounded-full bg-accent" />
                </span>
                Available for new projects
              </p>
              <h1 className="text-4xl sm:text-[3.4rem] font-semibold tracking-tight leading-[1.05] mb-8 text-balance">
                I build websites, web apps and the systems behind them.
              </h1>
              <p className="max-w-xl text-lg text-muted leading-relaxed mb-10">
                I&apos;m Kumar, a full-stack developer based in India. I spent four years as an early
                engineer and then lead developer at Swipe (YC S21). Now I take on freelance projects of
                any size, from a landing page to a full product, and see each one through from the first
                call to launch.
              </p>
              <div className="flex flex-wrap gap-3">
                <a
                  href="#contact"
                  className="inline-flex items-center gap-2 rounded-md bg-fg text-bg px-5 py-3 text-sm font-medium hover:opacity-85 transition-opacity"
                >
                  Start a project <span className="nudge">→</span>
                </a>
                <a
                  href="#work"
                  className="inline-flex items-center gap-2 rounded-md border border-line bg-bg px-5 py-3 text-sm font-medium hover:border-fg transition-colors"
                >
                  See my work <span className="nudge-down">↓</span>
                </a>
              </div>
            </div>

            <div className="intro lg:col-span-5">
              <HeroStack />
            </div>
          </div>

          <Reveal>
            <dl className="mt-20 grid grid-cols-1 gap-6 border-t border-line pt-8 sm:grid-cols-3">
              {stats.map((s) => (
                <div key={s.label}>
                  <dt className="text-3xl font-semibold tracking-tight">
                    <CountUp to={s.to} suffix={s.suffix} />
                  </dt>
                  <dd className="mt-1 text-sm text-muted leading-snug max-w-[16rem]">{s.label}</dd>
                </div>
              ))}
            </dl>
          </Reveal>
        </section>

        {/* Work */}
        <section id="work" className="py-24 border-t border-line scroll-mt-20">
          <SectionHeading label="Selected work" title="Recent projects" />
          <div className="space-y-28">
            {work.map((p, i) => (
              <article key={p.title} className="grid gap-8 lg:grid-cols-12 lg:gap-12">
                <Reveal className={`lg:col-span-7 ${i % 2 ? "lg:order-2" : ""}`}>
                  <BrowserFrame project={p} />
                </Reveal>
                <Reveal delay={120} className="lg:col-span-5 flex flex-col justify-center">
                  <p className="text-sm text-subtle mb-2">
                    <span className="font-mono">0{i + 1}</span> · {p.kind}
                    {p.year && ` · ${p.year}`}
                  </p>
                  <h3 className="text-2xl font-semibold tracking-tight mb-4">{p.title}</h3>
                  <p className="text-muted leading-relaxed mb-6">{p.summary}</p>
                  <ProjectMeta project={p} />
                </Reveal>
              </article>
            ))}
          </div>

          <Reveal className="mt-28">
            <p className="font-mono text-xs uppercase tracking-[0.14em] text-subtle mb-4">
              Also built
            </p>
            <ul className="divide-y divide-line border-y border-line">
              {otherWork.map((p) => (
                <li key={p.title} className="grid gap-2 py-5 sm:grid-cols-12 sm:gap-6">
                  <div className="sm:col-span-4">
                    <p className="font-medium">{p.title}</p>
                    <p className="text-sm text-subtle">
                      {p.kind}
                      {p.year && ` · ${p.year}`}
                    </p>
                  </div>
                  <p className="sm:col-span-6 text-sm text-muted leading-relaxed">
                    {p.summary} <span className="text-subtle">{p.stack}.</span>
                  </p>
                  <div className="sm:col-span-2 sm:text-right text-sm">
                    <ExtLink href={p.link.href}>
                      {p.link.label} <span className="nudge">↗</span>
                    </ExtLink>
                  </div>
                </li>
              ))}
            </ul>
          </Reveal>
        </section>

        {/* Services */}
        <section id="services" className="py-24 border-t border-line scroll-mt-20">
          <SectionHeading label="Services" title="What I can build for you" />
          <div className="grid gap-px overflow-hidden rounded-xl border border-line bg-line sm:grid-cols-3 mb-24">
            {services.map((s, i) => (
              <Reveal key={s.title} delay={i * 100} className="bg-bg">
                <div className="group h-full p-6 sm:p-8 transition-colors hover:bg-surface">
                  <div className="text-subtle transition-all duration-300 group-hover:text-accent group-hover:-translate-y-0.5">
                    {serviceIcons[i]}
                  </div>
                  <h3 className="font-semibold mt-6 mb-2">{s.title}</h3>
                  <p className="text-sm text-muted leading-relaxed">{s.body}</p>
                </div>
              </Reveal>
            ))}
          </div>

          <Reveal>
            <h3 className="text-lg font-semibold mb-6">How a project works</h3>
            <ol className="grid gap-8 sm:grid-cols-4 sm:gap-6">
              {process.map((step, i) => (
                <li key={step.title} className="step relative pt-5">
                  <span className="font-mono text-xs text-subtle">Step {i + 1}</span>
                  <p className="font-medium mt-1 mb-1">{step.title}</p>
                  <p className="text-sm text-muted leading-relaxed">{step.body}</p>
                </li>
              ))}
            </ol>
          </Reveal>
        </section>

        {/* About */}
        <section id="about" className="py-24 border-t border-line scroll-mt-20">
          <div className="grid gap-12 lg:grid-cols-12">
            <div className="lg:col-span-5">
              <SectionHeading label="About" title="Background" />
              <Reveal>
                <p className="text-muted leading-relaxed">
                  I&apos;ve spent most of my career at a fast-moving startup, owning features from
                  database to UI and keeping them running for a very large user base. I bring that
                  same ownership to client work: clear communication, realistic timelines, and code
                  that someone else can maintain later.
                </p>
              </Reveal>
            </div>
            <Reveal delay={120} className="lg:col-span-7 lg:pt-14">
              <ul className="divide-y divide-line border-y border-line mb-8">
                {experience.map((e) => (
                  <li
                    key={e.role + e.period}
                    className="flex flex-wrap items-baseline justify-between gap-x-4 py-3.5"
                  >
                    <span>
                      {e.role} <span className="text-subtle">· {e.org}</span>
                    </span>
                    <span className="text-sm text-subtle tabular-nums">{e.period}</span>
                  </li>
                ))}
              </ul>
              <p className="text-sm text-muted leading-relaxed">
                <span className="text-fg font-medium">Tools I use: </span>
                {stack}.
              </p>
            </Reveal>
          </div>
        </section>

        {/* Contact */}
        <section id="contact" className="scroll-mt-20 pb-24">
          <Reveal>
            <div className="relative overflow-hidden rounded-2xl bg-fg text-bg px-6 py-14 sm:px-14 sm:py-20">
              {/* Decorative rings */}
              <svg
                viewBox="0 0 400 400"
                fill="none"
                stroke="currentColor"
                className="pointer-events-none absolute -right-24 -top-24 size-[420px] opacity-[0.12] motion-safe:animate-[spin_80s_linear_infinite]"
                aria-hidden
              >
                {[60, 100, 140, 180].map((r) => (
                  <circle key={r} cx="200" cy="200" r={r} strokeDasharray={r === 140 ? "4 8" : undefined} />
                ))}
                <circle cx="340" cy="200" r="5" fill="currentColor" />
                <circle cx="200" cy="60" r="4" fill="currentColor" />
              </svg>

              <p className="relative font-mono text-xs uppercase tracking-[0.14em] opacity-60 mb-4">
                Contact
              </p>
              <h2 className="relative text-3xl sm:text-5xl font-semibold tracking-tight mb-5 text-balance">
                Have a project in mind?
              </h2>
              <p className="relative opacity-70 leading-relaxed max-w-xl mb-10">
                Tell me what you&apos;re building and when you need it. I usually reply within a day.
              </p>
              <div className="relative flex flex-wrap gap-3 mb-10">
                <a
                  href={`mailto:${contact.email}`}
                  className="inline-flex items-center gap-2.5 rounded-md bg-bg text-fg px-5 py-3 text-sm font-medium hover:opacity-90 transition-opacity"
                >
                  <MailIcon />
                  {contact.email}
                </a>
                <a
                  href={contact.whatsapp}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2.5 rounded-md border border-bg/25 px-5 py-3 text-sm font-medium hover:border-bg/60 transition-colors"
                >
                  <WhatsAppIcon />
                  Message on WhatsApp
                </a>
              </div>
              <div className="relative flex flex-wrap gap-x-6 gap-y-2 text-sm opacity-70">
                <a href={contact.linkedin} target="_blank" rel="noopener noreferrer" className="hover:underline">
                  LinkedIn <span className="nudge">↗</span>
                </a>
                <a href={contact.github} target="_blank" rel="noopener noreferrer" className="hover:underline">
                  GitHub <span className="nudge">↗</span>
                </a>
              </div>
            </div>
          </Reveal>
        </section>
      </main>

      <footer className="mx-auto max-w-5xl px-6 pb-12 flex flex-wrap justify-between gap-4 text-sm text-subtle">
        <span>© {new Date().getFullYear()} Kumar Reddi</span>
        <a href="#" className="hover:text-fg transition-colors">
          Back to top ↑
        </a>
      </footer>
    </>
  );
}
