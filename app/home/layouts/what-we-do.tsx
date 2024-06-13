import { cn } from "@/lib/utils";
import Image from "next/image";

// TODO: Wrap the component in the background image (we are uw pm.)

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
    <section className="space-y-4 pt-32">
      <h2 className="text-2xl font-bold md:text-3xl">What We Do</h2>
      <div className="flex flex-col items-center space-y-16">
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
 * @param image: the image source // TODO: Image source or image component?
 */
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
        <div className="z-10 -ml-12 size-24 backdrop-blur-none md:-ml-24 md:size-48">
          <Image
            src="https://picsum.photos/300/300"
            alt="image"
            fill
            className="h-full w-full translate-x-1/2 shadow-lg"
          />
        </div>
      </div>
      <div className="flex h-32 w-[300px] justify-center rounded-lg border bg-background/60 p-4 pl-16 shadow backdrop-blur md:h-48 md:w-[600px] md:p-8 md:pl-32">
        <div className="flex flex-col items-center justify-center space-y-4">
          <h3 className="w-full rounded bg-zinc-200 py-2 text-center">
            {title}
          </h3>
          <p className="text-xs">{description}</p>
        </div>
      </div>
    </div>
  );
};
