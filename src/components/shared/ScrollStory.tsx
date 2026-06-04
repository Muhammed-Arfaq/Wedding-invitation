import { useRef, type ReactNode } from "react";
import { gsap, ScrollTrigger, useGSAP } from "@/lib/gsap";

interface ScrollStoryProps {
  id?: string;
  children: ReactNode;
  className?: string;
  /** Elements that parallax at different scroll speeds */
  parallaxLayers?: { selector: string; speed: number }[];
  /** Pin section while inner content scrubs */
  pin?: boolean;
  pinDuration?: string;
}

/**
 * ScrollTrigger scrollytelling wrapper — choreographs children as user scrolls.
 */
export function ScrollStory({
  id,
  children,
  className = "",
  parallaxLayers = [],
  pin = false,
  pinDuration = "+=60%",
}: ScrollStoryProps) {
  const rootRef = useRef<HTMLElement>(null);

  useGSAP(
    () => {
      const reduced = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
      if (reduced || !rootRef.current) return;

      const trigger = rootRef.current;

      gsap.from(".story-fade", {
        opacity: 0,
        y: 48,
        stagger: 0.12,
        duration: 1,
        ease: "power2.out",
        scrollTrigger: {
          trigger,
          start: "top 78%",
          end: "top 35%",
          toggleActions: "play none none reverse",
        },
      });

      gsap.from(".story-line", {
        scaleX: 0,
        duration: 1.2,
        ease: "power2.inOut",
        scrollTrigger: {
          trigger,
          start: "top 70%",
          toggleActions: "play none none reverse",
        },
      });

      parallaxLayers.forEach(({ selector, speed }) => {
        gsap.to(selector, {
          y: () => speed * 80,
          ease: "none",
          scrollTrigger: {
            trigger,
            start: "top bottom",
            end: "bottom top",
            scrub: 1.2,
          },
        });
      });

      if (pin) {
        ScrollTrigger.create({
          trigger,
          start: "top top",
          end: pinDuration,
          pin: true,
          pinSpacing: true,
          anticipatePin: 1,
        });
      }

      gsap.to(".story-glow", {
        opacity: 0.6,
        scale: 1.15,
        ease: "none",
        scrollTrigger: {
          trigger,
          start: "top bottom",
          end: "center center",
          scrub: 1.5,
        },
      });
    },
    { scope: rootRef },
  );

  return (
    <section ref={rootRef} id={id} className={`story-section relative ${className}`}>
      <div
        className="story-glow pointer-events-none absolute left-1/2 top-0 h-64 w-64 -translate-x-1/2 rounded-full bg-[#D4AF37]/10 blur-3xl opacity-30"
        aria-hidden
      />
      {children}
    </section>
  );
}
