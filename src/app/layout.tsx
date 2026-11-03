import type { Metadata } from "next";
import localFont from "next/font/local";
import { GeistSans } from "geist/font/sans";
import React from "react";
import "./globals.css";
import SiteHeader from "@/components/portfolio/site-header";
import SiteFooter from "@/components/portfolio/site-footer";

// fonts are self-hosted so the build never fetches from Google Fonts
const bricolage = localFont({
  src: "./fonts/BricolageGrotesque-Variable.woff2",
  variable: "--font-bricolage",
  weight: "200 800",
  display: "swap",
});

export const metadata: Metadata = {
  title: "Josh Kung — fullstack developer",
  description:
    "Fullstack developer working on AI platforms, retrieval, and data. CS and business at Northeastern.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${bricolage.variable} ${GeistSans.variable} antialiased`}>
        <SiteHeader />
        <main className="mx-auto flex max-w-5xl flex-col gap-24 px-4 pb-24 sm:gap-28 sm:px-6">
          {children}
        </main>
        <SiteFooter />
      </body>
    </html>
  );
}
