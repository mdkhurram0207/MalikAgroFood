import { MdEmail, MdPhone } from "react-icons/md";
import { FaWhatsapp } from "react-icons/fa";

export default function Footer() {
  return (
    <footer className="mt-16 bg-slate-950 text-slate-300">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-12 flex flex-col md:flex-row md:justify-between md:items-start gap-8">
        
        {/* Company Info */}
        <div className="flex-1">
          {/* MODIFIED: Font size is now smaller on mobile and larger on desktop */}
          <div className="text-lg md:text-xl font-bold text-white">
            MALIK AGRO FOOD INDUSTRIES PRIVATE LIMITED
          </div>
          <p className="mt-3 text-sm text-slate-400">
            Premium quality rice processed with care for retail and bulk supplies.
          </p>
        </div>

        {/* Contact Info */}
        <div className="flex-1 flex flex-col gap-3">
          <ul className="flex flex-col gap-2 text-sm">
            <li className="flex items-center gap-2">
              <MdEmail className="text-emerald-500 w-5 h-5" />
              <a href="mailto:info@malikagrofood.com" className="hover:text-white transition-colors">
                info@malikagrofood.com
              </a>
            </li>
            <li className="flex items-center gap-2">
              <MdPhone className="text-emerald-500 w-5 h-5" />
              <a href="tel:+919759846720" className="hover:text-white transition-colors">
                +919759846720
              </a>
            </li>
            <li className="flex items-center gap-2">
              <FaWhatsapp className="text-emerald-500 w-5 h-5" />
              <a href="https://wa.me/919759846720" target="_blank" rel="noreferrer" className="hover:text-white transition-colors">
                Chat on WhatsApp
              </a>
            </li>
            <li className="text-slate-400 mt-2 text-sm md:text-base">
              FLAT NO. 19-B, GULISTAN H. COM A.S., Aligarh, UP – 202001
            </li>
          </ul>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-white/10">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-4 flex flex-col md:flex-row items-center justify-between text-xs gap-2 md:gap-0">
          <div>© {new Date().getFullYear()} MALIK AGRO FOOD INDUSTRIES PRIVATE LIMITED. All rights reserved.</div>
          <a href="#home" className="hover:text-white transition-colors">Back to Top ↑</a>
        </div>
      </div>
    </footer>
  );
}