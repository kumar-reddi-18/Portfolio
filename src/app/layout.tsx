import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({ subsets: ["latin"], variable: "--font-geist-sans" });
const geistMono = Geist_Mono({ subsets: ["latin"], variable: "--font-geist-mono" });

const description =
  "Freelance full-stack developer. I build websites and web apps for startups and small businesses. Previously lead developer at Swipe (YC S21).";

export const metadata: Metadata = {
  title: "Kumar Reddi — Freelance Full-Stack Developer",
  description,
  authors: [{ name: "Kumar Reddi" }],
  openGraph: {
    title: "Kumar Reddi — Freelance Full-Stack Developer",
    description,
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${geistSans.variable} ${geistMono.variable}`}
      suppressHydrationWarning
    >
      <head>
        {/* Lets CSS hide reveal-on-scroll content only when JS is running */}
        {/* Also applies a saved theme choice before first paint, so there's no flash */}
        <script
          dangerouslySetInnerHTML={{
            __html:
              "document.documentElement.classList.add('js');try{var t=localStorage.getItem('theme');if(t==='light'||t==='dark')document.documentElement.dataset.theme=t}catch(e){}",
          }}
        />
      </head>
      <body>{children}</body>
    </html>
  );
}
