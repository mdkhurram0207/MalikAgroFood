import Reveal from "./Reveal.jsx";

export default function WhyChoose() {
  return (
    <section className="py-16 bg-white">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <Reveal>
          <div className="text-center">
            <h2 className="text-3xl font-extrabold tracking-tight text-emerald-900">Why Choose Malik Agro Food?</h2>
            <p className="mt-3 text-slate-700 max-w-3xl mx-auto">
              We combine reliable sourcing, careful milling, and responsive service to deliver rice you can trust—batch after batch.
            </p>
          </div>
        </Reveal>

        <div className="mt-10 grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          <Reveal>
            <Card title="Consistent Quality" desc="Uniform grain selection with multi-stage checks for texture, aroma, and purity." />
          </Reveal>
          <Reveal delayMs={100}>
            <Card title="Hygienic Processing" desc="Clean, automated lines reduce human contact and preserve natural goodness." />
          </Reveal>
          <Reveal delayMs={200}>
            <Card title="Timely Delivery" desc="Routed logistics ensure on-time dispatch for retail and bulk orders." />
          </Reveal>
          <Reveal delayMs={300}>
            <Card title="Flexible Packaging" desc="From 1 kg retail packs to 25 kg bulk sacks, tailored to your needs." />
          </Reveal>
          <Reveal delayMs={400}>
            <Card title="Transparent Service" desc="Clear communication on availability, pricing, and timelines—no surprises." />
          </Reveal>
          <Reveal delayMs={500}>
            <Card title="Fair Pricing" desc="Great value without compromising on safety, hygiene, or consistency." />
          </Reveal>
        </div>

        <Reveal delayMs={600}>
          <div className="mt-10 flex justify-center">
            <a href="/contact" className="inline-flex items-center justify-center rounded-md bg-emerald-700 px-6 py-3 text-white text-sm font-medium hover:bg-emerald-600 transition-transform hover:-translate-y-0.5">
              Contact Us
            </a>
          </div>
        </Reveal>
      </div>
    </section>
  );
}

function Card({ title, desc }) {
  return (
    <div className="rounded-2xl border border-emerald-200 bg-white p-6 shadow-sm hover:shadow-md hover:-translate-y-0.5 transition">
      <div className="text-emerald-900 font-semibold">{title}</div>
      <p className="mt-2 text-sm text-slate-700">{desc}</p>
    </div>
  );
}




