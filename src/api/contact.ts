"use server";

import { EMAIL } from "@/content/portfolio";

export type ContactInput = {
  name: string;
  email: string;
  message: string;
  /** honeypot — real people never fill this in */
  company?: string;
};

export type ContactResult =
  | { status: "sent" }
  | { status: "unconfigured" }
  | { status: "invalid"; message: string }
  | { status: "error" };

const EMAIL_RE = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

/**
 * Delivers the contact form to EMAIL through Resend's HTTP API.
 * Needs RESEND_API_KEY; without it the client falls back to a prefilled mailto.
 * RESEND_FROM is optional — Resend's shared sender works until a domain is verified.
 */
export async function sendContactMessage(input: ContactInput): Promise<ContactResult> {
  const name = input.name?.trim() ?? "";
  const email = input.email?.trim() ?? "";
  const message = input.message?.trim() ?? "";

  if (input.company) return { status: "sent" };
  if (!name || name.length > 120) return { status: "invalid", message: "Add your name." };
  if (!EMAIL_RE.test(email)) return { status: "invalid", message: "Add an email I can reply to." };
  if (message.length < 2 || message.length > 5000)
    return { status: "invalid", message: "Write a message under 5,000 characters." };

  const key = process.env.RESEND_API_KEY;
  if (!key) return { status: "unconfigured" };

  try {
    const res = await fetch("https://api.resend.com/emails", {
      method: "POST",
      headers: { Authorization: `Bearer ${key}`, "Content-Type": "application/json" },
      body: JSON.stringify({
        from: process.env.RESEND_FROM ?? "Portfolio <onboarding@resend.dev>",
        to: [EMAIL],
        reply_to: email,
        subject: `Portfolio message from ${name}`,
        text: `${message}\n\n— ${name} <${email}>`,
      }),
    });
    return res.ok ? { status: "sent" } : { status: "error" };
  } catch {
    return { status: "error" };
  }
}
