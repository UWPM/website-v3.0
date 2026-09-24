import React from 'react';

export const APPLICATION_STEPS = ['Register', 'Questions', 'Consent', 'Submit'];

export default function ApplicationStepper({ currentStep }) {
  return (
    <ol className="application-stepper" aria-label="Application progress">
      {APPLICATION_STEPS.map((label, index) => {
        const stepNumber = index + 1;
        const status =
          stepNumber === currentStep
            ? 'current'
            : stepNumber < currentStep
            ? 'complete'
            : 'upcoming';
        return (
          <li
            key={label}
            className={`application-stepper__step application-stepper__step--${status}`}
            aria-current={status === 'current' ? 'step' : undefined}
          >
            <span className="application-stepper__number">{stepNumber}</span>
            <span className="application-stepper__label">{label}</span>
          </li>
        );
      })}
    </ol>
  );
}
