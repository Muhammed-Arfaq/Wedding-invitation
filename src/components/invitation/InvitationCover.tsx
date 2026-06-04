import { useRef, useState } from "react";
import { gsap, useGSAP } from "@/lib/gsap";
import { wedding } from "@/config/wedding";
import { useMusic } from "@/context/MusicContext";
import { scrollToSection } from "@/components/shared/SmoothScroll";
import { Particles } from "@/components/shared/Particles";
import { GoldDivider } from "@/components/shared/GoldDivider";

export function InvitationCover() {
  const rootRef = useRef<HTMLElement>(null);
  const leftRef = useRef<HTMLDivElement>(null);
  const rightRef = useRef<HTMLDivElement>(null);
  const promptRef = useRef<HTMLDivElement>(null);
  const contentRef = useRef<HTMLDivElement>(null);
  const openedRef = useRef(false);
  const [opened, setOpened] = useState(false);
  const { startMusic } = useMusic();

  useGSAP(() => {
    const reduced = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    if (reduced) return;

    gsap.set(contentRef.current, { opacity: 0 });

    gsap.to(promptRef.current, {
      y: 10,
      duration: 2.2,
      repeat: -1,
      yoyo: true,
      ease: "sine.inOut",
    });

    gsap.to(leftRef.current, {
      scaleX: 1.008,
      duration: 4,
      repeat: -1,
      yoyo: true,
      ease: "sine.inOut",
      transformOrigin: "left center",
    });
    gsap.to(rightRef.current, {
      scaleX: 1.008,
      duration: 4,
      repeat: -1,
      yoyo: true,
      ease: "sine.inOut",
      transformOrigin: "right center",
    });
  }, { scope: rootRef });

  function openCurtain() {
    if (openedRef.current) return;
    openedRef.current = true;
    setOpened(true);
    startMusic();

    const reduced = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    if (reduced) {
      gsap.set([leftRef.current, rightRef.current], { display: "none" });
      gsap.set(contentRef.current, { opacity: 1 });
      gsap.set(".hero-line", { opacity: 1, y: 0 });
      return;
    }

    const tl = gsap.timeline({ defaults: { ease: "power3.inOut" } });
    tl.to(promptRef.current, { opacity: 0, duration: 0.3, ease: "power2.out" })
      .to(leftRef.current, { x: "-101%", duration: 2, ease: "power3.inOut" }, 0.2)
      .to(rightRef.current, { x: "101%", duration: 2, ease: "power3.inOut" }, 0.32)
      .to(contentRef.current, { opacity: 1, duration: 0.9, ease: "power2.out" }, 0.9)
      .fromTo(
        ".hero-line",
        { opacity: 0, y: 38 },
        { opacity: 1, y: 0, stagger: 0.13, duration: 0.85, ease: "power2.out" },
        1.1,
      );
  }

  return (
    <section ref={rootRef} id="cover" aria-label="Invitation cover" className="hero-scene">
      <div className="hero-bg absolute inset-0" aria-hidden />
      <Particles />

      <div
        ref={contentRef}
        className="absolute inset-0 flex flex-col items-center justify-center px-6 py-16 text-center"
        aria-hidden={!opened}
      >
        <div className="relative w-full max-w-sm sm:max-w-md">
          <div
            className="absolute inset-0 rounded-2xl"
            style={{
              border: "1px solid rgba(201,168,76,0.35)",
              boxShadow: "inset 0 0 60px rgba(201,168,76,0.05), 0 0 80px rgba(201,168,76,0.08)",
            }}
            aria-hidden
          />

          <div className="relative z-10 px-8 py-10 sm:px-12 sm:py-14">
            <p className="hero-line text-[0.65rem] tracking-[0.5em] uppercase text-gold-soft">
              {wedding.greeting}
            </p>

            <p className="hero-line mt-6 font-arabic text-xl leading-loose text-gold-soft sm:text-2xl">
              {wedding.quran.cover.arabic}
            </p>

            <GoldDivider className="hero-line" />

            <p className="hero-line text-[0.62rem] tracking-[0.38em] uppercase text-cream/70">
              {wedding.cover.subtitle}
            </p>

            <h1 className="hero-line mt-5 font-display text-3xl font-semibold tracking-wider text-cream sm:text-4xl">
              {wedding.groom.displayName}
            </h1>
            <p className="hero-line my-2 font-arabic text-2xl text-gold sm:text-3xl" aria-hidden>&amp;</p>
            <h1 className="hero-line font-display text-3xl font-semibold tracking-wider text-cream sm:text-4xl">
              {wedding.bride.displayName}
            </h1>

            <GoldDivider className="hero-line" />

            <p className="hero-line font-display text-base tracking-wide text-cream/90">
              {wedding.weddingDateLabel}
            </p>
            <p className="hero-line mt-1 text-xs text-cream/70">{wedding.weddingTimeLabel}</p>
            <p className="hero-line mt-1 text-xs text-cream/60">
              {wedding.venue.name}, {wedding.venue.location}
            </p>

            <button
              type="button"
              onClick={() => scrollToSection("welcome")}
              className="hero-line btn-gold mt-8"
            >
              View Invitation
            </button>
          </div>
        </div>
      </div>

      <div ref={leftRef} className="curtain-half left" aria-hidden>
        <div className="curtain-fabric" />
        <div className="curtain-edge-left" />
        <div className="curtain-tassel left" />
        {[14, 30, 50, 68, 84].map((pos) => (
          <div
            key={pos}
            className="curtain-fold absolute top-0 bottom-0 w-px bg-black/25"
            style={{ left: `${pos}%` }}
          />
        ))}
      </div>
      <div ref={rightRef} className="curtain-half right" aria-hidden>
        <div className="curtain-fabric" />
        <div className="curtain-edge-right" />
        <div className="curtain-tassel right" />
        {[16, 32, 50, 70, 86].map((pos) => (
          <div
            key={pos}
            className="curtain-fold absolute top-0 bottom-0 w-px bg-black/25"
            style={{ left: `${pos}%` }}
          />
        ))}
      </div>

      {!opened && (
        <>
          <button
            type="button"
            onClick={openCurtain}
            className="curtain-hit"
            aria-label="Open invitation curtain"
          />

          <div ref={promptRef} className="curtain-prompt" aria-hidden>
            <div className="flex flex-col items-center gap-3">
              <div
                className="flex h-14 w-14 items-center justify-center rounded-full"
                style={{
                  background: "rgba(201,168,76,0.2)",
                  border: "1px solid rgba(201,168,76,0.5)",
                  boxShadow: "0 0 24px rgba(201,168,76,0.2)",
                }}
              >
                <svg
                  viewBox="0 0 24 24"
                  className="h-6 w-6 text-gold"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="1.5"
                  aria-hidden
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M15.042 21.672L13.684 16.6m0 0l-2.51 2.225.569-9.47 5.227 7.917-3.286-.672zm-7.518-.267A8.25 8.25 0 1120.25 10.5M8.288 14.212A5.25 5.25 0 1117.25 10.5"
                  />
                </svg>
              </div>
              <p className="text-[0.6rem] tracking-[0.35em] uppercase text-gold-soft/80">
                Tap to open
              </p>
            </div>
          </div>
        </>
      )}
    </section>
  );
}
