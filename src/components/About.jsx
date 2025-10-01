import Reveal from "./Reveal.jsx";
import { ShieldCheck, Package, Truck, CheckCircle, Award, Leaf, Users } from "lucide-react";

// --- Data for Component Sections ---
const coreValues = [
  {
    icon: <Award className="h-6 w-6 text-amber-500" />,
    title: "Uncompromising Quality",
    description: "We are committed to preserving the natural freshness, nutrition, and aroma of every grain. Our stringent quality checks ensure a premium product every time.",
  },
  {
    icon: <Leaf className="h-6 w-6 text-amber-500" />,
    title: "Sustainable Sourcing",
    description: "Our rice is sourced responsibly through ethical partnerships with trusted growers who share our commitment to sustainable agricultural practices.",
  },
  {
    icon: <Users className="h-6 w-6 text-amber-500" />,
    title: "Customer-Centric Service",
    description: "From individual households to large distributors, we provide consistent, reliable service tailored to meet the unique needs of each client.",
  },
  {
    icon: <Truck className="h-6 w-6 text-amber-500" />,
    title: "Reliable Logistics",
    description: "Based in Aligarh, our robust delivery network ensures your orders arrive on time, every time, across Uttar Pradesh and beyond.",
  },
];

const capabilities = [
  {
    icon: <Package className="h-8 w-8 text-emerald-600" />,
    title: "State-of-the-Art Milling",
    desc: "Our high-capacity processing facilities are equipped with modern technology to ensure efficient and hygienic rice milling.",
  },
  {
    icon: <Package className="h-8 w-8 text-emerald-600" />,
    title: "Custom & Private Label Packaging",
    desc: "We offer flexible packaging solutions, from consumer-friendly retail packs to bulk sacks, with private labeling options available.",
  },
  {
    icon: <Truck className="h-8 w-8 text-emerald-600" />,
    title: "End-to-End Logistics",
    desc: "Our integrated logistics provide seamless, routed deliveries with dedicated support to guarantee on-time arrival for all orders.",
  },
];

const whyChooseUsBadges = [
  "Trusted, GST-Registered Enterprise",
  "Consistent Quality in Every Batch",
  "Stringent Hygiene & Safety Standards",
  "Timely & Reliable Delivery Network",
  "Flexible Retail & Bulk Solutions",
  "Competitive Pricing without Compromise",
];

