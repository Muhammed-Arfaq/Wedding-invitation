import { motion, useReducedMotion } from "framer-motion";
import type { ReactNode } from "react";

interface RevealProps {
  children: ReactNode;
  delay?: number;
  y?: number;
  x?: number;
  className?: string;
}

export function Reveal({ children, delay = 0, y = 28, x = 0, className }: RevealProps) {
  const reduced = useReducedMotion();
  return (
    <motion.div
      className={className}
      initial={{ opacity: 0, y: reduced ? 0 : y, x: reduced ? 0 : x }}
      whileInView={{ opacity: 1, y: 0, x: 0 }}
      viewport={{ once: true, margin: "-80px" }}
      transition={{ duration: 1.1, delay, ease: [0.22, 1, 0.36, 1] }}
    >
      {children}
    </motion.div>
  );
}

export function OrnamentDivider() {
  return (
    <div className="divider-ornament my-8" aria-hidden>
      <span className="h-px w-16 bg-gradient-to-r from-transparent to-[var(--color-gold)]" />
      <svg width="28" height="28" viewBox="0 0 28 28" fill="none">
        <path
          d="M14 1l3 6 6 0-5 4 2 7-6-4-6 4 2-7-5-4 6 0z"
          stroke="currentColor"
          strokeWidth="1.1"
          strokeLinejoin="round"
        />
      </svg>
      <span className="h-px w-16 bg-gradient-to-l from-transparent to-[var(--color-gold)]" />
    </div>
  );
}