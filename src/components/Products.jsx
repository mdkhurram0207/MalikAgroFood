const products = [
  { name: "Sanober Rice 1 kg", img: "/images/1kg.jpg", desc: "Ideal for small households and trial packs." },
  { name: "Sanober Rice 10 kg", img: "/images/10kg.jpg", desc: "Great value for families and weekly use." },
  { name: "Sanober Rice 25 kg", img: "/images/25kg.jpg", desc: "Economical for restaurants and bulk buyers." },
];

import Reveal from "./Reveal.jsx";

export default function Products() {
  return (
    <section id="products" className="pt-32 pb-20 bg-gradient-to-b from-emerald-50/40 to-slate-50">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <Reveal>
          <div className="text-center">
            <h2 className="text-3xl font-extrabold tracking-tight text-emerald-900">Sanober Rice</h2>
            <p className="mt-2 text-slate-700">Choose the perfect pack size with assured quality and freshness.</p>
          </div>
        </Reveal>

        <div className="mt-10 grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {products.map((p, idx) => (
            <Reveal key={p.name} delayMs={idx * 100}>
              <div className="group rounded-2xl border border-emerald-200 bg-white overflow-hidden shadow-sm hover:shadow-xl hover:-translate-y-1 transition">
                <div className="relative bg-white">
                  <img src={p.img} alt={p.name} className="h-96 w-full object-contain p-5 transition-transform group-hover:scale-105" />
                  <span className="absolute top-3 left-3 inline-flex items-center rounded-full bg-emerald-700/90 px-3 py-1 text-xs font-medium text-white">Sanober</span>
                  {p.name.includes('10 kg') && (
                    <span className="absolute top-3 right-3 inline-flex items-center rounded-full bg-amber-500/90 px-3 py-1 text-xs font-medium text-white">Best Seller</span>
                  )}
                </div>
                <div className="p-5 text-center">
                  <h3 className="font-semibold text-slate-900 text-lg">{p.name}</h3>
                  <div className="mt-2 flex items-center justify-center gap-1 text-amber-500" aria-label="Rated 4.8 out of 5">
                    <span>★</span><span>★</span><span>★</span><span>★</span><span className="text-amber-300">★</span>
                    <span className="ml-1 text-xs text-slate-500">4.8</span>
                  </div>
                  <div className="mt-3 flex flex-wrap items-center justify-center gap-2">
                    {p.name.includes('1 kg') && (
                      <Badge>Fresh Pack</Badge>
                    )}
                    {p.name.includes('10 kg') && (
                      <Badge>Family Value</Badge>
                    )}
                    {p.name.includes('25 kg') && (
                      <Badge>Bulk Saver</Badge>
                    )}
                    <Badge>Long Grain</Badge>
                    <Badge>Aromatic</Badge>
                  </div>
                </div>
              </div>
            </Reveal>
          ))}
        </div>

        <div className="mt-10 flex justify-center">
          <a href="/contact" className="inline-flex items-center justify-center rounded-md bg-emerald-700 px-6 py-3 text-white text-sm font-medium hover:bg-emerald-600 transition-transform hover:-translate-y-0.5">
            Contact Us
          </a>
        </div>
      </div>
    </section>
  );
}

function Badge({ children }) {
  return (
    <span className="inline-flex items-center rounded-full bg-emerald-50 text-emerald-900 border border-emerald-200 px-3 py-1 text-xs font-medium">
      {children}
    </span>
  );
}