export default function About() {
  return (
    <section id="about" className="relative bg-gradient-to-b from-emerald-50 via-white to-white">
      {/* Hero Banner */}
      <Reveal>
        <div className="relative h-[70vh] w-full overflow-hidden sm:h-[80vh] lg:h-[85vh]">
          <img
            src="/images/about_banner.jpg"
            alt="Verdant rice fields under a clear sky"
            className="absolute inset-0 h-full w-full object-cover"
          />
          <div className="absolute inset-0 flex flex-col items-center justify-center bg-gradient-to-r from-black/70 to-black/40 px-4 text-center sm:px-6 lg:px-8">
            <h1 className="text-3xl font-extrabold leading-tight text-white sm:text-4xl lg:text-6xl">
              Nurturing Tradition, Delivering Excellence
            </h1>
            <p className="mt-4 max-w-3xl text-base text-emerald-100 sm:text-lg lg:text-xl">
              At Malik Agro Food, we bring you premium quality rice, cultivated with care and processed to perfection.
              <br />
              Registered under <span className="font-semibold">GSTIN: 09AASCM8666M1Z9</span>.
            </p>
          </div>
        </div>
      </Reveal>

      <div className="mx-auto max-w-7xl space-y-20 px-4 py-16 sm:px-6 sm:py-24 lg:px-8 lg:py-28">
        
        {/* Our Heritage (Formerly Our Story) - MODIFIED AS REQUESTED */}
        <Reveal>
          <div className="mx-auto max-w-4xl text-center">
            <SectionHeader
              title="Our Heritage"
              subtitle="A Legacy of Quality and Trust"
            />
            <p className="mt-6 mb-4 text-base text-slate-700 sm:text-lg">
              Malik Agro Food was born from a simple vision: to bridge the gap between dedicated farmers and discerning consumers. With decades of experience in the agricultural trade, we have perfected the art of rice milling, packaging, and distribution to ensure that every grain reflects our promise of superior taste and quality.
            </p>
            <p className="text-base text-slate-700 sm:text-lg">
              Our journey is rooted in the fertile lands of Aligarh, Uttar Pradesh. We believe in ethical practices and sustainable sourcing, fostering strong relationships with local growers to bring you a product that is pure, aromatic, and wholesome.
            </p>
          </div>
        </Reveal>

        {/* Our Core Values */}
        <Reveal>
          <div className="text-center">
             <SectionHeader
                title="Our Core Values"
                subtitle="The Foundation of Our Business"
              />
          </div>
          <div className="mt-12 grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
            {coreValues.map((value) => (
              <div key={value.title} className="rounded-2xl border border-emerald-200 bg-white p-6 shadow-md transition hover:shadow-xl hover:-translate-y-1">
                <div className="flex h-10 w-10 items-center justify-center">{value.icon}</div>
                <h3 className="mt-4 text-lg font-semibold text-emerald-900">{value.title}</h3>
                <p className="mt-2 text-sm text-slate-600">{value.description}</p>
              </div>
            ))}
          </div>
        </Reveal>

        {/* Capabilities */}
        <Reveal>
          <div className="rounded-2xl border border-emerald-200 bg-white p-6 shadow-md sm:p-8">
            <div className="text-center">
               <SectionHeader
                title="Our Capabilities"
                subtitle="Precision and Scale in Every Operation"
              />
            </div>
            <div className="mt-10 grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
              {capabilities.map((capability, index) => (
                <CapabilityCard
                  key={index}
                  icon={capability.icon}
                  title={capability.title}
                  desc={capability.desc}
                />
              ))}
            </div>
          </div>
        </Reveal>

        {/* Why Choose Us */}
        <Reveal>
          <div className="rounded-2xl border border-emerald-200 bg-white p-6 shadow-md sm:p-8">
            <div className="grid items-center gap-8 lg:grid-cols-2 lg:gap-12">
              <div className="space-y-4">
                 <SectionHeader
                  title="Why Choose Malik Agro Food?"
                  subtitle="Your Trusted Partner for Premium Rice"
                  isLeftAligned
                />
                <div className="flex flex-wrap gap-3 pt-2">
                  {whyChooseUsBadges.map((text, index) => (
                    <Badge key={index}>{text}</Badge>
                  ))}
                </div>
              </div>
              <div>
                <img
                  src="/images/whyus.jpg"
                  alt="A bowl of high-quality cooked rice"
                  className="h-auto w-full rounded-2xl object-cover shadow-lg"
                />
              </div>
            </div>
          </div>
        </Reveal>

      </div>
    </section>
  );
}

// --- Reusable Helper Components ---

function SectionHeader({ title, subtitle, isLeftAligned = false }) {
  return (
    <div className={isLeftAligned ? "text-left" : "mx-auto max-w-2xl text-center"}>
      <h2 className="text-2xl font-bold tracking-tight text-emerald-900 sm:text-3xl">
        {title}
      </h2>
      <p className="mt-2 text-base text-slate-600 sm:text-lg">
        {subtitle}
      </p>
    </div>
  );
}

function CapabilityCard({ icon, title, desc }) {
  return (
    <div className="group rounded-xl border border-slate-200 p-6 text-center transition-all duration-300 hover:border-emerald-300 hover:shadow-lg">
      <div className="mx-auto flex h-16 w-16 items-center justify-center rounded-full bg-emerald-100 transition-transform duration-300 group-hover:scale-110">
        {icon}
      </div>
      <h3 className="mt-4 font-semibold text-slate-900">{title}</h3>
      <p className="mt-2 text-sm text-slate-600">{desc}</p>
    </div>
  );
}

function Badge({ children }) {
  return (
    <div className="inline-flex items-center gap-2 rounded-full border border-emerald-200 bg-emerald-50 px-4 py-2 text-xs font-medium text-emerald-900 sm:text-sm">
      <CheckCircle className="h-4 w-4 text-emerald-500" />
      <span>{children}</span>
    </div>
  );
}