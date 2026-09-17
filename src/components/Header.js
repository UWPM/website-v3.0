import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import pmLogo from '../images/uwpm-brand/pmlogo.svg';
import '../styles/Header.css';

const navItems = [
  { label: 'Home', path: '/', key: 'home' },
  { label: 'About', path: '/about', key: 'about' },
  { label: 'Events', path: '/events', key: 'events' },
  { label: 'Team', path: '/team', key: 'team' },
];

function resolveActiveKey(pathname, explicitActive) {
  if (explicitActive) return explicitActive;
  if (!pathname || pathname === '/') return 'home';
  if (pathname.startsWith('/about')) return 'about';
  if (pathname.startsWith('/events')) return 'events';
  if (pathname.startsWith('/team')) return 'team';
  return '';
}

export function NavCapsule({ active, className = '' }) {
  const location = useLocation();
  const activeKey = resolveActiveKey(location.pathname, active);

  return (
    <nav
      className={`home-hero__nav ${className}`.trim()}
      aria-label="Primary navigation"
    >
      {navItems.map((item) => {
        const isActive = activeKey === item.key;
        return (
          <Link
            key={item.key}
            className={`home-hero__nav-link ${
              isActive ? 'home-hero__nav-link--active' : ''
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

export default function Header({
  active,
  hideNav = false,
  className = '',
  ariaLabel,
}) {
  const location = useLocation();
  const activeKey = resolveActiveKey(location.pathname, active);
  const label =
    ariaLabel ||
    (activeKey
      ? `${activeKey.charAt(0).toUpperCase() + activeKey.slice(1)} navigation`
      : 'Navigation');

  return (
    <header
      className={`home-hero home-hero--compact ${
        hideNav ? 'home-hero--standalone-brand' : ''
      } ${className}`.trim()}
      aria-label={label}
    >
      <Link className="home-hero__brand" to="/" aria-label="UW PM home">
        <img src={pmLogo} alt="UW PM" />
      </Link>

      <div
        className={`home-hero__nav-slot ${
          hideNav ? 'home-hero__nav-slot--hidden' : ''
        }`.trim()}
        aria-hidden={hideNav ? 'true' : undefined}
      >
        <NavCapsule active={activeKey} />
      </div>
    </header>
  );
}
