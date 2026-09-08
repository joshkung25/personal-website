"use client";

import React, { useEffect, useRef } from "react";

/** Scroll reveal — enhancement only. Content is visible by default and a
 *  failsafe un-arms anything the observer never reached. */
export default function Reveal({
  children,
  style,
  className,
}: {
  children: React.ReactNode;
  style?: React.CSSProperties;
  className?: string;
}) {
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    if (el.getBoundingClientRect().top > window.innerHeight * 0.9) {
      el.dataset.rv = "armed";
    }

    const io = new IntersectionObserver(
      (entries) => {
        entries.forEach((e) => {
          if (e.isIntersecting) {
            (e.target as HTMLElement).dataset.rv = "in";
            io.unobserve(e.target);
          }
        });
      },
      { rootMargin: "0px 0px -8% 0px", threshold: 0.06 }
    );
    io.observe(el);

    const failsafe = window.setTimeout(() => {
      if (el.dataset.rv === "armed") el.dataset.rv = "in";
    }, 1200);

    return () => {
      io.disconnect();
      window.clearTimeout(failsafe);
    };
  }, []);

  return (
    <div ref={ref} data-rv="" className={className} style={style}>
      {children}
    </div>
  );
}
