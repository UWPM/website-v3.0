# Investigation & Verification Principles (No Assumptions)

This rule establishes the standard for researching, verifying, and validating code within the UWPM Website repository before proposing or executing modifications.

---

## 1. Always Verify Against Real Code

- **Never guess imports or package versions:** Check `package.json` to verify what packages are installed (`react-router-dom` v6, `gsap` 3, `@mui/material`, etc.) before using an API.
- **Inspect existing patterns:** Before creating a new card, navigation link, or layout component, inspect adjacent files in `src/components/` and `src/pages/` to follow established conventions.
- **Check existing CSS:** Search `src/styles/` for existing color variables, utility classes, and naming schemes before authoring new stylesheet rules.

---

## 2. Deep Diagnosis Before Asking

- If an unexpected error, layout shift, or build problem occurs:
  1. Inspect the relevant stylesheet, DOM hierarchy, and browser console output.
  2. Identify the root cause (e.g., CSS specificity collision, missing wrapper element, unclosed tag).
  3. Formulate a verified solution rather than making speculative guesses.

---

## 3. Verify Changes in Context

- Run `npm run lint` and `npm test` after modifying code to verify that changes adhere to project standards.
- Check responsive behavior across breakpoints to ensure no layout regressions.
