import type { Metadata } from "next";
import { Bricolage_Grotesque, Geist } from "next/font/google";
import React from "react";
import "./globals.css";
import SiteHeader from "@/components/portfolio/site-header";
import SiteFooter from "@/components/portfolio/site-footer";

const bricolage = Bricolage_Grotesque({
  variable: "--font-bricolage",
  subsets: ["latin"],
  weight: ["500", "600", "700"],
});

const geist = Geist({
  variable: "--font-geist",
  subsets: ["latin"],
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
      <body className={`${bricolage.variable} ${geist.variable} antialiased`}>
        <SiteHeader />
        <main className="mx-auto flex max-w-5xl flex-col gap-24 px-4 pb-24 sm:gap-28 sm:px-6">
          {children}
        </main>
        <SiteFooter />
      </body>
    </html>
  );
}
