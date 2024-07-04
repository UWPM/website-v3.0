import Image from "next/image";

const companies: { name: string; src: string }[] = [
  {
    name: "salesforce",
    src: "https://picsum.photos/id/1/200/100/?blur=3",
  },
  {
    name: "meta",
    src: "https://picsum.photos/id/12/200/100/?blur=3",
  },
  {
    name: "microsoft",
    src: "https://picsum.photos/id/13/200/100/?blur=3",
  },
  {
    name: "apple",
    src: "https://picsum.photos/id/14/200/100/?blur=3",
  },
  {
    name: "riot",
    src: "https://picsum.photos/id/15/200/100/?blur=3",
  },
  {
    name: "ibm",
    src: "https://picsum.photos/id/16/200/100/?blur=3",
  },
  {
    name: "lyft",
    src: "https://picsum.photos/id/17/200/100/?blur=3",
  },
  {
    name: "wish",
    src: "https://picsum.photos/id/18/200/100/?blur=3",
  },
  {
    name: "datadog",
    src: "https://picsum.photos/id/19/200/100/?blur=3",
  },
  {
    name: "american express",
    src: "https://picsum.photos/id/10/200/100/?blur=3",
  },
  {
    name: "shopify",
    src: "https://picsum.photos/id/21/200/100/?blur=3",
  },
  {
    name: "autodesk",
    src: "https://picsum.photos/id/22/200/100/?blur=3",
  },
];

export default function WorkExperience() {
  return (
    <section className="space-y-12 pb-16 pt-32">
      <h2 className="text-pretty text-center">Our Community Has Worked At</h2>
      <div className="inline-flex w-full flex-nowrap overflow-hidden [mask-image:_linear-gradient(to_right,transparent_0,_black_24px,_black_calc(100%-24px),transparent_100%)] sm:[mask-image:_linear-gradient(to_right,transparent_0,_black_144px,_black_calc(100%-144px),transparent_100%)]">
        <ul className="flex animate-infinite-scroll items-center justify-start [&_img]:max-w-none [&_li]:mx-4">
          {companies.map((company, index) => (
            <li key={index}>
              <Image alt="company" width={200} height={100} src={company.src} />
            </li>
          ))}
        </ul>
        <ul
          className="flex animate-infinite-scroll items-center justify-start [&_img]:max-w-none [&_li]:mx-4"
          aria-hidden="true"
        >
          {companies.map((company, index) => (
            <li key={index}>
              <Image alt="company" width={200} height={100} src={company.src} />
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
