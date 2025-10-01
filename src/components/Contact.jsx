import Reveal from "./Reveal.jsx";
import { MdEmail, MdPhone } from "react-icons/md";
import { FaWhatsapp } from "react-icons/fa";
export default function Contact() {
  return (
    <section id="contact" className="relative pt-32 pb-20 bg-gradient-to-b from-emerald-50 via-white to-white">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <Reveal>
          <div className="text-center">
            <h1 className="text-4xl sm:text-5xl font-extrabold tracking-tight text-transparent bg-clip-text bg-gradient-to-r from-emerald-600 via-emerald-500 to-amber-400">
              We're Here 24/7
            </h1>
            <p className="mt-3 text-slate-700 max-w-3xl mx-auto">
              We are available 24/7 — reach us anytime by phone or WhatsApp message.
            </p>
          </div>
        </Reveal>

        <div className="mt-12 grid lg:grid-cols-3 gap-6">
          <Reveal>
            <div className="rounded-2xl border border-emerald-200 bg-white p-6 shadow-sm">
              <h3 className="text-lg font-semibold text-emerald-900 flex items-center gap-2">Company</h3>
              <p className="mt-2 text-slate-800">MALIK AGRO FOOD INDUSTRIES PRIVATE LIMITED</p>
              <div className="mt-4">
                <div className="text-sm text-slate-500">Address</div>
                <address className="not-italic text-slate-800">
                  FLAT NO. 19-B, GULISTAN H. COM A.S.,<br />
                  Aligarh, District: Aligarh, Uttar Pradesh,<br />
                  PIN: 202001
                </address>
              </div>
            </div>
          </Reveal>

          <Reveal delayMs={100}>
            <div className="rounded-2xl border border-emerald-200 bg-white p-6 shadow-sm">
              <h3 className="text-lg font-semibold text-emerald-900 flex items-center gap-2">Contact</h3>
              <ul className="mt-3 space-y-3 text-slate-800">
                <li className="flex items-center gap-2">
                  <MdEmail className="w-5 h-5 text-emerald-600" />
                  <a href="mailto:info@malikagrofood.com" className="hover:text-emerald-800 transition-colors">
                    info@malikagrofood.com
                  </a>
                </li>
                <li className="flex items-center gap-2">
                  <MdPhone className="w-5 h-5 text-emerald-600" />
                  <a href="tel:+919759846720" className="hover:text-emerald-800 transition-colors">
                    +919759846720
                  </a>
                </li>
                <li className="flex items-center gap-2">
                  <FaWhatsapp className="w-5 h-5 text-emerald-600" />
                  <a href="https://wa.me/919759846720" target="_blank" rel="noreferrer" className="hover:text-emerald-800 transition-colors">
                    Chat on WhatsApp
                  </a>
                </li>
              </ul>
            </div>
          </Reveal>

          <Reveal delayMs={200}>
            <div className="rounded-2xl border border-emerald-200 bg-white p-6 shadow-sm flex flex-col justify-between">
              <div>
                <h3 className="text-lg font-semibold text-emerald-900 flex items-center gap-2">Availability</h3>
                <p className="mt-2 text-slate-800">We are available 24/7 by phone and WhatsApp message.</p>
                <div className="mt-4 inline-flex items-center gap-2 px-3 py-1 rounded-full bg-emerald-700 text-white text-sm font-medium">
                  24/7 Support
                </div>
              </div>
              <div className="mt-6 flex flex-wrap gap-3">
                  <a href="tel:+919759846720" className="inline-flex items-center justify-center gap-2 rounded-full bg-emerald-700 px-4 py-2 text-white text-sm font-medium hover:bg-emerald-600 transition">
                  <MdPhone className="w-4 h-4" /> Call
                </a>
                <a href="https://wa.me/919759846720" target="_blank" rel="noreferrer" className="inline-flex items-center justify-center gap-2 rounded-full border border-emerald-300 px-4 py-2 text-emerald-900 text-sm font-medium hover:bg-emerald-50 transition">
                  <FaWhatsapp className="w-4 h-4" /> WhatsApp
                </a>
              </div>
            </div>
          </Reveal>
        </div>

        {/* Quick contact CTA */}
        <div className="mt-10 bg-white rounded-2xl p-8 shadow-sm border border-emerald-100 text-center">
          <div className="max-w-3xl mx-auto">
            <h2 className="text-2xl font-semibold text-emerald-900">Contact us quickly</h2>
            <p className="text-sm text-slate-600 mt-2">Call or message us on WhatsApp — we're available 24/7 by phone and WhatsApp.</p>
            <div className="mt-6 flex items-center justify-center gap-3">
              <a href="tel:+919759846720" className="inline-flex items-center gap-2 rounded-full bg-emerald-700 px-4 py-2 text-white text-sm font-medium hover:bg-emerald-600 transition">
                <MdPhone className="w-4 h-4" /> +919759846720
              </a>
              <a href="https://wa.me/919759846720" target="_blank" rel="noreferrer" className="inline-flex items-center gap-2 rounded-full border border-emerald-300 px-4 py-2 text-emerald-900 text-sm font-medium hover:bg-emerald-50 transition">
                <FaWhatsapp className="w-4 h-4" /> WhatsApp
              </a>
              <a href="mailto:info@malikagrofood.com" className="inline-flex items-center gap-2 rounded-full border border-emerald-300 px-4 py-2 text-emerald-900 text-sm font-medium hover:bg-emerald-50 transition">
                <MdEmail className="w-4 h-4" /> Email
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
