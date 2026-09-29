---
name: editorial-dark-ui
description: >-
  Design guidelines and token architecture for high-end editorial, dark-mode, and studio aesthetics.
  Use when designing layouts, picking color palettes, setting up typography systems, borders, or
  crafting a luxury digital lab aesthetic like Lokin Labs and Fey.
---

# Editorial Dark UI & Design Tokens

This skill guides the creation of high-end, editorial digital lab interfaces combining deep organic dark tones, delicate borders, tactile textures, and refined typography.

## 1. Palette & Tone Science (Derived from Lokin Labs & Fey)

Avoid sterile pure `#000000` / `#ffffff` unless strictly functional. Prefer organic, rich undertones:

- **Deep Surfaces**:
  - `bg-base`: `#090a07` (deep botanical black with subtle warm olive undertone)
  - `bg-surface`: `#11130d` (raised surface)
  - `bg-card`: `#161911` (interactive card background)
  - `bg-card-hover`: `#1d2117`
  - `bg-subtle`: `rgba(255, 255, 255, 0.03)`
- **Accents (Fey Heritage)**:
  - `terra`: `#d44a5d` / `#7a1c2e` (terracotta / oxblood red — primary brand punch)
  - `gold`: `#d4a348` / `#a67c1e` (antique ochre / burnished gold — secondary prestige)
  - `olive`: `#788a4e` / `#444e2c` (botanical sage / olive — organic grounding)
- **Text Hierarchies**:
  - Primary: `#f4efe6` (warm parchment cream)
  - Secondary: `#a6ab99` (soft muted sage gray)
  - Tertiary / Muted: `#6b7060` (quiet metadata)
- **Delicate Borders**:
  - `border-subtle`: `rgba(244, 239, 230, 0.08)`
  - `border-hover`: `rgba(244, 239, 230, 0.18)`
  - `border-accent`: `rgba(212, 163, 72, 0.25)`

## 2. Typographic Pairing

1. **Space Grotesk**: Brand titles, hero headlines, bold numerals, technical confidence.
2. **Lora**: Editorial subheadings, philosophical manifestos, literary quotes, scholarly punch.
3. **Inter**: Clean, legible body copy, navigation labels, UI button copy.
4. **IBM Plex Mono / JetBrains Mono**: Metadata, status badges, version numbers, dates, tech tags (`text-[10px] uppercase tracking-wider`).

## 3. Surface & Elevation Rules

- Use `1px` border dividers with low opacity (`border-white/[0.08]`) rather than heavy drop shadows.
- Employ subtle background radial gradients (`radial-gradient(ellipse at top, rgba(212,74,93,0.08), transparent 70%)`) to create atmosphere.
- Utilize subtle backdrop blur (`backdrop-blur-md bg-black/40`) on floating navbars and modals.
