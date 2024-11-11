import type { LinksFunction, MetaFunction } from "@remix-run/cloudflare";
import {
  Links,
  Meta,
  Outlet,
  Scripts,
  ScrollRestoration,
} from "@remix-run/react";
import { SchemaMarkup } from "./components/SchemaMarkup";
import "./tailwind.css";

export const links: LinksFunction = () => [
  {
    rel: "icon",
    type: "image/png",
    href: "/favicon-96x96.png",
    sizes: "96x96",
  },
  { rel: "icon", type: "image/svg+xml", href: "/favicon.svg" },
  { rel: "shortcut icon", href: "/favicon.ico" },
  {
    rel: "apple-touch-icon",
    sizes: "180x180",
    href: "/apple-touch-icon.png",
  },
  { rel: "manifest", href: "/site.webmanifest" },
  { rel: "canonical", href: "https://8bitswiser.com" },
];

export const meta: MetaFunction = () => {
  return [
    { title: "8 Bits Wiser | Technology Consulting - AI/ML & Web Development" },
    {
      name: "description",
      content:
        "Expert technology consulting services specializing in AI/ML, data analytics, website development, and SEO optimization. Transform your business with custom solutions.",
    },
    { name: "apple-mobile-web-app-title", content: "8 Bits Wiser" },
    {
      property: "og:title",
      content: "8 Bits Wiser | Technology Consulting",
    },
    {
      property: "og:description",
      content:
        "Expert technology consulting services specializing in AI/ML, data analytics, website development, and SEO optimization.",
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
      content: "8 Bits Wiser is a premier technology consulting firm.",
    },
    { name: "twitter:title", content: "8 Bits Wiser | Technology Consulting" },
    {
      name: "twitter:description",
      content:
        "Expert technology consulting services specializing in AI/ML, data analytics, website development, and SEO optimization.",
    },
    { name: "twitter:image", content: "/social-card.png" },
    { name: "twitter:card", content: "summary_large_image" },
    {
      name: "twitter:image:alt",
      content: "8 Bits Wiser is a premier technology consulting firm.",
    },
  ];
};

export function Layout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <head>
        <meta charSet="utf-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <Meta />
        <Links />
        <SchemaMarkup />
        <ScrollRestoration />
        <Scripts />
        <noscript>
          <div className="text-center p-5">
            Please enable JavaScript to view this website.
          </div>
        </noscript>
      </head>
      <body>{children}</body>
    </html>
  );
}

export default function App() {
  return <Outlet />;
}
