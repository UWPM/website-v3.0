import React from 'react';
import blueMascot from '../images/background/bow-hex.svg';
import yellowMascot from '../images/background/flower-hex.svg';
import pencilMascot from '../images/background/pencil-hex.svg';
import pinkMascot from '../images/background/pink-bow-hex.svg';
import mascotBlueSticker from '../images/mascot.svg';
import mascotYellowSticker from '../images/mascot-yellow.svg';
import mascotPinkSticker from '../images/mascot-pink.svg';
import salesforce from '../images/company-logos/salesforce.png';
import meta from '../images/company-logos/meta.png';
import microsoft from '../images/company-logos/microsoft.png';
import apple from '../images/company-logos/apple.png';
import riotGames from '../images/company-logos/riotgames.png';
import ibm from '../images/company-logos/ibm.png';
import lyft from '../images/company-logos/lyft.png';
import wish from '../images/company-logos/wish.png';
import datadog from '../images/company-logos/datadog.png';
import americanExpress from '../images/company-logos/american-express.png';
import shopify from '../images/company-logos/shopify.png';
import autodesk from '../images/company-logos/autodesk.png';

const impactStats = [
  {
    value: '100+',
    label: 'members',
    artwork: (
      <div className="impact-stat__mascot-pair" aria-hidden="true">
        <img src={blueMascot} alt="" />
        <img src={yellowMascot} alt="" />
      </div>
    ),
    mobileArtwork: (
      <img
        src={mascotBlueSticker}
        alt="UW PM blue mascot"
        aria-hidden="true"
        className="impact-stat__sticker impact-stat__sticker--blue"
      />
    ),
  },
  {
    value: '50+',
    label: 'workshops',
    artwork: <img src={pencilMascot} alt="" aria-hidden="true" />,
    mobileArtwork: (
      <img
        src={mascotYellowSticker}
        alt="UW PM yellow mascot"
        aria-hidden="true"
        className="impact-stat__sticker impact-stat__sticker--yellow"
      />
    ),
  },
  {
    value: '50+',
    label: 'events',
    artwork: <img src={pinkMascot} alt="" aria-hidden="true" />,
    mobileArtwork: (
      <img
        src={mascotPinkSticker}
        alt="UW PM pink mascot"
        aria-hidden="true"
        className="impact-stat__sticker impact-stat__sticker--pink"
      />
    ),
  },
];

const companies = [
  { name: 'Salesforce', src: salesforce },
  { name: 'Meta', src: meta },
  { name: 'Microsoft', src: microsoft },
  { name: 'Apple', src: apple },
  { name: 'Riot Games', src: riotGames },
  { name: 'IBM', src: ibm },
  { name: 'Lyft', src: lyft },
  { name: 'Wish', src: wish },
  { name: 'Datadog', src: datadog },
  { name: 'American Express', src: americanExpress },
  { name: 'Shopify', src: shopify },
  { name: 'Autodesk', src: autodesk },
];

export default function OurImpact() {
  return (
    <section
      id="our-impact"
      className="our-impact"
      aria-labelledby="our-impact-title"
    >
      <div className="our-impact__inner">
        <h2 id="our-impact-title" className="our-impact__title">
          Our Impact
        </h2>

        <dl className="impact-stats">
          {impactStats.map(
            ({ value, label, artwork, mobileArtwork }, index) => (
              <div className={`impact-stat impact-stat--${index}`} key={label}>
                <div
                  className="impact-stat__artwork impact-stat__artwork--desktop"
                  aria-hidden="true"
                >
                  {artwork}
                </div>
                <div
                  className="impact-stat__artwork impact-stat__artwork--mobile"
                  aria-hidden="true"
                >
                  {mobileArtwork}
                </div>
                <div className="impact-stat__copy">
                  <dt>{label}</dt>
                  <dd>{value}</dd>
                </div>
              </div>
            ),
          )}
        </dl>

        <h2 className="our-impact__community-title">
          Our community has worked at
        </h2>

        <ul
          className="company-wall"
          aria-label="Companies where members have worked"
        >
          {companies.map(({ name, src }) => (
            <li key={name}>
              <img src={src} alt={name} />
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
