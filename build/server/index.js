import { jsx, jsxs, Fragment } from "react/jsx-runtime";
import { RemixServer, Outlet, Meta, Links, ScrollRestoration, Scripts } from "@remix-run/react";
import { isbot } from "isbot";
import { renderToReadableStream } from "react-dom/server";
import { useState, useEffect } from "react";
const ABORT_DELAY = 5e3;
async function handleRequest(request, responseStatusCode, responseHeaders, remixContext) {
  const controller = new AbortController();
  const timeoutId = setTimeout(() => controller.abort(), ABORT_DELAY);
  const body = await renderToReadableStream(
    /* @__PURE__ */ jsx(
      RemixServer,
      {
        context: remixContext,
        url: request.url,
        abortDelay: ABORT_DELAY
      }
    ),
    {
      signal: controller.signal,
      onError(error) {
        if (!controller.signal.aborted) {
          console.error(error);
        }
        responseStatusCode = 500;
      }
    }
  );
  body.allReady.then(() => clearTimeout(timeoutId));
  if (isbot(request.headers.get("user-agent") || "")) {
    await body.allReady;
  }
  responseHeaders.set("Content-Type", "text/html");
  return new Response(body, {
    headers: responseHeaders,
    status: responseStatusCode
  });
}
const entryServer = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  default: handleRequest
}, Symbol.toStringTag, { value: "Module" }));
const personSchema = {
  "@context": "https://schema.org",
  "@type": "Person",
  name: "Matt Trombley",
  url: "https://datamatt.io/",
  image: "https://datamatt.io/img/trombley_matthew_profile_picture.webp",
  sameAs: [
    "https://www.linkedin.com/in/iamdatamatt/",
    "https://github.com/iamdatamatt"
  ],
  jobTitle: "Technology Consultant",
  worksFor: {
    "@type": "Organization",
    name: "8 Bits Wiser"
  },
  description: "Technology consultant specializing in AI/ML and web development"
};
const websiteSchema = {
  "@context": "https://schema.org",
  "@type": "WebSite",
  name: "8 Bits Wiser",
  url: "https://8bitswiser.com/"
};
const organizationSchema = {
  "@context": "https://schema.org",
  "@type": "Organization",
  name: "8 Bits Wiser",
  url: "https://8bitswiser.com",
  logo: "https://8bitswiser.com/8-bits-wiser.svg",
  sameAs: [
    "https://www.linkedin.com/in/iamdatamatt/",
    "https://github.com/iamdatamatt"
  ],
  contactPoint: {
    "@type": "ContactPoint",
    contactType: "customer support",
    email: "contact@8bitswiser.com"
  }
};
function SchemaMarkup() {
  return /* @__PURE__ */ jsxs(Fragment, { children: [
    /* @__PURE__ */ jsx(
      "script",
      {
        type: "application/ld+json",
        dangerouslySetInnerHTML: { __html: JSON.stringify(personSchema) }
      }
    ),
    /* @__PURE__ */ jsx(
      "script",
      {
        type: "application/ld+json",
        dangerouslySetInnerHTML: { __html: JSON.stringify(websiteSchema) }
      }
    ),
    /* @__PURE__ */ jsx(
      "script",
      {
        type: "application/ld+json",
        dangerouslySetInnerHTML: { __html: JSON.stringify(organizationSchema) }
      }
    )
  ] });
}
const links = () => [
  {
    rel: "icon",
    type: "image/png",
    href: "/favicon-96x96.png",
    sizes: "96x96"
  },
  { rel: "icon", type: "image/svg+xml", href: "/favicon.svg" },
  { rel: "shortcut icon", href: "/favicon.ico" },
  {
    rel: "apple-touch-icon",
    sizes: "180x180",
    href: "/apple-touch-icon.png"
  },
  { rel: "manifest", href: "/site.webmanifest" },
  { rel: "canonical", href: "https://8bitswiser.com" }
];
const meta = () => {
  return [
    { title: "8 Bits Wiser | Technology Consulting - AI/ML & Web Development" },
    {
      name: "description",
      content: "Expert technology consulting services specializing in AI/ML, data analytics, website development, and SEO optimization. Transform your business with custom solutions."
    },
    { name: "apple-mobile-web-app-title", content: "8 Bits Wiser" },
    {
      property: "og:title",
      content: "8 Bits Wiser | Technology Consulting"
    },
    {
      property: "og:description",
      content: "Expert technology consulting services specializing in AI/ML, data analytics, website development, and SEO optimization."
    },
    { property: "og:url", content: "https://8bitswiser.com/" },
    { property: "og:locale", content: "en_US" },
    { property: "og:image", content: "/social-card.png" },
    { property: "og:type", content: "website" },
    { property: "og:site_name", content: "8 Bits Wiser" },
    { property: "og:image:type", content: "image/png" },
    { property: "og:image:width", content: "1200" },
    { property: "og:image:height", content: "630" },
    {
      property: "og:image:alt",
      content: "8 Bits Wiser is a premier technology consulting firm."
    },
    { name: "twitter:title", content: "8 Bits Wiser | Technology Consulting" },
    {
      name: "twitter:description",
      content: "Expert technology consulting services specializing in AI/ML, data analytics, website development, and SEO optimization."
    },
    { name: "twitter:image", content: "/social-card.png" },
    { name: "twitter:card", content: "summary_large_image" },
    {
      name: "twitter:image:alt",
      content: "8 Bits Wiser is a premier technology consulting firm."
    }
  ];
};
function Layout({ children }) {
  return /* @__PURE__ */ jsxs("html", { lang: "en", children: [
    /* @__PURE__ */ jsxs("head", { children: [
      /* @__PURE__ */ jsx("meta", { charSet: "utf-8" }),
      /* @__PURE__ */ jsx("meta", { name: "viewport", content: "width=device-width, initial-scale=1" }),
      /* @__PURE__ */ jsx(Meta, {}),
      /* @__PURE__ */ jsx(Links, {}),
      /* @__PURE__ */ jsx(SchemaMarkup, {}),
      /* @__PURE__ */ jsx(ScrollRestoration, {}),
      /* @__PURE__ */ jsx(Scripts, {}),
      /* @__PURE__ */ jsx("noscript", { children: /* @__PURE__ */ jsx("div", { className: "text-center p-5", children: "Please enable JavaScript to view this website." }) })
    ] }),
    /* @__PURE__ */ jsx("body", { children })
  ] });
}
function App() {
  return /* @__PURE__ */ jsx(Outlet, {});
}
const route0 = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  Layout,
  default: App,
  links,
  meta
}, Symbol.toStringTag, { value: "Module" }));
function Index() {
  const [isVisible, setIsVisible] = useState(false);
  useEffect(() => {
    setIsVisible(true);
  }, []);
  return /* @__PURE__ */ jsxs(
    "div",
    {
      className: `max-w-6xl mx-auto p-8 text-center ${isVisible ? "animate-fade-in" : "opacity-0"}`,
      children: [
        /* @__PURE__ */ jsx("div", { className: "flex justify-center items-center mb-8", children: /* @__PURE__ */ jsx(
          "img",
          {
            src: "/8-bits-wiser.svg",
            className: "logo hover:scale-110 transition-transform",
            alt: "8 Bits Wiser logo"
          }
        ) }),
        /* @__PURE__ */ jsx("h1", { className: "bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent", children: "8 Bits Wiser" }),
        /* @__PURE__ */ jsx("h2", { className: "text-gray-300", children: "Technology Consulting" }),
        /* @__PURE__ */ jsxs("div", { className: "space-y-2 mb-8", children: [
          /* @__PURE__ */ jsx("h3", { className: "text-gray-200", children: "AI/ML & Data Analytics" }),
          /* @__PURE__ */ jsx("h3", { className: "text-gray-200", children: "Website Development & SEO" })
        ] }),
        /* @__PURE__ */ jsx("div", { className: "card", children: /* @__PURE__ */ jsx(
          "button",
          {
            onClick: () => window.location.href = "mailto:contact@8bitswiser.com",
            className: "bg-gradient-to-r from-primary to-secondary text-white \n                     px-6 py-3 rounded-lg font-semibold shadow-lg\n                     hover:shadow-primary/50 hover:-translate-y-0.5 \n                     transition-all duration-300",
            children: "Get in Contact"
          }
        ) }),
        /* @__PURE__ */ jsx("p", { className: "copyright mt-8", children: "© 8 Bits Wiser. All rights reserved." })
      ]
    }
  );
}
const route1 = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  default: Index
}, Symbol.toStringTag, { value: "Module" }));
const serverManifest = { "entry": { "module": "/assets/entry.client-DJjRLgg0.js", "imports": ["/assets/jsx-runtime-56DGgGmo.js", "/assets/components-f-aVmGCt.js"], "css": [] }, "routes": { "root": { "id": "root", "parentId": void 0, "path": "", "index": void 0, "caseSensitive": void 0, "hasAction": false, "hasLoader": false, "hasClientAction": false, "hasClientLoader": false, "hasErrorBoundary": false, "module": "/assets/root-IBc_ZVZm.js", "imports": ["/assets/jsx-runtime-56DGgGmo.js", "/assets/components-f-aVmGCt.js"], "css": ["/assets/root-B4yLUxnw.css"] }, "routes/_index": { "id": "routes/_index", "parentId": "root", "path": void 0, "index": true, "caseSensitive": void 0, "hasAction": false, "hasLoader": false, "hasClientAction": false, "hasClientLoader": false, "hasErrorBoundary": false, "module": "/assets/_index-BqLDRcXA.js", "imports": ["/assets/jsx-runtime-56DGgGmo.js"], "css": [] } }, "url": "/assets/manifest-40def142.js", "version": "40def142" };
const mode = "production";
const assetsBuildDirectory = "build/client";
const basename = "/";
const future = { "v3_fetcherPersist": true, "v3_relativeSplatPath": true, "v3_throwAbortReason": true, "v3_singleFetch": true, "v3_lazyRouteDiscovery": true, "unstable_optimizeDeps": false, "unstable_routeConfig": false };
const isSpaMode = false;
const publicPath = "/";
const entry = { module: entryServer };
const routes = {
  "root": {
    id: "root",
    parentId: void 0,
    path: "",
    index: void 0,
    caseSensitive: void 0,
    module: route0
  },
  "routes/_index": {
    id: "routes/_index",
    parentId: "root",
    path: void 0,
    index: true,
    caseSensitive: void 0,
    module: route1
  }
};
export {
  serverManifest as assets,
  assetsBuildDirectory,
  basename,
  entry,
  future,
  isSpaMode,
  mode,
  publicPath,
  routes
};
