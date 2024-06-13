import Template from "@/components/template";
import Hero from "./layouts/hero";
import PastEvents from "./layouts/past-events";
import Showcase from "./layouts/showcase";
import UpcomingEvents from "./layouts/upcoming-events";

export default function Events() {
  return (
    <Template>
      <Hero />
      <UpcomingEvents />
      <Showcase />
      <PastEvents />
    </Template>
  );
}
