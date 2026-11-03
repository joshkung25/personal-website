import React from "react";

export default function Section({
  id,
  title,
  description,
  children,
}: {
  id: string;
  title: string;
  description?: string;
  children: React.ReactNode;
}) {
  return (
    <section id={id} aria-labelledby={`${id}-title`}>
      <div className="mb-8 flex flex-col gap-2 sm:flex-row sm:items-end sm:justify-between sm:gap-8">
        <h2
          id={`${id}-title`}
          className="font-display text-3xl font-semibold tracking-tight sm:text-4xl"
        >
          {title}
        </h2>
        {description && (
          <p className="max-w-md text-[15px] leading-relaxed text-muted-foreground sm:text-right">
            {description}
          </p>
        )}
      </div>
      {children}
    </section>
  );
}
