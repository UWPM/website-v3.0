import Image from "next/image";
// TODO: Discuss the use of the hero components on each page
export default function Hero() {
  return (
    <header className="max-w-prose ">
      <h2>
        Fostering the Creative Product Management Community @ UWaterloo.
      </h2>
      <div className="bg-red-950 w-full h-fit">
        <Image
          alt="UWPM Students"
          src="/images/about-us/club-members.jpg"
          width={1920}
          height={300}
          className="absolute inset-0 -z-10 h-96 rounded-b-3xl object-cover brightness-[25%] shadow-lg"
        />
      </div>
    </header>
  );
}
