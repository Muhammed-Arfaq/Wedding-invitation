import { j as jsxRuntimeExports, r as reactExports } from "../_libs/react.mjs";
import { w as wedding } from "./router-owwXZ8y2.mjs";
import { h as howlerExports } from "../_libs/howler.mjs";
import { L as Lenis } from "../_libs/lenis.mjs";
import { S as ScrollTrigger, g as gsapWithCSS } from "../_libs/gsap.mjs";
import { u as useGSAP } from "../_libs/gsap__react.mjs";
import { H as HiOutlineCalendarDays, a as HiOutlineClock, b as HiOutlineBuildingOffice2, c as HiOutlineMapPin, d as HiOutlineSpeakerXMark, e as HiOutlineSpeakerWave } from "../_libs/react-icons.mjs";
import "../_libs/tanstack__query-core.mjs";
import "../_libs/tanstack__react-query.mjs";
import "../_libs/tanstack__react-router.mjs";
import "../_libs/tanstack__router-core.mjs";
import "../_libs/tanstack__history.mjs";
import "../_libs/cookie-es.mjs";
import "../_libs/seroval.mjs";
import "../_libs/seroval-plugins.mjs";
import "node:stream/web";
import "node:stream";
import "../_libs/react-dom.mjs";
import "util";
import "crypto";
import "async_hooks";
import "stream";
import "../_libs/isbot.mjs";
const MusicContext = reactExports.createContext(null);
function MusicProvider({ children }) {
  const howlRef = reactExports.useRef(null);
  const [isPlaying, setIsPlaying] = reactExports.useState(false);
  const [isMuted, setIsMuted] = reactExports.useState(false);
  const [hasStarted, setHasStarted] = reactExports.useState(false);
  reactExports.useEffect(() => {
    const howl = new howlerExports.Howl({
      src: [wedding.music.url],
      loop: true,
      volume: wedding.music.volume,
      html5: true,
      preload: true,
      onplay: () => setIsPlaying(true),
      onpause: () => setIsPlaying(false),
      onstop: () => setIsPlaying(false)
    });
    howlRef.current = howl;
    return () => {
      howl.unload();
    };
  }, []);
  const startMusic = reactExports.useCallback(() => {
    const h = howlRef.current;
    if (!h || hasStarted) return;
    setHasStarted(true);
    h.play();
  }, [hasStarted]);
  const toggleMute = reactExports.useCallback(() => {
    const h = howlRef.current;
    if (!h) return;
    const next = !isMuted;
    h.mute(next);
    setIsMuted(next);
  }, [isMuted]);
  return /* @__PURE__ */ jsxRuntimeExports.jsx(MusicContext.Provider, { value: { startMusic, toggleMute, isPlaying, isMuted, hasStarted }, children });
}
function useMusic() {
  const ctx = reactExports.useContext(MusicContext);
  if (!ctx) throw new Error("useMusic must be used within MusicProvider");
  return ctx;
}
function SmoothScroll({ children }) {
  reactExports.useEffect(() => {
    const prefersReduced = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    if (prefersReduced) return;
    const lenis = new Lenis({
      duration: 1.35,
      easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
      smoothWheel: true
    });
    lenis.on("scroll", ScrollTrigger.update);
    let raf = 0;
    const loop = (time) => {
      lenis.raf(time);
      raf = requestAnimationFrame(loop);
    };
    raf = requestAnimationFrame(loop);
    ScrollTrigger.refresh();
    return () => {
      cancelAnimationFrame(raf);
      lenis.destroy();
    };
  }, []);
  return /* @__PURE__ */ jsxRuntimeExports.jsx(jsxRuntimeExports.Fragment, { children });
}
function scrollToSection(id) {
  const el = document.getElementById(id);
  if (!el) return;
  el.scrollIntoView({ behavior: "smooth", block: "start" });
}
const SEEDS = [
  { left: 8, size: 3, delay: 0, dur: 14, drift: 18 },
  { left: 18, size: 2, delay: 2.4, dur: 11, drift: -12 },
  { left: 28, size: 4, delay: 0.8, dur: 16, drift: 22 },
  { left: 38, size: 2, delay: 3.5, dur: 12, drift: -8 },
  { left: 50, size: 3, delay: 1.2, dur: 15, drift: 15 },
  { left: 60, size: 2, delay: 4, dur: 13, drift: -20 },
  { left: 72, size: 4, delay: 0.4, dur: 17, drift: 10 },
  { left: 83, size: 2, delay: 2.8, dur: 11, drift: -16 },
  { left: 91, size: 3, delay: 1.8, dur: 14, drift: 24 },
  { left: 44, size: 2, delay: 5.2, dur: 12, drift: -6 },
  { left: 66, size: 3, delay: 3.1, dur: 16, drift: 14 },
  { left: 22, size: 2, delay: 6, dur: 13, drift: -18 }
];
function Particles() {
  return /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "particles", "aria-hidden": true, children: SEEDS.map((p, i) => /* @__PURE__ */ jsxRuntimeExports.jsx(
    "span",
    {
      className: "particle",
      style: {
        left: `${p.left}%`,
        width: p.size,
        height: p.size,
        animationDelay: `${p.delay}s`,
        animationDuration: `${p.dur}s`,
        "--drift": `${p.drift}px`
      }
    },
    i
  )) });
}
function GoldDivider({ className = "" }) {
  return /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: `orn-divider ${className}`, "aria-hidden": true, children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "orn-line" }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "orn-star", children: "✦" }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "orn-line rev" })
  ] });
}
function SectionLabel({ children }) {
  return /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-center text-xs font-semibold tracking-[0.42em] uppercase text-gold", children });
}
function SectionTitle({
  children,
  light = false
}) {
  return /* @__PURE__ */ jsxRuntimeExports.jsx(
    "h2",
    {
      className: `mt-2 text-center font-display text-3xl font-semibold sm:text-4xl ${light ? "text-cream" : "text-forest"}`,
      children
    }
  );
}
function ArchOrnament({ light = false }) {
  return /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "arch-ornament", "aria-hidden": true, children: /* @__PURE__ */ jsxRuntimeExports.jsxs("svg", { viewBox: "0 0 200 56", className: "w-40 sm:w-52", fill: "none", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx(
      "path",
      {
        d: "M10 50 Q100 4 190 50",
        stroke: light ? "#e6cf9a" : "#c9a84c",
        strokeWidth: "1.2",
        strokeLinecap: "round"
      }
    ),
    /* @__PURE__ */ jsxRuntimeExports.jsx(
      "path",
      {
        d: "M28 50 Q100 14 172 50",
        stroke: light ? "#e6cf9a" : "#c9a84c",
        strokeWidth: "0.7",
        strokeLinecap: "round",
        opacity: "0.5"
      }
    ),
    /* @__PURE__ */ jsxRuntimeExports.jsx("circle", { cx: "100", cy: "8", r: "3", fill: light ? "#e6cf9a" : "#c9a84c" }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("circle", { cx: "10", cy: "50", r: "2", fill: light ? "#e6cf9a" : "#c9a84c", opacity: "0.6" }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("circle", { cx: "190", cy: "50", r: "2", fill: light ? "#e6cf9a" : "#c9a84c", opacity: "0.6" })
  ] }) });
}
function InvitationCover() {
  const rootRef = reactExports.useRef(null);
  const leftRef = reactExports.useRef(null);
  const rightRef = reactExports.useRef(null);
  const promptRef = reactExports.useRef(null);
  const contentRef = reactExports.useRef(null);
  const openedRef = reactExports.useRef(false);
  const [opened, setOpened] = reactExports.useState(false);
  const { startMusic } = useMusic();
  useGSAP(() => {
    const reduced = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    if (reduced) return;
    gsapWithCSS.set(contentRef.current, { opacity: 0 });
    gsapWithCSS.to(promptRef.current, {
      y: 10,
      duration: 2.2,
      repeat: -1,
      yoyo: true,
      ease: "sine.inOut"
    });
    gsapWithCSS.to(leftRef.current, {
      scaleX: 1.008,
      duration: 4,
      repeat: -1,
      yoyo: true,
      ease: "sine.inOut",
      transformOrigin: "left center"
    });
    gsapWithCSS.to(rightRef.current, {
      scaleX: 1.008,
      duration: 4,
      repeat: -1,
      yoyo: true,
      ease: "sine.inOut",
      transformOrigin: "right center"
    });
  }, { scope: rootRef });
  function openCurtain() {
    if (openedRef.current) return;
    openedRef.current = true;
    setOpened(true);
    startMusic();
    const reduced = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    if (reduced) {
      gsapWithCSS.set([leftRef.current, rightRef.current], { display: "none" });
      gsapWithCSS.set(contentRef.current, { opacity: 1 });
      gsapWithCSS.set(".hero-line", { opacity: 1, y: 0 });
      return;
    }
    const tl = gsapWithCSS.timeline({ defaults: { ease: "power3.inOut" } });
    tl.to(promptRef.current, { opacity: 0, duration: 0.3, ease: "power2.out" }).to(leftRef.current, { x: "-101%", duration: 2, ease: "power3.inOut" }, 0.2).to(rightRef.current, { x: "101%", duration: 2, ease: "power3.inOut" }, 0.32).to(contentRef.current, { opacity: 1, duration: 0.9, ease: "power2.out" }, 0.9).fromTo(
      ".hero-line",
      { opacity: 0, y: 38 },
      { opacity: 1, y: 0, stagger: 0.13, duration: 0.85, ease: "power2.out" },
      1.1
    );
  }
  return /* @__PURE__ */ jsxRuntimeExports.jsxs("section", { ref: rootRef, id: "cover", "aria-label": "Invitation cover", className: "hero-scene", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "hero-bg absolute inset-0", "aria-hidden": true }),
    /* @__PURE__ */ jsxRuntimeExports.jsx(Particles, {}),
    /* @__PURE__ */ jsxRuntimeExports.jsx(
      "div",
      {
        ref: contentRef,
        className: "absolute inset-0 flex flex-col items-center justify-center px-6 py-16 text-center",
        "aria-hidden": !opened,
        children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "relative w-full max-w-sm sm:max-w-md", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx(
            "div",
            {
              className: "absolute inset-0 rounded-2xl",
              style: {
                border: "1px solid rgba(201,168,76,0.35)",
                boxShadow: "inset 0 0 60px rgba(201,168,76,0.05), 0 0 80px rgba(201,168,76,0.08)"
              },
              "aria-hidden": true
            }
          ),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "relative z-10 px-8 py-10 sm:px-12 sm:py-14", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "hero-line text-[0.65rem] tracking-[0.5em] uppercase text-gold-soft", children: wedding.greeting }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "hero-line mt-6 font-arabic text-xl leading-loose text-gold-soft sm:text-2xl", children: wedding.quran.cover.arabic }),
            /* @__PURE__ */ jsxRuntimeExports.jsx(GoldDivider, { className: "hero-line" }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "hero-line text-[0.62rem] tracking-[0.38em] uppercase text-cream/70", children: wedding.cover.subtitle }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("h1", { className: "hero-line mt-5 font-display text-3xl font-semibold tracking-wider text-cream sm:text-4xl", children: wedding.groom.displayName }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "hero-line my-2 font-arabic text-2xl text-gold sm:text-3xl", "aria-hidden": true, children: "&" }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("h1", { className: "hero-line font-display text-3xl font-semibold tracking-wider text-cream sm:text-4xl", children: wedding.bride.displayName }),
            /* @__PURE__ */ jsxRuntimeExports.jsx(GoldDivider, { className: "hero-line" }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "hero-line font-display text-base tracking-wide text-cream/90", children: wedding.weddingDateLabel }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "hero-line mt-1 text-xs text-cream/70", children: wedding.weddingTimeLabel }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs("p", { className: "hero-line mt-1 text-xs text-cream/60", children: [
              wedding.venue.name,
              ", ",
              wedding.venue.location
            ] }),
            /* @__PURE__ */ jsxRuntimeExports.jsx(
              "button",
              {
                type: "button",
                onClick: () => scrollToSection("welcome"),
                className: "hero-line btn-gold mt-8",
                children: "View Invitation"
              }
            )
          ] })
        ] })
      }
    ),
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { ref: leftRef, className: "curtain-half left", "aria-hidden": true, children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "curtain-fabric" }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "curtain-edge-left" }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "curtain-tassel left" }),
      [14, 30, 50, 68, 84].map((pos) => /* @__PURE__ */ jsxRuntimeExports.jsx(
        "div",
        {
          className: "curtain-fold absolute top-0 bottom-0 w-px bg-black/25",
          style: { left: `${pos}%` }
        },
        pos
      ))
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { ref: rightRef, className: "curtain-half right", "aria-hidden": true, children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "curtain-fabric" }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "curtain-edge-right" }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "curtain-tassel right" }),
      [16, 32, 50, 70, 86].map((pos) => /* @__PURE__ */ jsxRuntimeExports.jsx(
        "div",
        {
          className: "curtain-fold absolute top-0 bottom-0 w-px bg-black/25",
          style: { left: `${pos}%` }
        },
        pos
      ))
    ] }),
    !opened && /* @__PURE__ */ jsxRuntimeExports.jsxs(jsxRuntimeExports.Fragment, { children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx(
        "button",
        {
          type: "button",
          onClick: openCurtain,
          className: "curtain-hit",
          "aria-label": "Open invitation curtain"
        }
      ),
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { ref: promptRef, className: "curtain-prompt", "aria-hidden": true, children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex flex-col items-center gap-3", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx(
          "div",
          {
            className: "flex h-14 w-14 items-center justify-center rounded-full",
            style: {
              background: "rgba(201,168,76,0.2)",
              border: "1px solid rgba(201,168,76,0.5)",
              boxShadow: "0 0 24px rgba(201,168,76,0.2)"
            },
            children: /* @__PURE__ */ jsxRuntimeExports.jsx(
              "svg",
              {
                viewBox: "0 0 24 24",
                className: "h-6 w-6 text-gold",
                fill: "none",
                stroke: "currentColor",
                strokeWidth: "1.5",
                "aria-hidden": true,
                children: /* @__PURE__ */ jsxRuntimeExports.jsx(
                  "path",
                  {
                    strokeLinecap: "round",
                    strokeLinejoin: "round",
                    d: "M15.042 21.672L13.684 16.6m0 0l-2.51 2.225.569-9.47 5.227 7.917-3.286-.672zm-7.518-.267A8.25 8.25 0 1120.25 10.5M8.288 14.212A5.25 5.25 0 1117.25 10.5"
                  }
                )
              }
            )
          }
        ),
        /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-[0.6rem] tracking-[0.35em] uppercase text-gold-soft/80", children: "Tap to open" })
      ] }) })
    ] })
  ] });
}
function WelcomeMessage() {
  const rootRef = reactExports.useRef(null);
  useGSAP(() => {
    const reduced = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    if (reduced) {
      gsapWithCSS.set(".wm-rev", { opacity: 1, y: 0 });
      return;
    }
    gsapWithCSS.fromTo(
      ".wm-rev",
      { opacity: 0, y: 48 },
      {
        opacity: 1,
        y: 0,
        stagger: 0.18,
        duration: 0.9,
        ease: "power2.out",
        scrollTrigger: {
          trigger: rootRef.current,
          start: "top 78%"
        }
      }
    );
  }, { scope: rootRef });
  return /* @__PURE__ */ jsxRuntimeExports.jsx("section", { ref: rootRef, id: "welcome", className: "pat-light px-5 py-20 sm:px-8 sm:py-28", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "mx-auto max-w-2xl text-center", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "wm-rev", children: /* @__PURE__ */ jsxRuntimeExports.jsx(SectionLabel, { children: wedding.greeting }) }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "wm-rev mt-1", children: /* @__PURE__ */ jsxRuntimeExports.jsx(SectionTitle, { children: "A Warm Welcome" }) }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "wm-rev", children: /* @__PURE__ */ jsxRuntimeExports.jsx(ArchOrnament, {}) }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "wm-rev", children: /* @__PURE__ */ jsxRuntimeExports.jsx(
      "div",
      {
        className: "card-light rounded-2xl px-8 py-8",
        style: { background: "rgba(255,255,255,0.8)" },
        children: /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "font-arabic text-xl leading-loose text-forest sm:text-2xl", children: wedding.quran.welcome.arabic })
      }
    ) }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "wm-rev", children: /* @__PURE__ */ jsxRuntimeExports.jsx(GoldDivider, {}) }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs("blockquote", { className: "wm-rev", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsxs("p", { className: "font-display text-lg italic leading-relaxed text-forest/90 sm:text-xl", children: [
        "“",
        wedding.quran.welcome.verse,
        "”"
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("footer", { className: "mt-4 text-[0.68rem] tracking-[0.38em] uppercase text-gold", children: [
        "— ",
        wedding.quran.welcome.reference
      ] })
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "wm-rev", children: /* @__PURE__ */ jsxRuntimeExports.jsx(GoldDivider, {}) }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "wm-rev text-base leading-relaxed text-forest/80 sm:text-lg", children: wedding.invitation })
  ] }) });
}
function PersonCard({
  person,
  dir
}) {
  return /* @__PURE__ */ jsxRuntimeExports.jsx("article", { className: `fd-card-${dir}`, children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "card-dark p-7 sm:p-9", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-[0.65rem] tracking-[0.38em] uppercase text-gold", children: person.role }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("h3", { className: "mt-2 font-display text-2xl font-semibold text-cream sm:text-3xl", children: person.name }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "mt-6 space-y-5", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-[0.62rem] uppercase tracking-[0.3em] text-gold/80", children: person.role === "Groom" ? "Son of" : "Daughter of" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "mt-1 font-display text-base text-cream/90", children: person.parents.father }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("p", { className: "font-display text-base text-cream/90", children: [
          "& ",
          person.parents.mother
        ] })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-[0.62rem] uppercase tracking-[0.3em] text-gold/80", children: "Residence" }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("p", { className: "mt-1 text-sm leading-relaxed text-cream/80", children: [
          person.residence.house,
          /* @__PURE__ */ jsxRuntimeExports.jsx("br", {}),
          person.residence.location
        ] })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-[0.62rem] uppercase tracking-[0.3em] text-gold/80", children: "Contact" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx(
          "a",
          {
            href: `tel:${person.contact.replace(/\s/g, "")}`,
            className: "mt-1 block text-sm font-medium text-gold-soft transition-colors hover:text-gold",
            children: person.contact
          }
        )
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-[0.62rem] uppercase tracking-[0.3em] text-gold/80", children: person.role === "Groom" ? "Grandson of" : "Granddaughter of" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "mt-1 text-sm leading-relaxed text-cream/80", children: person.grandparents.paternal }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("p", { className: "text-sm leading-relaxed text-cream/80", children: [
          "& ",
          person.grandparents.maternal
        ] })
      ] })
    ] })
  ] }) });
}
function FamilyDetails() {
  const rootRef = reactExports.useRef(null);
  useGSAP(() => {
    const reduced = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    const reset = (sel) => gsapWithCSS.set(sel, { opacity: 1, x: 0 });
    if (reduced) {
      reset(".fd-head");
      reset(".fd-card-left");
      reset(".fd-card-right");
      return;
    }
    gsapWithCSS.fromTo(
      ".fd-head",
      { opacity: 0, y: 40 },
      {
        opacity: 1,
        y: 0,
        stagger: 0.15,
        duration: 0.85,
        ease: "power2.out",
        scrollTrigger: { trigger: rootRef.current, start: "top 78%" }
      }
    );
    gsapWithCSS.fromTo(
      ".fd-card-left",
      { opacity: 0, x: -60 },
      {
        opacity: 1,
        x: 0,
        duration: 1,
        ease: "power3.out",
        scrollTrigger: { trigger: rootRef.current, start: "top 72%" }
      }
    );
    gsapWithCSS.fromTo(
      ".fd-card-right",
      { opacity: 0, x: 60 },
      {
        opacity: 1,
        x: 0,
        duration: 1,
        ease: "power3.out",
        scrollTrigger: { trigger: rootRef.current, start: "top 72%" }
      }
    );
  }, { scope: rootRef });
  return /* @__PURE__ */ jsxRuntimeExports.jsx("section", { ref: rootRef, id: "families", className: "pat-dark px-5 py-20 sm:px-8 sm:py-28", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "mx-auto max-w-4xl", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "fd-head text-center", children: /* @__PURE__ */ jsxRuntimeExports.jsx(SectionLabel, { children: "Our Families" }) }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "fd-head mt-1 text-center", children: /* @__PURE__ */ jsxRuntimeExports.jsx(SectionTitle, { light: true, children: "Groom & Bride" }) }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "fd-head", children: /* @__PURE__ */ jsxRuntimeExports.jsx(ArchOrnament, { light: true }) }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "grid gap-6 md:grid-cols-2", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx(PersonCard, { person: wedding.groom, dir: "left" }),
      /* @__PURE__ */ jsxRuntimeExports.jsx(PersonCard, { person: wedding.bride, dir: "right" })
    ] })
  ] }) });
}
function DetailCell({
  icon,
  label,
  value,
  featured = false
}) {
  return /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: `detail-cell ${featured ? "detail-cell--featured" : ""}`, children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "detail-cell__icon", "aria-hidden": true, children: icon }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "detail-cell__body", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "detail-cell__label", children: label }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "detail-cell__value", children: value })
    ] })
  ] });
}
function WeddingDetails() {
  const rootRef = reactExports.useRef(null);
  useGSAP(() => {
    const reduced = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    if (reduced) {
      gsapWithCSS.set(".wd-rev", { opacity: 1, y: 0 });
      return;
    }
    gsapWithCSS.fromTo(
      ".wd-rev",
      { opacity: 0, y: 44 },
      {
        opacity: 1,
        y: 0,
        stagger: 0.14,
        duration: 0.85,
        ease: "power2.out",
        scrollTrigger: { trigger: rootRef.current, start: "top 76%" }
      }
    );
  }, { scope: rootRef });
  return /* @__PURE__ */ jsxRuntimeExports.jsx("section", { ref: rootRef, id: "details", className: "pat-light px-5 py-20 sm:px-8 sm:py-28", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "mx-auto max-w-3xl", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "wd-rev text-center", children: /* @__PURE__ */ jsxRuntimeExports.jsx(SectionLabel, { children: "The Celebration" }) }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "wd-rev mt-1 text-center", children: /* @__PURE__ */ jsxRuntimeExports.jsx(SectionTitle, { children: "Wedding Details" }) }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "wd-rev", children: /* @__PURE__ */ jsxRuntimeExports.jsx(ArchOrnament, {}) }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "wd-rev details-panel", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "details-corner details-corner--tl", "aria-hidden": true }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "details-corner details-corner--tr", "aria-hidden": true }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "details-corner details-corner--bl", "aria-hidden": true }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "details-corner details-corner--br", "aria-hidden": true }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "details-couple", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "details-couple__person", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "details-couple__role", children: "Bride" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "details-couple__name", children: wedding.bride.name })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "details-couple__divider", "aria-hidden": true, children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "details-couple__line" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "details-couple__star", children: "✦" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "details-couple__line" })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "details-couple__person", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "details-couple__role", children: "Groom" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "details-couple__name", children: wedding.groom.name })
        ] })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "details-inner-divider", "aria-hidden": true }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "details-grid details-grid--featured", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx(
          DetailCell,
          {
            featured: true,
            icon: /* @__PURE__ */ jsxRuntimeExports.jsx(HiOutlineCalendarDays, { size: 22 }),
            label: "Date",
            value: wedding.weddingDateLabel
          }
        ),
        /* @__PURE__ */ jsxRuntimeExports.jsx(
          DetailCell,
          {
            featured: true,
            icon: /* @__PURE__ */ jsxRuntimeExports.jsx(HiOutlineClock, { size: 22 }),
            label: "Time",
            value: wedding.weddingTimeLabel
          }
        )
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "details-inner-divider", "aria-hidden": true }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "details-grid", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx(
          DetailCell,
          {
            icon: /* @__PURE__ */ jsxRuntimeExports.jsx(HiOutlineBuildingOffice2, { size: 20 }),
            label: "Venue",
            value: wedding.venue.name
          }
        ),
        /* @__PURE__ */ jsxRuntimeExports.jsx(
          DetailCell,
          {
            icon: /* @__PURE__ */ jsxRuntimeExports.jsx(HiOutlineMapPin, { size: 20 }),
            label: "Location",
            value: wedding.venue.location
          }
        )
      ] })
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "wd-rev mt-8 text-center", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "font-arabic text-lg leading-loose text-forest sm:text-xl", children: wedding.quran.details.arabic }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("p", { className: "mt-3 font-display text-sm italic text-forest/75 sm:text-base", children: [
        "“",
        wedding.quran.details.verse,
        "”"
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("p", { className: "mt-2 text-[0.65rem] tracking-[0.32em] uppercase text-gold", children: [
        "— ",
        wedding.quran.details.reference
      ] })
    ] })
  ] }) });
}
function diff(target) {
  const ms = Math.max(0, target.getTime() - Date.now());
  return {
    d: Math.floor(ms / 864e5),
    h: Math.floor(ms / 36e5 % 24),
    m: Math.floor(ms / 6e4 % 60),
    s: Math.floor(ms / 1e3 % 60)
  };
}
const LABELS = ["Days", "Hours", "Minutes", "Seconds"];
function Digit({ value, label }) {
  const boxRef = reactExports.useRef(null);
  const prevRef = reactExports.useRef(value);
  reactExports.useEffect(() => {
    if (value === prevRef.current) return;
    prevRef.current = value;
    if (!boxRef.current) return;
    const reduced = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    if (reduced) return;
    gsapWithCSS.fromTo(boxRef.current, { y: -18, opacity: 0 }, { y: 0, opacity: 1, duration: 0.45, ease: "power2.out" });
  }, [value]);
  return /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex flex-col items-center", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx(
      "div",
      {
        className: "flex h-20 w-full items-center justify-center rounded-xl sm:h-24",
        style: {
          background: "rgba(201,168,76,0.1)",
          border: "1px solid rgba(201,168,76,0.3)",
          boxShadow: "0 8px 24px rgba(0,0,0,0.2), inset 0 1px 0 rgba(201,168,76,0.15)"
        },
        children: /* @__PURE__ */ jsxRuntimeExports.jsx("div", { ref: boxRef, children: /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "font-display text-4xl font-semibold tabular-nums text-gold-soft sm:text-5xl", children: String(value).padStart(2, "0") }) })
      }
    ),
    /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "mt-3 text-[0.6rem] uppercase tracking-[0.3em] text-gold/70", children: label })
  ] });
}
function CountdownSection() {
  const target = new Date(wedding.weddingDate);
  const [t, setT] = reactExports.useState(() => diff(target));
  const rootRef = reactExports.useRef(null);
  reactExports.useEffect(() => {
    const id = setInterval(() => setT(diff(target)), 1e3);
    return () => clearInterval(id);
  }, [target]);
  useGSAP(() => {
    const reduced = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    if (reduced) {
      gsapWithCSS.set(".cd-rev", { opacity: 1, y: 0 });
      return;
    }
    gsapWithCSS.fromTo(
      ".cd-rev",
      { opacity: 0, y: 40 },
      {
        opacity: 1,
        y: 0,
        stagger: 0.14,
        duration: 0.85,
        ease: "power2.out",
        scrollTrigger: { trigger: rootRef.current, start: "top 76%" }
      }
    );
  }, { scope: rootRef });
  return /* @__PURE__ */ jsxRuntimeExports.jsx("section", { ref: rootRef, id: "countdown", className: "pat-dark px-5 py-20 sm:px-8 sm:py-28", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "mx-auto max-w-2xl", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "cd-rev text-center", children: /* @__PURE__ */ jsxRuntimeExports.jsx(SectionLabel, { children: "Mark Your Calendar" }) }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "cd-rev mt-1 text-center", children: /* @__PURE__ */ jsxRuntimeExports.jsx(SectionTitle, { light: true, children: "Counting the Moments" }) }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "cd-rev", children: /* @__PURE__ */ jsxRuntimeExports.jsx(ArchOrnament, { light: true }) }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "cd-rev grid grid-cols-4 gap-3 sm:gap-4", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx(Digit, { value: t.d, label: LABELS[0] }),
      /* @__PURE__ */ jsxRuntimeExports.jsx(Digit, { value: t.h, label: LABELS[1] }),
      /* @__PURE__ */ jsxRuntimeExports.jsx(Digit, { value: t.m, label: LABELS[2] }),
      /* @__PURE__ */ jsxRuntimeExports.jsx(Digit, { value: t.s, label: LABELS[3] })
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "cd-rev", children: /* @__PURE__ */ jsxRuntimeExports.jsx(GoldDivider, {}) }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs("p", { className: "cd-rev text-center font-display text-base text-gold-soft", children: [
      wedding.weddingDateLabel,
      "  ·  ",
      wedding.weddingTimeLabel
    ] })
  ] }) });
}
function VenueExperience() {
  const rootRef = reactExports.useRef(null);
  useGSAP(() => {
    const reduced = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    if (reduced) {
      gsapWithCSS.set(".ve-rev", { opacity: 1, y: 0 });
      return;
    }
    gsapWithCSS.fromTo(
      ".ve-rev",
      { opacity: 0, y: 44 },
      {
        opacity: 1,
        y: 0,
        stagger: 0.16,
        duration: 0.9,
        ease: "power2.out",
        scrollTrigger: { trigger: rootRef.current, start: "top 76%" }
      }
    );
  }, { scope: rootRef });
  return /* @__PURE__ */ jsxRuntimeExports.jsx("section", { ref: rootRef, id: "venue", className: "pat-light px-5 py-20 sm:px-8 sm:py-28", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "mx-auto max-w-3xl", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "ve-rev text-center", children: /* @__PURE__ */ jsxRuntimeExports.jsx(SectionLabel, { children: "Join Us At" }) }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "ve-rev mt-1 text-center", children: /* @__PURE__ */ jsxRuntimeExports.jsx(SectionTitle, { children: "The Venue" }) }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "ve-rev", children: /* @__PURE__ */ jsxRuntimeExports.jsx(GoldDivider, {}) }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "ve-rev card-light overflow-hidden", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "aspect-video w-full", children: /* @__PURE__ */ jsxRuntimeExports.jsx(
        "iframe",
        {
          src: wedding.venue.mapEmbed,
          title: `Map of ${wedding.venue.name}`,
          loading: "lazy",
          className: "h-full w-full border-0"
        }
      ) }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "px-7 py-8 text-center sm:px-10", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("h3", { className: "font-display text-2xl font-semibold text-forest sm:text-3xl", children: wedding.venue.name }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "mt-2 text-sm text-forest/70", children: wedding.venue.address }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "mt-7 flex flex-wrap justify-center gap-3", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx(
            "a",
            {
              href: wedding.venue.directionsUrl,
              target: "_blank",
              rel: "noreferrer noopener",
              className: "btn-gold",
              children: "Get Directions"
            }
          ),
          /* @__PURE__ */ jsxRuntimeExports.jsx(
            "a",
            {
              href: wedding.venue.mapsUrl,
              target: "_blank",
              rel: "noreferrer noopener",
              className: "btn-ghost",
              children: "Open Maps"
            }
          )
        ] })
      ] })
    ] })
  ] }) });
}
function FinalBlessing() {
  const rootRef = reactExports.useRef(null);
  useGSAP(() => {
    const reduced = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    if (reduced) {
      gsapWithCSS.set(".fb-rev", { opacity: 1, y: 0 });
      return;
    }
    gsapWithCSS.fromTo(
      ".fb-rev",
      { opacity: 0, y: 44 },
      {
        opacity: 1,
        y: 0,
        stagger: 0.2,
        duration: 1,
        ease: "power2.out",
        scrollTrigger: { trigger: rootRef.current, start: "top 72%" }
      }
    );
  }, { scope: rootRef });
  return /* @__PURE__ */ jsxRuntimeExports.jsxs(
    "section",
    {
      ref: rootRef,
      id: "finale",
      "aria-label": "Closing blessing",
      className: "pat-dark relative overflow-hidden px-6 py-24 text-center sm:py-32",
      children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx(
          "div",
          {
            className: "pointer-events-none absolute inset-0",
            "aria-hidden": true,
            style: {
              background: "radial-gradient(ellipse 70% 50% at 50% 80%, rgba(201,168,76,0.12) 0%, transparent 60%)"
            }
          }
        ),
        /* @__PURE__ */ jsxRuntimeExports.jsx(Particles, {}),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "relative z-10 mx-auto max-w-xl", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "fb-rev", children: /* @__PURE__ */ jsxRuntimeExports.jsx(ArchOrnament, { light: true }) }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "fb-rev font-arabic text-2xl leading-relaxed text-gold-soft sm:text-3xl", children: wedding.blessing.arabic }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "fb-rev", children: /* @__PURE__ */ jsxRuntimeExports.jsx(GoldDivider, {}) }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "fb-rev font-display text-xl text-cream/90 sm:text-2xl", children: wedding.thankYou }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "fb-rev mx-auto mt-4 max-w-sm text-sm leading-relaxed text-cream/70", children: wedding.closingNote }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "fb-rev", children: /* @__PURE__ */ jsxRuntimeExports.jsx(GoldDivider, {}) }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "fb-rev text-[0.65rem] uppercase tracking-[0.4em] text-gold", children: "With love & duas" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "fb-rev mt-4 font-display text-2xl font-semibold text-cream sm:text-3xl", children: wedding.groom.name }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "fb-rev my-2 font-arabic text-xl text-gold", "aria-hidden": true, children: "&" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "fb-rev font-display text-2xl font-semibold text-cream sm:text-3xl", children: wedding.bride.name })
        ] })
      ]
    }
  );
}
function MusicWidget() {
  const { isPlaying, isMuted, hasStarted, toggleMute } = useMusic();
  if (!hasStarted) return null;
  return /* @__PURE__ */ jsxRuntimeExports.jsxs(
    "button",
    {
      type: "button",
      onClick: toggleMute,
      className: "music-pill",
      "aria-label": isMuted ? "Unmute music" : "Mute music",
      children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: `music-dot ${isPlaying && !isMuted ? "playing" : ""}`, "aria-hidden": true }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "font-display text-[0.65rem] tracking-[0.2em] uppercase text-gold-soft", children: isMuted ? "Muted" : "Music" }),
        isMuted ? /* @__PURE__ */ jsxRuntimeExports.jsx(HiOutlineSpeakerXMark, { size: 14, className: "text-gold-soft", "aria-hidden": true }) : /* @__PURE__ */ jsxRuntimeExports.jsx(HiOutlineSpeakerWave, { size: 14, className: "text-gold-soft", "aria-hidden": true })
      ]
    }
  );
}
function Index() {
  return /* @__PURE__ */ jsxRuntimeExports.jsxs(MusicProvider, { children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx(SmoothScroll, { children: /* @__PURE__ */ jsxRuntimeExports.jsxs("main", { className: "overflow-x-hidden", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx(InvitationCover, {}),
      /* @__PURE__ */ jsxRuntimeExports.jsx(WelcomeMessage, {}),
      /* @__PURE__ */ jsxRuntimeExports.jsx(FamilyDetails, {}),
      /* @__PURE__ */ jsxRuntimeExports.jsx(WeddingDetails, {}),
      /* @__PURE__ */ jsxRuntimeExports.jsx(CountdownSection, {}),
      /* @__PURE__ */ jsxRuntimeExports.jsx(VenueExperience, {}),
      /* @__PURE__ */ jsxRuntimeExports.jsx(FinalBlessing, {})
    ] }) }),
    /* @__PURE__ */ jsxRuntimeExports.jsx(MusicWidget, {})
  ] });
}
export {
  Index as component
};
