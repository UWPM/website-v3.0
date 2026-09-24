import React, { createContext, useContext, useState } from 'react';

const STORAGE_KEY = 'uwpm-portal-state';

const defaultState = {
  account: { fullName: '', email: '' },
  application: {
    program: '',
    yearOfStudy: '',
    answers: { productIdea: '', greatTeam: '' },
    consent: { mediaConsent: false, dietaryRestrictions: '', specify: '' },
  },
  submittedAt: null,
};

function loadState() {
  try {
    const saved = window.localStorage.getItem(STORAGE_KEY);
    return saved ? { ...defaultState, ...JSON.parse(saved) } : defaultState;
  } catch {
    return defaultState;
  }
}

const PortalContext = createContext(null);

export function PortalProvider({ children }) {
  const [state, setState] = useState(loadState);

  const persist = (next) => {
    setState(next);
    try {
      window.localStorage.setItem(STORAGE_KEY, JSON.stringify(next));
    } catch {
      // localStorage unavailable, state stays in memory for this session
    }
  };

  const updateAccount = (fields) => {
    persist({ ...state, account: { ...state.account, ...fields } });
  };

  const updateApplication = (fields) => {
    persist({
      ...state,
      application: { ...state.application, ...fields },
    });
  };

  const submitApplication = () => {
    persist({ ...state, submittedAt: new Date().toISOString() });
  };

  const logOut = () => {
    persist(defaultState);
  };

  return (
    <PortalContext.Provider
      value={{
        state,
        updateAccount,
        updateApplication,
        submitApplication,
        logOut,
      }}
    >
      {children}
    </PortalContext.Provider>
  );
}

export function usePortal() {
  const context = useContext(PortalContext);
  if (!context) {
    throw new Error('usePortal must be used within a PortalProvider');
  }
  return context;
}
