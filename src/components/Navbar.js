import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import '../styles/Navbar.css';

const navItems = [
  { label: 'Home', path: '/', key: 'home' },
  { label: 'About', path: '/about', key: 'about' },
  { label: 'Events', path: '/events', key: 'events' },
  { label: 'Team', path: '/team', key: 'team' },
];

export function resolveActiveKey(pathname, explicitActive) {
  if (explicitActive) return explicitActive;
  if (!pathname || pathname === '/') return 'home';
  if (pathname.startsWith('/about')) return 'about';
  if (pathname.startsWith('/events')) return 'events';
  if (pathname.startsWith('/team')) return 'team';
  return '';
}

export default function Navbar({
  active,
  className = '',
  ariaLabel = 'Primary navigation',
}) {
  const location = useLocation();
  const activeKey = resolveActiveKey(location.pathname, active);

  return (
    <nav className={`uwpm-navbar ${className}`.trim()} aria-label={ariaLabel}>
      {navItems.map((item) => {
        const isActive = activeKey === item.key;
        return (
          <Link
            key={item.key}
            className={`uwpm-navbar__link ${
              isActive ? 'uwpm-navbar__link--active' : ''
            }`.trim()}
            to={item.path}
            aria-current={isActive ? 'page' : undefined}
          >
            {item.label}
          </Link>
        );
      })}
    </nav>
  );
}

// Alias for backwards compatibility
export { Navbar, Navbar as NavCapsule };
