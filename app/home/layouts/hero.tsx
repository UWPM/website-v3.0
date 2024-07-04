import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";
import Image from "next/image";

export default function Hero() {
  return (
    <>
      <Image
        alt="background"
        width={1600}
        height={800}
        src="/images/hexagon.png"
        className="absolute inset-0 left-1/2 top-20 aspect-auto -translate-x-1/2 object-contain"
      />
      <header className="relative z-10 flex h-[50dvh] flex-col items-center justify-center space-y-16">
        <div className="max-w-prose text-center">
          <h1>UWPM</h1>
          <h3 className="font-normal">
            Fostering the Creative Product Management Community @ UWaterloo
          </h3>
        </div>

        <div className="flex space-x-4">
          <Button className="flex-1">Learn more</Button>
          <Button className="flex-1 shrink-0 group" variant="link">
            Join our team <ArrowRight className="ml-1 w-4 scale-0 group-hover:scale-100 -translate-x-1 group-hover:translate-x-0 transition-all duration-200" />
          </Button>
        </div>
      </header>
    </>
  );
}

{
  /* <span className="relative">
<span className="relative z-10">&nbsp;Creative&nbsp;</span>
<div className="absolute -top-1 left-1 z-0 h-8 w-16 rounded-full border-2 border-red-400" /> 
</span> */
}
