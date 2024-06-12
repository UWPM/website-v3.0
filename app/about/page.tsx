import Hero from "./layouts/hero";
import MissionStatement from "./layouts/mission-statement";
import Team from "./layouts/team";

export default function About() {
  return (
    <main className="container pt-16">
      <Hero />
      <MissionStatement />
      <Team />
    </main>
  );
}
