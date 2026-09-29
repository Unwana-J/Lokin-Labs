---
name: warehouse-showcase-patterns
description: >-
  Architectural patterns and UX strategies for digital product lab warehouses,
  creative studio showcases, and portfolio catalogs.
  Use when organizing product grids, filter states, project cards, live status badges,
  and interactive previews.
---

# Warehouse & Studio Showcase Patterns

Patterns for organizing high-velocity, high-craft product laboratories (showcasing web apps, AI tools, games, research experiments, and open-source tooling).

## 1. Project Hierarchy Architecture

Organize catalog items with clear distinction between tiers:

1. **Flagship Products (Tier 1)**:
   - Example: **Fey** (`fey.lokinlabs.com.ng`)
   - Presentation: Full-bleed or 2-column spotlight feature, richer interactive preview, deeper story/thesis, live metrics or preview reel, direct CTA.
2. **Active Tools & Web Apps (Tier 2)**:
   - Presentation: Dynamic grid cards with live status ping (`Live`, `Beta`, `In Research`), category pill, tech stack badges, and launch button.
3. **Lab Experiments & Artifacts (Tier 3)**:
   - Presentation: Compact Bento grid cards, experimental prototypes, creative code demos, design tokens, or GitHub repos.

## 2. Card Anatomy for Studio Warehouses

Every product card should convey maximum signal with zero clutter:
- **Header**: Category tag (e.g. `EDUCATION & SYNTHESIS`, `AI ENGINE`, `GAME DESIGN`) + Live Status indicator (pulsing green dot for `LIVE`, amber for `BETA`, purple for `R&D`).
- **Visual Preview Area**: Clean screenshot, interactive 3D/canvas widget, or animated vector emblem with subtle hover zoom.
- **Title & One-Sentence Manifesto**: Clear, punchy description of the core problem solved.
- **Tech Stack Chips**: Distinct minimal tags (e.g., `Next.js`, `FastAPI`, `Web Audio`, `Framer Motion`).
- **Action Tray**: Primary live link CTA (`Launch App ↗`), GitHub/Docs link if open-source, or modal deep-dive preview.

## 3. Filtering & Navigation
- Real-time instant filtering with animated layout transitions (`layoutId` active pill):
  `All`, `Flagship`, `AI & Learning`, `Games & Play`, `Experiments`, `Open Source`.
- Quick search / Command-K palette for direct access across all projects, essays, and lab notes.
