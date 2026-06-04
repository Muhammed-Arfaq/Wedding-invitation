import { Q as QueryClient } from "../_libs/tanstack__query-core.mjs";
import { Q as QueryClientProvider } from "../_libs/tanstack__react-query.mjs";
import { c as createRouter, a as createRootRouteWithContext, u as useRouter, L as Link, O as Outlet, H as HeadContent, S as Scripts, b as createFileRoute, l as lazyRouteComponent } from "../_libs/tanstack__react-router.mjs";
import { j as jsxRuntimeExports } from "../_libs/react.mjs";
import { g as gsapWithCSS, S as ScrollTrigger, F as Flip } from "../_libs/gsap.mjs";
import { u as useGSAP } from "../_libs/gsap__react.mjs";
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
const appCss = "/assets/styles-Cu-4gFB8.css";
function NotFoundComponent() {
  return /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "flex min-h-screen items-center justify-center bg-[#F8F5F0] px-4", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "max-w-md text-center", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx("h1", { className: "font-display text-7xl text-[#0F5132]", children: "404" }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("h2", { className: "mt-4 font-display text-xl text-[#0F5132]", children: "Page not found" }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "mt-2 text-sm text-[#0F5132]/70", children: "The page you are looking for does not exist." }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "mt-6", children: /* @__PURE__ */ jsxRuntimeExports.jsx(
      Link,
      {
        to: "/",
        className: "btn-gold inline-flex text-sm",
        children: "Return to invitation"
      }
    ) })
  ] }) });
}
function ErrorComponent({ error, reset }) {
  console.error(error);
  const router2 = useRouter();
  return /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "flex min-h-screen items-center justify-center bg-[#F8F5F0] px-4", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "max-w-md text-center", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx("h1", { className: "font-display text-xl text-[#0F5132]", children: "Unable to load invitation" }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "mt-2 text-sm text-[#0F5132]/70", children: "Something went wrong. Please try again or return home." }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "mt-6 flex flex-wrap justify-center gap-2", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx(
        "button",
        {
          type: "button",
          onClick: () => {
            router2.invalidate();
            reset();
          },
          className: "btn-gold text-sm",
          children: "Try again"
        }
      ),
      /* @__PURE__ */ jsxRuntimeExports.jsx("a", { href: "/", className: "inline-flex items-center justify-center rounded-full border border-[#D4AF37]/50 px-5 py-3 text-sm text-[#0F5132]", children: "Go home" })
    ] })
  ] }) });
}
const Route$1 = createRootRouteWithContext()({
  head: () => ({
    meta: [
      { charSet: "utf-8" },
      { name: "viewport", content: "width=device-width, initial-scale=1" },
      { title: "Anas & Fathima — Wedding Invitation" },
      {
        name: "description",
        content: "With gratitude to Allah — join Anas Akbar Ali and Fathima Kasim for their wedding celebration at PV Regency, Veliancode."
      },
      { name: "theme-color", content: "#0f5132" },
      { property: "og:title", content: "Anas & Fathima — Wedding Invitation" },
      {
        property: "og:description",
        content: "You are cordially invited to celebrate the blessed union of Anas Akbar Ali and Fathima Kasim."
      },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" }
    ],
    links: [
      { rel: "preconnect", href: "https://fonts.googleapis.com" },
      { rel: "preconnect", href: "https://fonts.gstatic.com", crossOrigin: "anonymous" },
      {
        rel: "stylesheet",
        href: "https://fonts.googleapis.com/css2?family=Cormorant+Garamond:ital,wght@0,400;0,500;0,600;0,700;1,400&family=Inter:wght@300;400;500;600&family=Scheherazade+New:wght@400;600;700&display=swap"
      },
      { rel: "stylesheet", href: appCss }
    ]
  }),
  shellComponent: RootShell,
  component: RootComponent,
  notFoundComponent: NotFoundComponent,
  errorComponent: ErrorComponent
});
function RootShell({ children }) {
  return /* @__PURE__ */ jsxRuntimeExports.jsxs("html", { lang: "en", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx("head", { children: /* @__PURE__ */ jsxRuntimeExports.jsx(HeadContent, {}) }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs("body", { children: [
      children,
      /* @__PURE__ */ jsxRuntimeExports.jsx(Scripts, {})
    ] })
  ] });
}
function RootComponent() {
  const { queryClient } = Route$1.useRouteContext();
  return /* @__PURE__ */ jsxRuntimeExports.jsx(QueryClientProvider, { client: queryClient, children: /* @__PURE__ */ jsxRuntimeExports.jsx(Outlet, {}) });
}
const wedding = {
  meta: {
    title: "Anas & Fathima — Wedding Invitation",
    description: "With gratitude to Allah, join us in celebrating the blessed union of Anas Akbar Ali and Fathima Kasim at PV Regency, Veliancode.",
    ogTitle: "Anas & Fathima — Wedding Invitation",
    ogDescription: "You are cordially invited to celebrate the nikah of Anas Akbar Ali and Fathima Kasim."
  },
  greeting: "Assalamu Alaikum",
  blessing: {
    arabic: "بارك الله لكما وبارك عليكما وجمع بينكما في خير"
  },
  cover: {
    subtitle: "Wedding Invitation"
  },
  groom: {
    name: "Anas Akbar Ali",
    displayName: "ANAS AKBAR ALI",
    role: "Groom",
    parents: {
      father: "Akbar Ali Moosa",
      mother: "Hazeena Backer"
    },
    residence: {
      house: "Kalathingal House",
      location: "Ayiroor, Perumpadappu"
    },
    contact: "+91 95393 31368",
    grandparents: {
      paternal: "Late Moosa Thekkumthala",
      maternal: "Abu Backer Manath Parambil"
    }
  },
  bride: {
    name: "Fathima Kasim",
    displayName: "FATHIMA KASIM",
    role: "Bride",
    parents: {
      father: "Mr. Kasim",
      mother: "Mrs. Laila Kasim"
    },
    residence: {
      house: "Puttiyangattayil House",
      location: "Ayiroor, Perumpadappu"
    },
    contact: "+91 94472 69426",
    grandparents: {
      paternal: "Late Saidu Puttiyangattayil",
      maternal: "Late Baputy Maliyakkel"
    }
  },
  /** ISO 8601 — edit date and time for countdown & labels */
  weddingDate: "2026-08-02T10:30:00",
  weddingDateLabel: "Sunday, 2 August 2026",
  weddingTimeLabel: "10:30 AM",
  quran: {
    /** Hero — after curtain opens */
    cover: {
      arabic: "رَبَّنَا هَبْ لَنَا مِنْ أَزْوَاجِنَا وَذُرِّيَّاتِنَا قُرَّةَ أَعْيُنٍ وَاجْعَلْنَا لِلْمُتَّقِينَ إِمَامًا"
    },
    /** Welcome section */
    welcome: {
      arabic: "وَمِنْ آيَاتِهِ أَنْ خَلَقَ لَكُم مِّنْ أَنفُسِكُمْ أَزْوَاجًا لِّتَسْكُنُوا إِلَيْهَا وَجَعَلَ بَيْنَكُم مَّوَدَّةً وَرَحْمَةً",
      verse: "And among His signs is that He created for you mates from among yourselves, that you may dwell in tranquillity with them, and He has put love and mercy between your hearts.",
      reference: "Surah Ar-Rum 30:21"
    },
    /** Wedding details section */
    details: {
      arabic: "يَا أَيُّهَا النَّاسُ اتَّقُوا رَبَّكُمُ الَّذِي خَلَقَكُم مِّن نَّفْسٍ وَاحِدَةٍ وَخَلَقَ مِنْهَا زَوْجَهَا",
      verse: "O mankind, fear your Lord, who created you from one soul and created from it its mate.",
      reference: "Surah An-Nisa 4:1"
    }
  },
  invitation: "With hearts full of gratitude to Allah, we joyfully invite you to share in the blessing of our union — a celebration of love woven by faith, family, and forever.",
  closingNote: "Your presence and duas would mean the world to us as we begin this blessed journey together.",
  thankYou: "Thank you for sharing in our joy.",
  venue: {
    name: "PV Regency",
    location: "Veliancode, Malappuram",
    address: "PV Regency, Veliancode, Malappuram, Kerala",
    mapEmbed: "https://www.google.com/maps?q=PV+Regency+Veliancode+Malappuram&output=embed",
    directionsUrl: "https://www.google.com/maps/dir/?api=1&destination=PV+Regency+Veliancode+Malappuram",
    mapsUrl: "https://www.google.com/maps/search/?api=1&query=PV+Regency+Veliancode+Malappuram"
  },
  music: {
    url: "/music/nasheed.mp3",
    volume: 0.3
  }
};
gsapWithCSS.registerPlugin(useGSAP, ScrollTrigger, Flip);
const $$splitComponentImporter = () => import("./index-BWfeky83.mjs");
const Route = createFileRoute("/")({
  head: () => ({
    meta: [{
      title: wedding.meta.title
    }, {
      name: "description",
      content: wedding.meta.description
    }, {
      property: "og:title",
      content: wedding.meta.ogTitle
    }, {
      property: "og:description",
      content: wedding.meta.ogDescription
    }]
  }),
  component: lazyRouteComponent($$splitComponentImporter, "component")
});
const IndexRoute = Route.update({
  id: "/",
  path: "/",
  getParentRoute: () => Route$1
});
const rootRouteChildren = {
  IndexRoute
};
const routeTree = Route$1._addFileChildren(rootRouteChildren)._addFileTypes();
const getRouter = () => {
  const queryClient = new QueryClient();
  const router2 = createRouter({
    routeTree,
    context: { queryClient },
    scrollRestoration: true,
    defaultPreloadStaleTime: 0
  });
  return router2;
};
const router = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  getRouter
}, Symbol.toStringTag, { value: "Module" }));
export {
  router as r,
  wedding as w
};
