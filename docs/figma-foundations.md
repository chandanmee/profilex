# Figma Foundations — Token Reference

A practical reference to set up Figma Variables, Styles, and Component tokens that mirror this project’s Tailwind setup. Use this as the base for your design system.

## Overview
- Base styling uses Tailwind with dark mode via `class`.
- Brand colors: `primary` scale, neutral/dark scale: `dark` (semantic neutrals for dark theme).
- Fonts: `Inter` (sans), `Fira Code` (mono).
- Motion: `fade-in`, `slide-up`, `slide-down`.
- Common components: buttons (primary/outline), cards, sections, prose.

## Variable Collections
Create these Figma Variable collections. Each collection should include at least two modes: `Light`, `Dark`.

- Color
- Typography
- Spacing
- Radius
- Elevation
- Motion

## Modes
Define variables with two modes to support theming:
- Light: uses `bg-white`, `text-dark-700`, `primary-*`.
- Dark: uses `bg-dark-800`, `text-gray-100`, darker surfaces and adjusted text tokens.

Tailwind `darkMode: 'class'` maps to toggling `Dark` mode in Figma.

---

## Color Variables

Source: `tailwind.config.js`

### Primitive (Global) — Color.primary
Use these as primitive tokens in Figma:
- `Color/Primary/50` `#eef2ff`
- `Color/Primary/100` `#e0e7ff`
- `Color/Primary/200` `#c7d2fe`
- `Color/Primary/300` `#a5b4fc`
- `Color/Primary/400` `#818cf8`
- `Color/Primary/500` `#6366f1`
- `Color/Primary/600` `#4f46e5`
- `Color/Primary/700` `#4338ca`
- `Color/Primary/800` `#3730a3`
- `Color/Primary/900` `#312e81`
- `Color/Primary/950` `#1e1b4b`

### Primitive (Global) — Color.dark (Neutral for Dark Theme)
- `Color/Dark/100` `#d1d5db`
- `Color/Dark/200` `#9ca3af`
- `Color/Dark/300` `#6b7280`
- `Color/Dark/400` `#4b5563`
- `Color/Dark/500` `#374151`
- `Color/Dark/600` `#1f2937`
- `Color/Dark/700` `#111827`
- `Color/Dark/800` `#0f172a`
- `Color/Dark/900` `#0a0f1c`

### Semantic Color Tokens
Create semantic tokens by aliasing primitive values:
- `Color/Surface/Default` → Light: `#ffffff`, Dark: `Color/Dark/800`
- `Color/Surface/Card` → Light: `#ffffff`, Dark: `Color/Dark/700`
- `Color/Text/Primary` → Light: `Color/Dark/700`, Dark: `#f3f4f6` (Tailwind `gray-100`)
- `Color/Text/OnPrimary` → Light: `#ffffff`, Dark: `#ffffff`
- `Color/Brand/Primary` → `Color/Primary/600`
- `Color/Brand/Primary/Hover` → `Color/Primary/700`
- `Color/Border/Primary` → `Color/Primary/600`

---

## Typography Variables and Styles

Source: `tailwind.config.js`, `src/index.css`

### Primitive Font Families
- `Type/Font/Sans` → Inter
- `Type/Font/Mono` → Fira Code

### Semantic Text Styles
Create Figma Text Styles and bind to variables:
- `Text/H1` → Sans, Bold; size aligns to Tailwind `text-4xl` base (scale to larger at breakpoints in code; in Figma define base desktop as needed)
- `Text/H2` → Sans, Bold; `text-3xl`
- `Text/H3` → Sans, Bold; `text-2xl`
- `Text/H4` → Sans, Bold; `text-xl`
- `Text/H5` → Sans, Bold; `text-lg`
- `Text/H6` → Sans, Bold; `text-base`
- `Text/Body` → Sans, Regular; base body size
- `Text/Mono/Code` → Mono, Regular

Tip: If you prefer exact numbers, Tailwind defaults are commonly:
- `text-4xl` ≈ 36px, `5xl` ≈ 48px, `6xl` ≈ 60px
- `text-3xl` ≈ 30px, `2xl` ≈ 24px, `xl` ≈ 20px, `lg` ≈ 18px, `base` ≈ 16px

Bind these as Number variables if you want size variables; otherwise manage via Text Styles.

---

## Spacing Variables

Source: `src/index.css`

Use a simple 4px/8px-based scale, mapping to Tailwind usage seen in the code:
- `Space/2` → Tailwind `py-2` → 8px (0.5rem)
- `Space/6` → Tailwind `px-6` → 24px (1.5rem)
- `Space/16` → Tailwind `py-16` → 64px (4rem)
- `Space/24` → Tailwind `py-24` → 96px (6rem)

