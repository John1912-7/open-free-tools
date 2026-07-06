# Discord Setup Plan

Server: `study music`

Server ID: `1521501520720298044`

Current channel:

https://discord.com/channels/1521501520720298044/1521501520720298047

Created project channels:

- `#welcome`: `1523372617187459195`
- `#announcements`: `1523372623415742524`
- `#audio-to-midi-feedback`: `1523372628826521758`
- `#support`: `1523372634937753743`
- `#auto-posts-log`: `1523372640612516129`

Initial setup messages:

- `#welcome` pinned message: `1523766733410664524`
- `#announcements` pinned message: `1523766743414210803`
- `#audio-to-midi-feedback` pinned message: `1523766752373244079`
- `#support` pinned message: `1523766760652931174`
- `#auto-posts-log` setup message: `1523766769511305489`

## Goal

Use Discord as the first owned community channel for Open Free Tools and MIDI Piano Trainer. The server should help collect real feedback, explain updates, and support future safe auto-posting through owned webhooks or a bot.

Public Discord channel copy should be English-first. Do not add Russian translations to pinned onboarding messages, channel topics, announcements, support prompts, or directory listing copy unless the user explicitly asks for a localized Discord channel later.

## Recommended Channel Structure

Start simple. Too many empty channels make a new server feel dead.

### Public Channels

- `#welcome` — short project intro, links, rules.
- `#announcements` — release notes, launch updates, important changes.
- `#midi-piano-trainer` — discussion about the trainer.
- `#audio-to-midi-feedback` — bad conversion reports, examples, quality feedback.
- `#demo-videos` — short clips, screenshots, before/after demos.
- `#support` — user questions, bugs, setup help.

### Internal / Admin Channels

- `#auto-posts-log` — automated messages from Codex/GitHub/webhook.
- `#content-calendar` — upcoming posts, video scripts, launch tasks.
- `#moderation-log` — deleted spam, warnings, rule notes.

## Recommended Roles

- `Admin` — full access.
- `Maintainer` — can post announcements, manage feedback, answer support.
- `Tester` — early users who test Audio-to-MIDI and report examples.
- `Member` — normal community member.

## Automation Rules

Allowed:

- Auto-post release notes to `#announcements`.
- Auto-post daily/weekly promotion summaries to `#auto-posts-log`.
- Auto-post links to new blog posts, GitHub releases, or changelogs.

Not allowed:

- No direct messages.
- No posting to other servers.
- No repeated promotional spam.
- No fake engagement.
- No browser/self-bot automation.

## Webhook Plan

Create one Discord webhook later for a dedicated automation channel, preferably:

`#auto-posts-log`

Keep the webhook URL private. Do not commit it to the repository.

When the webhook exists, store only this public metadata in the repo:

- server name;
- channel name;
- channel ID;
- allowed post types;
- rate limit rule.

## First Setup Checklist

1. Confirm whether current channel `1521501520720298047` should be renamed or kept.
2. ~~Create minimal public channels: `welcome`, `announcements`, `audio-to-midi-feedback`, `support`.~~
3. ~~Create internal channel: `auto-posts-log`.~~
4. ~~Add short rules: no spam, no copyrighted uploads, no harassment, no fake engagement.~~
5. ~~Add pinned links:~~
   - Open Free Tools hub;
   - MIDI Piano Trainer;
   - Audio-to-MIDI beta;
   - GitHub feedback issue.
6. Create webhook for `auto-posts-log` only after the channel exists.

## First Announcement Draft

Open Free Tools is starting with a free open-source MIDI Piano Trainer and an experimental Audio-to-MIDI beta.

You can:

- upload MIDI and practice with falling notes;
- upload a short clean piano recording and try converting it to MIDI;
- download the generated MIDI or open it in the trainer;
- report bad conversions so the tool can improve.

Audio-to-MIDI is still beta. Clean short piano works best. Noisy recordings and full songs may produce wrong notes.

Try it:

https://john1912-7.github.io/midi-piano-trainer/en/audio-to-midi/

Report bad conversions:

https://github.com/John1912-7/midi-piano-trainer/issues/new?template=audio-conversion-feedback.yml
