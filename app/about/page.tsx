import Template from "@/components/template";
import Hero from "./layouts/hero";
import MissionStatement from "./layouts/mission-statement";
import Team from "./layouts/team";
import Values from "./layouts/values";

export default function About() {
  return (
    <Template>
      <Hero />
      <MissionStatement />
      <Values />
      <Team />
    </Template>
  );
}
