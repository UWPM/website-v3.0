import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import pmLogo from '../images/uwpm-brand/pmlogo.svg';
import '../styles/Header.css';

import Navbar, { NavCapsule, resolveActiveKey } from './Navbar';

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

      {!hideNav && (
        <div className="home-hero__nav-slot">
          <NavCapsule active={activeKey} />
        </div>
      )}
    </header>
  );
}

export { Navbar, NavCapsule };
