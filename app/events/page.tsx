import Hero from "./layouts/hero";
import PastEvents from "./layouts/past-events";
import Showcase from "./layouts/showcase";
import UpcomingEvents from "./layouts/upcoming-events";

export default function Events() {
  return (
    <main className="container pt-16">
      <Hero />
      <UpcomingEvents />
      <Showcase />
      <PastEvents />
    </main>
  );
}
