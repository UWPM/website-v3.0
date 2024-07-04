import Template from "@/components/template";
import Hero from "./layouts/hero";
import MissionStatement from "./layouts/mission-statement-change";
import Team from "./layouts/team";
import Values from "./layouts/values";

export default function About() {
  return (
    <Template className="space-y-32">
      <Hero />
      <MissionStatement />
      <Values />
      <Team />
    </Template>
  );
}
