import Link from "next/link";

export default function Footer() {
  // TODO: Add links to social media
  // TODO: Add background color to the 'footer' tag
  return (
    <footer className="flex items-center pb-12 pt-32">
      <div className="container flex flex-col items-center gap-x-8 gap-y-4 px-4 md:flex-row md:justify-between md:px-8">
        <div className="space-x-4 font-bold">
          <Link href="/home" className="hidden md:inline-block">
            Logo
          </Link>
          <Link href="/">Instagram</Link>
          <Link href="/">Facebook</Link>
          <Link href="/">LinkedIn</Link>
          <Link href="/">Medium</Link>
        </div>
        <div className="">
          <p className="text-sm font-light">@UWPM 2024</p>
        </div>
      </div>
    </footer>
  );
}
