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
    <html lang="en" className={`${geistSans.variable} ${geistMono.variable}`}>
      <body>{children}</body>
    </html>
  );
}
