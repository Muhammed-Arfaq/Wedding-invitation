import type { ReactNode } from "react";

interface SectionRailProps {
  number: string;
  label: string;
  children: ReactNode;
  id?: string;
  dark?: boolean;
  className?: string;
}

export function SectionRail({
  number,
  label,
  children,
  id,
  dark = false,
  className = "",
}: SectionRailProps) {
  return (
    <section
      id={id}
      className={`section-rail relative ${dark ? "section-rail-dark" : "section-rail-light"} ${className}`}
    >
      <div className="section-rail-inner mx-auto max-w-6xl px-5 py-16 sm:px-8 sm:py-24 lg:px-12">
        <header className="section-rail-header mb-10 flex items-end gap-4 sm:mb-14">
          <span className="font-display text-5xl font-light leading-none text-gold sm:text-6xl">
            {number}
          </span>
          <div className="mb-1 h-px flex-1 bg-gold/30" aria-hidden />
          <span className="mb-1 text-[0.65rem] font-semibold tracking-[0.4em] uppercase text-gold">
            {label}
          </span>
        </header>
        {children}
      </div>
    </section>
  );
}
