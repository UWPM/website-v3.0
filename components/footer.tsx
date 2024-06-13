import Link from "next/link";

export default function Footer() {
  // TODO: Add links to social media
  // TODO: Add background color to the 'footer' tag
  return (
    <footer className="flex items-center pb-12 pt-32">
      <div className="container flex px-4 md:px-8">
        <div className="mr-auto space-x-4 font-bold">
          <Link href="/home">Logo</Link>
          <Link href="/">Instagram</Link>
          <Link href="/">Facebook</Link>
          <Link href="/">LinkedIn</Link>
          <Link href="/">Medium</Link>
        </div>
        <p className="text-sm font-light">@UWPM 2024</p>
      </div>
    </footer>
  );
}
