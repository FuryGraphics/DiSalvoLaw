// DiSalvo Law Office — SEO Component
// Injects JSON-LD schema markup into the document head

import { useEffect } from "react";
import { SITE } from "@/lib/siteData";

interface SEOProps {
  title?: string;
  description?: string;
  canonical?: string;
  schema?: object;
}

const BASE_TITLE = "DiSalvo Law Office | Criminal Defense Attorney Fresno, CA";
const BASE_DESC = "DiSalvo Law Office — Aggressive criminal defense in Fresno, CA. Attorney Mario DiSalvo has 20+ years of experience defending DUI, felony, domestic violence, and drug crime cases throughout the Central Valley. Free consultation 24/7.";

// LocalBusiness + Attorney schema
const LOCAL_BUSINESS_SCHEMA = {
  "@context": "https://schema.org",
  "@type": ["LegalService", "LocalBusiness"],
  "name": "DiSalvo Law Office",
  "description": BASE_DESC,
  "url": "https://www.disalvo-law.com",
  "telephone": SITE.phone,
  "email": SITE.email,
  "address": {
    "@type": "PostalAddress",
    "streetAddress": SITE.address,
    "addressLocality": SITE.city,
    "addressRegion": SITE.state,
    "postalCode": SITE.zip,
    "addressCountry": "US"
  },
  "geo": {
    "@type": "GeoCoordinates",
    "latitude": 36.8175,
    "longitude": -119.7941
  },
  "openingHoursSpecification": {
    "@type": "OpeningHoursSpecification",
    "dayOfWeek": ["Monday","Tuesday","Wednesday","Thursday","Friday","Saturday","Sunday"],
    "opens": "00:00",
    "closes": "23:59"
  },
  "priceRange": "$$",
  "areaServed": [
    { "@type": "City", "name": "Fresno" },
    { "@type": "City", "name": "Clovis" },
    { "@type": "City", "name": "Madera" },
    { "@type": "City", "name": "Visalia" },
    { "@type": "City", "name": "Tulare" },
    { "@type": "City", "name": "Hanford" },
    { "@type": "City", "name": "Merced" },
    { "@type": "City", "name": "Sanger" },
  ],
  "hasMap": "https://maps.google.com/?q=DiSalvo+Law+Office+Fresno+CA",
  "sameAs": [SITE.googleReviews]
};

export default function SEO({ title, description, canonical, schema }: SEOProps) {
  const fullTitle = title ? `${title} | DiSalvo Law Office` : BASE_TITLE;
  const fullDesc = description || BASE_DESC;

  useEffect(() => {
    // Update document title
    document.title = fullTitle;

    // Update meta description
    let metaDesc = document.querySelector('meta[name="description"]');
    if (!metaDesc) {
      metaDesc = document.createElement("meta");
      metaDesc.setAttribute("name", "description");
      document.head.appendChild(metaDesc);
    }
    metaDesc.setAttribute("content", fullDesc);

    // Canonical
    if (canonical) {
      let canonicalTag = document.querySelector('link[rel="canonical"]');
      if (!canonicalTag) {
        canonicalTag = document.createElement("link");
        canonicalTag.setAttribute("rel", "canonical");
        document.head.appendChild(canonicalTag);
      }
      canonicalTag.setAttribute("href", canonical);
    }

    // JSON-LD
    const schemaData = schema || LOCAL_BUSINESS_SCHEMA;
    const existingScript = document.getElementById("jsonld-schema");
    if (existingScript) existingScript.remove();
    const script = document.createElement("script");
    script.id = "jsonld-schema";
    script.type = "application/ld+json";
    script.textContent = JSON.stringify(schemaData);
    document.head.appendChild(script);

    return () => {
      const s = document.getElementById("jsonld-schema");
      if (s) s.remove();
    };
  }, [fullTitle, fullDesc, canonical, schema]);

  return null;
}
