"use client";

import React, { useState } from "react";
import { Check, Copy } from "lucide-react";
import { EMAIL } from "@/content/portfolio";

export default function CopyEmail() {
  const [copied, setCopied] = useState(false);

  async function copy() {
    try {
      await navigator.clipboard.writeText(EMAIL);
      setCopied(true);
      window.setTimeout(() => setCopied(false), 1800);
    } catch {
      window.location.href = `mailto:${EMAIL}`;
    }
  }

  return (
    <button
      type="button"
      onClick={copy}
      className="flex h-12 items-center justify-between gap-3 rounded-full bg-white px-5 text-[15px] text-foreground transition-colors outline-none hover:bg-white/90 focus-visible:ring-[3px] focus-visible:ring-white/40"
    >
      <span className="truncate">{EMAIL}</span>
      <span className="flex shrink-0 items-center gap-1.5 text-sm text-muted-foreground" aria-live="polite">
        {copied ? <Check className="size-4 text-emerald-600" /> : <Copy className="size-4" />}
        {copied ? "Copied" : "Copy"}
      </span>
    </button>
  );
}
