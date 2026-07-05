# Project Plan for Codex

Before making major changes, read this file and keep the project aligned with:

1. free/open-source tools;
2. browser-first architecture;
3. English/Russian/German/Spanish/Armenian multilingual SEO;
4. AdSense-safe monetization;
5. legal separation from paid services we compare against;
6. early user acquisition through communities, demos, GitHub, and launch platforms.

## Mission

Open Free Tools is a hub for free, open-source, browser-first tools that compete with paid subscription workflows without copying protected brands, UI, assets, private APIs, or copyrighted materials.

Core functionality should remain free. Monetization should come from useful content, respectful ads, donations, sponsorships, and internal promotion of our own tools.

The current phase is storefront-first: the website should clearly explain the project, show live and unfinished tools honestly, connect existing projects, and build trust before every feature is production-ready.

## Supported Languages

- English: `/en/`, primary language for external SEO and launches.
- Russian: `/ru/`.
- German: `/de/`, European German but globally accessible.
- Spanish: `/es/`, European Spanish style but globally accessible.
- Armenian: `/hy/`.

Use language-only `hreflang`: `en`, `ru`, `de`, `es`, `hy`, plus `x-default`. Avoid country-only targeting such as `de-DE` or `es-ES` unless a future page is truly country-specific.

## Current Tools

- MIDI Piano Trainer: existing standalone project and first official tool.
- Audio to MIDI Converter: experimental feature inside MIDI Piano Trainer.
- Open Transcription Studio: planned separate future tool, not part of the MIDI codebase.

The hub may present these projects as part of one ecosystem, but working app code should stay separate until there is a strong maintenance reason to merge repositories.

## SEO Rules

- Every public page needs a unique title, meta description, h1, canonical URL, sitemap entry, useful text content, and mobile-friendly layout.
- Prefer short, descriptive URLs such as `/tools/audio-to-midi/`.
- Do not create thin or duplicated SEO pages.
- Build support pages and guides around real user tasks.
- Starter content themes:
  - Free MIDI Piano Trainer Online.
  - Free Audio to MIDI Converter.
  - How to Convert Audio to MIDI.
  - Best Free MIDI Piano Practice Tools.
  - Open Source Transcription Studio.
  - Free Transcription Tool Online.
  - Privacy-Friendly Transcription Tools.

## AdSense Rules

- Ads belong on the home page, tool landing pages, blog posts, guides, FAQ pages, and comparison pages.
- Do not place ads beside upload, play, convert, editor, or download controls.
- Do not use popups, interstitials, misleading layouts, or accidental-click patterns.
- Before applying for AdSense, the project should have Privacy, Legal/Disclaimer, Contact, About/Mission, sitemap, robots.txt, Search Console, Analytics, and several useful content pages.

## Legal Rules

- Do not copy names, logos, layouts, texts, demo files, assets, private APIs, paid features, DRM-protected behavior, login-gated content, or subscription bypasses.
- Allowed positioning: “open-source alternative to X” in fair comparison contexts.
- Avoid positioning like “free copy of X”, “cracked version”, or “same as X but free”.
- Always make clear that Open Free Tools is independent and not affiliated with paid services mentioned in comparisons.

## Hosting Rules

- Prefer static hosting: Netlify Free, Cloudflare Pages, or GitHub Pages for static demos/docs.
- Use Supabase Free only for simple auth/database needs.
- Use Cloudflare Workers only for light APIs.
- Use Oracle Always Free, Render, or Hugging Face Spaces cautiously for experimental compute.
- Avoid making paid backend infrastructure required for core workflows.
- Avoid Vercel Hobby for commercial monetized deployment.

## Early User Acquisition Plan

Do not wait for Google search at launch. First users should come from focused communities and visible demos.

Channels:

- Reddit: piano, MIDI, music production, open-source, self-hosted, and webdev communities. Check each subreddit’s rules, disclose authorship, and ask for feedback instead of dropping spam links.
- Discord: music, piano, MIDI, creator, open-source, and self-hosted servers. Post only in allowed showcase/feedback/promo channels. Do not send unsolicited DMs.
- TikTok, YouTube Shorts, Instagram Reels: short demos such as “audio -> MIDI -> falling notes” and “practice any MIDI file in your browser”.
- Hacker News Show HN: use only when the tool is stable enough to open and test immediately.
- Product Hunt: use after landing page, screenshots, demo, and tagline are ready.
- AlternativeTo: add stable tools as free/open-source alternatives.
- GitHub: use topics, releases, screenshots, good first issues, and feedback issues.

Anti-spam rules:

- Owned-channel automation is allowed only through official project access and safe platform-supported workflows.
- Do not automate posting into external communities in V1.
- Do not buy or coordinate fake votes.
- Do not mass-post identical copy.
- Always disclose that the project is ours.
- First launch goal is feedback, not ads.

## Launch Kit for Each Tool

Each tool should have:

- one short pitch;
- screenshots or a short demo video;
- copy variants for Reddit/Discord, Show HN/Product Hunt, and short-form video captions;
- owned-channel drafts for blog, GitHub, project social accounts, RSS/changelog, and the project Discord server;
- a GitHub feedback issue;
- a changelog or release note;
- links to try, give feedback, star on GitHub, support, and share.

## How to Add a New Tool

1. Add the tool to the generator data in `scripts/generate-site.mjs`.
2. Create landing, catalog, support/guide, and legal-safe comparison content.
3. Add the tool to the sitemap through the generator.
4. Add launch kit notes to this file if the tool has a new audience.
5. Keep the working app separate unless there is a strong reason to merge codebases.

## What Not To Do

- Do not merge unrelated tools into MIDI Piano Trainer.
- Do not block core features behind payment.
- Do not make ads interfere with active tool workflows.
- Do not copy paid services’ identity or protected behavior.
- Do not create pages only for keywords without useful content.
