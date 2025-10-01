import { Link } from 'react-router-dom';

export default function Hero() {
  return (
    <section
      id="home"
      className="relative min-h-[70vh] sm:min-h-[80vh] pt-20 sm:pt-24"
    >
      {/* Background image */}
      <div
        className="absolute inset-0 bg-cover bg-center"
        style={{ backgroundImage: 'url(/images/hero_image.jpg)' }}
      />
      {/* Overlay */}
      <div className="absolute inset-0 bg-black/40" />
      {/* Content */}
      <div className="relative">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-20 sm:py-24">
          <div className="max-w-2xl text-center sm:text-left mx-auto">
            <h1 className="font-display text-3xl sm:text-4xl md:text-5xl font-bold tracking-tight text-white leading-tight">
              Premium Quality Rice, Milled to Perfection
            </h1>
            <p className="mt-4 sm:mt-6 text-base sm:text-lg text-white/90 leading-relaxed">
              We bring you the finest grains—aromatic, nutritious, and processed with care.
            </p>

            {/* Buttons */}
            <div className="mt-8 grid grid-cols-1 sm:flex sm:flex-row sm:justify-start gap-3">
              <Link
                to="/products"
                className="w-full sm:w-auto inline-flex items-center justify-center rounded-md px-6 py-3 text-white font-medium bg-gradient-to-r from-emerald-700 to-emerald-500 hover:from-emerald-600 hover:to-emerald-400 transition-all duration-200 hover:-translate-y-0.5 hover:shadow-lg"
              >
                Explore Products
              </Link>

              <Link
                to="/contact"
                className="w-full sm:w-auto inline-flex items-center justify-center rounded-md px-6 py-3 text-white font-medium bg-gradient-to-r from-blue-600 to-blue-400 hover:from-blue-500 hover:to-blue-300 transition-all duration-200 hover:-translate-y-0.5 hover:shadow-lg"
              >
                Contact Us
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
