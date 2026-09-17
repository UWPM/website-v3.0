# Commit Policy & End-of-Task Requirements

This rule strictly governs commit and git behaviors when working on the UWPM Website repository.

---

## 1. Absolute Prohibition on Autonomous Commits

- **DO NOT commit anything unless explicitly instructed by the user.**
- Under NO circumstances should you execute `git commit`, create commits, push to remotes, or open PRs unless the user provides an explicit directive such as:
  - *"commit this"*
  - *"make the commit"*
  - *"go ahead and commit"*
- Even if a prompt implies completion or a test passes, **PAUSE** and do not execute any commit command. Leave git staging and working tree state intact for user inspection.

---

## 2. Mandatory End-of-Task Commit Message

At the completion of **ANY** coding, styling, refactoring, or configuration task, you **MUST** provide a recommended commit message formatted specifically for this repository:

### Conventional Commits Format
Follow Conventional Commits standard strictly:
- **Format:** `type: imperative subject`
  - Example: `feat: add responsive team card grid with modal bio view`
  - Example: `fix: adjust mobile header hamburger alignment and backdrop blur`
  - Example: `refactor: extract past events into dedicated eventsV4 component`
  - Example: `style: update typography hierarchy and spacing on what-we-do section`
  - Example: `chore: update build script and dependencies`
- **Allowed types (lowercase):** `feat`, `fix`, `refactor`, `style`, `chore`, `docs`, `test`, `perf`
- **Header rules:**
  - Lowercase first letter of the subject
  - No trailing period
  - Imperative mood (`add`, `fix`, `remove` — not `added`, `fixes`, `removing`)
  - Maximum 100 characters total for the line
  - No emojis
  - Provide a proposed PR title matching or expanding the commit message

### No AI Attribution
- **Never add Claude, Copilot, or AI co-author lines** to Git commits, squash messages, or pull request descriptions (`Co-authored-by: Claude...`). Keep all authorship clean and attributed to the user.

---

## 3. Output Format to the User at Task Completion

Present the commit proposal in a clear summary block at the end of your response:

```text
Recommended Commit:
  Branch:  <branch-name>
  Message: <type>: <subject>
  PR Title: <type>: <subject>
```

Ask the user if they would like you to execute the commit or if they prefer to review and commit it themselves.
