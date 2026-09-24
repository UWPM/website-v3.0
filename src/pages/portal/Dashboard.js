import React from 'react';
import { Link, Navigate } from 'react-router-dom';
import PortalHeader from '../../components/portal/PortalHeader';
import DashboardSidebar from '../../components/portal/DashboardSidebar';
import { usePortal } from '../../context/PortalContext';
import '../../styles/portal/Portal.css';

const CHECKLIST = [
  { key: 'register', label: 'Register' },
  { key: 'questions', label: 'Questions' },
  { key: 'consent', label: 'Consent & Logistics' },
  { key: 'submit', label: 'Submit' },
];

export default function Dashboard() {
  const { state } = usePortal();
  const { submittedAt } = state;

  if (!submittedAt) {
    return <Navigate to="/portal/apply/register" replace />;
  }

  const completedOn = new Date(submittedAt).toLocaleDateString();

  return (
    <main className="portal-page portal-dashboard">
      <PortalHeader />
      <div className="portal-dashboard__body">
        <DashboardSidebar />
        <section className="portal-dashboard__content">
          <h1>My Application</h1>
          <p>Application Submitted!</p>
          <p>
            You&apos;re all set. We&apos;ll be in touch with next steps via
            email.
          </p>

          <ul className="portal-dashboard__checklist">
            {CHECKLIST.map((step) => (
              <li key={step.key}>
                <span>{step.label}</span>
                <span>Completed on {completedOn}</span>
              </li>
            ))}
          </ul>

          <Link
            to="/portal/dashboard/details"
            className="portal-button portal-button--primary"
          >
            View application details
          </Link>
        </section>
      </div>
    </main>
  );
}
