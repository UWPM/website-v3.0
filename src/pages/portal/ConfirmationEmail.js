import React from 'react';
import { Link, Navigate } from 'react-router-dom';
import { usePortal } from '../../context/PortalContext';
import '../../styles/portal/Portal.css';

export default function ConfirmationEmail() {
  const { state } = usePortal();
  const { account, application, submittedAt } = state;

  if (!submittedAt) {
    return <Navigate to="/portal/apply/register" replace />;
  }

  return (
    <main className="portal-page portal-email">
      <p>
        <Link to="/portal/apply/confirmation">Back to confirmation</Link>
      </p>
      <article className="portal-email__card">
        <header className="portal-email__header">
          <span>UWPM</span>
          <span>{new Date(submittedAt).toLocaleTimeString()}</span>
        </header>
        <h1>Your application has been received!</h1>
        <p>Hi {account.fullName},</p>
        <p>
          Thanks for applying to ProdCon! We&apos;ve received your application
          and we&apos;re excited to have you join us.
        </p>

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

        <p>We&apos;re excited to have you join us!</p>
        <p>— The UWPM Team</p>
      </article>
    </main>
  );
}
