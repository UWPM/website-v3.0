import React from 'react';
import { Route, Routes } from 'react-router-dom';
import './App.css';
import Home from './pages/Home';
import Events from './pages/Events';
import About from './pages/About';
import Team from './pages/Team';
import { PortalProvider } from './context/PortalContext';
import PortalLanding from './pages/portal/PortalLanding';
import Signup from './pages/portal/Signup';
import Login from './pages/portal/Login';
import ResetPassword from './pages/portal/ResetPassword';
import ApplyRegister from './pages/portal/ApplyRegister';
import ApplyQuestions from './pages/portal/ApplyQuestions';
import ApplyConsent from './pages/portal/ApplyConsent';
import ApplySubmit from './pages/portal/ApplySubmit';
import Confirmation from './pages/portal/Confirmation';
import ConfirmationEmail from './pages/portal/ConfirmationEmail';
import Dashboard from './pages/portal/Dashboard';
import DashboardDetails from './pages/portal/DashboardDetails';

function App() {
  return (
    <main className="App">
      <PortalProvider>
        <Routes>
          <Route path="/events" element={<Events />} />
          <Route path="/about" element={<About />} />
          <Route path="/team" element={<Team />} />
          <Route path="/portal" element={<PortalLanding />} />
          <Route path="/portal/signup" element={<Signup />} />
          <Route path="/portal/login" element={<Login />} />
          <Route path="/portal/reset-password" element={<ResetPassword />} />
          <Route path="/portal/apply/register" element={<ApplyRegister />} />
          <Route path="/portal/apply/questions" element={<ApplyQuestions />} />
          <Route path="/portal/apply/consent" element={<ApplyConsent />} />
          <Route path="/portal/apply/submit" element={<ApplySubmit />} />
          <Route path="/portal/apply/confirmation" element={<Confirmation />} />
          <Route
            path="/portal/apply/confirmation-email"
            element={<ConfirmationEmail />}
          />
          <Route path="/portal/dashboard" element={<Dashboard />} />
          <Route
            path="/portal/dashboard/details"
            element={<DashboardDetails />}
          />
          <Route path="*" element={<Home />} />
        </Routes>
      </PortalProvider>
    </main>
  );
}

export default App;
