import React from "react";
import { cn } from "@/lib/utils";

export default function Tag({ children, className }: { children: React.ReactNode; className?: string }) {
  return (
    <span
      className={cn(
        "inline-flex items-center rounded-full border bg-background px-3 py-1 text-[13px] text-foreground/80",
        className
      )}
    >
      {children}
    </span>
  );
}
