import Template from "@/components/template";
import Hero from "./layouts/hero";
import MissionStatement from "./layouts/mission-statement";
import Team from "./layouts/team";

export default function About() {
  return (
    <Template>
      <Hero />
      <MissionStatement />
      <Team />
    </Template>
  );
}
