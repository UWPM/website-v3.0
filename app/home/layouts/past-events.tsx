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

const events: { title: string; date: string; description: string }[] = [
  {
    title: "Resume Revamp",
    date: "June 13th, 2024",
    description:
      "Ready to level up your career? Join us at UW PMs RESUME REVAMP! Experienced mentors will be there to provide you with valuable insights and 1:1 guidance.",
  },
  {
    title: "Ice Cream Social",
    date: "May 30th, 2024",
    description:
      "Enjoy free ice cream and snacks while connecting with other students at UW who are just as interested in PM as you are.",
  },
  {
    title: "RISE Product Challenge",
    date: "March 14th, 2024",
    description:
      "Join us for the RISE (Revolutionary Ideas, Strategy, and Execution) Product Challenge – your arena to showcase groundbreaking product management strategies that can change the game! This brand new event is a competitive version of the UWPM Live Case Study event.",
  },
  {
    title: "UWPM X BluePrint Product Night",
    date: "March 7th, 2024",
    description:
      "Blueprint and UWPM are proud to present Product Night which will feature an interactive case study with prompts taken from real PM interviews at large companies, and help you to learn how to ace your next PM interview.",
  },
];

export default function PastEvents() {
  const plugin = useRef(
    Autoplay({ delay: 5000, stopOnInteraction: false, stopOnMouseEnter: true }),
  );
  return (
    <section className="space-y-12 pt-32">
      <h2 className="font-bold">Past Events</h2>
      <div className="relative flex flex-col space-y-6">
        <Carousel
          className="rounded-md bg-gradient-to-b from-zinc-500 to-zinc-500/40 p-12 md:p-24"
          opts={{ loop: true }}
          plugins={[plugin.current]}
        >
          <CarouselContent className="-ml-2 md:-ml-4">
            {events.map((event) => (
              <CarouselItem key={event.title} className="pl-2 md:pl-4">
                <EventItem {...event} />
              </CarouselItem>
            ))}
          </CarouselContent>
          <CarouselPrevious variant="link" className="left-2 md:left-6" />
          <CarouselNext variant="link" className="right-2 md:right-6" />
        </Carousel>
        <Button variant="link">See all events</Button>
      </div>
    </section>
  );
}

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
    <div className="flex flex-col items-center justify-between gap-8 md:flex-row">
      <div className="max-w-prose space-y-4 text-center md:text-left">
        <div className="space-y-1">
          <h3>{title}</h3>
          <p className="text-sm">{date}</p>
        </div>
        <p>{description}</p>
      </div>
      <div className="size-80 shrink-0 bg-zinc-50"></div>
    </div>
  );
};
