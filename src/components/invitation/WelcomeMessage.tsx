import { useRef } from "react";
import { gsap, useGSAP, ScrollTrigger } from "@/lib/gsap";
import { wedding } from "@/config/wedding";
import { GoldDivider, SectionLabel, SectionTitle, ArchOrnament } from "@/components/shared/GoldDivider";

export function WelcomeMessage() {
  const rootRef = useRef<HTMLElement>(null);

  useGSAP(() => {
    const reduced = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    if (reduced) {
      gsap.set(".wm-rev", { opacity: 1, y: 0 });
      return;
    }

    gsap.fromTo(
      ".wm-rev",
      { opacity: 0, y: 48 },
      {
        opacity: 1, y: 0,
        stagger: 0.18,
        duration: 0.9,
        ease: "power2.out",
        scrollTrigger: {
          trigger: rootRef.current,
          start: "top 78%",
        },
      },
    );
  }, { scope: rootRef });

  return (
    <section ref={rootRef} id="welcome" className="pat-light px-5 py-20 sm:px-8 sm:py-28">
      <div className="mx-auto max-w-2xl text-center">
        <div className="wm-rev">
          <SectionLabel>{wedding.greeting}</SectionLabel>
        </div>
        <div className="wm-rev mt-1">
          <SectionTitle>A Warm Welcome</SectionTitle>
        </div>

        <div className="wm-rev">
          <ArchOrnament />
        </div>

        {/* Arabic Quranic verse */}
        <div className="wm-rev">
          <div
            className="card-light rounded-2xl px-8 py-8"
            style={{ background: "rgba(255,255,255,0.8)" }}
          >
            <p className="font-arabic text-xl leading-loose text-forest sm:text-2xl">
              {wedding.quran.welcome.arabic}
            </p>
          </div>
        </div>

        <div className="wm-rev">
          <GoldDivider />
        </div>

        <blockquote className="wm-rev">
          <p className="font-display text-lg italic leading-relaxed text-forest/90 sm:text-xl">
            &ldquo;{wedding.quran.welcome.verse}&rdquo;
          </p>
          <footer className="mt-4 text-[0.68rem] tracking-[0.38em] uppercase text-gold">
            — {wedding.quran.welcome.reference}
          </footer>
        </blockquote>

        <div className="wm-rev">
          <GoldDivider />
        </div>

        <p className="wm-rev text-base leading-relaxed text-forest/80 sm:text-lg">
          {wedding.invitation}
        </p>
      </div>
    </section>
  );
}
