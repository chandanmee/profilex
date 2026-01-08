# Design System Guide

This document defines the design system used across the project. It covers color, typography, spacing, layout, elevation, motion, iconography, states, and accessibility. The project uses Tailwind CSS with custom theme extensions.

## Color System
- Theme source: `tailwind.config.js` → `theme.extend.colors`
- Palettes:
  - `primary`: `50–950` (indigo range; base `primary-600`)
  - `dark`: `100–900` (neutral range for dark surfaces)
- Usage guidelines:
  - Brand actions: `bg-primary-600` hover `bg-primary-700`, text `text-white`.
  - Accents/badges: `text-primary-400`, subtle backgrounds `bg-primary-100`.
  - Dark mode surfaces: `dark:bg-dark-800`, text `dark:text-gray-100`.
  - Borders: light `border-gray-200`, dark `dark:border-white/10`.
  - Gradients: Use Tailwind `bg-gradient-to-br` with `primary-*` and neutral tones.

## Typography
- Base families: `font-sans` = Inter, `font-mono` = Fira Code.
- Hierarchy (from `src/index.css`):
  - `h1`: `text-4xl md:text-5xl lg:text-6xl`
  - `h2`: `text-3xl md:text-4xl lg:text-5xl`
  - `h3`: `text-2xl md:text-3xl lg:text-4xl`
  - `h4`: `text-xl md:text-2xl lg:text-3xl`
  - `h5`: `text-lg md:text-xl lg:text-2xl`
  - `h6`: `text-base md:text-lg lg:text-xl`
- Body copy: default `text-dark-700` (light), `dark:text-gray-100` (dark).
- Guidance:
  - Always use semantic headings; avoid hardcoded sizes.
  - For code or UI labels, use `font-mono` sparingly.

## Spacing & Sizing
- Section rhythm: `.section` → `py-16 md:py-24`.
- Container: `.container` → `max-w-7xl px-4`.
- Buttons: `.btn` → `px-6 py-2 rounded-md`.
- Grid gaps: Prefer `gap-6`, `gap-10` for primary layouts.
- Component padding: Cards use `p-6–p-8` depending on density.

## Layout & Breakpoints
- Breakpoints: Tailwind defaults (`sm`, `md`, `lg`, `xl`).
- Patterns:
  - Hero split: `flex-col md:flex-row` with `gap-12`.
  - Marquee lists: use `.animate-marquee` utilities for smooth scrolling.
  - Effect isolation: `.effect-layer` for heavy visual layers.

## Elevation & Shadows
- Cards: `.card` → rounded XL with subtle shadow.
- Hover states: elevate with `hover:shadow-lg` or `hover:shadow-primary-500/20`.
- Border usage: light `border-gray-200`, dark `dark:border-white/10`.

## Motion
- Custom animations in Tailwind config:
  - `fade-in`: 0.5s ease-in-out.
  - `slide-up`, `slide-down`: 0.5s ease-in-out.
- Marquee animations in `index.css`:
  - `.animate-marquee`, `.animate-marquee-reverse` with 85s linear loops.
- Framer Motion: used for hero and section entrances; keep durations ≤0.8s.

## Iconography
- Above-the-fold icons: prefer inline SVGs in `src/components/InlineIcons.jsx` to reduce bundle size.
- Exceptions: `FaReact`, `FaNodeJs` in the hero are allowed for visual fidelity (scale with font-size).
- Sizing:
  - Inline SVGs: set explicit `w-*/h-*` sizes.
  - React Icons: rely on surrounding `text-*` for sizing or use `size={...}`.

## Components
- Buttons:
  - Primary: `.btn .btn-primary` (`bg-primary-600`, hover `bg-primary-700`).
  - Outline: `.btn .btn-outline` (`border-primary-600`, hover fill).
- Cards:
  - `.card` with content padding `p-6–p-8`, headline with `h3`.
- Badges:
  - Use rounded-full, `bg-primary-900/30`, text `text-primary-400`, bordered.

## States
- Hover: add `transition-all duration-300` consistently.
- Focus: for interactive elements, add `focus:ring-2 focus:ring-primary-400 focus:outline-none`.
- Disabled: reduce opacity and pointer events `opacity-50 pointer-events-none`.

## Themes
- Dark mode: `darkMode: 'class'` — toggle via `document.documentElement.classList.add('dark')`.
- Color usage in dark mode mirrors light mode with adjusted neutrals.

## Accessibility
- Color contrast: ensure ≥ 4.5:1 for text on backgrounds.
- Motion safety: keep large motion effects behind `.effect-layer` and low opacity.
- Semantics: use proper landmark roles and heading hierarchy.
- Keyboard: ensure focus-visible styles for clickable elements.

## Usage Mapping (Tailwind → Tokens)
- Brand action: `bg-primary-600 text-white hover:bg-primary-700`.
- Accent text: `text-primary-400`.
- Surface light: `bg-white` with `text-dark-700`.
- Surface dark: `dark:bg-dark-800 dark:text-gray-100`.
- Border: `border-gray-200` / `dark:border-white/10`.
- Headings: use `h1–h6` classes defined in `index.css`.
- Container/layout: `.container`, `.section`.

## Implementation Notes
- Keep new components consistent with these tokens.
- When introducing new colors, add them under `theme.extend.colors` in `tailwind.config.js` and use `text-*/bg-*/border-*` utilities.
- Prefer inline SVGs for performance unless a specific library icon is necessary.

## Future Enhancements
- Add CSS variables map for tokens (e.g., `:root { --color-primary-600: #6366f1; }`) to support non-Tailwind contexts.
- Document component variants for forms, modals, tooltips.
- Provide sample accessibility checklist per page.