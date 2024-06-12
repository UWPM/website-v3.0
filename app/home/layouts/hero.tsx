import { Button } from "@/components/ui/button";

export default function Hero() {
  return (
    <header className="space-y-8">
      <h1>
        Fostering the
        <span className="relative">
          <span className="relative z-10">&nbsp;Creative&nbsp;</span>
          {/*// TODO: make this the circle <div className="absolute -top-1 left-1 z-0 h-8 w-16 rounded-full border-2 border-red-400" /> */}
        </span>
        Product Management Community @ UWaterloo
      </h1>
      <div className="space-x-4">
        <Button>About</Button>
        <Button variant="outline">Join Now</Button>
      </div>
    </header>
  );
}
