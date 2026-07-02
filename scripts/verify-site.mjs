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
  "blog/free-midi-piano-trainer",
  "blog/free-audio-to-midi-converter",
  "blog/how-to-convert-audio-to-midi",
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
const metadataByLanguage = new Map();

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

  const title = html.match(/<title>([^<]+)<\/title>/)?.[1]?.trim() || "";
  const description = html.match(/<meta name="description" content="([^"]+)"/)?.[1]?.trim() || "";
  const h1 = html.match(/<h1>([^<]+)<\/h1>/)?.[1]?.trim() || "";
  const bodyText = html
    .replace(/<script[\s\S]*?<\/script>/g, "")
    .replace(/<style[\s\S]*?<\/style>/g, "")
    .replace(/<[^>]+>/g, " ")
    .replace(/\s+/g, " ")
    .trim();

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

  if (title.length < 20 || title.length > 75) failures.push(`${file}: title length ${title.length}`);
  if (description.length < 70 || description.length > 180) failures.push(`${file}: description length ${description.length}`);
  if (h1.length < 8) failures.push(`${file}: h1 too short`);
  if (bodyText.length < 700) failures.push(`${file}: thin visible text ${bodyText.length}`);
  if (html.includes("???")) failures.push(`${file}: contains question-mark placeholder`);

  const languageKey = hasLanguagePrefix ? parts[0] : "x-default";
  if (languageKey !== "x-default") {
    if (!metadataByLanguage.has(languageKey)) {
      metadataByLanguage.set(languageKey, { title: new Map(), description: new Map(), h1: new Map() });
    }
    const bucket = metadataByLanguage.get(languageKey);
    for (const [key, value] of [["title", title], ["description", description], ["h1", h1]]) {
      const seen = bucket[key].get(value);
      if (seen) failures.push(`${file}: duplicate ${key} with ${seen}`);
      bucket[key].set(value, file);
    }
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
const robots = await readFile("robots.txt", "utf8").catch(() => "");

if (!robots.includes("User-agent: *")) failures.push("robots.txt: missing user agent");
if (!robots.includes("Allow: /")) failures.push("robots.txt: missing allow rule");
if (!robots.includes(`Sitemap: ${baseUrl}/sitemap.xml`)) failures.push("robots.txt: missing sitemap URL");

for (const lang of languages) {
  if (!sitemap.includes(`/open-free-tools/${lang}/`)) {
    failures.push(`sitemap.xml: missing ${lang}`);
  }
}

for (const page of pages) {
  const normalizedPage = page.replaceAll("\\", "/");
  const expected = `${baseUrl}/${normalizedPage ? `${normalizedPage}/` : ""}`;
  if (!sitemap.includes(`<loc>${expected}</loc>`)) {
    failures.push(`sitemap.xml: missing ${expected}`);
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
