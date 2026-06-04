import { useRef } from "react";
import { gsap, ScrollTrigger, useGSAP } from "@/lib/gsap";

/** Global scroll-synced ambient layer — orbs respond to page scroll position. */
export function CollaborativeAmbient({ variant = "hero" }: { variant?: "hero" | "light" | "dark" }) {
  const rootRef = useRef<HTMLDivElement>(null);

  useGSAP(
    () => {
      const reduced = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
      if (reduced) return;

      const master = gsap.timeline({ repeat: -1 });
      master
        .to(".ca-orb-a", { x: 50, y: -35, duration: 14, ease: "sine.inOut" }, 0)
        .to(".ca-orb-b", { x: -45, y: 30, duration: 16, ease: "sine.inOut" }, 0)
        .to(".ca-orb-c", { x: 25, y: 45, duration: 18, ease: "sine.inOut" }, 0);

      gsap.to(".ca-spark", {
        opacity: 0.85,
        scale: 1.4,
        duration: 3,
        stagger: { each: 0.25, repeat: -1, yoyo: true },
        ease: "sine.inOut",
      });

      gsap.to(".ca-sweep", {
        x: "200%",
        duration: 10,
        repeat: -1,
        ease: "none",
      });

      if (rootRef.current) {
        gsap.to(".ca-orb-a", {
          y: -120,
          ease: "none",
          scrollTrigger: {
            trigger: document.body,
            start: "top top",
            end: "bottom bottom",
            scrub: 2,
          },
        });
        gsap.to(".ca-orb-b", {
          y: 80,
          ease: "none",
          scrollTrigger: {
            trigger: document.body,
            start: "top top",
            end: "bottom bottom",
            scrub: 1.5,
          },
        });
      }
    },
    { scope: rootRef },
  );

  const bg =
    variant === "hero"
      ? "from-[#dce8da] via-[#e8efe6] to-[#d4e4d0]"
      : variant === "dark"
        ? "from-[#0a3d28] via-[#0F5132] to-[#0c4429]"
        : "from-[#eef3ec] via-[#F8F5F0] to-[#e8efe6]";

  return (
    <div ref={rootRef} className="pointer-events-none absolute inset-0 overflow-hidden" aria-hidden>
      <div className={`absolute inset-0 bg-gradient-to-br ${bg}`} />
      <div className="ca-orb-a absolute left-[12%] top-[18%] h-52 w-52 rounded-full bg-[#D4AF37]/12 blur-3xl" />
      <div className="ca-orb-b absolute right-[8%] top-[30%] h-60 w-60 rounded-full bg-[#0F5132]/10 blur-3xl" />
      <div className="ca-orb-c absolute bottom-[12%] left-[38%] h-44 w-44 rounded-full bg-[#157a4d]/15 blur-3xl" />
      <div className="ca-sweep absolute inset-y-0 -left-full w-1/3 bg-gradient-to-r from-transparent via-[#D4AF37]/6 to-transparent" />
      {[...Array(16)].map((_, i) => (
        <span
          key={i}
          className="ca-spark absolute rounded-full bg-[#D4AF37]"
          style={{
            left: `${6 + ((i * 11) % 88)}%`,
            top: `${10 + ((i * 17) % 80)}%`,
            width: 2 + (i % 4),
            height: 2 + (i % 4),
            opacity: 0.45,
          }}
        />
      ))}
    </div>
  );
}
