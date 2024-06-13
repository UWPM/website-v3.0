"use client";

import { Button } from "@/components/ui/button";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import Autoplay from "embla-carousel-autoplay";
import { useRef } from "react";

//TODO: Create a map with all the past events to display here and use the map function to map over it

export default function PastEvents() {
  const plugin = useRef(Autoplay({ delay: 5000, stopOnInteraction: true }));
  return (
    <section className="space-y-4 pt-32">
      <h2 className="text-2xl font-bold">Past Events</h2>
      <div className="flex flex-col gap-4">
        <Carousel
          className="rounded-md bg-zinc-300 p-32"
          opts={{ loop: true }}
          plugins={[plugin.current]}
          onMouseEnter={plugin.current.stop}
          onMouseLeave={plugin.current.reset}
        >
          <CarouselContent className="-ml-2 md:-ml-4">
            <CarouselItem className="pl-2 md:pl-4">
              <EventItem
                title={"Product Panel"}
                date={"April 2, 2023"}
                description={
                  "An online panel with current and past UW PM executives discussing their experiences and how they landed a product management coop!"
                }
              />
            </CarouselItem>
            <CarouselItem className="pl-2 md:pl-4">
              <EventItem
                title={"Second"}
                date={"April 2, 2023"}
                description={
                  "An online panel with current and past UW PM executives discussing their experiences and how they landed a product management coop!"
                }
              />
            </CarouselItem>
            <CarouselItem className="pl-2 md:pl-4">
              <EventItem
                title={"Third"}
                date={"April 2, 2023"}
                description={
                  "An online panel with current and past UW PM executives discussing their experiences and how they landed a product management coop!"
                }
              />
            </CarouselItem>
          </CarouselContent>
          <CarouselPrevious />
          <CarouselNext />
        </Carousel>
        <Button className="self-center">VIEW ALL EVENTS</Button>
      </div>
    </section>
  );
}

// TODO: Change this to be a reusable component (<EventHeader/>, <EventDate/>...), look at shadcn for how they do it
// TODO: Add image part
const EventItem = ({
  title,
  date,
  description,
}: {
  title: string;
  date: string;
  description: string;
}) => {
  return (
    <div className="w-1/2 space-y-4">
      <div className="space-y-2">
        <h3 className="text-xl font-bold">{title}</h3>
        <p className="text-lg">{date}</p>
      </div>
      <p className="text-lg">{description}</p>
    </div>
  );
};
