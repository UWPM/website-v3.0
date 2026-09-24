import React from 'react';
import { Link, Navigate } from 'react-router-dom';
import PortalHeader from '../../components/portal/PortalHeader';
import { usePortal } from '../../context/PortalContext';
import '../../styles/portal/Portal.css';

export default function Confirmation() {
  const { state } = usePortal();
  const { account, application, submittedAt } = state;

  if (!submittedAt) {
    return <Navigate to="/portal/apply/register" replace />;
  }

  return (
    <main className="portal-page portal-confirmation">
      <PortalHeader />
      <section className="portal-confirmation__card">
        <h1>You&apos;re in!</h1>
        <p>Your application has been submitted successfully.</p>

        <h2>Application Summary</h2>
        <dl className="portal-apply__review">
          <div>
            <dt>Name</dt>
            <dd>{account.fullName}</dd>
          </div>
          <div>
            <dt>Email</dt>
            <dd>{account.email}</dd>
          </div>
          <div>
            <dt>Program</dt>
            <dd>{application.program}</dd>
          </div>
          <div>
            <dt>Year</dt>
            <dd>{application.yearOfStudy}</dd>
          </div>
          <div>
            <dt>Submitted on</dt>
            <dd>{new Date(submittedAt).toLocaleString()}</dd>
          </div>
        </dl>

        <div className="portal-apply__actions">
          <Link
            to="/portal/dashboard"
            className="portal-button portal-button--primary"
          >
            View my application
          </Link>
          <Link to="/portal" className="portal-button portal-button--outline">
            Back to home
          </Link>
        </div>
        <p>
          <Link to="/portal/apply/confirmation-email">
            View confirmation email (example)
          </Link>
        </p>
      </section>
    </main>
  );
}
