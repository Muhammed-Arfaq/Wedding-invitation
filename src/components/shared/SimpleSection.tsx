import type { ReactNode } from "react";

export function SimpleSection({
  id,
  children,
  className = "",
  dark = false,
  wide = false,
}: {
  id?: string;
  children: ReactNode;
  className?: string;
  dark?: boolean;
  wide?: boolean;
}) {
  return (
    <section
      id={id}
      className={`px-5 py-16 sm:px-8 sm:py-20 ${dark ? "bg-emerald text-white" : "bg-cream text-emerald-dark"} ${className}`}
    >
      <div className={`mx-auto ${wide ? "max-w-4xl" : "max-w-3xl"}`}>{children}</div>
    </section>
  );
}

export function Divider() {
  return (
    <div className="my-8 flex items-center justify-center gap-3" aria-hidden>
      <span className="h-px w-12 bg-gold/60 sm:w-20" />
      <span className="text-gold">✦</span>
      <span className="h-px w-12 bg-gold/60 sm:w-20" />
    </div>
  );
}

export function Label({ children }: { children: ReactNode }) {
  return (
    <p className="mb-3 text-center text-xs font-medium tracking-[0.35em] uppercase text-gold">
      {children}
    </p>
  );
}

export function Title({ children }: { children: ReactNode }) {
  return (
    <h2 className="text-center font-display text-3xl font-semibold sm:text-4xl">{children}</h2>
  );
}
