import { cn } from "@/lib/utils";
import React from "react";

export default function MissionStatement() {
  return (
    <section className="space-y-12 pt-32">
      <h2 className="text-2xl font-bold md:text-3xl">About Us</h2>
      <div className="flex flex-col gap-28">
        <div className="relative flex flex-col justify-center gap-14 md:flex-row">
          <div className="absolute bottom-0 left-1/2 z-10 hidden size-32 -translate-x-1/2 translate-y-1/2 rounded-full bg-red-200/50 md:block" />
          <StatementCard className="basis-auto md:basis-[450px]">
            <StatementCardHeader>Mission</StatementCardHeader>
            <StatementCardContent>
              <p className="text-center">
                UW PM is dedicated to creating a thriving product management
                community and offering students exposure to the field of
                product.
              </p>
            </StatementCardContent>
          </StatementCard>
          <StatementCard className="basis-auto md:basis-[450px]">
            <StatementCardHeader>Vision</StatementCardHeader>
            <StatementCardContent>
              <p className="text-center">
                Inspire product-level thinking and explore the rationale behind
                what we should build and why that will propel students towards
                successful careers in product.
              </p>
            </StatementCardContent>
          </StatementCard>
        </div>
        {/* // TODO: Instead of using 3 paragraph elements, use whitepace-pre */}
        <StatementCard className="self-center md:max-w-[600px]">
          <StatementCardHeader>What Do We Do</StatementCardHeader>
          <StatementCardContent className="space-y-4 text-center">
            <p>
              We host a wide array of events running from product case
              competitions, resume reviews, mock interviews, panel discussions
              with alumni, and more!
            </p>
            <p>
              Our events aim to help students learn more about the world of
              product management, whether it is through building first-hand
              skills or learning from industry experts.
            </p>
            <p>
              Stay tuned for ProdCon, our flagship product case competition
              running every fall, allowing students to tackle a product-style
              case study with teammates and compete for prizes.
            </p>
          </StatementCardContent>
        </StatementCard>
      </div>
    </section>
  );
}

const StatementCard: React.FC<React.HTMLAttributes<HTMLDivElement>> = ({
  className,
  ...props
}) => {
  return (
    <div
      className={cn(
        "relative flex flex-col items-center rounded bg-zinc-200",
        className,
      )}
      {...props}
    />
  );
};

const StatementCardHeader: React.FC<React.HTMLAttributes<HTMLDivElement>> = ({
  className,
  ...props
}) => {
  return (
    <div
      className={cn(
        "absolute top-0 -translate-y-1/2 rounded bg-zinc-500 bg-opacity-50 px-4 py-2 text-xl font-bold text-primary-foreground",
        className,
      )}
      {...props}
    />
  );
};

const StatementCardContent: React.FC<React.HTMLAttributes<HTMLDivElement>> = ({
  className,
  ...props
}) => {
  return <div className={cn("p-8 pt-12", className)} {...props} />;
};
