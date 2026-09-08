import type { Metadata } from "next";
import { Archivo, Geist_Mono } from "next/font/google";
import React from "react";
import "./globals.css";
import "./portfolio.css";
import SiteHeader from "@/components/portfolio/site-header";
import SiteFooter from "@/components/portfolio/site-footer";
import { BACKGROUND } from "@/content/portfolio";

// Archivo is what gives the page its Modernist voice — without it everything
// falls back to system sans.
const archivo = Archivo({
  variable: "--font-archivo",
  subsets: ["latin"],
  weight: ["400", "600", "800"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Josh Kung — fullstack dev",
  description:
    "Fullstack dev drawn to the problems under the interface — retrieval, data, the plumbing that has to hold.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="dark" suppressHydrationWarning>
      <body
        className={`${archivo.variable} ${geistMono.variable} antialiased`}
        suppressHydrationWarning
      >
        <div className="pf">
          <div className={`pf-bg pf-bg--${BACKGROUND}`} />
          <SiteHeader />
          <main>{children}</main>
          <SiteFooter />
        </div>
      </body>
    </html>
  );
}
