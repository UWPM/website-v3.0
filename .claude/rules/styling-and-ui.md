# Styling & UI Guidelines

This rule governs CSS architecture, design tokens, responsive breakpoints, and animation standards for the UWPM Website.

---

## 1. CSS Organization

- **File Structure:** Maintain stylesheets in `src/styles/` matching their corresponding page or component (e.g., `Home.css`, `About.css`, `Navbar.css`, `EventsV4.css`).
- **Class Naming:** Use clear BEM-like or descriptive prefixed class names (e.g., `.about-values-grid`, `.team-card__image-wrapper`, `.events-v4-timeline`) to avoid global CSS collisions.
- **No Inline Style Clutter:** Avoid writing complex multi-property inline style objects (`style={{ display: 'flex', ... }}`). Use defined CSS classes to maintain readability and clean separation of concerns.

---

## 2. Responsive Design Standards

All layouts must provide first-class responsive fidelity across three core tiers:

| Device Tier | Breakpoint Query | Key Layout Considerations |
| :--- | :--- | :--- |
| **Mobile** | `@media (max-width: 767px)` | Single-column grids, collapse nav to hamburger, thumb-friendly tap targets (>= 44px), prevent horizontal scroll |
| **Tablet** | `@media (min-width: 768px) and (max-width: 1023px)` | Two-column cards, adjusted font scaling, comfortable gutters |
| **Desktop** | `@media (min-width: 1024px)` | Full multi-column grid, max-width content containers (e.g. 1200px–1400px centered), hover micro-interactions |

---

## 3. Brand & Visual Aesthetics

- **Visual Polish:** UWPM branding combines clean modern typography, intentional whitespace, and organic paper-texture layerings behind photos/cards.
- **Interactive Micro-Animations:**
  - Provide smooth hover transitions for cards, buttons, and links (`transition: transform 0.25s ease, box-shadow 0.25s ease`).
  - Always support keyboard accessibility with clear `:focus-visible` styling.
- **Media Optimization:**
  - Place raster photos (team photos, event captures) in `src/images/` and ensure files are appropriately compressed.
  - Use vector SVGs for icons, badges, and company logos whenever possible for crisp high-DPI rendering.

---

## 4. GSAP & Animation Safety

When utilizing GSAP timelines or `ScrollTrigger` for scroll-driven animations:
1. Always wrap GSAP initialization inside `useEffect` using `gsap.context()` with a container `ref`.
2. Always return a cleanup function (`return () => ctx.revert();`) to tear down triggers and prevent duplicate listeners upon route navigation or hot reloads.
3. Ensure animations degrade gracefully if JavaScript is restricted or when users have `prefers-reduced-motion: reduce` enabled.
