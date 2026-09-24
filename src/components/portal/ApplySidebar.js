import React from 'react';
import { APPLICATION_STEPS } from './ApplicationStepper';

export default function ApplySidebar({ currentStep }) {
  return (
    <nav className="apply-sidebar" aria-label="Application steps">
      <h2 className="apply-sidebar__heading">Your Journey Starts Here</h2>
      <ol className="apply-sidebar__list">
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
              className={`apply-sidebar__item apply-sidebar__item--${status}`}
            >
              <span className="apply-sidebar__number">{stepNumber}</span>
              <span>{label}</span>
            </li>
          );
        })}
      </ol>
    </nav>
  );
}
