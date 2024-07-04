import { cn } from "@/lib/utils";
import Image from "next/image";

const hexagonCards = [
  {
    title: "Educate",
    description: "Providing resources & training of product management skills",
    image: "",
  },
  {
    title: "Exposure",
    description: "Access to open opportunities in Canada & the US",
    image: "",
  },
  {
    title: "Network",
    description: "Connecting students and alumni in the industry",
    image: "",
  },
];

// TODO: Add that squigly line next to the first HexagonCard, should probably wrap the HexagonCard in a div for that
export default function WhatWeDo() {
  return (
    <section className="relative space-y-12 pt-32">
      <Image
        src="/images/we-are-uwpm.png"
        width={320}
        height={521}
        alt="we are uwpm"
        className="absolute -bottom-12 left-6"
      />
      <h2 className="font-bold">What We Do</h2>
      <div className="flex flex-col items-center space-y-12">
        <HexagonCard {...hexagonCards[0]} className="md:self-start" />
        <HexagonCard {...hexagonCards[1]} />
        <HexagonCard {...hexagonCards[2]} className="md:self-end" />
      </div>
    </section>
  );
}

/**
 * @param title: title of the card that appears in the red box
 * @param description: the one line description under the title
 * @param image: the image source
 */

//TODO: Work on responsiveness of the cards on smaller screens
const HexagonCard = ({
  title,
  description,
  image,
  className,
}: {
  title: string;
  description: string;
  image: string;
  className?: string;
}) => {
  return (
    <div className={cn("flex items-start", className)}>
      <div className="flex items-center">
        <div className="-ml-12 w-full md:-ml-24 md:h-48 md:w-fit">
          <Image
            src="/images/home/what-we-do-1.png"
            alt="image"
            width={250}
            height={200}
            className="relative z-10 h-full w-full translate-x-1/2"
          />
        </div>
      </div>
      <div className="pl-18 flex h-32 w-[300px] rounded-lg rounded-s-none bg-gradient-to-b from-primary/20 to-primary/5 p-4 pl-12 shadow-2xl sm:w-[500px] md:h-48 md:w-[650px] md:p-8 md:pl-36">
        <div className="flex w-full flex-col items-center justify-center gap-4 text-center">
          <h3 className="w-full rounded bg-gradient-to-b from-primary to-primary/80 bg-clip-text font-semibold text-transparent">
            {title}
          </h3>
          <p className="text-primary/70">{description}</p>
        </div>
      </div>
    </div>
  );
};
