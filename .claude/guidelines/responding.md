# Teammate & Reviewer Response Guidelines

When responding to PR reviews, QA questions, or teammate queries, keep responses **short, concise, and direct**.

---

## 1. Principles
1. **Lead with the Answer:** Give the status or resolution in the very first sentence.
2. **Eliminate Fluff:** Avoid verbose pleasantries or lengthy justifications for simple changes.
3. **Reference Evidence:** When relevant, cite the commit hash, line number, or attach a visual screenshot.

---

## 2. Examples

### Scenario 1: Addressing a PR Review Feedback Comment
- **Reviewer:** *"Can we ensure this button opens the Linktree link in a new tab so users don't navigate away from our site?"*
- **Response:**
  > Updated in `src/pages/Home.js` with `target="_blank"` and `rel="noreferrer"`. Pushed in commit `1e25bbc4`.

### Scenario 2: Responsive Layout Feedback
- **Reviewer / Designer:** *"On mobile, the team member card bio overflows the card border on iPhone SE screens."*
- **Response:**
  > Fixed in `src/styles/Team.css`. Added responsive padding and `word-break: break-word` for `< 480px` viewports. Verified on iOS simulator (screenshot attached).

### Scenario 3: Clarifying Intent on Code Simplification
- **Teammate:** *"Do we need GSAP for this fade-in, or could we use a simple CSS transition?"*
- **Response:**
  > Switched to CSS transition `transition: opacity 0.3s ease` in `About.css` to reduce JS bundle overhead.
