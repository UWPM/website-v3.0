import React from 'react';
import { NavLink, useNavigate } from 'react-router-dom';
import { usePortal } from '../../context/PortalContext';

export default function DashboardSidebar() {
  const navigate = useNavigate();
  const { logOut } = usePortal();

  const handleLogOut = () => {
    logOut();
    navigate('/portal');
  };

  return (
    <nav className="dashboard-sidebar" aria-label="Account navigation">
      <NavLink
        to="/portal/dashboard"
        className={({ isActive }) =>
          `dashboard-sidebar__link${
            isActive ? ' dashboard-sidebar__link--active' : ''
          }`
        }
      >
        My Application
      </NavLink>
      <span className="dashboard-sidebar__link dashboard-sidebar__link--disabled">
        Profile
      </span>
      <button
        type="button"
        className="dashboard-sidebar__link dashboard-sidebar__logout"
        onClick={handleLogOut}
      >
        Log out
      </button>
    </nav>
  );
}
