import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import PortalHeader from '../../components/portal/PortalHeader';
import ApplicationStepper from '../../components/portal/ApplicationStepper';
import ApplySidebar from '../../components/portal/ApplySidebar';
import { usePortal } from '../../context/PortalContext';
import '../../styles/portal/Portal.css';

const PROGRAMS = ['Computer Science', 'Business', 'Engineering', 'Mathematics'];
const YEARS = ['1st year', '2nd year', '3rd year', '4th year', '5th+ year'];

export default function ApplyRegister() {
  const navigate = useNavigate();
  const { state, updateAccount, updateApplication } = usePortal();
  const [fullName, setFullName] = useState(state.account.fullName);
  const [email, setEmail] = useState(state.account.email);
  const [program, setProgram] = useState(state.application.program);
  const [yearOfStudy, setYearOfStudy] = useState(state.application.yearOfStudy);

  const handleSubmit = (event) => {
    event.preventDefault();
    updateAccount({ fullName, email });
    updateApplication({ program, yearOfStudy });
    navigate('/portal/apply/questions');
  };

  return (
    <main className="portal-page portal-apply">
      <PortalHeader />
      <ApplicationStepper currentStep={1} />
      <div className="portal-apply__body">
        <ApplySidebar currentStep={1} />
        <section className="portal-apply__content">
          <h1>Register</h1>
          <p>Let&apos;s get to know you!</p>
          <form onSubmit={handleSubmit}>
            <label htmlFor="register-name">Full name *</label>
            <input
              id="register-name"
              type="text"
              placeholder="e.g. Alex Chen"
              value={fullName}
              onChange={(event) => setFullName(event.target.value)}
              required
            />

            <label htmlFor="register-email">Email address *</label>
            <input
              id="register-email"
              type="email"
              placeholder="you@example.com"
              value={email}
              onChange={(event) => setEmail(event.target.value)}
              required
            />

            <label htmlFor="register-program">Program *</label>
            <select
              id="register-program"
              value={program}
              onChange={(event) => setProgram(event.target.value)}
              required
            >
              <option value="">Select your program</option>
              {PROGRAMS.map((option) => (
                <option key={option} value={option}>
                  {option}
                </option>
              ))}
            </select>

            <label htmlFor="register-year">Year of study *</label>
            <select
              id="register-year"
              value={yearOfStudy}
              onChange={(event) => setYearOfStudy(event.target.value)}
              required
            >
              <option value="">Select your year</option>
              {YEARS.map((option) => (
                <option key={option} value={option}>
                  {option}
                </option>
              ))}
            </select>

            <div className="portal-apply__actions">
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
