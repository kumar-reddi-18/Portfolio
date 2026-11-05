// All site copy lives here. Edit this file to update the portfolio.

export const contact = {
  email: "kumarreddi18@gmail.com",
  whatsapp: "https://wa.me/919849696083",
  linkedin: "https://linkedin.com/in/kumar-reddi",
  github: "https://github.com/kumar-18",
};

export type Project = {
  title: string;
  kind: string;
  year?: string;
  summary: string;
  role: string;
  stack: string;
  link: { label: string; href: string };
  image?: string;
  /** Full-length screenshot; the frame scrolls through it on hover. */
  fullImage?: string;
};

// Featured projects (shown with a screenshot)
export const work: Project[] = [
  {
    title: "RioCabs",
    kind: "Client project",
    summary:
      "Booking website for a cab operator in Hyderabad. Customers pick a ride and send the booking straight to the operator's WhatsApp or call in one tap, so the business takes orders without an app or payment gateway.",
    role: "Design, development, deployment",
    stack: "Next.js, Tailwind CSS",
    link: { label: "riocabshyderabad.com", href: "https://riocabshyderabad.com" },
    image: "/work/riocabs.jpg",
  },
  {
    title: "AcctSnap",
    kind: "Client project",
    summary:
      "Website for a tax and compliance service that handles ITR, GST and PF/ESI filings over WhatsApp. Includes service pages, a tax calculator, a blog and learning section, and WhatsApp-first enquiry flows.",
    role: "Design, development, deployment",
    stack: "Next.js, Tailwind CSS",
    link: { label: "acctsnap.in", href: "https://acctsnap.in" },
    image: "/work/acctsnap.jpg",
    fullImage: "/work/acctsnap-full.jpg",
  },
  {
    title: "Swipe",
    kind: "Full-time, YC S21",
    year: "2022 – now",
    summary:
      "GST billing and invoicing software used by over 25 lakh Indian businesses. I joined early and grew into lead developer: shipped 100+ features across the React/Next.js frontend and Flask backend on AWS, reworked core backend services for speed, and reviewed code and mentored the team.",
    role: "Lead developer",
    stack: "React, Next.js, Python, Flask, AWS, Docker",
    link: { label: "getswipe.in", href: "https://getswipe.in" },
    image: "/work/swipe.jpg",
    fullImage: "/work/swipe-full.jpg",
  },
];

// Smaller projects (listed without a screenshot)
export const otherWork: Project[] = [
  {
    title: "Student Assessment System",
    kind: "Personal project",
    year: "2021",
    summary:
      "Web app for teachers to set assignments, track each student's progress, and share course material in one place.",
    role: "Solo build",
    stack: "Flask, MySQL",
    link: { label: "GitHub", href: "https://github.com/kumar-18/SAS" },
  },
];

export const services = [
  {
    title: "Business websites",
    body: "Fast, mobile-first sites that explain what you do and make it easy for customers to get in touch. Domain, hosting and basic SEO included.",
  },
  {
    title: "Web apps and MVPs",
    body: "Booking systems, dashboards, internal tools and SaaS products, built end to end: database, API, interface and deployment.",
  },
  {
    title: "Backend and integrations",
    body: "Payments, WhatsApp, third-party APIs and AWS setup, or performance work and new features on an existing codebase.",
  },
];

export const process = [
  { title: "Call", body: "A 30-minute chat about what you need, your timeline and budget." },
  { title: "Proposal", body: "A written scope with a fixed price and delivery date." },
  { title: "Build", body: "Weekly progress updates with a live preview link you can check any time." },
  { title: "Launch", body: "Deployment, handover, and 30 days of bug fixes at no extra cost." },
];

export const experience = [
  { org: "Self-employed", role: "Freelance Developer", period: "2024 – now" },
  { org: "Swipe (YC S21)", role: "Lead Software Developer", period: "2022 – now" },
  { org: "Swipe (YC S21)", role: "Software Developer", period: "2022" },
  { org: "Nexus", role: "Software Developer Intern", period: "2021 – 2022" },
];

export const stack =
  "React, Next.js, TypeScript, Tailwind CSS, Python, Flask, Node.js, MySQL, AWS, Docker";
