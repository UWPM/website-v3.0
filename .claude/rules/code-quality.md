# Code Quality Standards

This rule governs React code standards, formatting, accessibility, and quality requirements for the UWPM Website.

---

## 1. React Component Architecture

1. **Single-Responsibility Principle:**
   - Keep components focused. When a component exceeds ~200 lines or manages unrelated sub-sections, extract reusable pieces into `src/components/`.
   - Feature-specific component groups belong in dedicated subdirectories (e.g., `src/components/eventsV4/`).
2. **Predictable Hooks Usage:**
   - Keep hook dependency arrays exhaustive and accurate.
   - Avoid unnecessary component re-renders. Use `useCallback` or `useMemo` where expensive computations or object/function identity in effect dependencies justify it.
3. **Props & Default Values:**
   - Destructure props cleanly at the top of the component declaration.
   - Provide clear fallback defaults for optional props (e.g., `const MyCard = ({ title = '', items = [] }) => { ... }`).
4. **No Dead or Commented-Out Code:**
   - Delete obsolete JSX blocks, orphaned variables, and unused imports. Do not leave commented-out code in files.

---

## 2. Semantic HTML & Accessibility

1. **Semantic Elements:**
   - Use meaningful semantic tags instead of generic `<div>` soup:
     - Use `<header>`, `<nav>`, `<main>`, `<section>`, `<article>`, `<footer>`.
     - Use standard heading hierarchy (`<h1>` for page hero, `<h2>` for section titles, `<h3>` for cards).
2. **Interactive Elements:**
   - Clickable elements must be `<button>` or `<a>` (or `Link` from `react-router-dom`), never an unadorned `div` with an `onClick`.
   - Provide `aria-label` for icon-only buttons (e.g., social icons, modal close buttons, carousel controls).
3. **Images:**
   - All `<img>` tags must include meaningful `alt` descriptions. Decorative elements should use `alt=""`.

---

## 3. Formatting & Linting Compliance

1. **Prettier Standards:**
   - Single quotes (`'example'`)
   - Semicolons enforced (`semi: true`)
   - 2-space indentation (`tabWidth: 2`)
   - Trailing commas everywhere (`trailingComma: "all"`)
   - Max print width: 80 characters
2. **ESLint Integration:**
   - Code must pass `npm run lint` cleanly with 0 errors or warnings.
   - Use `npm run format-code` and `npm run fix-code` to ensure automatic adherence.

---

## 4. State Management

- Keep state as local as possible.
- Avoid duplicate state that can be derived from existing props or state.
- For URL-driven state (active tabs, search filters, pagination), utilize React Router query parameters or route paths so views are shareable and bookmarkable.
