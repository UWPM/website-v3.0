import Link from "next/link";

export default function Footer() {
  // TODO: Add links to social media
  return (
    <footer className="flex bg-zinc-300">
      <div className="container flex">
        <div className="mr-auto space-x-4">
          <Link href="/home">Logo</Link>
          <Link href="/">Instagram</Link>
          <Link href="/">Facebook</Link>
          <Link href="/">LinkedIn</Link>
          <Link href="/">Medium</Link>
        </div>
        <p>@UWPM 2024</p>
      </div>
    </footer>
  );
}
