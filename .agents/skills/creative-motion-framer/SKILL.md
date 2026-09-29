---
name: creative-motion-framer
description: >-
  Choreography, spring physics, and interaction patterns using Framer Motion.
  Use when implementing hero reveals, micro-interactions, spotlight hover cards,
  cursor effects, page transitions, and fluid UI animations.
---

# Creative Motion & Interaction (Framer Motion)

Design and orchestrate studio-grade animations that feel tactile, responsive, and organic rather than distracting or sluggish.

## 1. Timing & Physics Defaults

- **Snappy Spring** (hover, buttons, chips):
  ```ts
  transition: { type: "spring", stiffness: 400, damping: 25 }
  ```
- **Smooth Page / Section Reveal**:
  ```ts
  transition: { duration: 0.7, ease: [0.16, 1, 0.3, 1] } // Quintic easeOut
  ```
- **Stagger Children Containers**:
  ```ts
  variants: {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.08, delayChildren: 0.1 }
    }
  }
  ```

## 2. Signature Studio Interactions

### A. Spotlight Mouse-Tracker Card
Mouse movement dynamically highlights border and gradient overlay without triggering re-renders:
- Calculate `(clientX - rect.left)` and `(clientY - rect.top)` using `useMotionValue` or standard CSS variables `--mouse-x`, `--mouse-y`.
- Radial gradient mask over a subtle border highlight.

### B. Magnetic Buttons & Links
Gentle pull towards the cursor with spring physics on mouse proximity:
- Small translation `x`, `y` on hover (max `6px` - `12px`).

### C. Floating / Ambient Emblems
- Infinite subtle breath / pulse on focal icons:
  `animate={{ y: [-3, 3, -3] }} transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}`
- Glow pulsing on core emblems (like Fey's winged brain or Lokin Labs crest).

## 3. Performance & Accessibility
- Always wrap animations with `prefers-reduced-motion` compliance.
- Animate only `transform` (`x`, `y`, `scale`, `rotate`) and `opacity`.
- Utilize `layoutId` for smooth shared-element transitions between tabs or filters.
