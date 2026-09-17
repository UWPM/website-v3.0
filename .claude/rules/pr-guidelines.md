# Pull Request Guidelines & Review Standards

This rule governs pull request quality, description standards, visual proof requirements, and review etiquette for the UWPM Website.

---

## 1. High Standard for Pull Requests

Every pull request submitted to this repository represents the UWPM brand and engineering bar. PRs must be self-contained, well-documented, and thoroughly verified before requesting review.

---

## 2. PR Title Convention

Follow the Conventional Commits format for PR titles:
- `feat: <imperative summary>` — New features, components, or UI redesigns
- `fix: <imperative summary>` — Bug fixes, responsive alignment corrections, broken links
- `refactor: <imperative summary>` — Structural code improvements without visual or functional changes
- `style: <imperative summary>` — CSS polish, spacing, typography adjustments
- `chore: <imperative summary>` — Dependency upgrades, config updates, asset additions
- `test: <imperative summary>` — Adding or updating unit tests

*Example:* `feat: add interactive team member modal with paper texture card backing`

---

## 3. Required PR Structure

Every PR description must follow the project template (`.github/pull-request-template.md`) and include:

### 1. Summary & Motivation
Briefly explain the goal of the change and the user/visitor problem it solves.

### 2. Detailed Changes
Bullet list of specific files, components, or styles modified, added, or removed.

### 3. Visual Proof (MANDATORY for UI changes)
For **any** visual, layout, or CSS modification, you **MUST** attach visual proof:
- **Desktop screenshot/recording** (viewport >= 1200px)
- **Mobile screenshot/recording** (viewport <= 480px, e.g. iPhone 14 / Pixel)
- Demonstrations of interactive states (hover effects, modal open/close, carousel scrolling)

### 4. Verification Evidence
Detail the manual verification steps performed and confirm automated checks passed:
- [x] `npm run lint` passes with 0 errors
- [x] `npm test -- --watchAll=false` passes
- [x] `npm run build` succeeds without bundle errors

---

## 4. Pre-PR Checklist

Before opening or requesting review on a PR:
- [ ] Responsive behavior tested on mobile, tablet, and desktop viewports
- [ ] No console errors or uncaught warnings in developer tools
- [ ] No dead code, debug logs (`console.log`), or commented-out code blocks
- [ ] CSS class names are scoped/clean and do not clash globally
- [ ] Assets are compressed and placed in `src/images/` or `public/`
- [ ] Code formatted with `npm run format-code`
