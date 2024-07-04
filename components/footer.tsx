import Link from "next/link";
import Logo from "./logo";
import { ComponentProps } from "react";

export default function Footer() {
  return (
    <footer className="container grid grid-cols-2 gap-x-6 gap-y-8 pb-12 pt-32 md:grid-cols-12">
      <div className="col-span-2 flex flex-col gap-y-2 md:col-span-6 md:gap-y-1">
        <span className="border-b border-b-foreground pb-1 font-bold">
          Navigation
        </span>
        <FooterLinks>
          <li>
            <Link href="/home">Home</Link>
          </li>
          <li>
            <Link href="/about">About</Link>
          </li>
          <li>
            <Link href="/events">Events</Link>
          </li>
        </FooterLinks>
      </div>
      <div className="flex flex-col gap-y-2 md:col-span-3 md:gap-y-1">
        <span className="border-b border-b-foreground pb-1 font-bold">
          Resources
        </span>
        <FooterLinks>
          <li>
            <Link href="https://open.spotify.com/show/4bjMhUJIKYlAl0nCjQCqGv">
              Podcast
            </Link>
          </li>
          <li>
            <Link href="https://uwaterloopm.com">Join the team</Link>
          </li>
          <li>
            <Link href="https://uwaterloopm.com">Case studies</Link>
          </li>
          <li>
            <Link href="https://uwaterloopm.com">Job board</Link>
          </li>
        </FooterLinks>
      </div>
      <div className="flex flex-col gap-y-2 md:col-span-3 md:gap-y-1">
        <span className="border-b border-b-foreground pb-1 font-bold">
          Socials
        </span>
        <FooterLinks>
          <li>
            <Link href="https://www.instagram.com/uwaterloopm/?hl=en">
              Instagram
            </Link>
          </li>
          <li>
            <Link href="https://www.facebook.com/uwaterloopm/">Facebook</Link>
          </li>
          <li>
            <Link href="https://www.linkedin.com/company/uw-pm/">LinkedIn</Link>
          </li>
          <li>
            <Link href="https://discord.gg/VaYqRrwSNJ">Discord</Link>
          </li>
        </FooterLinks>
      </div>
      <div className="col-span-2 flex items-center justify-between md:col-span-12">
        <h3>@UWPM 2024</h3>
        <Logo />
      </div>
    </footer>
  );
}

const FooterLinks = (props: ComponentProps<"ul">) => {
  return (
    <ul
      className="*:after:ease-[cubic-bezier(0.65_0.05_0.36_1)] space-y-2 *:relative *:w-fit *:after:absolute *:after:bottom-0 *:after:left-0 *:after:h-[2px] *:after:w-full *:after:origin-bottom-right *:after:scale-x-0 *:after:bg-accent *:after:transition-transform *:after:duration-300 hover:*:after:origin-bottom-left hover:*:after:scale-x-100 md:space-y-1"
      {...props}
    />
  );
};
