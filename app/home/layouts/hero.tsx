import { Button } from "@/components/ui/button";

export default function Hero() {
  return (
    <header className="flex flex-col space-y-16 py-52">
      <h1 className="text-balance text-4xl font-semibold md:w-2/3 md:text-5xl">
        Fostering the
        <span className="relative">
          <span className="relative z-10">&nbsp;Creative&nbsp;</span>
          {/*// TODO: make this the circle <div className="absolute -top-1 left-1 z-0 h-8 w-16 rounded-full border-2 border-red-400" /> */}
        </span>
        Product Management Community @ UWaterloo
      </h1>
      <div className="space-x-4">
        <Button>ABOUT</Button>
        <Button variant="outline">JOIN NOW</Button>
      </div>
    </header>
  );
}
