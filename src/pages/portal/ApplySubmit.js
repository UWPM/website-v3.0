import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import PortalHeader from '../../components/portal/PortalHeader';
import ApplicationStepper from '../../components/portal/ApplicationStepper';
import ApplySidebar from '../../components/portal/ApplySidebar';
import { usePortal } from '../../context/PortalContext';
import '../../styles/portal/Portal.css';

export default function ApplySubmit() {
  const navigate = useNavigate();
  const { state, submitApplication } = usePortal();
  const [confirmed, setConfirmed] = useState(false);
  const { account, application } = state;

  const handleSubmit = (event) => {
    event.preventDefault();
    submitApplication();
    navigate('/portal/apply/confirmation');
  };

  return (
    <main className="portal-page portal-apply">
      <PortalHeader />
      <ApplicationStepper currentStep={4} />
      <div className="portal-apply__body">
        <ApplySidebar currentStep={4} />
        <section className="portal-apply__content">
          <h1>Review &amp; Submit</h1>
          <p>
            Please make sure all your information is correct before submitting.
          </p>
          <form onSubmit={handleSubmit}>
            <dl className="portal-apply__review">
              <div>
                <dt>Full name</dt>
                <dd>{account.fullName || '—'}</dd>
              </div>
              <div>
                <dt>Email address</dt>
                <dd>{account.email || '—'}</dd>
              </div>
              <div>
                <dt>Program</dt>
                <dd>{application.program || '—'}</dd>
              </div>
              <div>
                <dt>Year of study</dt>
                <dd>{application.yearOfStudy || '—'}</dd>
              </div>
              <div>
                <dt>Dietary restrictions</dt>
                <dd>{application.consent.dietaryRestrictions || 'None'}</dd>
              </div>
              <div>
                <dt>Q1. What product or service...</dt>
                <dd>{application.answers.productIdea || '—'}</dd>
              </div>
              <div>
                <dt>Q2. What makes a great product team?</dt>
                <dd>{application.answers.greatTeam || '—'}</dd>
              </div>
            </dl>

            <label
              htmlFor="confirm-accurate"
              className="portal-apply__checkbox-row"
            >
              <input
                id="confirm-accurate"
                type="checkbox"
                checked={confirmed}
                onChange={(event) => setConfirmed(event.target.checked)}
                required
              />
              I confirm that all information provided is accurate and complete.
            </label>

            <div className="portal-apply__actions">
              <button
                type="button"
                className="portal-button portal-button--outline"
                onClick={() => navigate('/portal/apply/consent')}
              >
                Back
              </button>
              <button
                type="submit"
                className="portal-button portal-button--primary"
              >
                Submit
              </button>
            </div>
          </form>
        </section>
      </div>
    </main>
  );
}
