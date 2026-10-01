import React from 'react';
import Header from './Header';
import Navbar from './Navbar';

// Golden-standard page header: brand, title, then the nav capsule.
// Used by About, Events, and Team so the mobile header stays consistent.
export default function PageHero({
  active,
  title,
  ariaLabel,
  className = '',
  children,
  showNav = true,
}) {
  return (
    <section className={`page-hero ${className}`.trim()} aria-label={ariaLabel}>
      <Header hideNav active={active} className="page-hero__header" />
      <div className="page-hero__title-wrap">
        <h1 className="page-hero__title">{title}</h1>
      </div>
      {children}
      {showNav && (
        <div className="page-hero__nav-wrap">
          <Navbar active={active} />
        </div>
      )}
    </section>
  );
}
