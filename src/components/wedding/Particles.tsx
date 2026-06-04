import { useMemo } from "react";

/** Slow floating lantern-inspired golden particles. */
export function Particles({ count = 18 }: { count?: number }) {
  const items = useMemo(
    () =>
      Array.from({ length: count }).map((_, i) => ({
        id: i,
        left: Math.random() * 100,
        top: Math.random() * 100,
        size: 3 + Math.random() * 7,
        delay: Math.random() * 8,
        duration: 10 + Math.random() * 14,
        opacity: 0.4 + Math.random() * 0.5,
      })),
    [count],
  );
  return (
    <div className="pointer-events-none absolute inset-0 overflow-hidden" aria-hidden>
      {items.map((p) => (
        <span
          key={p.id}
          className="absolute rounded-full"
          style={{
            left: `${p.left}%`,
            top: `${p.top}%`,
            width: p.size,
            height: p.size,
            background:
              "radial-gradient(circle, oklch(0.92 0.13 88) 0%, oklch(0.78 0.13 85 / 0.6) 50%, transparent 80%)",
            boxShadow: "0 0 12px 2px oklch(0.85 0.13 85 / 0.55)",
            opacity: p.opacity,
            animation: `float-slow ${p.duration}s ease-in-out ${p.delay}s infinite`,
          }}
        />
      ))}
    </div>
  );
}

import patternUrl from "@/assets/pattern.png";

export function PatternBg({
  opacity = 0.06,
  size = 280,
  className = "",
}: { opacity?: number; size?: number; className?: string }) {
  return (
    <div
      aria-hidden
      className={`pointer-events-none absolute inset-0 ${className}`}
      style={{
        backgroundImage: `url(${patternUrl})`,
        backgroundSize: `${size}px`,
        backgroundRepeat: "repeat",
        opacity,
        animation: "drift 40s ease-in-out infinite",
      }}
    />
  );
}