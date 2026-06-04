import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import {
  Outlet,
  Link,
  createRootRouteWithContext,
  useRouter,
  HeadContent,
  Scripts,
} from "@tanstack/react-router";
import type { ReactNode } from "react";

import appCss from "../styles.css?url";

function NotFoundComponent() {
  return (
    <div className="flex min-h-screen items-center justify-center bg-[#F8F5F0] px-4">
      <div className="max-w-md text-center">
        <h1 className="font-display text-7xl text-[#0F5132]">404</h1>
        <h2 className="mt-4 font-display text-xl text-[#0F5132]">Page not found</h2>
        <p className="mt-2 text-sm text-[#0F5132]/70">
          The page you are looking for does not exist.
        </p>
        <div className="mt-6">
          <Link
            to="/"
            className="btn-gold inline-flex text-sm"
          >
            Return to invitation
          </Link>
        </div>
      </div>
    </div>
  );
}

function ErrorComponent({ error, reset }: { error: Error; reset: () => void }) {
  console.error(error);
  const router = useRouter();

  return (
    <div className="flex min-h-screen items-center justify-center bg-[#F8F5F0] px-4">
      <div className="max-w-md text-center">
        <h1 className="font-display text-xl text-[#0F5132]">Unable to load invitation</h1>
        <p className="mt-2 text-sm text-[#0F5132]/70">
          Something went wrong. Please try again or return home.
        </p>
        <div className="mt-6 flex flex-wrap justify-center gap-2">
          <button
            type="button"
            onClick={() => {
              router.invalidate();
              reset();
            }}
            className="btn-gold text-sm"
          >
            Try again
          </button>
          <a href="/" className="inline-flex items-center justify-center rounded-full border border-[#D4AF37]/50 px-5 py-3 text-sm text-[#0F5132]">
            Go home
          </a>
        </div>
      </div>
    </div>
  );
}

export const Route = createRootRouteWithContext<{ queryClient: QueryClient }>()({
  head: () => ({
    meta: [
      { charSet: "utf-8" },
      { name: "viewport", content: "width=device-width, initial-scale=1" },
      { title: "Anas & Fathima — Wedding Invitation" },
      {
        name: "description",
        content:
          "With gratitude to Allah — join Anas Akbar Ali and Fathima Kasim for their wedding celebration at PV Regency, Veliancode.",
      },
      { name: "theme-color", content: "#0f5132" },
      { property: "og:title", content: "Anas & Fathima — Wedding Invitation" },
      {
        property: "og:description",
        content:
          "You are cordially invited to celebrate the blessed union of Anas Akbar Ali and Fathima Kasim.",
      },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
    links: [
      { rel: "preconnect", href: "https://fonts.googleapis.com" },
      { rel: "preconnect", href: "https://fonts.gstatic.com", crossOrigin: "anonymous" },
      {
        rel: "stylesheet",
        href: "https://fonts.googleapis.com/css2?family=Cormorant+Garamond:ital,wght@0,400;0,500;0,600;0,700;1,400&family=Inter:wght@300;400;500;600&family=Scheherazade+New:wght@400;600;700&display=swap",
      },
      { rel: "stylesheet", href: appCss },
    ],
  }),
  shellComponent: RootShell,
  component: RootComponent,
  notFoundComponent: NotFoundComponent,
  errorComponent: ErrorComponent,
});

function RootShell({ children }: { children: ReactNode }) {
  return (
    <html lang="en">
      <head>
        <HeadContent />
      </head>
      <body>
        {children}
        <Scripts />
      </body>
    </html>
  );
}

function RootComponent() {
  const { queryClient } = Route.useRouteContext();

  return (
    <QueryClientProvider client={queryClient}>
      <Outlet />
    </QueryClientProvider>
  );
}
