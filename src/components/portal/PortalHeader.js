import React from 'react';
import { Link } from 'react-router-dom';

export default function PortalHeader({ rightSlot }) {
  return (
    <header className="portal-header">
      <Link to="/portal" className="portal-header__logo">
        UWPM
      </Link>
      {rightSlot && <div className="portal-header__right">{rightSlot}</div>}
    </header>
  );
}
