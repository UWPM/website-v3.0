import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import PortalHeader from '../../components/portal/PortalHeader';
import ApplicationStepper from '../../components/portal/ApplicationStepper';
import { usePortal } from '../../context/PortalContext';
import '../../styles/portal/Portal.css';

export default function Login() {
  const navigate = useNavigate();
  const { state } = usePortal();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleSubmit = (event) => {
    event.preventDefault();
    navigate(
      state.submittedAt ? '/portal/dashboard' : '/portal/apply/register',
    );
  };

  return (
    <main className="portal-page portal-auth">
      <PortalHeader />
      <ApplicationStepper currentStep={1} />
      <section className="portal-auth__card">
        <h1>Welcome back!</h1>
        <p>Log in to continue your ProdCon application.</p>
        <form onSubmit={handleSubmit}>
          <label htmlFor="login-email">Email address</label>
          <input
            id="login-email"
            type="email"
            placeholder="you@example.com"
            value={email}
            onChange={(event) => setEmail(event.target.value)}
            required
          />

          <label htmlFor="login-password">Password</label>
          <input
            id="login-password"
            type="password"
            placeholder="Enter your password"
            value={password}
            onChange={(event) => setPassword(event.target.value)}
            required
          />

          <button
            type="submit"
            className="portal-button portal-button--primary"
          >
            Log in
          </button>
        </form>
        <p>
          <Link to="/portal/reset-password">Forgot your password?</Link>
        </p>
        <p>
          Don&apos;t have an account? <Link to="/portal/signup">Sign up</Link>
        </p>
      </section>
    </main>
  );
}
