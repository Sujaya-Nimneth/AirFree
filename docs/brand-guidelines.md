# AirFree — Brand Guidelines

> Source of truth for the AirFree identity. Design tokens in
> `assets/design-tokens.json` and Android resources in `app/src/main/res/values*`
> are derived from this document. Change this file first, then re-sync.

## Positioning

AirFree is a peer-to-peer file-sharing app for Android that speaks the Quick Share
/ Nearby Share wire protocol without depending on Google Play Services. It sends
and receives files directly between nearby devices over Wi-Fi LAN, Wi-Fi Direct,
Bluetooth and BLE.

**Brand promise:** share freely — no cables, no accounts, no cloud.

**One-liner:** Nearby file sharing, with nothing in the middle.

## Voice

### Personality traits

| Trait | Meaning | Not |
|---|---|---|
| Confident | States what the app does plainly | Arrogant / overclaiming |
| Friendly | Warm, human, unhurried | Cutesy / jokey |
| Knowledgeable | Precise about devices, permissions, states | Condescending / jargon-heavy |
| Liberating | Emphasises freedom from setup and lock-in | Anti-other-products |
| Calm | Quiet reassurance during transfers and errors | Alarmist |

### Tone spectrum

- Formal ←———————●———→ Casual (leans slightly casual)
- Simple ●———————————→ Complex (plain language first)
- Serious ←—————●—————→ Playful (measured, never silly)
- Reserved ←———●———————→ Expressive (expressive in visual design, reserved in copy)

### Voice rules

1. Say the action, then the reason. "Allow nearby devices to find this phone" before
   the permission rationale.
2. Name the state, not the error code. "Ready to receive", "Waiting for the other
   device", "Send paused — connection lost".
3. Never blame the user or the other device's manufacturer.
4. Use "AirFree" as a proper noun, always capitalised, never "airfree", "Air Free",
   or a possessive in UI copy ("AirFree is ready", not "AirFree's ready").
5. Avoid "simply", "just", "easy", "seamless".

### Sample copy

| Context | Use | Avoid |
|---|---|---|
| Home, receiver on | Ready to receive | You are discoverable |
| Send success | Sent successfully | File transferred OK! |
| Connection lost | Send paused — connection lost | Error 0x2F |
| Update available | AirFree 20261113.01 is available | New version on GitHub! |

## Messaging framework

- **Value proposition:** direct device-to-device sharing with no account, no cloud
  hop, and no Play Services dependency for the protocol.
- **Pillars:** (1) Direct — nothing in the middle; (2) Open — interoperates with
  stock Quick Share peers; (3) Private — files stay on the two devices.
- **Proof:** works across Wi-Fi LAN, Wi-Fi Direct, Bluetooth and BLE; 5 locales;
  no sign-in.
- **Audience:** Android users who move files between their own devices or with
  people nearby, including devices without Google Mobile Services.

## Visual identity

### Logo

- **Primary:** full wordmark "AirFree" in bold Inter with a three-arc "air wave"
  mark (three concentric arcs radiating from a point — the broadcasts that connect
  two devices).
- **Secondary:** the air-wave mark alone, for the Quick Settings tile and the
  adaptive launcher icon foreground.
- **Clear space:** minimum `0.5 ×` mark height on all sides.
- **Minimum size:** wordmark ≥ 72dp wide; mark alone ≥ 24dp.
- **Modes:** light-mode wordmark is deep ink; dark-mode wordmark is near-white.
  The launcher mark is always near-white on the sky-blue gradient background.

### Color palette

Aurora/sky gradient family with a warm amber action accent. Bold, expressive,
glassmorphic — high variance in composition, high legibility in text.

| Role | Light | Dark | Use |
|---|---|---|---|
| Primary (sky) | `#2563EB` | `#7DA9FF` | Active states, focus rings, links |
| Primary deep | `#1D4ED8` | `#4C7DF0` | Pressed / gradient anchor |
| Accent (aurora) | `#7C3AED` | `#A78BFA` | Gradient second stop, ambient pulse |
| CTA (amber) | `#D97706` | `#FBBF24` | Single most important action per view |
| Background | `#F5F8FF` | `#0B1020` | Page surface behind glass |
| Surface (glass) | `#FFFFFF` @ 72% | `#1B2440` @ 68% | Cards, sheets, nav pill |
| Surface border | `#FFFFFF` @ 55% | `#FFFFFF` @ 14% | 1dp hairline on glass |
| Text primary | `#0F172A` | `#F1F5FD` | Body, headings |
| Text secondary | `#475569` | `#AAB6CC` | Supporting copy |
| On primary | `#FFFFFF` | `#0B1020` | Text/icons on primary fills |
| Success | `#0D8626` | `#4ADE80` | Sent / connected |
| Error | `#DC2626` | `#F87171` | Failure / destructive |

Contrast gate: **≥ 4.5:1** for normal text against its composed (post-blur,
post-scrim) surface in **both** modes. Gradient backdrops are low-amplitude behind
text; amber CTA is only used with dark ink or white text that passes the gate.

### Typography

- **Family:** Inter (300 / 400 / 500 / 600 / 700).
- **Display:** 34sp / 700, tight tracking — hero wordmark and screen titles.
- **Heading:** 22sp / 700 — section headers.
- **Title:** 16sp / 600 — card titles, dialog titles.
- **Body:** 14sp / 400, line-height 1.5 — primary copy.
- **Label:** 12sp / 600 — tabs, chips, buttons (all-caps never required).
- **Caption:** 12sp / 400 — helper text, timestamps.
- CJK / Hangul / Japanese fall back to the system font; never force Inter on them.

### Spacing, radius, elevation, motion

- **Spacing:** 4dp base — 4 / 8 / 12 / 16 / 24 / 32 / 48dp.
- **Radius:** glass surfaces 24dp, cards 20dp, pills full, small controls 12dp.
- **Glass:** 10–20dp backdrop blur, 15–30% translucent fill, 1dp light border.
- **Motion:** fast 150ms (tap feedback), medium 300ms (entrance/exit), slow 450ms
  (stagger / ambient). Ambient pulse is continuous but low-amplitude. 1–2 animated
  elements per view maximum; every non-essential animation is disabled when the
  system animator scale is 0 / reduced motion is on.

### Iconography

- Vector-only, one family, 1.5–2dp consistent stroke, 24dp default,
  filled style for active nav / tile, outline for inactive.
- No emoji as structural icons. Icon-only controls always have a content
  description and a ≥48dp hit area with ≥8dp separation from neighbours.

## Consistency checklist

- [ ] Every screen uses semantic color tokens, never a raw hex in a layout.
- [ ] Light **and** dark contrast measured on the composed glass surface.
- [ ] One amber CTA per view; all other actions secondary/ghost.
- [ ] Wordmark clear space respected; launcher mark is the arc glyph, not text.
- [ ] All copy follows the voice rules; no "simply / just / easy / seamless".
- [ ] All 5 locales keep placeholders and proper nouns intact.
- [ ] Touch targets ≥48dp, safe-area insets respected, reduced motion honoured.

## Approval checklist

- [ ] Brand guidelines reviewed (this file).
- [ ] Tokens generated and validated (`design-system` / Astryx theme build).
- [ ] Android resources ported and app builds.
- [ ] Visual QA on small phone, landscape, largest font, light/dark, reduced motion.
- [ ] Zero old-brand strings and zero old-repo connections confirmed (Phase 6).
