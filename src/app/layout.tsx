import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

export const metadata: Metadata = {
  title: "Kumar Reddi | Fullstack Developer & Freelancer",
  description: "Lead Software Developer & Freelancer with 4+ years of experience. Founding developer at Swipe (YC S21). Specialist in building high-performance fullstack web applications. Available for freelance projects.",
  keywords: ["Kumar Reddi", "Freelance Developer", "Fullstack Developer", "Hire Developer", "Swipe YC", "React Developer", "Next.js Developer", "AWS", "Web Development India"],
  authors: [{ name: "Kumar Reddi" }],
  openGraph: {
    title: "Kumar Reddi | Fullstack Developer & Freelancer",
    description: "Lead Software Developer & Freelancer. Building high-performance web apps for startups and businesses.",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={inter.variable}>
      <body className="antialiased">
        {children}
      </body>
    </html>
  );
}
