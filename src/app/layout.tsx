import type { Metadata } from "next";
import { Inter, Space_Grotesk } from "next/font/google";
import { Analytics } from "@vercel/analytics/next";
import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

const spaceGrotesk = Space_Grotesk({
  subsets: ["latin"],
  variable: "--font-space-grotesk",
  display: "swap",
});

export const metadata: Metadata = {
  title: "Shibin | Full Stack Web Developer",
  description:
    "Portfolio of Shibin — a passionate Full Stack Web Developer specializing in React, Next.js, Node.js, and modern web technologies. Building scalable, user-friendly web applications.",
  keywords: [
    "Shibin",
    "Full Stack Developer",
    "Web Developer",
    "React",
    "Next.js",
    "Node.js",
    "TypeScript",
    "Portfolio",
    "Kanyakumari",
    "Tamil Nadu",
  ],
  authors: [{ name: "Shibin" }],
  creator: "Shibin",
  openGraph: {
    type: "website",
    locale: "en_IN",
    url: "https://shibin-portfolio.vercel.app",
    title: "Shibin | Full Stack Web Developer",
    description:
      "I build modern, scalable, and user-friendly web applications.",
    siteName: "Shibin Portfolio",
  },
  twitter: {
    card: "summary_large_image",
    title: "Shibin | Full Stack Web Developer",
    description:
      "I build modern, scalable, and user-friendly web applications.",
  },
  robots: {
    index: true,
    follow: true,
  },
  icons: {
    icon: "/favicon.svg",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={`${inter.variable} ${spaceGrotesk.variable} font-sans`}>
        {children}
        <Analytics />
      </body>
    </html>
  );
}
