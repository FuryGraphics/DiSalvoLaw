// Prerender the SPA to static HTML so crawlers see real content (H1, text,
// links) and correct, unique per-page <title>/description/canonical without
// running JS.
//
// Runs after `vite build`. Serves dist/public with an SPA fallback, drives a
// headless browser over every route, rewrites the document head with the
// route's own metadata, and writes the rendered HTML back into dist/public as
// clean-URL files (e.g. /pg/home -> pg/home.html).

import { createServer } from "node:http";
import { readFile, writeFile, mkdir } from "node:fs/promises";
import { existsSync } from "node:fs";
import { join, dirname, extname } from "node:path";
import { fileURLToPath } from "node:url";
import puppeteer from "puppeteer";

const __dirname = dirname(fileURLToPath(import.meta.url));
const DIST = join(__dirname, "..", "dist", "public");
const ORIGIN = "https://www.disalvo-law.com";
const PORT = 4317;

const PHONE = "(559) 442-1552";
const CTA = `Free consultation 24/7. Call ${PHONE}.`;

// LocalBusiness / Attorney structured data injected on every page.
const LOCAL_BUSINESS_SCHEMA = {
  "@context": "https://schema.org",
  "@type": ["LegalService", "LocalBusiness"],
  name: "DiSalvo Law Office",
  description:
    "Criminal defense law firm in Fresno, California led by attorney Mario DiSalvo. 20+ years defending DUI, felony, domestic violence, and drug crime cases.",
  url: ORIGIN,
  telephone: PHONE,
  email: "mario@disalvolaw.com",
  address: {
    "@type": "PostalAddress",
    streetAddress: "5151 N Palm Ave, Suite 100",
    addressLocality: "Fresno",
    addressRegion: "CA",
    postalCode: "93704",
    addressCountry: "US",
  },
  geo: { "@type": "GeoCoordinates", latitude: 36.8175, longitude: -119.7941 },
  openingHoursSpecification: {
    "@type": "OpeningHoursSpecification",
    dayOfWeek: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday", "Sunday"],
    opens: "00:00",
    closes: "23:59",
  },
  priceRange: "$$",
  areaServed: ["Fresno", "Clovis", "Madera", "Sanger", "Visalia", "Tulare", "Hanford", "Merced"].map(
    (name) => ({ "@type": "City", name })
  ),
};

const city = (name, slug) => ({
  path: `/pg/${slug}`,
  title: `${name} Criminal Defense Lawyer | DiSalvo Law Office`,
  description: `Criminal defense attorney serving ${name}, CA. Mario DiSalvo defends DUI, felony, drug, and domestic violence charges. ${CTA}`,
});

// Routes to prerender, each with unique metadata. Keep in sync with
// client/src/App.tsx and client/public/sitemap.xml.
const ROUTES = [
  {
    path: "/pg/home",
    title: "DiSalvo Law Office | Fresno Criminal Defense Attorney",
    description: `DiSalvo Law Office — Fresno criminal defense attorney Mario DiSalvo. Aggressive defense for DUI, felony, domestic violence & drug crimes. ${CTA}`,
  },
  {
    path: "/pg/about",
    title: "About Attorney Mario DiSalvo | DiSalvo Law Office",
    description: `Meet Fresno criminal defense attorney Mario DiSalvo — 20+ years defending clients across the Central Valley. ${CTA}`,
  },
  {
    path: "/pg/contact",
    title: "Contact DiSalvo Law Office | Fresno Criminal Defense",
    description: `Contact DiSalvo Law Office in Fresno, CA for a free criminal defense consultation. Available 24/7. Call ${PHONE} or visit 5151 N Palm Ave, Suite 100.`,
  },
  {
    path: "/pg/privacy-policy",
    title: "Privacy Policy | DiSalvo Law Office",
    description: "Privacy policy for DiSalvo Law Office, criminal defense attorney in Fresno, CA.",
  },
  {
    path: "/pg/terms-and-conditions",
    title: "Terms and Conditions | DiSalvo Law Office",
    description: "Terms and conditions for use of the DiSalvo Law Office website.",
  },
  {
    path: "/pg/criminal-defense-fresno",
    title: "Criminal Defense Attorney Fresno, CA | DiSalvo Law Office",
    description: `Facing criminal charges in Fresno? Attorney Mario DiSalvo defends misdemeanors and felonies — assault, drug crimes, weapons charges. ${CTA}`,
  },
  {
    path: "/pg/dui-defense-fresno",
    title: "DUI Defense Attorney Fresno, CA | DiSalvo Law Office",
    description: `Charged with DUI in Fresno? We challenge breathalyzer results, field sobriety tests, and unlawful stops to protect your license and freedom. ${CTA}`,
  },
  {
    path: "/pg/felony-defense-fresno",
    title: "Felony Defense Attorney Fresno, CA | DiSalvo Law Office",
    description: `Felony charges carry life-altering consequences. Fresno attorney Mario DiSalvo fights to reduce charges and secure acquittals. ${CTA}`,
  },
  {
    path: "/pg/domestic-violence-defense-fresno",
    title: "Domestic Violence Defense Attorney Fresno, CA | DiSalvo Law Office",
    description: `Accused of domestic violence in Fresno? Protect your rights and reputation with experienced defense attorney Mario DiSalvo. Free confidential consultation.`,
  },
  {
    path: "/pg/drug-crimes-fresno",
    title: "Drug Crimes Attorney Fresno, CA | DiSalvo Law Office",
    description: `Fresno drug crime defense — possession, distribution, and trafficking charges. Attorney Mario DiSalvo challenges illegal searches. ${CTA}`,
  },
  city("Fresno", "fresno-criminal-defense-lawyer"),
  city("Clovis", "clovis-criminal-defense-lawyer"),
  city("Madera", "madera-criminal-defense-lawyer"),
  city("Sanger", "sanger-criminal-defense-lawyer"),
  city("Visalia", "visalia-criminal-defense-lawyer"),
  city("Tulare", "tulare-criminal-defense-lawyer"),
  city("Hanford", "hanford-criminal-defense-lawyer"),
  city("Merced", "merced-criminal-defense-lawyer"),
];

