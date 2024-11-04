import Image from "next/image";
// TODO: Discuss the use of the hero components on each page
export default function Hero() {
  return (
    <header>
      <div className="max-w-prose">
        <h2>
          Fostering the Creative Product Management Community @ UWaterloo.
        </h2>
      </div>
      <div className="relative h-96 w-full">
        <Image
          alt="UWPM Students"
          src="/images/about-us/club-members.jpg"
          fill
          className="absolute inset-0 -z-10 h-[450px] rounded-b-3xl object-cover shadow-lg brightness-[25%]"
        />
      </div>
    </header>
  );
}
