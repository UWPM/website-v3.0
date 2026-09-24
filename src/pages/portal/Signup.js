import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import PortalHeader from '../../components/portal/PortalHeader';
import ApplicationStepper from '../../components/portal/ApplicationStepper';
import { usePortal } from '../../context/PortalContext';
import '../../styles/portal/Portal.css';

export default function Signup() {
  const navigate = useNavigate();
  const { updateAccount } = usePortal();
  const [fullName, setFullName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleSubmit = (event) => {
    event.preventDefault();
    updateAccount({ fullName, email });
    navigate('/portal/apply/register');
  };

  return (
    <main className="portal-page portal-auth">
      <PortalHeader />
      <ApplicationStepper currentStep={1} />
      <section className="portal-auth__card">
        <h1>Create your account</h1>
        <p>Get started with your email and password.</p>
        <form onSubmit={handleSubmit}>
          <label htmlFor="signup-name">Full name</label>
          <input
            id="signup-name"
            type="text"
            placeholder="e.g. Alex Chen"
            value={fullName}
            onChange={(event) => setFullName(event.target.value)}
            required
          />

          <label htmlFor="signup-email">Email address</label>
          <input
            id="signup-email"
            type="email"
            placeholder="you@example.com"
            value={email}
            onChange={(event) => setEmail(event.target.value)}
            required
          />

          <label htmlFor="signup-password">Password</label>
          <input
            id="signup-password"
            type="password"
            placeholder="Create a password"
            value={password}
            onChange={(event) => setPassword(event.target.value)}
            required
          />

          <button
            type="submit"
            className="portal-button portal-button--primary"
          >
            Sign up
          </button>
        </form>
        <p>
          Already have an account? <Link to="/portal/login">Log in</Link>
        </p>
      </section>
    </main>
  );
}
