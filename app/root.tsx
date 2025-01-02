import type { LinksFunction, MetaFunction } from "@remix-run/cloudflare";
import {
  Links,
  Meta,
  Outlet,
  Scripts,
  ScrollRestoration,
  useNavigate,
} from "@remix-run/react";
import { useEffect } from "react";
import { Organization, Person, WebSite, WithContext } from "schema-dts";
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
    { property: "og:image", content: "https://8bitswiser.com/social-card.png" },
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
    { name: "twitter:image", content: "https://8bitswiser.com/social-card.png" },
    { name: "twitter:card", content: "summary_large_image" },
    {
      name: "twitter:image:alt",
      content: "8 Bits Wiser is a premier technology consulting firm.",
    },
  ];
};

const personSchema: WithContext<Person> = {
  "@context": "https://schema.org",
  "@type": "Person",
  name: "Matt Trombley",
  url: "https://datamatt.io/",
  image: "https://datamatt.io/img/trombley_matthew_profile_picture.webp",
  sameAs: [
    "https://www.linkedin.com/in/iamdatamatt/",
    "https://github.com/iamdatamatt",
  ],
  jobTitle: "Technology Consultant",
  worksFor: {
    "@type": "Organization",
    name: "8 Bits Wiser",
  },
  description:
    "Technology consultant specializing in AI/ML and web development",
};

const websiteSchema: WithContext<WebSite> = {
  "@context": "https://schema.org",
  "@type": "WebSite",
  name: "8 Bits Wiser",
  url: "https://8bitswiser.com/",
};

const organizationSchema: WithContext<Organization> = {
  "@context": "https://schema.org",
  "@type": "Organization",
  name: "8 Bits Wiser",
  url: "https://8bitswiser.com",
  logo: "https://8bitswiser.com/8-bits-wiser.svg",
  sameAs: [
    "https://www.linkedin.com/in/iamdatamatt/",
    "https://github.com/iamdatamatt",
  ],
  contactPoint: {
    "@type": "ContactPoint",
    contactType: "customer support",
    email: "contact@8bitswiser.com",
  },
};

export default function App() {
  return (
    <html lang="en">
      <head>
        <meta charSet="utf-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <Meta />
        <Links />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(personSchema) }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(websiteSchema) }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(organizationSchema),
          }}
        />
        {/*
        <script
          async
          src={`https://www.googletagmanager.com/gtag/js?id=G-V2SF6WVWKH`}
        ></script>
        <script
          dangerouslySetInnerHTML={{
            __html: `
              window.dataLayer = window.dataLayer || [];
              function gtag(){dataLayer.push(arguments);}
              gtag('js', new Date());
              gtag('config', 'G-V2SF6WVWKH');
            `,
          }}
        />
        */}
      </head>
      <body>
        <Outlet />
        <ScrollRestoration />
        <Scripts />
      </body>
    </html>
  );
}

export function ErrorBoundary() {
  const navigate = useNavigate();

  useEffect(() => {
    navigate("/");
  }, [navigate]);

  return null;
}
