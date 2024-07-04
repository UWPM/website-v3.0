import { Briefcase, Eye, Rocket } from "lucide-react";

// export default function MissionStatement() {
//   return (
//     <section className="grid grid-cols-12 gap-x-6">
//       <div className="col-span-4 space-y-1.5">
//         <div className="inline-flex items-center gap-x-3">
//           <Briefcase />
//           <h3>What We Do</h3>
//         </div>
//         <p>
//           We host a wide array of events running from product case competitions,
//           resume reviews, mock interviews, panel discussions with alumni, and
//           more! Our events aim to help students learn more about the world of
//           product management, whether it is through building first-hand skills
//           or learning from industry experts. Stay tuned for ProdCon, our
//           flagship product case competition running every fall, allowing
//           students to tackle a product-style case study with teammates and
//           compete for prizes.
//         </p>
//       </div>
//       <div className="col-span-4 space-y-1.5">
//         <div className="inline-flex items-center gap-x-3">
//           <Rocket />
//           <h3>Our Mission</h3>
//         </div>
//         <p>
//           UW PM is dedicated to creating a thriving product management community
//           and offering students exposure to the field of product.
//         </p>
//       </div>
//       <div className="col-span-4 space-y-1.5">
//         <div className="inline-flex items-center gap-x-3">
//           <Eye />
//           <h3>Our Vision</h3>
//         </div>
//         <p>
//           Inspire product-level thinking and explore the rationale behind what
//           we should build and why that will propel students towards successful
//           careers in product.
//         </p>
//       </div>
//     </section>
//   );
// }

export default function MissionStatement() {
  return (
    <section className="grid grid-cols-12 gap-x-6">
      <div className="col-span-6 space-y-1.5">
        <div className="inline-flex items-center gap-x-3">
          <Briefcase />
          <h3>What We Do</h3>
        </div>
        <p>
          We host a wide array of events running from product case competitions,
          resume reviews, mock interviews, panel discussions with alumni, and
          more! Our events aim to help students learn more about the world of
          product management, whether it is through building first-hand skills
          or learning from industry experts. Stay tuned for ProdCon, our
          flagship product case competition running every fall, allowing
          students to tackle a product-style case study with teammates and
          compete for prizes.
        </p>
      </div>
      <div className="col-span-6 flex flex-col gap-6">
        <div className="space-y-1.5">
          <div className="inline-flex items-center gap-x-3">
            <Rocket />
            <h3>Our Mission</h3>
          </div>
          <p>
            UW PM is dedicated to creating a thriving product management
            community and offering students exposure to the field of product.
          </p>
        </div>
        <div className="space-y-1.5">
          <div className="inline-flex items-center gap-x-3">
            <Eye />
            <h3>Our Vision</h3>
          </div>
          <p>
            Inspire product-level thinking and explore the rationale behind what
            we should build and why that will propel students towards successful
            careers in product.
          </p>
        </div>
      </div>
    </section>
  );
}
