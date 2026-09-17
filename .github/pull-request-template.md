## Summary & Motivation
<!-- Provide a clear summary of what this PR does and why it was needed. -->

## Detailed Changes
<!-- Bullet list of specific components, styles, or logic modified. -->
- 

## Type of Change
- [ ] Bug fix (non-breaking fix for unexpected behavior or layout bug)
- [ ] New feature (non-breaking addition of a component, section, or page)
- [ ] UI / Style polish (CSS styling, responsive layout, animations)
- [ ] Refactor (code restructuring or cleanup without visual/behavioral changes)
- [ ] Documentation / Chore (configs, dependencies, docs updates)

## Visual Proof (Mandatory for UI Changes)
<!-- Attach screenshots or screen recordings showing your changes across different viewports. -->

| Viewport | Screenshot / Video |
| :--- | :--- |
| **Desktop (>= 1200px)** | <!-- Add desktop image/video link here --> |
| **Mobile (<= 480px)** | <!-- Add mobile image/video link here --> |

## Verification & Testing
<!-- Detail the manual and automated checks executed. -->
- [ ] `npm run lint` passes with 0 errors (`eslint` + `prettier`)
- [ ] `npm test -- --watchAll=false` passes (if unit tests modified/applicable)
- [ ] `npm run build` succeeds cleanly
- Manual verification steps performed:
  1. 

## Self-Review Checklist
- [ ] Code follows project style guidelines and passes Prettier formatting
- [ ] Responsive design verified on both mobile and desktop screens
- [ ] No `console.log` statements, commented-out dead code, or debugging artifacts
- [ ] Code is self-documenting; comments are sparse and explain non-obvious *why*, not *what*
- [ ] Interactive elements are accessible (`aria-label`, keyboard focusable, semantic tags)
- [ ] Commit message conforms to Conventional Commits (`feat:`, `fix:`, etc.)