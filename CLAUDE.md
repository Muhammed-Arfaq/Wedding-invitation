# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project

A single-page, scroll-driven Islamic wedding invitation ("Anas & Fathima") built on TanStack Start (SSR) and deployed to Netlify. There is exactly one user-facing route: `/`.

## Commands

Package manager is **bun** (`bun.lock`, `bunfig.toml`, Netlify runs `bun run build`). A stale `package-lock.json` is also committed — prefer bun.

```bash
bun install
bun run dev        # vite dev on http://localhost:8080 (host "::")
bun run build      # vite build + nitro (preset picked from env, see below)
bun run preview
bun run lint       # eslint . — prettier runs as an eslint rule, so lint catches formatting
bun run format     # prettier --write .
```

There is **no test framework or typecheck script** in this repo. To typecheck, run `bunx tsc --noEmit`.

## Architecture

### Server / SSR stack

Vite + `tanstackStart` + `nitro` (nitro plugin only registers on `command === "build"`). The nitro preset is chosen in [vite.config.ts](vite.config.ts): `netlify` when `NETLIFY=true` or `CONTEXT=production`, otherwise `node-server`.

Three entry points, each with a distinct job:

- [src/router.tsx](src/router.tsx) — `getRouter()` creates the router with a fresh `QueryClient` per request, passed through router context.
- [src/start.ts](src/start.ts) — `createStart` with a request middleware that catches non-HTTP errors and returns a rendered HTML error page instead of a JSON 500. Errors carrying `statusCode` are re-thrown so TanStack handles them normally.
- [src/server.ts](src/server.ts) — the fetch handler wrapping `@tanstack/react-start/server-entry`. It exists because **h3 swallows in-handler throws into a `{"unhandled":true,"message":"HTTPError"}` JSON 500 that a plain try/catch never sees**; `normalizeCatastrophicSsrResponse` sniffs for that body and swaps in the HTML error page, logging the real error captured by [src/lib/error-capture.ts](src/lib/error-capture.ts). Don't "simplify" this away.

`vite.config.ts` marks `@tanstack/react-router` and `@tanstack/react-query` as `ssr.external` and dedupes React + query-core — both were needed to get the Nitro bundle working. Import protection errors on any client import of `**/server/**` or the Next.js `server-only` package (ESLint enforces the latter too, with a message pointing at the `*.server.ts` convention).

### Routing

File-based; see [src/routes/README.md](src/routes/README.md) for the conventions. `src/routeTree.gen.ts` is generated — never edit it. There is no `src/pages/`; `__root.tsx` is the only layout.

### Content

**All invitation copy, names, dates, venue, and Quranic verses live in [src/config/wedding.ts](src/config/wedding.ts)** as a single `as const` object. Content changes go there, not into components. `weddingDate` (ISO) drives the countdown; `weddingDateLabel` / `weddingTimeLabel` are the displayed strings and must be updated alongside it.

### Page composition

[src/routes/index.tsx](src/routes/index.tsx) is the whole app: `MusicProvider` → `SmoothScroll` → seven sections from `src/components/invitation/` → `MusicWidget`. Section order there is the scroll order.

Each section is a self-contained `<section id="…">` that:
1. Reads its copy from `wedding`.
2. Registers its own GSAP reveal in `useGSAP(..., { scope: rootRef })`, animating a section-scoped class (`.wm-rev`, etc.) via a `ScrollTrigger` on `rootRef`.
3. **Early-returns a `gsap.set(..., { opacity: 1, y: 0 })` when `prefers-reduced-motion` matches** — every animated component does this, and new ones must too, since the reveal classes start at `opacity: 0`.

Follow [WelcomeMessage.tsx](src/components/invitation/WelcomeMessage.tsx) as the template for a new section.

### Motion

- Always import GSAP from [src/lib/gsap.ts](src/lib/gsap.ts), never from `gsap` directly — that module is what registers `useGSAP`, `ScrollTrigger`, and `Flip`. `index.tsx` side-effect-imports it to guarantee registration order.
- [SmoothScroll.tsx](src/components/shared/SmoothScroll.tsx) drives Lenis and pipes `lenis.on("scroll", ScrollTrigger.update)`. It no-ops entirely under reduced motion. Cross-section navigation uses its exported `scrollToSection(id)`.
- Framer Motion and GSAP are both present; the live invitation sections use GSAP.

### Audio

[MusicContext.tsx](src/context/MusicContext.tsx) owns a single Howler instance for `wedding.music.url`. Playback is unlocked only by the user tapping the curtain in [InvitationCover.tsx](src/components/invitation/InvitationCover.tsx), which calls `startMusic()` — this is the autoplay-policy gesture, so don't move playback earlier.

### Styling

Tailwind v4, configured entirely in [src/styles.css](src/styles.css) (`@theme inline` tokens, no `tailwind.config`). The design system is hand-written CSS classes there: `.pat-light` / `.pat-dark` (Islamic lattice backgrounds), `.card-light` / `.card-dark`, `.btn-gold` / `.btn-ghost`, `.orn-*`, `.curtain-*`, `.details-*`. Prefer these plus the token utilities (`text-gold`, `bg-forest`, `font-display`, `font-arabic`) over ad-hoc hex values.

Palette: forest `#0c3620`, emerald `#0f5132`, ivory `#f6edd9`, cream `#fdf8f0`, gold `#c9a84c`. Note that a few older files use a different, earlier palette (`#D4AF37`, `#F8F5F0`, `#1a3c34`) — the `styles.css` tokens are canonical.

Arabic text uses `.font-arabic` (Scheherazade New, `direction: rtl`).

### Dead scaffolding

`src/components/shared/` and `src/components/wedding/` contain unused leftovers from an earlier design pass — `SectionShell`, `ScrollStory`, `ScrollOrchestrator`, `SectionRail`, `SimpleSection`, `CollaborativeAmbient`, `Reveal`. Nothing imports them. Don't extend them; the live shared pieces are `GoldDivider`, `Particles`, `SmoothScroll`, and `MusicWidget`.

`src/components/ui/` is the full shadcn/ui set (new-york style, aliases in [components.json](components.json)); almost none of it is used by the invitation. `src/lib/api/example.functions.ts` and `src/lib/config.server.ts` are commented reference templates for `createServerFn` and server-only env access, not live code.

## Conventions

- Path alias `@/*` → `src/*`.
- Server-only modules use the `*.server.ts` suffix (never the `server-only` package — ESLint blocks it).
- Public env vars need the `VITE_` prefix; `vite.config.ts` explicitly `define`s them so they survive the Nitro build.
- Prettier: 100 cols, double quotes, semicolons, trailing commas.
- `bunfig.toml` sets `minimumReleaseAge = 86400` — packages published in the last 24h will not install.
