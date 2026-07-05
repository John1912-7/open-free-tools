# Open Free Tools

Open Free Tools is a multilingual hub for free, open-source, browser-first tools.

The first live tool is MIDI Piano Trainer:

https://john1912-7.github.io/midi-piano-trainer/

## Goals

- Build useful free alternatives to subscription tools without copying brands, UI, assets, or private APIs.
- Keep core functionality free and open-source.
- Prefer static hosting and browser-side processing.
- Use backend services only when a task cannot reasonably run in the browser.
- Prepare the site for multilingual SEO, Google AdSense, donations, and community launches.

## Languages

The hub is generated for:

- English: `/en/`
- Russian: `/ru/`
- German: `/de/`
- Spanish: `/es/`
- Armenian: `/hy/`

Language targeting uses language-only `hreflang` values: `en`, `ru`, `de`, `es`, `hy`, plus `x-default`.

## Generate the Site

```bash
npm run build
npm run dev
npm run check
```

The generator writes static HTML pages, `sitemap.xml`, `robots.txt`, and shared CSS.
Use `npm run dev` for a local preview at `http://127.0.0.1:4273/`.

## GitHub Pages

The site is static and can be published from the repository root with GitHub Pages.

Recommended settings:

- Source: Deploy from a branch
- Branch: `main`
- Folder: `/ (root)`

The `.nojekyll` file is included so GitHub Pages serves generated folders and assets as plain static files.

## Project Memory

Before making major product or SEO changes, read:

```text
PROJECT_PLAN_FOR_CODEX.md
```

That file is the working memory for Codex and future contributors.

Before promotion or launch work, read:

```text
PROMOTION_PLAN_FOR_CODEX.md
marketing/content-calendar.md
marketing/owned-channels.md
launch-kits/midi-piano-trainer/README.md
```

Promotion starts with owned channels only: website/blog, GitHub, RSS/changelog, project social accounts, and an owned Discord server when configured.

## Storefront Mode

The current site is intentionally a public storefront first: it explains the mission, shows live and unfinished tools, links to existing projects, and prepares the project for SEO, community feedback, and future AdSense approval before every tool is fully complete.
