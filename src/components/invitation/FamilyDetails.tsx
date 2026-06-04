import { useRef } from "react";
import { gsap, useGSAP } from "@/lib/gsap";
import { wedding } from "@/config/wedding";
import { GoldDivider, SectionLabel, SectionTitle, ArchOrnament } from "@/components/shared/GoldDivider";

type Person = typeof wedding.groom | typeof wedding.bride;

function PersonCard({
  person,
  dir,
}: {
  person: Person;
  dir: "left" | "right";
}) {
  return (
    <article className={`fd-card-${dir}`}>
      <div className="card-dark p-7 sm:p-9">
        <p className="text-[0.65rem] tracking-[0.38em] uppercase text-gold">{person.role}</p>
        <h3 className="mt-2 font-display text-2xl font-semibold text-cream sm:text-3xl">
          {person.name}
        </h3>

        <div className="mt-6 space-y-5">
          <div>
            <p className="text-[0.62rem] uppercase tracking-[0.3em] text-gold/80">
              {person.role === "Groom" ? "Son of" : "Daughter of"}
            </p>
            <p className="mt-1 font-display text-base text-cream/90">
              {person.parents.father}
            </p>
            <p className="font-display text-base text-cream/90">&amp; {person.parents.mother}</p>
          </div>

          <div>
            <p className="text-[0.62rem] uppercase tracking-[0.3em] text-gold/80">Residence</p>
            <p className="mt-1 text-sm leading-relaxed text-cream/80">
              {person.residence.house}
              <br />
              {person.residence.location}
            </p>
          </div>

          <div>
            <p className="text-[0.62rem] uppercase tracking-[0.3em] text-gold/80">Contact</p>
            <a
              href={`tel:${person.contact.replace(/\s/g, "")}`}
              className="mt-1 block text-sm font-medium text-gold-soft transition-colors hover:text-gold"
            >
              {person.contact}
            </a>
          </div>

          <div>
            <p className="text-[0.62rem] uppercase tracking-[0.3em] text-gold/80">
              {person.role === "Groom" ? "Grandson of" : "Granddaughter of"}
            </p>
            <p className="mt-1 text-sm leading-relaxed text-cream/80">
              {person.grandparents.paternal}
            </p>
            <p className="text-sm leading-relaxed text-cream/80">
              &amp; {person.grandparents.maternal}
            </p>
          </div>
        </div>
      </div>
    </article>
  );
}

export function FamilyDetails() {
  const rootRef = useRef<HTMLElement>(null);

  useGSAP(() => {
    const reduced = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    const reset = (sel: string) => gsap.set(sel, { opacity: 1, x: 0 });
    if (reduced) { reset(".fd-head"); reset(".fd-card-left"); reset(".fd-card-right"); return; }

    /* heading */
    gsap.fromTo(
      ".fd-head",
      { opacity: 0, y: 40 },
      {
        opacity: 1, y: 0, stagger: 0.15, duration: 0.85, ease: "power2.out",
        scrollTrigger: { trigger: rootRef.current, start: "top 78%" },
      },
    );

    /* groom card from left */
    gsap.fromTo(
      ".fd-card-left",
      { opacity: 0, x: -60 },
      {
        opacity: 1, x: 0, duration: 1, ease: "power3.out",
        scrollTrigger: { trigger: rootRef.current, start: "top 72%" },
      },
    );

    /* bride card from right */
    gsap.fromTo(
      ".fd-card-right",
      { opacity: 0, x: 60 },
      {
        opacity: 1, x: 0, duration: 1, ease: "power3.out",
        scrollTrigger: { trigger: rootRef.current, start: "top 72%" },
      },
    );
  }, { scope: rootRef });

  return (
    <section ref={rootRef} id="families" className="pat-dark px-5 py-20 sm:px-8 sm:py-28">
      <div className="mx-auto max-w-4xl">
        <div className="fd-head text-center">
          <SectionLabel>Our Families</SectionLabel>
        </div>
        <div className="fd-head mt-1 text-center">
          <SectionTitle light>Groom &amp; Bride</SectionTitle>
        </div>
        <div className="fd-head">
          <ArchOrnament light />
        </div>

        <div className="grid gap-6 md:grid-cols-2">
          <PersonCard person={wedding.groom} dir="left" />
          <PersonCard person={wedding.bride} dir="right" />
        </div>
      </div>
    </section>
  );
}
