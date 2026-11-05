import Image from "next/image";
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

function SectionHeading({ label, title }: { label: string; title: string }) {
  return (
    <div className="mb-12">
      <p className="font-mono text-xs uppercase tracking-[0.14em] text-subtle mb-3">{label}</p>
      <h2 className="text-2xl sm:text-3xl font-semibold tracking-tight">{title}</h2>
    </div>
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

function BrowserFrame({ project }: { project: Project }) {
  return (
    <a
      href={project.link.href}
      target="_blank"
      rel="noopener noreferrer"
      aria-label={`Visit ${project.title}`}
      className="group block overflow-hidden rounded-xl border border-line bg-surface shadow-[0_1px_2px_rgba(0,0,0,0.04),0_8px_24px_-12px_rgba(0,0,0,0.12)]"
    >
      <div className="flex items-center gap-3 border-b border-line px-4 py-2.5">
        <div className="flex gap-1.5" aria-hidden>
          <span className="size-2.5 rounded-full bg-line" />
          <span className="size-2.5 rounded-full bg-line" />
          <span className="size-2.5 rounded-full bg-line" />
        </div>
        <span className="flex-1 truncate text-center font-mono text-xs text-subtle">
          {project.link.label}
        </span>
        <span className="text-xs text-subtle group-hover:text-fg transition-colors">↗</span>
      </div>
      <div className="relative aspect-[16/10] overflow-hidden">
        <Image
          src={project.image!}
          alt={`${project.title} homepage`}
          fill
          sizes="(min-width: 1024px) 960px, 100vw"
          className="object-cover object-top transition-transform duration-500 ease-out group-hover:scale-[1.02]"
        />
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
        <ExtLink href={project.link.href}>{project.link.label} ↗</ExtLink>
      </dd>
    </dl>
  );
}

export default function Home() {
  return (
    <>
      <header className="sticky top-0 z-10 border-b border-line/70 bg-bg/80 backdrop-blur-md">
        <div className="mx-auto flex max-w-5xl items-center justify-between px-6 py-4">
          <a href="#" className="font-medium tracking-tight">
            Kumar Reddi
          </a>
          <nav className="flex items-center gap-6 text-sm text-muted">
            {nav.map((item) => (
              <a
                key={item.href}
                href={item.href}
                className="hidden sm:inline hover:text-fg transition-colors"
              >
                {item.label}
              </a>
            ))}
            <a
              href="#contact"
              className="rounded-md bg-fg px-3.5 py-1.5 font-medium text-bg hover:opacity-85 transition-opacity"
            >
              Contact
            </a>
          </nav>
        </div>
      </header>

      <main className="mx-auto max-w-5xl px-6">
        {/* Intro */}
        <section className="intro pt-20 pb-24 sm:pt-28 sm:pb-32">
          <p className="flex items-center gap-2 text-sm text-muted mb-8">
            <span className="relative flex size-2" aria-hidden>
              <span className="absolute inset-0 rounded-full bg-accent opacity-40 motion-safe:animate-ping" />
              <span className="relative size-2 rounded-full bg-accent" />
            </span>
            Available for new projects
          </p>
          <h1 className="max-w-3xl text-4xl sm:text-6xl font-semibold tracking-tight leading-[1.05] mb-8 text-balance">
            I build websites and web apps for startups and small businesses.
          </h1>
          <p className="max-w-2xl text-lg text-muted leading-relaxed mb-10">
            I&apos;m Kumar, a full-stack developer based in India. I spent four years as an early
            engineer and then lead developer at Swipe (YC S21). Now I work directly with founders and
            business owners, from the first call to launch.
          </p>
          <div className="flex flex-wrap gap-3">
            <a
              href={`mailto:${contact.email}`}
              className="inline-flex items-center rounded-md bg-fg text-bg px-5 py-3 text-sm font-medium hover:opacity-85 transition-opacity"
            >
              Start a project
            </a>
            <a
              href="#work"
              className="inline-flex items-center rounded-md border border-line px-5 py-3 text-sm font-medium hover:border-fg transition-colors"
            >
              See my work
            </a>
          </div>

          <dl className="mt-20 grid max-w-3xl grid-cols-1 gap-6 border-t border-line pt-8 sm:grid-cols-3">
            {[
              ["4+ years", "building production software"],
              ["25 lakh+", "businesses use the product I helped build at Swipe"],
              ["100+", "features shipped to production"],
            ].map(([value, label]) => (
              <div key={value}>
                <dt className="text-2xl font-semibold tracking-tight">{value}</dt>
                <dd className="mt-1 text-sm text-muted leading-snug">{label}</dd>
              </div>
            ))}
          </dl>
        </section>

        {/* Work */}
        <section id="work" className="py-24 border-t border-line scroll-mt-16">
          <SectionHeading label="Selected work" title="Recent projects" />
          <div className="space-y-24">
            {work.map((p, i) => (
              <article key={p.title} className="grid gap-8 lg:grid-cols-12 lg:gap-12">
                <div className={`lg:col-span-7 ${i % 2 ? "lg:order-2" : ""}`}>
                  <BrowserFrame project={p} />
                </div>
                <div className="lg:col-span-5 flex flex-col justify-center">
                  <p className="text-sm text-subtle mb-2">
                    {p.kind} · {p.year}
                  </p>
                  <h3 className="text-2xl font-semibold tracking-tight mb-4">{p.title}</h3>
                  <p className="text-muted leading-relaxed mb-6">{p.summary}</p>
                  <ProjectMeta project={p} />
                </div>
              </article>
            ))}
          </div>

          <div className="mt-24">
            <p className="font-mono text-xs uppercase tracking-[0.14em] text-subtle mb-4">
              Also built
            </p>
            <ul className="divide-y divide-line border-y border-line">
              {otherWork.map((p) => (
                <li key={p.title} className="grid gap-2 py-5 sm:grid-cols-12 sm:gap-6">
                  <div className="sm:col-span-4">
                    <p className="font-medium">{p.title}</p>
                    <p className="text-sm text-subtle">
                      {p.kind} · {p.year}
                    </p>
                  </div>
                  <p className="sm:col-span-6 text-sm text-muted leading-relaxed">
                    {p.summary} <span className="text-subtle">{p.stack}.</span>
                  </p>
                  <div className="sm:col-span-2 sm:text-right text-sm">
                    <ExtLink href={p.link.href}>{p.link.label} ↗</ExtLink>
                  </div>
                </li>
              ))}
            </ul>
          </div>
        </section>

        {/* Services */}
        <section id="services" className="py-24 border-t border-line scroll-mt-16">
          <SectionHeading label="Services" title="What I can build for you" />
          <div className="grid gap-px overflow-hidden rounded-xl border border-line bg-line sm:grid-cols-3 mb-20">
            {services.map((s, i) => (
              <div key={s.title} className="bg-bg p-6 sm:p-8">
                <span className="font-mono text-xs text-subtle">0{i + 1}</span>
                <h3 className="font-semibold mt-3 mb-2">{s.title}</h3>
                <p className="text-sm text-muted leading-relaxed">{s.body}</p>
              </div>
            ))}
          </div>

          <h3 className="text-lg font-semibold mb-6">How a project works</h3>
          <ol className="grid gap-8 sm:grid-cols-4 sm:gap-6">
            {process.map((step, i) => (
              <li key={step.title} className="border-t-2 border-fg pt-4">
                <span className="font-mono text-xs text-subtle">Step {i + 1}</span>
                <p className="font-medium mt-1 mb-1">{step.title}</p>
                <p className="text-sm text-muted leading-relaxed">{step.body}</p>
              </li>
            ))}
          </ol>
        </section>

        {/* About */}
        <section id="about" className="py-24 border-t border-line scroll-mt-16">
          <div className="grid gap-12 lg:grid-cols-12">
            <div className="lg:col-span-5">
              <SectionHeading label="About" title="Background" />
              <p className="text-muted leading-relaxed mb-4">
                I&apos;ve spent most of my career at a fast-moving startup, owning features from
                database to UI and keeping them running for a very large user base. I bring that same
                ownership to client work: clear communication, realistic timelines, and code that
                someone else can maintain later.
              </p>
            </div>
            <div className="lg:col-span-7 lg:pt-14">
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
            </div>
          </div>
        </section>

        {/* Contact */}
        <section id="contact" className="scroll-mt-16 pb-24">
          <div className="rounded-2xl bg-fg text-bg px-6 py-14 sm:px-14 sm:py-20">
            <p className="font-mono text-xs uppercase tracking-[0.14em] opacity-60 mb-4">Contact</p>
            <h2 className="text-3xl sm:text-5xl font-semibold tracking-tight mb-5 text-balance">
              Have a project in mind?
            </h2>
            <p className="opacity-70 leading-relaxed max-w-xl mb-10">
              Tell me what you&apos;re building and when you need it. I usually reply within a day.
            </p>
            <div className="flex flex-wrap gap-3 mb-10">
              <a
                href={`mailto:${contact.email}`}
                className="inline-flex items-center rounded-md bg-bg text-fg px-5 py-3 text-sm font-medium hover:opacity-90 transition-opacity"
              >
                {contact.email}
              </a>
              <a
                href={contact.whatsapp}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center rounded-md border border-bg/25 px-5 py-3 text-sm font-medium hover:border-bg/60 transition-colors"
              >
                Message on WhatsApp
              </a>
            </div>
            <div className="flex flex-wrap gap-x-6 gap-y-2 text-sm opacity-70">
              <a href={contact.linkedin} target="_blank" rel="noopener noreferrer" className="hover:underline">
                LinkedIn ↗
              </a>
              <a href={contact.github} target="_blank" rel="noopener noreferrer" className="hover:underline">
                GitHub ↗
              </a>
            </div>
          </div>
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
