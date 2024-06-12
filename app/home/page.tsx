import Hero from "./layouts/hero";
import OurImpact from "./layouts/our-impact";
import PastEvents from "./layouts/past-events";
import WhatWeDo from "./layouts/what-we-do";
import WorkExperience from "./layouts/work-experience";

export default function Home() {
  return (
    <main className="container pt-16">
      <Hero />
      <WhatWeDo />
      <OurImpact />
      <PastEvents />
      {/* // TODO: Change the name for this component */}
      <WorkExperience />
    </main>
  );
}
