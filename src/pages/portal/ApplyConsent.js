import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import PortalHeader from '../../components/portal/PortalHeader';
import ApplicationStepper from '../../components/portal/ApplicationStepper';
import ApplySidebar from '../../components/portal/ApplySidebar';
import { usePortal } from '../../context/PortalContext';
import '../../styles/portal/Portal.css';

const DIETARY_OPTIONS = ['None', 'Vegetarian', 'Vegan', 'Halal', 'Gluten-free'];

export default function ApplyConsent() {
  const navigate = useNavigate();
  const { state, updateApplication } = usePortal();
  const [mediaConsent, setMediaConsent] = useState(
    state.application.consent.mediaConsent,
  );
  const [dietaryRestrictions, setDietaryRestrictions] = useState(
    state.application.consent.dietaryRestrictions,
  );
  const [specify, setSpecify] = useState(state.application.consent.specify);

  const handleSubmit = (event) => {
    event.preventDefault();
    updateApplication({
      consent: { mediaConsent, dietaryRestrictions, specify },
    });
    navigate('/portal/apply/submit');
  };

  return (
    <main className="portal-page portal-apply">
      <PortalHeader />
      <ApplicationStepper currentStep={3} />
      <div className="portal-apply__body">
        <ApplySidebar currentStep={3} />
        <section className="portal-apply__content">
          <h1>Consent &amp; Logistics</h1>
          <p>Please review and complete the following.</p>
          <form onSubmit={handleSubmit}>
            <h2>Media Consent</h2>
            <label
              htmlFor="media-consent"
              className="portal-apply__checkbox-row"
            >
              <input
                id="media-consent"
                type="checkbox"
                checked={mediaConsent}
                onChange={(event) => setMediaConsent(event.target.checked)}
              />
              I grant UWPM permission to use photos, videos, and quotes from my
              participation in the event for promotional purposes.
            </label>

            <label htmlFor="dietary-restrictions">
              Dietary restrictions (optional)
            </label>
            <select
              id="dietary-restrictions"
              value={dietaryRestrictions}
              onChange={(event) => setDietaryRestrictions(event.target.value)}
            >
              <option value="">Select dietary restrictions</option>
              {DIETARY_OPTIONS.map((option) => (
                <option key={option} value={option}>
                  {option}
                </option>
              ))}
            </select>

            <label htmlFor="dietary-specify">
              Please specify (e.g. allergies, food preferences)
            </label>
            <textarea
              id="dietary-specify"
              placeholder="Type here..."
              value={specify}
              onChange={(event) => setSpecify(event.target.value)}
            />

            <div className="portal-apply__actions">
              <button
                type="button"
                className="portal-button portal-button--outline"
                onClick={() => navigate('/portal/apply/questions')}
              >
                Back
              </button>
              <button
                type="submit"
                className="portal-button portal-button--primary"
              >
                Next
              </button>
            </div>
          </form>
        </section>
      </div>
    </main>
  );
}
