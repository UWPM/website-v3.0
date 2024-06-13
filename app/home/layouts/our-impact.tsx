export default function OurImpact() {
  return (
    <section className="pt-32">
      <h2 className="text-2xl font-bold">Our Impact</h2>
      <hr className="my-4 h-1" />
      <div className="flex justify-around">
        <Statistic number="100+" label="Members" />
        <Statistic number="50+" label="Workshops" />
        <Statistic number="50+" label="Events" />
      </div>
      <hr className="my-4 h-1" />
    </section>
  );
}

/**
 * @param number the big number for the statistic (ex. 100+)
 * @param label the description for the number (ex. Members)
 * @returns returns a statistic in the format where the number is large and bold and the label describes it (ex. 100+ Members)
 */
const Statistic = ({ number, label }: { number: string; label: string }) => {
  return (
    <div className="flex flex-col items-center">
      <h3 className="text-xl font-bold">{number}</h3>
      <p className="text-lg">{label}</p>
    </div>
  );
};
