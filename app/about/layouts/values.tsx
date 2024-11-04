import { Card, CardContent, CardHeader } from "@/components/ui/card";
import Image from "next/image";

// export default function Values() {
//   return (
//     <section className="space-y-6">
//       <h2>Our Values</h2>
//       <div className=">:hover:not:hover-opacity-20 grid md:grid-cols-2 lg:grid-cols-4 gap-6 ">
//         <ValueCard
//           title={"Innovation"}
//           description={
//             "We value innovation as the driving force behind successful products, that comes from encouraging creative thinking, the exploration of new ideas, and the pursuit of inventive solutions to real-world problems."
//           }
//         />
//         <ValueCard
//           title={"Empowerment"}
//           description={
//             "We empower anyone to succeed and break into the world of product management by providing the resources, knowledge, and opportunities necessary to succeed. We believe in equipping individuals with the skills and experiences to work in product, no matter their background."
//           }
//         />
//         <ValueCard
//           title={"Continuous Learning"}
//           description={
//             "We embrace a growth mindset and value continuous learning for all our members. Members are encouraged to expand their horizons on the world of product from learning from everyone around them to strive for personal and professional development."
//           }
//         />
//         <ValueCard
//           title={"Community Engagement"}
//           description={
//             "We actively engage with the Waterloo product management community, both with alumni, current students and beyond, to exchange knowledge and build valuable long-lasting connections."
//           }
//         />
//       </div>
//     </section>
//   );
// }

// type ValueCardProps = {
//   title: string;
//   description: string;
// };

// const ValueCard: React.FC<ValueCardProps> = ({ title, description }) => {
//   return (
//     <div className="group relative border py-6 px-3 rounded-lg">
//       <Image
//         alt={title}
//         src={`/images/about-us/${title.toLowerCase().replaceAll(" ", "-")}.png`}
//         width={300}
//         height="300"
//         className="absolute bottom-0 opacity-20 blur-sm brightness-[5%] transition-all group-hover:blur-none group-hover:brightness-50"
//       />
//       <div className="space-y-2.5">
//         <h4 className="text-xl font-semibold">{title}</h4>
//         <p className="">{description}</p>
//       </div>
//     </div>
//   );
// };

export default function Values() {
  return (
    <section className="space-y-6">
      <h2>Our Values</h2>
      <div className=">:hover:not:hover-opacity-20 grid gap-6 *:transition-all *:duration-200 hover:*:-translate-y-3 hover:*:shadow-2xl md:grid-cols-2 lg:grid-cols-4">
        <Card className="border-card/50 bg-transparent text-primary shadow-lg">
          <CardHeader className="flex items-center">
            <Image
              alt="test"
              src="/images/about-us/innovation.png"
              width="128"
              height="128"
              className="mb-4"
            />
          </CardHeader>
          <CardContent className="space-y-2.5">
            <h4 className="text-xl font-semibold">Innovation</h4>
            <p>
              We value innovation as the driving force behind successful
              products, that comes from encouraging creative thinking, the
              exploration of new ideas, and the pursuit of inventive solutions
              to real-world problems.
            </p>
          </CardContent>
        </Card>
      </div>
    </section>
  );
}
