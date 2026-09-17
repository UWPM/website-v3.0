# UWaterloo Product Management (UWPM) — Claude Guidelines

Welcome to the **UWPM Website** (`website-v3.0`) codebase. This repository powers the official website for the University of Waterloo Product Management Club (uwaterloopm.com).

---

## 1. Absolute Commit & Git Policy (STRICT)

### Autonomous Commits Prohibited
- **Under NO circumstances should you execute `git commit`, create commits, push to remotes, or open PRs** unless the user explicitly commands:
  - *"commit this"*
  - *"make the commit"*
  - *"go ahead and commit"*
- Complete implementation, styling, and verification, but leave git staging and commits to the user unless directly instructed.

### Mandatory End-of-Task Commit Message
At the conclusion of **every** task involving code or configuration changes, you **MUST** formulate and display the recommended commit message in Conventional Commits format, along with the proposed branch and PR title:

#### Format: Conventional Commits
- **Format:** `type: imperative subject`
  - Example: `feat: add animated team profile cards with modal bio preview`
  - Example: `fix: correct mobile navbar hamburger overlay positioning`
  - Example: `refactor: extract reusable event card component for v4 events`
- **Allowed Types (lowercase):** `feat`, `fix`, `refactor`, `style`, `chore`, `docs`, `test`, `perf`
- **Rules:**
  - Lowercase first letter of subject
  - No trailing period
  - Imperative mood (`add`, `fix`, `update` — not `added`, `fixes`, `updating`)
  - Maximum 100 characters
  - No emojis
  - **No AI co-author attribution:** Never add `Co-authored-by: Claude...` or mention AI assistance in commit messages or PRs.

#### Output Summary Block:
Always end your final response with:
```text
Recommended Commit:
  Branch:  <current-or-recommended-branch>
  Message: <type>: <subject>
  PR Title: <type>: <subject>
```

---

## 2. Technology Stack & Tooling

| Domain | Technology | Notes |
| :--- | :--- | :--- |
| **Framework** | React 18 (`react`, `react-dom`) | Single Page Application bootstrapped with CRA |
| **Routing** | React Router v6 (`react-router-dom`) | Route definitions in `src/App.js` & `src/index.js` |
| **UI & Styling** | Vanilla CSS + React-Bootstrap + MUI | CSS modules in `src/styles/`, `@mui/material`, `react-bootstrap` |
| **Animation** | GSAP 3 (`gsap`, `ScrollTrigger`) + Swiper | Scroll animations, marquee, carousels |
| **Testing** | Jest + `@testing-library/react` | Accessible queries (`getByRole`), DOM state assertions |
| **Formatting** | Prettier 3 | `singleQuote: true`, `semi: true`, `tabWidth: 2`, `trailingComma: "all"` |
| **Linting** | ESLint + `@babel/eslint-parser` | Configured via `.eslintrc` with Prettier integration |

---

## 3. Project Directory Architecture

```text
src/
├── components/          # Reusable UI components (Navbar, Header, Footer, CustomCard, etc.)
│   └── eventsV4/        # Sub-feature module for Events V4 experience
├── pages/               # Top-level route pages (Home.js, About.js, Events.js, Team.js, PMJobs.js, Contact.js)
├── styles/              # Dedicated CSS stylesheets matching pages & components
├── images/              # Static media assets, team photos, sponsor logos, paper textures
├── App.js               # Route orchestration & global providers
├── index.js             # Application root mount & BrowserRouter
└── setupTests.js        # Test environment configuration
```

---

## 4. Code Quality & Implementation Standards

### 1. Component Modularity & Cleanliness
- Keep components focused and single-purpose. When a component exceeds ~200 lines, evaluate decomposing sub-sections into dedicated helper components (e.g., `src/components/eventsV4/`).
- Do NOT place monolithic page state and 10 inline sub-elements in a single file. Extract presentational cards, modals, and lists into `src/components/`.

### 2. Styling & Responsive Design Fidelity
- **Mobile-First & Fully Responsive:** Every page and component must be tested across mobile (<768px), tablet (768px–1024px), and desktop (>1024px) viewports.
- Maintain CSS organization in `src/styles/` matching the component or page name.
- Avoid loose inline styles (`style={{ ... }}`) for complex layout rules. Use defined CSS classes.
- Ensure proper color contrast, responsive typography, and avoid content overflow on narrow mobile screens.

### 3. GSAP & Animation Lifecycle Safety
- Always clean up GSAP timelines and `ScrollTrigger` instances in `useEffect` cleanup return functions to prevent memory leaks and duplicate scroll triggers during route transitions:
  ```javascript
  useEffect(() => {
    const ctx = gsap.context(() => {
      // animations here
    }, containerRef);
    return () => ctx.revert();
  }, []);
  ```

### 4. Code Comments Standard (Senior Engineering Philosophy)
- **Code is primary documentation:** Express intent through clear component, function, and variable names.
- **Explain *Why*, never *What*:** Delete comments that merely restate code (e.g., `// render button`, `// filter members`). Only document non-obvious domain rules, complex animation math, or external browser workarounds.
- **Zero test comments:** Let `describe`, `it`, and `expect` statements speak for themselves.
- **No ticket or changelog tags:** Do not leave Jira/PR comments in source code.

---

## 5. Verification Commands

Run these verification commands before presenting completed work:

```bash
# 1. Lint & Code Style Check (Must pass with 0 errors)
npm run lint

# 2. Automatically fix formatting issues
npm run format-code

# 3. Automatically fix ESLint issues
npm run fix-code

# 4. Run test suite
npm test -- --watchAll=false

# 5. Production build check (validate bundling)
npm run build
```

---

## 6. Detailed Reference Guidelines

Consult the modular rules and reference guides for in-depth patterns:
- **Rules (`.claude/rules/`):**
  - `code-quality.md`: Component design, semantic HTML, and clean JSX
  - `commit-policy.md`: Commit formatting and branch standards
  - `pr-guidelines.md`: PR template requirements and visual proof
  - `testing.md`: React Testing Library query hierarchy and mocking
  - `styling-and-ui.md`: Responsive breakpoints and CSS structure
  - `no-assumptions.md`: Codebase discovery and verification principles
- **Deep-Dive Guidelines (`.claude/guidelines/`):**
  - `Architecture.md`: Detailed component and route patterns
  - `Comments.md`: Code comments audit checklist and review guidelines
  - `Testing.md`: Testing patterns, router mocks, and assertions
  - `removal-checks.md`: Cleanup checklist for dead components and unused CSS
  - `responding.md`: Concise communication format
