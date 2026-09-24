import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import PortalHeader from '../../components/portal/PortalHeader';
import ApplicationStepper from '../../components/portal/ApplicationStepper';
import ApplySidebar from '../../components/portal/ApplySidebar';
import { usePortal } from '../../context/PortalContext';
import '../../styles/portal/Portal.css';

const MAX_LENGTH = 200;

export default function ApplyQuestions() {
  const navigate = useNavigate();
  const { state, updateApplication } = usePortal();
  const [productIdea, setProductIdea] = useState(
    state.application.answers.productIdea,
  );
  const [greatTeam, setGreatTeam] = useState(
    state.application.answers.greatTeam,
  );

  const handleSubmit = (event) => {
    event.preventDefault();
    updateApplication({ answers: { productIdea, greatTeam } });
    navigate('/portal/apply/consent');
  };

  return (
    <main className="portal-page portal-apply">
      <PortalHeader />
      <ApplicationStepper currentStep={2} />
      <div className="portal-apply__body">
        <ApplySidebar currentStep={2} />
        <section className="portal-apply__content">
          <h1>Fun Questions</h1>
          <p>
            Show us your creativity! Answer the following questions (200
            characters max each).
          </p>
          <form onSubmit={handleSubmit}>
            <label htmlFor="question-product">
              1. What product or service do you wish existed, and why?
            </label>
            <textarea
              id="question-product"
              placeholder="Type your answer here..."
              maxLength={MAX_LENGTH}
              value={productIdea}
              onChange={(event) => setProductIdea(event.target.value)}
              required
            />
            <span className="portal-apply__char-count">
              {productIdea.length}/{MAX_LENGTH}
            </span>

            <label htmlFor="question-team">
              2. What makes a great product team?
            </label>
            <textarea
              id="question-team"
              placeholder="Type your answer here..."
              maxLength={MAX_LENGTH}
              value={greatTeam}
              onChange={(event) => setGreatTeam(event.target.value)}
              required
            />
            <span className="portal-apply__char-count">
              {greatTeam.length}/{MAX_LENGTH}
            </span>

            <div className="portal-apply__actions">
              <button
                type="button"
                className="portal-button portal-button--outline"
                onClick={() => navigate('/portal/apply/register')}
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
