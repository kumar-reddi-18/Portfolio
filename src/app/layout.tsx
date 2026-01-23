import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Kumar Reddi | Lead Software Developer & Founding Team at Swipe",
  description: "Lead Software Developer with 4+ years of experience. Founding developer at Swipe (YC S21). Specialist in building high-performance fullstack applications with React, Node.js, and AWS.",
  keywords: ["Kumar Reddi", "Software Developer", "Lead Developer", "Fullstack Developer", "Swipe YC", "React Developer", "AWS", "Next.js"],
  authors: [{ name: "Kumar Reddi" }],
  openGraph: {
    title: "Kumar Reddi | Lead Software Developer",
    description: "Lead Software Developer with 4+ years of experience. Founding developer at Swipe (YC S21).",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
