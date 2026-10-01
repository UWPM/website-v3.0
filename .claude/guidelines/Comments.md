# Code Comments & Review Standards

## Core Philosophy

1. **Code is the primary documentation:** If variable names, helper function names, component names, or test descriptions can convey intent, make the code clear and eliminate the comment.
2. **Explain *Why*, never *What* or *How*:** Code demonstrates *how*; tests demonstrate *what*; comments are strictly reserved for non-obvious *why* (hidden business rules, browser rendering quirks, third-party workarounds).
3. **Tests speak for themselves:** Test descriptions (`test('...', () => ...)`) and expect assertions are self-documenting. Comments inside test bodies are almost always redundant noise.
4. **No changelogs or ticket noise in code:** Git history and PR descriptions document *who* changed what and *when*. Never use ticket keys or author changelogs to justify routine changes or exports.
5. **Condense or eliminate:** Senior reviewers prefer zero comments over verbose comments. If a comment is justified, condense it to 1–2 tight, punchy sentences.

---

## Anti-Patterns to Eliminate

### 1. Restating JSX or Standard React Mechanics ("What" vs "Why")

#### ❌ Anti-Patterns
```javascript
// State for whether modal is open
const [isOpen, setIsOpen] = useState(false);

// Filter execs by team
const designExecs = execs.filter(e => e.team === 'Design');

// Render the footer component
<Footer />

// Handle button click
const handleClick = () => { ... };
```
* **Why it's flagged:** Every line restates what the code literally says. It adds visual clutter and creates maintenance debt when code evolves.
* **✅ Preferred:** Delete them completely. The code is already self-explanatory.

---

### 2. Redundant Comments in Tests

#### ❌ Anti-Pattern
```javascript
test('renders join our team button linking to linktree', () => {
  render(<App />);
  // Check that the link has the correct href attribute
  expect(screen.getByRole('link', { name: /join our team/i })).toHaveAttribute(
    'href',
    'https://linktr.ee/uwaterloopm',
  );
});
```
* **Why it's flagged:** The test title and assertion already describe the expectation clearly.
* **✅ Preferred:** Delete the comment entirely.

---

### 3. Changelog Comments

#### ❌ Anti-Pattern
```javascript
// Updated by Cedric for Fall 2025 redesign
// Added as part of PR #104
export const getActiveTerm = () => 'Fall 2025';
```
* **Why it's flagged:** Git commit history and blame already record authors, dates, and PRs. Adding this in source code rots into stale metadata.
* **✅ Preferred:** Keep only the functional code.

---

## When Comments ARE Justified

Comments should be rare exceptions, not the rule. Only add comments in these specific situations:

| Justified Reason | Why It's Needed | Example |
| :--- | :--- | :--- |
| **Browser Rendering Quirks** | Explains non-standard CSS or JS workarounds for Safari / mobile viewport behavior. | `// Safari mobile 100vh fix: calculates actual innerHeight to prevent toolbar occlusion` |
| **Animation Lifecycle / GSAP Workarounds** | Explains timing offsets or refresh triggers required for dynamic asset loading. | `// Wait for hero image load before refreshing ScrollTrigger to ensure accurate pin coordinates` |
| **Third-Party Library Workarounds** | Explains non-obvious configurations for Swiper, React-Bootstrap, or MUI. | `// Swiper touchMoveStopPropagation is needed here to prevent conflict with outer page scroll` |
| **Complex Math / Layout Invariants** | Unpacks dense coordinate math that cannot be clarified through variable extraction alone. | `// Transforms angle (0-360) into normalized circle coordinate space with 20px padding offset` |

---

## Pre-PR Comment Checklist

Before submitting code for review, run through this 5-question audit on every comment in your diff:

1. [ ] **Can better naming replace it?** (Can a clearer variable, component, or function name explain this?)
2. [ ] **Does it explain "what"?** (Does the comment simply restate what the code does? If so, delete it.)
3. [ ] **Is it inside a test?** (Does the test description or `expect()` assertion already cover it? If so, delete it.)
4. [ ] **Is it a changelog / author tag?** (Does it mention a date, author, or ticket? If so, remove it.)
5. [ ] **Can it be condensed?** (Can a multi-line explanation be reduced to 1 crisp sentence?)
