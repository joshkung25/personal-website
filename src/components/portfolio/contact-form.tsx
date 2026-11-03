"use client";

import React, { useState, useTransition } from "react";
import { CheckCircle2, Send } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { sendContactMessage } from "@/api/contact";
import { EMAIL } from "@/content/portfolio";

type Status =
  | { kind: "idle" }
  | { kind: "sent" }
  | { kind: "mailto" }
  | { kind: "error"; message: string };

function mailtoHref(name: string, message: string) {
  const subject = encodeURIComponent(`Hi Josh — from ${name}`);
  const body = encodeURIComponent(message);
  return `mailto:${EMAIL}?subject=${subject}&body=${body}`;
}

export default function ContactForm() {
  const [status, setStatus] = useState<Status>({ kind: "idle" });
  const [pending, startTransition] = useTransition();

  function onSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const form = e.currentTarget;
    const data = new FormData(form);
    const input = {
      name: String(data.get("name") ?? ""),
      email: String(data.get("email") ?? ""),
      message: String(data.get("message") ?? ""),
      company: String(data.get("company") ?? ""),
    };

    startTransition(async () => {
      const res = await sendContactMessage(input);
      if (res.status === "sent") {
        form.reset();
        setStatus({ kind: "sent" });
      } else if (res.status === "unconfigured") {
        // no mail service set up — hand the message to the visitor's email app instead
        window.location.href = mailtoHref(input.name, input.message);
        setStatus({ kind: "mailto" });
      } else if (res.status === "invalid") {
        setStatus({ kind: "error", message: res.message });
      } else {
        setStatus({
          kind: "error",
          message: `The message didn't go through. Try again, or email ${EMAIL} directly.`,
        });
      }
    });
  }

  if (status.kind === "sent") {
    return (
      <div className="flex h-full min-h-72 flex-col items-center justify-center text-center">
        <CheckCircle2 className="size-10 text-emerald-600" />
        <p className="mt-4 font-display text-xl font-semibold tracking-tight">Message sent</p>
        <p className="mt-1.5 max-w-xs text-[15px] text-muted-foreground">
          Thanks for reaching out. I&apos;ll reply to the email you gave.
        </p>
        <Button
          variant="outline"
          className="mt-6 rounded-full"
          onClick={() => setStatus({ kind: "idle" })}
        >
          Send another message
        </Button>
      </div>
    );
  }

  const field = "h-11 rounded-xl bg-background px-4 text-[15px] shadow-none";

  return (
    <form onSubmit={onSubmit} className="flex flex-col gap-5">
      <div className="grid gap-5 sm:grid-cols-2">
        <div className="flex flex-col gap-2">
          <Label htmlFor="cf-name">Name</Label>
          <Input id="cf-name" name="name" required maxLength={120} autoComplete="name" className={field} />
        </div>
        <div className="flex flex-col gap-2">
          <Label htmlFor="cf-email">Email</Label>
          <Input
            id="cf-email"
            name="email"
            type="email"
            required
            autoComplete="email"
            className={field}
          />
        </div>
      </div>
      <div className="flex flex-col gap-2">
        <Label htmlFor="cf-message">Message</Label>
        <Textarea
          id="cf-message"
          name="message"
          required
          maxLength={5000}
          rows={6}
          placeholder="What are you working on?"
          className="min-h-36 rounded-xl bg-background px-4 py-3 text-[15px] shadow-none"
        />
      </div>
      {/* honeypot, hidden from people and screen readers */}
      <input
        type="text"
        name="company"
        tabIndex={-1}
        autoComplete="off"
        aria-hidden="true"
        className="absolute -left-[9999px] h-0 w-0 opacity-0"
      />

      <div className="flex flex-col-reverse gap-3 sm:flex-row sm:items-center sm:justify-between">
        <p role="status" className="text-sm text-muted-foreground">
          {status.kind === "error" && <span className="text-destructive">{status.message}</span>}
          {status.kind === "mailto" && "Your email app should open with the message filled in."}
        </p>
        <Button type="submit" disabled={pending} className="h-11 shrink-0 rounded-full px-6 text-[15px]">
          <Send />
          {pending ? "Sending…" : "Send message"}
        </Button>
      </div>
    </form>
  );
}
