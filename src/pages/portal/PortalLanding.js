import React from 'react';
import { Link } from 'react-router-dom';
import PortalHeader from '../../components/portal/PortalHeader';
import '../../styles/portal/Portal.css';

export default function PortalLanding() {
  return (
    <main className="portal-page portal-landing">
      <PortalHeader
        rightSlot={
          <>
            <span>Already have an account?</span>
            <Link
              to="/portal/login"
              className="portal-button portal-button--outline"
            >
              Log In
            </Link>
          </>
        }
      />
      <section className="portal-landing__hero">
        <h1>ProdCon</h1>
        <p className="portal-landing__tagline">Build. Solve. Create.</p>
        <p className="portal-landing__description">
          An annual product case competition for curious minds, problem solvers,
          and future builders.
        </p>
        <Link
          to="/portal/signup"
          className="portal-button portal-button--primary"
        >
          Get Started
        </Link>
      </section>
    </main>
  );
}
