import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import PortalHeader from '../../components/portal/PortalHeader';
import ApplicationStepper from '../../components/portal/ApplicationStepper';
import '../../styles/portal/Portal.css';

export default function ResetPassword() {
  const [email, setEmail] = useState('');
  const [sent, setSent] = useState(false);

  const handleSubmit = (event) => {
    event.preventDefault();
    setSent(true);
  };

  return (
    <main className="portal-page portal-auth">
      <PortalHeader />
      <ApplicationStepper currentStep={1} />
      <section className="portal-auth__card">
        <h1>Reset your password</h1>
        <p>
          Enter your email address and we&apos;ll send you instructions to reset
          your password.
        </p>
        {sent ? (
          <p>Check your inbox for a link to reset your password.</p>
        ) : (
          <form onSubmit={handleSubmit}>
            <label htmlFor="reset-email">Email address</label>
            <input
              id="reset-email"
              type="email"
              placeholder="you@example.com"
              value={email}
              onChange={(event) => setEmail(event.target.value)}
              required
            />

            <button
              type="submit"
              className="portal-button portal-button--primary"
            >
              Send reset link
            </button>
          </form>
        )}
        <p>
          <Link to="/portal/login">Back to log in</Link>
        </p>
      </section>
    </main>
  );
}
