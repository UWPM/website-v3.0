# Feature & Code Removal Checks

When retiring features, redesigning sections, or refactoring components on the UWPM Website, developers frequently leave behind residue that causes bundle bloat, CSS conflicts, and technical debt.

Follow these checks whenever removing or refactoring code:

---

## 1. Dead CSS Residue
- **Symptom:** When a component or section is updated or deleted, its CSS classes remain in `src/styles/*.css`. Over time, these accumulate, increase bundle size, and cause naming collisions.
- **Action:**
  - Search `src/styles/` for class names tied to the deleted or refactored component.
  - Delete obsolete selectors, animations, keyframes, and media queries.
  - Run `npm run lint` to ensure no syntax regressions in CSS.

---

## 2. Incomplete Component Retirement
- **Symptom:** A developer removes a component's JSX from a page, but leaves behind:
  - Unused imports (`import OldBanner from '../components/OldBanner';`)
  - Unused local state variables or `useEffect` hooks
  - Unused helper utilities or event handlers
- **Action:**
  - Audit the parent component completely.
  - Remove unused state, props, refs, and imports.
  - Verify with `npm run lint` (ESLint flags unused variables and imports).

---

## 3. Orphaned Media Assets
- **Symptom:** Replacing photos, event graphics, sponsor logos, or paper textures often leaves the old asset files sitting in `src/images/` or `public/`.
- **Action:**
  - Search the codebase for occurrences of the old asset filename.
  - If no active component imports or references it, delete the obsolete asset file to preserve repository cleanliness.

---

## 4. Stale Route & Navigation References
- **Symptom:** A page path is renamed or removed, but links in `<Navbar>`, `<Footer>`, or social preview tags continue pointing to the legacy route.
- **Action:**
  - Check `src/App.js` for route definitions.
  - Check `src/components/Navbar.js` and `src/components/Footer.js` to ensure all internal links (`<Link to="...">`) match current routes.

---

## 5. Test Drift & Obsolete Assertions
- **Symptom:** Modifying UI copy or link destinations (e.g. changing button destination from external form to Linktree) causes tests to fail, or old tests continue asserting deprecated copy.
- **Action:**
  - Update `src/App.test.js` or co-located test files to reflect current UI copy and element roles.
  - Run `npm test -- --watchAll=false` to confirm all suites pass cleanly.
