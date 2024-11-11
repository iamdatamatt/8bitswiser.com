import { Organization, Person, WebSite, WithContext } from "schema-dts";

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

export function SchemaMarkup() {
  return (
    <>
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
        dangerouslySetInnerHTML={{ __html: JSON.stringify(organizationSchema) }}
      />
    </>
  );
}
