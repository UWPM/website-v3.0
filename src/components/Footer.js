import React from 'react';
import '../styles/Footer.css';

const exploreLinks = [
  { label: 'Home', href: '#home' },
  { label: 'What we do', href: '#what-we-do' },
  { label: 'Our impact', href: '#our-impact' },
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
            <a
              href={href}
              target={href.startsWith('http') ? '_blank' : undefined}
              rel={href.startsWith('http') ? 'noopener noreferrer' : undefined}
            >
              {label}
            </a>
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
