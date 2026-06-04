import { useRef } from "react";
import { gsap, ScrollTrigger, useGSAP } from "@/lib/gsap";

/** Global scrollytelling — animates .story-rise elements across all sections. */
export function ScrollOrchestrator() {
  const ref = useRef<HTMLDivElement>(null);

  useGSAP(
    () => {
      const reduced = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
      if (reduced) return;

      gsap.utils.toArray<HTMLElement>(".story-rise").forEach((el) => {
        gsap.from(el, {
          opacity: 0,
          y: 48,
          duration: 1,
          ease: "power2.out",
          scrollTrigger: {
            trigger: el,
            start: "top 88%",
            toggleActions: "play none none reverse",
          },
        });
      });

      gsap.utils.toArray<HTMLElement>(".hero-panel-dark, .hero-panel-light").forEach((el) => {
        gsap.from(el, {
          opacity: 0,
          duration: 1.2,
          ease: "power2.out",
        });
      });
    },
    { scope: ref },
  );

  return <div ref={ref} className="hidden" aria-hidden />;
}
