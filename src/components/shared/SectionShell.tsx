import { motion, useReducedMotion } from "framer-motion";
import type { ReactNode } from "react";
import { AmbientLayer } from "./AmbientLayer";
import { IslamicPatternOverlay } from "./IslamicOrnaments";

interface SectionShellProps {
  id: string;
  children: ReactNode;
  className?: string;
  dark?: boolean;
  pattern?: boolean;
  ariaLabel: string;
}

export function SectionShell({
  id,
  children,
  className = "",
  dark = false,
  pattern = true,
  ariaLabel,
}: SectionShellProps) {
  const reduced = useReducedMotion();

  return (
    <motion.section
      id={id}
      aria-label={ariaLabel}
      initial={{ opacity: reduced ? 1 : 0.92 }}
      whileInView={{ opacity: 1 }}
      viewport={{ once: true, margin: "-5% 0px" }}
      transition={{ duration: 0.9, ease: [0.22, 1, 0.36, 1] }}
      className={`relative min-h-[100svh] overflow-hidden py-20 sm:py-28 ${dark ? "bg-[#0F5132] text-[#F8F5F0]" : "bg-[#F8F5F0] text-[#1a3c34]"} ${className}`}
    >
      {pattern && <IslamicPatternOverlay opacity={dark ? 0.04 : 0.06} />}
      <div className="parallax-deco pointer-events-none absolute -left-8 top-1/4 opacity-30" aria-hidden>
        <DecorativeRosette />
      </div>
      <div
        className="parallax-deco pointer-events-none absolute -right-6 bottom-1/4 opacity-25"
        style={{ animationDelay: "-6s" }}
        aria-hidden
      >
        <DecorativeRosette />
      </div>
      <div className="relative z-10 mx-auto max-w-5xl px-5 sm:px-8">{children}</div>
    </motion.section>
  );
}

export function SectionHeading({
  eyebrow,
  title,
  light = false,
}: {
  eyebrow: string;
  title: string;
  light?: boolean;
}) {
  return (
    <div className="text-center">
      <p
        className={`text-[0.65rem] tracking-[0.45em] uppercase sm:text-xs ${light ? "text-[#D4AF37]/90" : "text-[#D4AF37]"}`}
      >
        {eyebrow}
      </p>
      <h2
        className={`mt-3 font-display text-3xl font-bold sm:text-5xl ${light ? "text-white" : "text-[#1a3c34]"}`}
      >
        {title}
      </h2>
    </div>
  );
}

function DecorativeRosette() {
  return (
    <svg width="64" height="64" viewBox="0 0 64 64" fill="none" className="text-[#D4AF37]">
      <circle cx="32" cy="32" r="28" stroke="currentColor" strokeWidth="0.6" opacity="0.5" />
      {[0, 45, 90, 135].map((deg) => (
        <line
          key={deg}
          x1="32"
          y1="32"
          x2="32"
          y2="6"
          stroke="currentColor"
          strokeWidth="0.5"
          opacity="0.4"
          transform={`rotate(${deg} 32 32)`}
        />
      ))}
    </svg>
  );
}

export function FullBleedAmbient({ dense }: { dense?: boolean }) {
  return (
    <div className="pointer-events-none absolute inset-0 overflow-hidden">
      <AmbientLayer dense={dense} />
    </div>
  );
}
