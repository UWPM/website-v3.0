export default function OurImpact() {
  return (
    <section className="space-y-12 pt-32">
      <h2 className="text-center">Our Impact</h2>
      <div className="space-y-6">
        <hr className="h-1" />
        <div className="flex justify-around">
          <Statistic number="100+" label="Members" />
          <Statistic number="50+" label="Workshops" />
          <Statistic number="50+" label="Events" />
        </div>
        <hr className="h-1" />
      </div>
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
      <h3>{number}</h3>
      <p>{label}</p>
    </div>
  );
};
