import { readFile } from "node:fs/promises";
import { join } from "node:path";

const languages = ["en", "ru", "de", "es", "hy"];
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

  if (!html) {
    failures.push(`${file}: missing`);
    continue;
  }

  for (const pattern of [
    /<title>[^<]+<\/title>/,
    /<meta name="description" content="[^"]+"/,
    /<h1>[^<]+<\/h1>/,
    /<link rel="canonical" href="https:\/\/john1912-7\.github\.io\/open-free-tools\//,
  ]) {
    if (!pattern.test(html)) failures.push(`${file}: failed ${pattern}`);
  }

  for (const bad of ["ru-RU", "de-DE", "es-ES", "hy-AM"]) {
    if (html.includes(`hreflang="${bad}"`)) failures.push(`${file}: country hreflang ${bad}`);
  }
}

const sitemap = await readFile("sitemap.xml", "utf8");
for (const lang of languages) {
  if (!sitemap.includes(`/open-free-tools/${lang}/`)) {
    failures.push(`sitemap.xml: missing ${lang}`);
  }
}

if (failures.length) {
  console.error(failures.join("\n"));
  process.exit(1);
}

console.log(`Verified ${pages.length} pages.`);
