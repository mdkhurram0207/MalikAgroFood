import Reveal from "./Reveal.jsx";

export default function Welcome() {
  return (
    <section id="welcome" className="py-16 bg-white">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <Reveal>
          <div className="text-center">
            <h2 className="text-3xl sm:text-4xl font-extrabold tracking-wider text-transparent bg-clip-text bg-gradient-to-r from-emerald-600 via-emerald-500 to-amber-400">Welcome to Malik Agro Food</h2>
            <p className="mt-3 text-emerald-800/90 max-w-3xl mx-auto">
              We are a Private Limited Company (GSTIN: 09AASCM8666M1Z9) delivering premium Steam and Long Grain rice
              in both retail and bulk quantities. We focus on quality, hygiene, and timely delivery across Aligarh and nearby regions.
            </p>
          </div>
        </Reveal>

        <Reveal delayMs={100}>
          <div className="mt-8">
            {/* Desktop / large screens: two images side-by-side */}
            <div className="hidden md:grid md:grid-cols-2 gap-6">
              <div className="relative">
                <img src="/images/welcome.jpg" alt="Rice processing and quality control" className="w-full h-72 sm:h-80 object-cover rounded-2xl shadow-lg border border-amber-200" />
              </div>
              <div className="relative md:translate-y-4">
                <img src="/images/welcome2.jpg" alt="Packed rice bags ready for delivery" className="w-full h-72 sm:h-80 object-cover rounded-2xl shadow-lg border border-amber-200" />
              </div>
            </div>

            {/* Mobile / small screens: stack image, content, image */}
            <div className="flex flex-col md:hidden gap-6">
              <div className="relative">
                <img src="/images/welcome.jpg" alt="Rice processing and quality control" className="w-full h-64 object-cover rounded-2xl shadow-lg border border-amber-200" />
              </div>

              <div className="rounded-2xl border border-amber-200 bg-amber-50 p-4 text-emerald-900">
                <h4 className="font-semibold">Why choose our rice?</h4>
                <ul className="mt-2 text-sm space-y-1">
                  <li>• Premium, consistent grain quality</li>
                  <li>• Hygienic processing and packaging</li>
                  <li>• Reliable supply for retail and bulk orders</li>
                </ul>
              </div>

              <div className="relative">
                <img src="/images/welcome2.jpg" alt="Packed rice bags ready for delivery" className="w-full h-64 object-cover rounded-2xl shadow-lg border border-amber-200" />
              </div>
            </div>
          </div>
        </Reveal>

        <div className="mt-10 grid lg:grid-cols-3 gap-6">
          <Reveal>
            <div className="rounded-2xl border border-emerald-200 bg-white p-6 shadow-sm">
              <h3 className="font-semibold text-emerald-900">Who We Serve</h3>
              <ul className="mt-3 space-y-2 text-slate-700">
                <li className="flex items-start gap-2"><span className="mt-2 h-1.5 w-1.5 rounded-full bg-amber-400" /> Households (retail packs)</li>
                <li className="flex items-start gap-2"><span className="mt-2 h-1.5 w-1.5 rounded-full bg-amber-400" /> Distributors and wholesalers</li>
                <li className="flex items-start gap-2"><span className="mt-2 h-1.5 w-1.5 rounded-full bg-amber-400" /> Hotels, restaurants, and caterers</li>
              </ul>
            </div>
          </Reveal>
          <Reveal delayMs={100}>
            <div className="rounded-2xl border border-emerald-200 bg-white p-6 shadow-sm">
              <h3 className="font-semibold text-emerald-900">What You Get</h3>
              <ul className="mt-3 space-y-2 text-slate-700">
                <li className="flex items-start gap-2"><span className="mt-2 h-1.5 w-1.5 rounded-full bg-amber-400" /> Consistent, premium grain quality</li>
                <li className="flex items-start gap-2"><span className="mt-2 h-1.5 w-1.5 rounded-full bg-amber-400" /> Hygienic processing and packaging</li>
                <li className="flex items-start gap-2"><span className="mt-2 h-1.5 w-1.5 rounded-full bg-amber-400" /> Fast delivery and responsive support</li>
              </ul>
            </div>
          </Reveal>
          <Reveal delayMs={200}>
            <div className="rounded-2xl border border-emerald-200 bg-white p-6 shadow-sm">
              <h3 className="font-semibold text-emerald-900">Our Rice</h3>
              <ul className="mt-3 space-y-2 text-slate-700">
                <li className="flex items-start gap-2"><span className="mt-2 h-1.5 w-1.5 rounded-full bg-amber-400" /> Steam Rice - fluffy, everyday perfection</li>
                <li className="flex items-start gap-2"><span className="mt-2 h-1.5 w-1.5 rounded-full bg-amber-400" /> Long Grain -ideal for special dishes</li>
                <li className="flex items-start gap-2"><span className="mt-2 h-1.5 w-1.5 rounded-full bg-amber-400" /> Retail and bulk options available</li>
              </ul>
            </div>
          </Reveal>
        </div>

        <Reveal delayMs={250}>
          <div className="mt-10 flex flex-wrap items-center justify-center gap-3">
            <a href="/products" className="inline-flex items-center justify-center rounded-md bg-emerald-700 px-6 py-3 text-white font-medium shadow hover:bg-emerald-600">
              See Products
            </a>
          </div>
        </Reveal>
      </div>
    </section>
  );
}


