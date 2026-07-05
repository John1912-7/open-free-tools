# Promotion Outbox

This folder stores generated promotion packets before they are published or queued.

Each packet should use this filename pattern:

`YYYY-MM-DD-channel-topic.md`

Each packet should include:

- title;
- channel;
- target URL with UTM;
- body text;
- asset checklist;
- safety check;
- publish status;
- result notes after publishing.

Allowed statuses:

- `ready`
- `published`
- `blocked`
- `manual_or_later`
