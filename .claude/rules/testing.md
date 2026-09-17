# Testing Standards

This rule governs unit and integration testing standards for the UWPM Website using Jest and React Testing Library (`@testing-library/react`).

---

## 1. Testing Philosophy

1. **Test User Behavior, Not Implementation Details:** Assert what the user sees, clicks, and navigates. Do not test internal component state or private helper functions directly.
2. **No Snapshot Testing:** Avoid `toMatchSnapshot()`. Snapshots are fragile, easy to blindly update, and obscure actual functional regressions. Always assert explicit DOM presence, text content, and element attributes.
3. **Tests Speak for Themselves:** Write descriptive test titles (`it('navigates to linktree on join our team button click', ...)`). Do not add comments inside test bodies.

---

## 2. Query Priority

Always use the global `screen` object from `@testing-library/react`. Prefer accessible, user-facing queries in order of priority:

1. **`screen.getByRole(role, { name: ... })`** (Primary choice: buttons, links, headings, regions)
   ```javascript
   expect(screen.getByRole('heading', { name: /our impact/i })).toBeInTheDocument();
   expect(screen.getByRole('link', { name: /join our team/i })).toHaveAttribute('href', 'https://linktr.ee/uwaterloopm');
   ```
2. **`screen.getByText(textOrRegex)`** (For non-interactive descriptive copy)
   ```javascript
   expect(screen.getByText(/fostering the creative product management community/i)).toBeInTheDocument();
   ```
3. **`screen.getByAltText(altText)`** (For logos and meaningful images)
   ```javascript
   expect(screen.getByAltText('Microsoft')).toBeInTheDocument();
   ```
4. **`screen.getByLabelText(labelText)`** (For form inputs and accessibility labels)
5. **`screen.queryBy*`** (Only for asserting element absence)
   ```javascript
   expect(screen.queryByRole('dialog')).not.toBeInTheDocument();
   ```

---

## 3. Router-Dependent Components

Any component using `useNavigate`, `useLocation`, `useParams`, or `<Link>` must be wrapped in `MemoryRouter` during test execution:

```javascript
import { render, screen } from '@testing-library/react';
import { MemoryRouter } from 'react-router-dom';
import Navbar from './Navbar';

test('renders navigation links', () => {
  render(
    <MemoryRouter initialEntries={['/']}>
      <Navbar />
    </MemoryRouter>,
  );

  expect(screen.getByRole('link', { name: /about/i })).toHaveAttribute('href', '/about');
});
```

---

## 4. User Interaction

Prefer `@testing-library/user-event` for user events (click, type, hover) over `fireEvent` as it simulates realistic browser focus and pointer lifecycles:

```javascript
import userEvent from '@testing-library/user-event';

test('opens modal when clicking team card', async () => {
  const user = userEvent.setup();
  render(<Team />);
  
  await user.click(screen.getByRole('button', { name: /view bio/i }));
  expect(screen.getByRole('dialog')).toBeInTheDocument();
});
```
