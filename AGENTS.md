# UWaterloo Product Management (UWPM) — Agent Guidelines

These guidelines apply to AI coding agents (Cursor, Antigravity, Claude, Codex) working within the **UWPM Website** (`website-v3.0`) repository.

---

## 1. Commit Policy (STRICT)

### Autonomous Commits Strictly Forbidden
- **Under NO circumstances should you execute `git commit`, create commits, push to remotes, or open PRs** unless explicitly commanded by the user:
  - *"commit this"*
  - *"make the commit"*
  - *"go ahead and commit"*
- When a task is complete, stop at code modification and verification. Leave staging and commits to the user.

### Mandatory End-of-Task Commit Proposal
At the end of **every** coding or configuration task, you **MUST** present the recommended Conventional Commit message, recommended branch name, and PR title:

```text
Recommended Commit:
  Branch:  <current-or-feature-branch>
  Message: <type>: <subject>
  PR Title: <type>: <subject>
```

- **Format:** `type: imperative subject` (e.g. `feat: implement responsive team profile modal`)
- **Allowed types:** `feat`, `fix`, `refactor`, `style`, `chore`, `docs`, `test`, `perf`
- **Rules:** Lowercase subject, imperative mood, max 100 characters, no emoji, no trailing period.
- **Attribution:** Never add AI co-authorship tags (`Co-authored-by: ...`).

---

## 2. Core Repository Information

- **Repo Name:** `website-v3.0` (UWPM Official Website)
- **Primary Branches:** `main` (production), `v4-dev` (active development)
- **Stack:** React 18, React Router v6, React-Bootstrap, Material UI (`@mui/material`), GSAP 3 + ScrollTrigger, Swiper, Jest + React Testing Library, ESLint + Prettier.
- **Language:** JavaScript (ES6+ with JSX and Babel parser).

---

## 3. Engineering & Code Standards

### Modularity & Architecture
- **Pages (`src/pages/`):** Route components responsible for view layout and orchestrating child components. Keep business logic modular.
- **Components (`src/components/`):** Reusable, encapsulated UI elements. Sub-features with multiple related components belong in a dedicated subfolder (e.g. `src/components/eventsV4/`).
- **Styles (`src/styles/`):** Maintain class-based stylesheets corresponding to each page/component. Avoid global CSS name collisions.

### Responsive Web Design
- Every layout change must be visually responsive across:
  - **Mobile:** `< 768px`
  - **Tablet:** `768px – 1024px`
  - **Desktop:** `> 1024px`
- Prevent horizontal scroll regressions and ensure readable typography on small screens.

### Code Cleanliness & Comment Philosophy
- **Self-Documenting Code:** Write self-explanatory components, descriptive function names, and readable JSX.
- **Zero Comment Clutter:** Do not write inline comments explaining standard JavaScript or React mechanics (e.g., `// state for open modal`, `// map over items`).
- **Explain "Why", Not "What":** Only retain comments that document non-obvious workarounds, third-party library constraints (e.g. GSAP ScrollTrigger refresh behaviors), or external asset quirks.
- **Zero Test Comments:** Never add explanatory comments inside test blocks. Test titles must describe the expectation.
- **No Dead Code:** Remove commented-out code blocks before finishing tasks.

---

## 4. Verification Workflow

Before reporting a task as complete, run and verify:

```bash
# Verify linting and formatting compliance
npm run lint

# Auto-format code with Prettier
npm run format-code

# Auto-fix linting issues with ESLint
npm run fix-code

# Run automated tests
npm test -- --watchAll=false

# Validate production build bundle
npm run build
```

---

## 5. Automated / Bot Reviewer Triage

When evaluating automated feedback (e.g., GitHub Action bot checks):
- **Adopt Real Quality Improvements:** Fix genuine bugs, broken links, accessibility oversights, syntax errors, and style regressions.
- **Dismiss Inconsistent Bot Noise:** If a bot suggestion contradicts established repository patterns or introduces unnecessary churn without user benefit, dismiss it with clear technical rationale.
