import { Menu } from "lucide-react";
import { Button } from "./ui/button";
import { Sheet, SheetContent, SheetTrigger } from "./ui/sheet";
import Link from "next/link";

export default function Navbar() {
  // TODO: Make sticky and blur background
  return (
    <nav className="sticky top-0 z-50 border-b border-border/40 bg-background/60 py-6 backdrop-blur">
      <div className="container flex px-4 md:px-8">
        <Link href="/home" className="mr-auto">
          Logo
        </Link>
        <Sheet>
          <SheetTrigger className="md:hidden" asChild>
            <Button variant="ghost" size="icon">
              <Menu />
            </Button>
          </SheetTrigger>
          <SheetContent className="flex h-full flex-col items-center justify-center">
            <Link href="/home">Home</Link>
            <Link href="/about">About</Link>
            <Link href="/events">Events</Link>
          </SheetContent>
        </Sheet>
        <div className="hidden space-x-4 md:inline-block">
          <Link href="/home">Home</Link>
          <Link href="/about">About</Link>
          <Link href="/events">Events</Link>
        </div>
      </div>
    </nav>
  );
}
