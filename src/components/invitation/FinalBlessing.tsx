import { useRef } from "react";
import { gsap, useGSAP } from "@/lib/gsap";
import { wedding } from "@/config/wedding";
import { GoldDivider, ArchOrnament } from "@/components/shared/GoldDivider";
import { Particles } from "@/components/shared/Particles";

export function FinalBlessing() {
  const rootRef = useRef<HTMLElement>(null);

  useGSAP(() => {
    const reduced = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    if (reduced) { gsap.set(".fb-rev", { opacity: 1, y: 0 }); return; }

    gsap.fromTo(
      ".fb-rev",
      { opacity: 0, y: 44 },
      {
        opacity: 1, y: 0,
        stagger: 0.2,
        duration: 1,
        ease: "power2.out",
        scrollTrigger: { trigger: rootRef.current, start: "top 72%" },
      },
    );
  }, { scope: rootRef });

  return (
    <section
      ref={rootRef}
      id="finale"
      aria-label="Closing blessing"
      className="pat-dark relative overflow-hidden px-6 py-24 text-center sm:py-32"
    >
      {/* Ambient gold glow */}
      <div
        className="pointer-events-none absolute inset-0"
        aria-hidden
        style={{
          background: "radial-gradient(ellipse 70% 50% at 50% 80%, rgba(201,168,76,0.12) 0%, transparent 60%)",
        }}
      />

      <Particles />

      <div className="relative z-10 mx-auto max-w-xl">
        <div className="fb-rev">
          <ArchOrnament light />
        </div>

        <p className="fb-rev font-arabic text-2xl leading-relaxed text-gold-soft sm:text-3xl">
          {wedding.blessing.arabic}
        </p>

        <div className="fb-rev">
          <GoldDivider />
        </div>

        <p className="fb-rev font-display text-xl text-cream/90 sm:text-2xl">{wedding.thankYou}</p>
        <p className="fb-rev mx-auto mt-4 max-w-sm text-sm leading-relaxed text-cream/70">
          {wedding.closingNote}
        </p>

        <div className="fb-rev">
          <GoldDivider />
        </div>

        <p className="fb-rev text-[0.65rem] uppercase tracking-[0.4em] text-gold">
          With love &amp; duas
        </p>
        <p className="fb-rev mt-4 font-display text-2xl font-semibold text-cream sm:text-3xl">
          {wedding.groom.name}
        </p>
        <p className="fb-rev my-2 font-arabic text-xl text-gold" aria-hidden>&amp;</p>
        <p className="fb-rev font-display text-2xl font-semibold text-cream sm:text-3xl">
          {wedding.bride.name}
        </p>
      </div>
    </section>
  );
}
