import { useEffect, useRef, useState } from "react";
import { gsap, useGSAP } from "@/lib/gsap";
import { wedding } from "@/config/wedding";
import { GoldDivider, SectionLabel, SectionTitle, ArchOrnament } from "@/components/shared/GoldDivider";

function diff(target: Date) {
  const ms = Math.max(0, target.getTime() - Date.now());
  return {
    d: Math.floor(ms / 86_400_000),
    h: Math.floor((ms / 3_600_000) % 24),
    m: Math.floor((ms / 60_000) % 60),
    s: Math.floor((ms / 1_000) % 60),
  };
}

const LABELS = ["Days", "Hours", "Minutes", "Seconds"] as const;

function Digit({ value, label }: { value: number; label: string }) {
  const boxRef = useRef<HTMLDivElement>(null);
  const prevRef = useRef(value);

  useEffect(() => {
    if (value === prevRef.current) return;
    prevRef.current = value;
    if (!boxRef.current) return;
    const reduced = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    if (reduced) return;
    gsap.fromTo(boxRef.current, { y: -18, opacity: 0 }, { y: 0, opacity: 1, duration: 0.45, ease: "power2.out" });
  }, [value]);

  return (
    <div className="flex flex-col items-center">
      <div
        className="flex h-20 w-full items-center justify-center rounded-xl sm:h-24"
        style={{
          background: "rgba(201,168,76,0.1)",
          border: "1px solid rgba(201,168,76,0.3)",
          boxShadow: "0 8px 24px rgba(0,0,0,0.2), inset 0 1px 0 rgba(201,168,76,0.15)",
        }}
      >
        <div ref={boxRef}>
          <span className="font-display text-4xl font-semibold tabular-nums text-gold-soft sm:text-5xl">
            {String(value).padStart(2, "0")}
          </span>
        </div>
      </div>
      <p className="mt-3 text-[0.6rem] uppercase tracking-[0.3em] text-gold/70">{label}</p>
    </div>
  );
}

export function CountdownSection() {
  const target = new Date(wedding.weddingDate);
  const [t, setT] = useState(() => diff(target));
  const rootRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const id = setInterval(() => setT(diff(target)), 1000);
    return () => clearInterval(id);
  }, [target]);

  useGSAP(() => {
    const reduced = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    if (reduced) { gsap.set(".cd-rev", { opacity: 1, y: 0 }); return; }

    gsap.fromTo(
      ".cd-rev",
      { opacity: 0, y: 40 },
      {
        opacity: 1, y: 0,
        stagger: 0.14,
        duration: 0.85,
        ease: "power2.out",
        scrollTrigger: { trigger: rootRef.current, start: "top 76%" },
      },
    );
  }, { scope: rootRef });

  return (
    <section ref={rootRef} id="countdown" className="pat-dark px-5 py-20 sm:px-8 sm:py-28">
      <div className="mx-auto max-w-2xl">
        <div className="cd-rev text-center">
          <SectionLabel>Mark Your Calendar</SectionLabel>
        </div>
        <div className="cd-rev mt-1 text-center">
          <SectionTitle light>Counting the Moments</SectionTitle>
        </div>
        <div className="cd-rev">
          <ArchOrnament light />
        </div>

        <div className="cd-rev grid grid-cols-4 gap-3 sm:gap-4">
          <Digit value={t.d} label={LABELS[0]} />
          <Digit value={t.h} label={LABELS[1]} />
          <Digit value={t.m} label={LABELS[2]} />
          <Digit value={t.s} label={LABELS[3]} />
        </div>

        <div className="cd-rev">
          <GoldDivider />
        </div>
        <p className="cd-rev text-center font-display text-base text-gold-soft">
          {wedding.weddingDateLabel} &nbsp;·&nbsp; {wedding.weddingTimeLabel}
        </p>
      </div>
    </section>
  );
}
