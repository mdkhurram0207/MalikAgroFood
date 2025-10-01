import { useState, useEffect } from "react";
import { Link } from "react-router-dom";

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const contactNumber = "+919759846720";
  const email = "info@malikagrofood.com";

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 10);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header className={`fixed top-0 inset-x-0 z-50 bg-gradient-to-b from-white/95 to-white/90 backdrop-blur-sm transition-all duration-300 ${scrolled ? "shadow-lg" : ""}`}>
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="relative flex h-24 items-center justify-between">
          {/* Left: Logo */}
          <Link to="/" className="flex-shrink-0">
            <img src="/images/logo..png" alt="Malik Agro Food logo" className="h-28 sm:h-24 w-auto" />
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex lg:flex-1 lg:justify-center">
            <nav className="flex items-center gap-1 text-emerald-900">
              <NavLink to="/">Home</NavLink>
              <NavLink to="/about">About</NavLink>
              <NavLink to="/products">Products</NavLink>
              <NavLink to="/contact">Contact</NavLink>
            </nav>
          </div>

          {/* Desktop Right Section */}
          <div className="hidden lg:flex lg:items-center lg:gap-6">
            {/* Contact Info with Icons */}
            <div className="flex items-center gap-6 text-emerald-800">
              <a href={`tel:${contactNumber}`} className="flex items-center gap-2 text-sm hover:text-emerald-600 transition">
                <svg className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                </svg>
                {contactNumber}
              </a>
              <a href={`mailto:${email}`} className="flex items-center gap-2 text-sm hover:text-emerald-600 transition">
                <svg className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                </svg>
                {email}
              </a>
            </div>
            <Link
              to="/contact"
              className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full bg-gradient-to-r from-emerald-600 to-emerald-500 text-white hover:from-emerald-700 hover:to-emerald-600 transition-all duration-300 shadow-md hover:shadow-lg text-sm font-medium"
            >
              <span>Get Quote</span>
              <svg className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
              </svg>
            </Link>
          </div>

          {/* Mobile Contact and Menu */}
          <div className="flex lg:hidden items-center gap-2">
            {/* Contact Icons */}
            <a href={`tel:${contactNumber}`} className="inline-flex h-10 w-10 items-center justify-center rounded-full bg-emerald-50 text-emerald-800 hover:bg-emerald-100 transition">
              <svg className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
              </svg>
            </a>
            <a href={`mailto:${email}`} className="inline-flex h-10 w-10 items-center justify-center rounded-full bg-emerald-50 text-emerald-800 hover:bg-emerald-100 transition">
              <svg className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
              </svg>
            </a>
            {/* Menu Button */}
            <button
              onClick={() => setOpen(!open)}
              className="inline-flex h-10 w-10 items-center justify-center rounded-full bg-emerald-50 text-emerald-800 hover:bg-emerald-100 transition"
              aria-label="Toggle menu"
            >
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" className="h-6 w-6">
                {open ? (
                  <path strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
                ) : (
                  <path strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" d="M4 7h16M4 12h16M4 17h16" />
                )}
              </svg>
            </button>
          </div>
        </div>
        {/* Mobile menu */}
        <div
          className={`lg:hidden fixed inset-x-0 top-[5rem] p-4 transition-all duration-300 ease-in-out ${
            open ? "opacity-100 translate-y-0" : "opacity-0 -translate-y-4 pointer-events-none"
          }`}
        >
          <div className="rounded-2xl bg-white shadow-xl border border-emerald-100 backdrop-blur-lg divide-y divide-emerald-100">
            <nav className="flex flex-col py-2">
              <MobileLink to="/" onClick={() => setOpen(false)}>Home</MobileLink>
              <MobileLink to="/about" onClick={() => setOpen(false)}>About</MobileLink>
              <MobileLink to="/products" onClick={() => setOpen(false)}>Products</MobileLink>
              <MobileLink to="/contact" onClick={() => setOpen(false)}>Contact</MobileLink>
            </nav>
            
            <div className="p-4 space-y-3">
              {/* Mobile Contact Info */}
              <div className="grid grid-cols-2 gap-3 text-emerald-800">
                <a href={`tel:${contactNumber}`} className="flex items-center justify-center gap-2 p-3 rounded-xl bg-emerald-50 hover:bg-emerald-100 transition-colors">
                  <svg className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                  </svg>
                  <span className="text-sm font-medium">Call Us</span>
                </a>
                <a href={`mailto:${email}`} className="flex items-center justify-center gap-2 p-3 rounded-xl bg-emerald-50 hover:bg-emerald-100 transition-colors">
                  <svg className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                  </svg>
                  <span className="text-sm font-medium">Email Us</span>
                </a>
              </div>
              
              <Link
                to="/contact"
                onClick={() => setOpen(false)}
                className="flex items-center justify-center gap-2 w-full px-5 py-2.5 rounded-xl bg-gradient-to-r from-emerald-600 to-emerald-500 text-white hover:from-emerald-700 hover:to-emerald-600 transition-all duration-300 shadow-md hover:shadow-lg text-sm font-medium"
              >
                <span>Get Quote</span>
                <svg className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
                </svg>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
}

// Desktop nav link with gradient underline
function NavLink({ to, children }) {
  return (
    <Link 
      to={to} 
      className="relative px-4 py-2 text-sm font-medium hover:text-emerald-600 transition-colors rounded-lg hover:bg-emerald-50 group"
    >
      {children}
      <span className="absolute inset-x-0 bottom-0 h-0.5 scale-x-0 transform bg-gradient-to-r from-emerald-500 to-emerald-400 transition-transform group-hover:scale-x-100" />
    </Link>
  );
}

// Mobile nav link
function MobileLink({ to, children, onClick }) {
  return (
    <Link 
      to={to} 
      onClick={onClick} 
      className="flex items-center px-4 py-3 text-sm font-medium text-emerald-900 hover:bg-emerald-50 transition-colors"
    >
      {children}
    </Link>
  );
}