Define additional tokens as needed:
- `Space/0.5` 2px, `Space/1` 4px, `Space/2` 8px, `Space/3` 12px, `Space/4` 16px, `Space/6` 24px, `Space/8` 32px, `Space/12` 48px, `Space/16` 64px, `Space/24` 96px

Use these for padding, gaps, and layout spacing inside components.

---

## Radius Variables

Source: Tailwind classes in `src/index.css`
- `Radius/MD` → Tailwind `rounded-md` → 6px (0.375rem)
- `Radius/XL` → Tailwind `rounded-xl` → 12px (0.75rem)

Optional:
- `Radius/SM` → 4px
- `Radius/LG` → 8px
- `Radius/Full` → 999px

---

## Elevation (Shadow) Variables

Source: Tailwind classes
- `Elevation/MD` → Tailwind `shadow-md` (use a Figma Effect Style with a matching shadow)
- Optional additional levels: `Elevation/SM`, `Elevation/LG` as needed

Define Figma Effect Styles to match your chosen shadow presets.

---

## Motion Variables

Source: `tailwind.config.js`
- `Motion/FadeIn` → `duration: 500ms`, `easing: ease-in-out`
- `Motion/SlideUp` → `duration: 500ms`, `easing: ease-in-out`, `translateY: 20px → 0`
- `Motion/SlideDown` → `duration: 500ms`, `easing: ease-in-out`, `translateY: -20px → 0`

Add Figma Prototype variables or document these as motion specs for handoff.

---

## Component Tokens and States

Source: `src/index.css`

### Button — Primary
- Background → `Color/Brand/Primary`
- Text → `Color/Text/OnPrimary`
- Border → none
- Padding → `Space/6` (horizontal), `Space/2` (vertical)
- Radius → `Radius/MD`
- Hover → Background `Color/Brand/Primary/Hover`

### Button — Outline
- Background → transparent
- Text → `Color/Brand/Primary`
- Border → `Color/Border/Primary`
- Hover → Background `Color/Brand/Primary`, Text `Color/Text/OnPrimary`

### Card
- Background → `Color/Surface/Card`
- Text → inherits page text
- Radius → `Radius/XL`
- Elevation → `Elevation/MD`

### Section
- Vertical padding → `Space/16` (mobile), `Space/24` (desktop)

### Prose Headings
- `h2` → top `Space/12`, bottom `Space/6` (first child top spacing reduced to `0`)
- `h3` → top `Space/10` (≈40px), bottom `Space/5` (≈20px)
- `h4` → top `Space/8` (≈32px), bottom `Space/4` (≈16px)

---

## Iconography

Project usage:
- Inline SVG icons (`InlineIcons`) sized explicitly where needed (e.g., `w-5 h-5`).
- Theme toggles use Sun/Moon icons with size classes for consistency.

Figma recommendations:
- Establish standard sizes: `Icon/16`, `Icon/20`, `Icon/24`.
- Stroke width: `1.5px` default for outline icons.
- Color: bind to `Color/Text/Primary` or component-specific semantic tokens (e.g., button foreground).

---

## Implementation Steps in Figma

1. Create Collections
   - Add `Color`, `Typography`, `Spacing`, `Radius`, `Elevation`, `Motion`.

2. Add Modes
   - Create `Light` and `Dark` modes for color variables (surfaces, text, brand).

3. Define Variables
   - Input primary and dark scales exactly as hex values.
   - Set semantic color tokens by referencing primitives.
   - Add spacing/radius as number variables.
   - Add motion values as number variables (duration) and text notes (easing).

4. Create Styles
   - Text Styles: H1–H6, Body, Mono/Code, mapped to `Inter` and `Fira Code`.
   - Effect Styles: Elevation presets (shadow-md equivalent).

5. Bind Components
   - Buttons, cards, sections: bind fills, strokes, spacing, radii to variables.
   - Publish library when ready.

---

## Tailwind ↔ Figma Mapping Cheatsheet

- `bg-white` → `Color/Surface/Default (Light)`
- `dark:bg-dark-800` → `Color/Surface/Default (Dark)`
- `text-dark-700` → `Color/Text/Primary (Light)`
- `dark:text-gray-100` → `Color/Text/Primary (Dark)`
- `bg-primary-600` → `Color/Brand/Primary`
- `hover:bg-primary-700` → `Color/Brand/Primary/Hover`
- `border-primary-600` → `Color/Border/Primary`
- `rounded-md` → `Radius/MD`
- `rounded-xl` → `Radius/XL`
- `shadow-md` → `Elevation/MD`
- `px-6 py-2` → `Space/6`, `Space/2`
- `py-16 md:py-24` → `Space/16`, `Space/24`
- `text-4xl … text-base` → Text Styles H1–H6

---

## Notes and Next Steps
- If you want perfect dev handoff, mirror these in CSS variables (optional) and document variable names.
- Add component variants (Default, Hover, Disabled) as needed.
- Extend spacing and elevation scales once component library grows.