import React from 'react';
import { Link } from 'react-router-dom';
import '../styles/Footer.css';

const exploreLinks = [
  { label: 'Home', href: '/' },
  { label: 'About', href: '/about' },
  { label: 'Events', href: '/events' },
  { label: 'Team', href: '/team' },
];

const socialLinks = [
  { label: 'Instagram', href: 'https://www.instagram.com/uwaterloopm/' },
  { label: 'LinkedIn', href: 'https://ca.linkedin.com/company/uw-pm' },
  { label: 'Facebook', href: 'https://www.facebook.com/uwaterloopm/' },
];

function FooterLinks({ title, links }) {
  return (
    <nav className="site-footer__links" aria-label={title}>
      <p className="site-footer__label">{title}</p>
      <ul>
        {links.map(({ label, href }) => (
          <li key={label}>
            {href.startsWith('http') ? (
              <a href={href} target="_blank" rel="noopener noreferrer">
                {label}
              </a>
            ) : (
              <Link to={href}>{label}</Link>
            )}
          </li>
        ))}
      </ul>
    </nav>
  );
}

export default function Footer() {
  return (
    <footer className="site-footer">
      <p className="site-footer__mark" aria-hidden="true">
        UWPM
      </p>

      <div className="site-footer__content">
        <div className="site-footer__intro">
          <p>
            Fostering the creative product management community at the
            University of Waterloo.
          </p>
          <a className="site-footer__email" href="mailto:hello@uwpm.ca">
            hello@uwpm.ca
          </a>
        </div>

        <div className="site-footer__nav">
          <FooterLinks title="Explore" links={exploreLinks} />
          <FooterLinks title="Follow" links={socialLinks} />
        </div>
      </div>

      <div className="site-footer__bottom">
        <p>&copy; UWPM 2026</p>
        <p>University of Waterloo</p>
      </div>
    </footer>
  );
}
