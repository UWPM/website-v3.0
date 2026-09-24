import React from 'react';
import { Navigate } from 'react-router-dom';
import PortalHeader from '../../components/portal/PortalHeader';
import DashboardSidebar from '../../components/portal/DashboardSidebar';
import { usePortal } from '../../context/PortalContext';
import '../../styles/portal/Portal.css';

export default function DashboardDetails() {
  const { state } = usePortal();
  const { account, application, submittedAt } = state;

  if (!submittedAt) {
    return <Navigate to="/portal/apply/register" replace />;
  }

  return (
    <main className="portal-page portal-dashboard">
      <PortalHeader />
      <div className="portal-dashboard__body">
        <DashboardSidebar />
        <section className="portal-dashboard__content">
          <h1>Application Details</h1>
          <p>Submitted on {new Date(submittedAt).toLocaleString()}</p>

          <dl className="portal-apply__review">
            <div>
              <dt>Full name</dt>
              <dd>{account.fullName}</dd>
            </div>
            <div>
              <dt>Email address</dt>
              <dd>{account.email}</dd>
            </div>
            <div>
              <dt>Program</dt>
              <dd>{application.program}</dd>
            </div>
            <div>
              <dt>Year of study</dt>
              <dd>{application.yearOfStudy}</dd>
            </div>
          </dl>

          <h2>Questions</h2>
          <dl className="portal-apply__review">
            <div>
              <dt>1. What product or service do you wish existed, and why?</dt>
              <dd>{application.answers.productIdea}</dd>
            </div>
            <div>
              <dt>2. What makes a great product team?</dt>
              <dd>{application.answers.greatTeam}</dd>
            </div>
          </dl>

          <h2>Logistics</h2>
          <dl className="portal-apply__review">
            <div>
              <dt>Dietary restrictions</dt>
              <dd>{application.consent.dietaryRestrictions || 'None'}</dd>
            </div>
          </dl>

          <button
            type="button"
            className="portal-button portal-button--outline"
            onClick={() => window.print()}
          >
            Download confirmation (PDF)
          </button>
        </section>
      </div>
    </main>
  );
}
