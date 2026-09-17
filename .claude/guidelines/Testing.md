# Testing Standards & Architecture

## Core Philosophy

1. **Test User-Visible Behavior:** Tests should verify what the visitor sees and interacts with, not internal state or private functions.
2. **Accessible Query Hierarchy:** Query elements the way screen readers and users find them (by role, accessible name, visible text).
3. **Co-located or Root Test Organization:** Keep unit tests co-located next to their source files (e.g. `Navbar.test.js` next to `Navbar.js`) or in `src/App.test.js` for integration flows.
4. **No Snapshots:** Assert explicit DOM presence, text content, and attributes. Never introduce new snapshot tests (`toMatchSnapshot()`).

---

## 1. Query Priority Guide

Use the global `screen` object from `@testing-library/react`. Never destructure queries from `render(...)`.

```javascript
// ✅ Correct
render(<MyComponent />);
expect(screen.getByRole('button', { name: /submit/i })).toBeInTheDocument();

// ❌ Incorrect
const { getByRole } = render(<MyComponent />);
```

### Hierarchy:
1. **`screen.getByRole(role, { name: /.../i })`**: Accessible interactive elements (`button`, `link`, `heading`, `region`, `dialog`).
2. **`screen.getByText(/.../i)`**: Plain textual content.
3. **`screen.getByAltText(/.../i)`**: Images, brand logos, avatar photos.
4. **`screen.queryByRole(...)`**: Verifying element absence. Use with `.not.toBeInTheDocument()`.
5. **`screen.findByRole(...)`**: Awaiting asynchronous appearance (e.g. after animation or dynamic fetch).

---

## 2. Testing Components with React Router

Components containing `<Link>`, `<NavLink>`, or calling `useNavigate()` must be wrapped in `MemoryRouter`:

```javascript
import { render, screen } from '@testing-library/react';
import { MemoryRouter } from 'react-router-dom';
import Navbar from './Navbar';

test('renders navigation bar with active links', () => {
  render(
    <MemoryRouter initialEntries={['/team']}>
      <Navbar />
    </MemoryRouter>,
  );

  expect(screen.getByRole('link', { name: /team/i })).toHaveAttribute('href', '/team');
});
```

---

## 3. User Interactions (`userEvent`)

Use `@testing-library/user-event` to simulate realistic browser interactions:

```javascript
import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import Team from '../pages/Team';

test('toggles mobile menu on hamburger click', async () => {
  const user = userEvent.setup();
  render(
    <MemoryRouter>
      <Team />
    </MemoryRouter>,
  );

  const hamburger = screen.getByRole('button', { name: /toggle navigation/i });
  await user.click(hamburger);

  expect(screen.getByRole('navigation')).toHaveClass('is-open');
});
```

---

## 4. Common Test Anti-Patterns to Avoid

| Anti-Pattern | Correct Approach |
| :--- | :--- |
| `toMatchSnapshot()` | Assert explicit text, role, or DOM presence |
| `expect(screen.queryByText('x')).toBeTruthy()` | `expect(screen.getByText('x')).toBeInTheDocument()` |
| Destructuring `const { getByText } = render(...)` | Use global `screen.getByText(...)` |
| Synchronous `fireEvent.click(...)` | `const user = userEvent.setup(); await user.click(...)` |
| Querying by internal CSS class (`container.querySelector('.my-card')`) | Query by role or accessible name (`screen.getByRole(...)`) |
| Unverified hanging assertions | Explicitly chain matchers (`.toBeInTheDocument()`, `.toHaveAttribute()`) |