const MIME = {
  ".html": "text/html; charset=utf-8",
  ".js": "text/javascript",
  ".css": "text/css",
  ".json": "application/json",
  ".svg": "image/svg+xml",
  ".png": "image/png",
  ".jpg": "image/jpeg",
  ".jpeg": "image/jpeg",
  ".webp": "image/webp",
  ".ico": "image/x-icon",
  ".woff": "font/woff",
  ".woff2": "font/woff2",
  ".xml": "application/xml",
  ".txt": "text/plain; charset=utf-8",
};

// Minimal static server with SPA fallback to index.html.
function startServer() {
  const server = createServer(async (req, res) => {
    try {
      const urlPath = decodeURIComponent(req.url.split("?")[0]);
      const filePath = join(DIST, urlPath);
      if (existsSync(filePath) && extname(filePath)) {
        const body = await readFile(filePath);
        res.writeHead(200, { "Content-Type": MIME[extname(filePath)] || "application/octet-stream" });
        res.end(body);
        return;
      }
      const body = await readFile(join(DIST, "index.html")); // SPA fallback
      res.writeHead(200, { "Content-Type": "text/html; charset=utf-8" });
      res.end(body);
    } catch (err) {
      res.writeHead(500);
      res.end(String(err));
    }
  });
  return new Promise((resolve) => server.listen(PORT, () => resolve(server)));
}

// Rewrite the head with this route's canonical, title, description and social
// tags. Runs in the page context after the app has rendered.
function applyHead({ origin, path, title, description, schema }) {
  const url = origin + path;
  document.title = title;

  const setMeta = (selector, attr, key, value) => {
    let el = document.head.querySelector(selector);
    if (!el) {
      el = document.createElement("meta");
      el.setAttribute(attr, key);
      document.head.appendChild(el);
    }
    el.setAttribute("content", value);
  };

  setMeta('meta[name="description"]', "name", "description", description);
  setMeta('meta[property="og:title"]', "property", "og:title", title);
  setMeta('meta[property="og:description"]', "property", "og:description", description);
  setMeta('meta[property="og:url"]', "property", "og:url", url);
  setMeta('meta[name="twitter:title"]', "name", "twitter:title", title);
  setMeta('meta[name="twitter:description"]', "name", "twitter:description", description);

  let canonical = document.head.querySelector('link[rel="canonical"]');
  if (!canonical) {
    canonical = document.createElement("link");
    canonical.setAttribute("rel", "canonical");
    document.head.appendChild(canonical);
  }
  canonical.setAttribute("href", url);

  document.getElementById("jsonld-schema")?.remove();
  const script = document.createElement("script");
  script.id = "jsonld-schema";
  script.type = "application/ld+json";
  script.textContent = JSON.stringify(schema);
  document.head.appendChild(script);
}

async function run() {
  if (!existsSync(join(DIST, "index.html"))) {
    console.error(`[prerender] ${DIST}/index.html not found — run vite build first.`);
    process.exit(1);
  }

  const server = await startServer();
  const browser = await puppeteer.launch({
    headless: true,
    args: ["--no-sandbox", "--disable-setuid-sandbox"],
  });

  try {
    for (const route of ROUTES) {
      const page = await browser.newPage();
      await page.goto(`http://localhost:${PORT}${route.path}`, {
        waitUntil: "networkidle0",
        timeout: 45000,
      });
      await page.waitForFunction(
        () => {
          const root = document.getElementById("root");
          return root && root.innerText && root.innerText.trim().length > 50;
        },
        { timeout: 30000 }
      );

      await page.evaluate(applyHead, {
        origin: ORIGIN,
        path: route.path,
        title: route.title,
        description: route.description,
        schema: LOCAL_BUSINESS_SCHEMA,
      });

      const html = await page.content();
      const outPath = join(DIST, `${route.path.replace(/^\//, "")}.html`);
      await mkdir(dirname(outPath), { recursive: true });
      await writeFile(outPath, "<!DOCTYPE html>\n" + html, "utf-8");

      const h1 = await page.$eval("h1", (el) => el.innerText).catch(() => "(none)");
      const words = (await page.$eval("#root", (el) => el.innerText).catch(() => "")).split(/\s+/).filter(Boolean).length;
      console.log(`[prerender] ${route.path}  h1="${h1.replace(/\s+/g, " ").slice(0, 34)}" words=${words}`);
      await page.close();
    }
  } finally {
    await browser.close();
    server.close();
  }
  console.log(`[prerender] done — ${ROUTES.length} routes.`);
}

run().catch((err) => {
  console.error(err);
  process.exit(1);
});
