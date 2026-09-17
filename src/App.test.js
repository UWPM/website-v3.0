import { render, screen } from '@testing-library/react';
import { MemoryRouter } from 'react-router-dom';
import App from './App';

test('renders the supplied UW PM hero artwork', () => {
  render(
    <MemoryRouter>
      <App />
    </MemoryRouter>,
  );

  expect(
    screen.getByRole('region', { name: /uw pm introduction/i }),
  ).toBeInTheDocument();
  expect(
    screen.getByRole('heading', {
      name: /fostering the creative product management community @ uwaterloo/i,
    }),
  ).toBeInTheDocument();
  expect(screen.getByRole('link', { name: /learn more/i })).toHaveAttribute(
    'href',
    '#what-we-do',
  );
  expect(screen.getByRole('link', { name: /join our team/i })).toHaveAttribute(
    'href',
    'https://linktr.ee/uwaterloopm',
  );
  expect(
    screen.getByRole('heading', { name: /our impact/i }),
  ).toBeInTheDocument();
  expect(
    screen.getByRole('heading', { name: /our community has worked at/i }),
  ).toBeInTheDocument();
  expect(screen.getByAltText('Microsoft')).toBeInTheDocument();
});
