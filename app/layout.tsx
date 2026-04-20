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
  title: "Aqsa Mumtaz - SEO Executive & Content Writer",
  description: "SEO Executive and Content Writer with 3+ years of experience in creating high-quality, SEO-optimized content and implementing comprehensive SEO strategies.",
  keywords: "SEO, Content Writer, SEO Executive, Digital Marketing, Freelancer",
  openGraph: {
    title: "Aqsa Mumtaz - SEO Executive & Content Writer",
    description: "SEO Executive and Content Writer with 3+ years of experience",
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
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased scroll-smooth`}
    >
      <head>
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      </head>
      <body className="min-h-full flex flex-col bg-black text-white">{children}</body>
    </html>
  );
}
