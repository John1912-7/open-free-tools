import { readFile } from "node:fs/promises";
import { join } from "node:path";

const languages = ["en", "ru", "de", "es", "hy"];
const baseUrl = "https://john1912-7.github.io/open-free-tools";
const routes = [
  "",
  "tools",
  "about",
  "tools/midi-piano-trainer",
  "tools/audio-to-midi",
  "tools/open-transcription-studio",
  "blog",
  "donate",
  "contribute",
  "privacy",
  "legal",
  "contact",
];

const pages = [
  ...routes.map((route) => route),
  ...languages.flatMap((lang) => routes.map((route) => join(lang, route))),
];

const failures = [];

for (const page of pages) {
  const file = page ? join(page, "index.html") : "index.html";
  const html = await readFile(file, "utf8").catch(() => "");
  const normalizedPage = page.replaceAll("\\", "/");
  const parts = normalizedPage.split("/").filter(Boolean);
  const hasLanguagePrefix = languages.includes(parts[0]);
  const route = hasLanguagePrefix ? parts.slice(1).join("/") : normalizedPage;

  if (!html) {
    failures.push(`${file}: missing`);
    continue;
  }

  for (const pattern of [
    /<title>[^<]+<\/title>/,
    /<meta name="description" content="[^"]+"/,
    /<meta name="google-site-verification" content="IKltP1oUj7Y3BJdkTE2-DUNCvV29QHhHrTNKxxtqPhs"/,
    /<h1>[^<]+<\/h1>/,
    /<link rel="canonical" href="https:\/\/john1912-7\.github\.io\/open-free-tools\//,
    /https:\/\/www\.googletagmanager\.com\/gtag\/js\?id=G-EFDCRJY776/,
    /gtag\("config", "G-EFDCRJY776"\)/,
    /<script type="application\/ld\+json">/,
  ]) {
    if (!pattern.test(html)) failures.push(`${file}: failed ${pattern}`);
  }

  for (const bad of ["ru-RU", "de-DE", "es-ES", "hy-AM"]) {
    if (html.includes(`hreflang="${bad}"`)) failures.push(`${file}: country hreflang ${bad}`);
  }

  const xDefaultUrl = `${baseUrl}/${route ? `${route}/` : ""}`;
  if (!html.includes(`hreflang="x-default" href="${xDefaultUrl}"`)) {
    failures.push(`${file}: x-default does not preserve route ${route || "/"}`);
  }

  for (const lang of languages) {
    const localizedUrl = `${baseUrl}/${lang}/${route ? `${route}/` : ""}`;
    if (!html.includes(`hreflang="${lang}" href="${localizedUrl}"`)) {
      failures.push(`${file}: ${lang} hreflang does not preserve route ${route || "/"}`);
    }
  }
}

const sitemap = await readFile("sitemap.xml", "utf8");
for (const lang of languages) {
  if (!sitemap.includes(`/open-free-tools/${lang}/`)) {
    failures.push(`sitemap.xml: missing ${lang}`);
  }
}

for (const pattern of [/<lastmod>\d{4}-\d{2}-\d{2}<\/lastmod>/, /<changefreq>/, /<priority>/]) {
  if (!pattern.test(sitemap)) failures.push(`sitemap.xml: failed ${pattern}`);
}

if (failures.length) {
  console.error(failures.join("\n"));
  process.exit(1);
}

console.log(`Verified ${pages.length} pages.`);
