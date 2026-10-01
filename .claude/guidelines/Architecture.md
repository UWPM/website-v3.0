# UWPM Website Architecture Standards

This document outlines the architecture, file organization, and structural patterns for the UWPM Website (`website-v3.0`).

---

## 1. Directory Structure

```text
website-v3.0/
├── public/                 # Static HTML template, favicon, robots.txt
├── src/
│   ├── components/         # Reusable UI components
│   │   ├── eventsV4/       # Modular feature package for Events V4
│   │   │   ├── EventsSection.js
│   │   │   ├── Gallery.js
│   │   │   ├── motion.js
│   │   │   ├── PastEventsV4.js
│   │   │   └── PastWinners.js
│   │   ├── Navbar.js
│   │   ├── Header.js
│   │   ├── Footer.js
│   │   ├── CustomCard.js
│   │   ├── ExecList.js
│   │   └── ...
│   ├── pages/              # Top-level view routes
│   │   ├── Home.js
│   │   ├── About.js
│   │   ├── Events.js
│   │   ├── Team.js
│   │   ├── PMJobs.js
│   │   └── Contact.js
│   ├── styles/             # Dedicated CSS stylesheets
│   │   ├── Home.css
│   │   ├── About.css
│   │   ├── EventsV4.css
│   │   ├── Navbar.css
│   │   ├── Header.css
│   │   └── ...
│   ├── images/             # Local images, portraits, company logos, textures
│   ├── App.js              # Route switchboard & layout wrapper
│   ├── App.test.js         # Top-level smoke & integration tests
│   ├── index.js            # React 18 DOM root & BrowserRouter
│   └── setupTests.js       # Jest DOM extension setup
```

---

## 2. Component Architecture Standards

### Page Components (`src/pages/`)
- **Role:** Page components serve as the container for top-level routes mapped in `App.js`.
- **Responsibilities:**
  - Coordinates high-level layout (e.g. Hero, Content Sections, Call to Action, Footer).
  - Fetches or manages page-level view state.
  - Composes smaller presentational components from `src/components/`.
- **Rule:** Do not inline 500+ lines of raw markup and styling into a single page file. Break complex sections into dedicated components under `src/components/`.

### Presentational & Reusable Components (`src/components/`)
- **Role:** Discrete, reusable UI components (e.g., `CustomCard.js`, `TeamProfileCard.js`, `Navbar.js`).
- **Responsibilities:**
  - Receive data and callbacks strictly via props.
  - Encapsulate local interactive state (e.g., modal open/close, hover state).
  - Keep prop interfaces clean, intuitive, and properly defaulted.

### Sub-Feature Modules (e.g., `src/components/eventsV4/`)
- **Role:** Complex multi-component features should be grouped within a dedicated subfolder in `src/components/`.
- **Structure:**
  - Group related views, animation helpers (e.g. `motion.js`), and sub-sections together.
  - Keeps top-level `src/components/` clean and avoids clutter.

---

## 3. Styling Standards (`src/styles/`)

- Each component or page should have a matching stylesheet in `src/styles/` (e.g. `Home.js` -> `Home.css`, `Navbar.js` -> `Navbar.css`).
- Use descriptive class prefixes (e.g. `.team-member-card`, `.navbar-dropdown`, `.events-v4-container`) to avoid accidental style leaking.
- Always implement responsive styling with media queries for Mobile (`<768px`), Tablet (`768px–1024px`), and Desktop (`>1024px`).

---

## 4. Common Anti-Patterns to Avoid

| Anti-Pattern | Correct Approach |
| :--- | :--- |
| **Monolithic Page Files:** Inlining 8 different complex sections in one page file | Extract each section into a distinct component in `src/components/` |
| **Hardcoded `<a>` Tags for Internal Links:** `<a href="/about">` causing full page reload | Use `<Link to="/about">` or `<NavLink>` from `react-router-dom` |
| **Inline Style Spaghetti:** Writing 10-line inline style objects on elements | Define clean, reusable CSS classes in `src/styles/` |
| **Un-cleaned Animation Triggers:** Creating GSAP triggers without cleanup | Wrap GSAP code in `useEffect` using `gsap.context()` and return cleanup |
| **Direct DOM Manipulation:** Calling `document.getElementById` or `document.querySelector` | Use React `ref` (`useRef`) to interact with DOM nodes safely |
