import Navbar from "./components/Navbar.jsx";
import { Outlet, useLocation } from "react-router-dom";
import Footer from "./components/Footer.jsx";
import ScrollToTop from "./components/ScrollToTop.jsx";

export default function App() {
  const location = useLocation();
  return (
    <div className="min-h-screen bg-white text-slate-800">
      <ScrollToTop />
      <Navbar />
      {/* Force remount on route change */}
      <div key={location.pathname}>
        <Outlet />
      </div>
      <Footer />
    </div>
  );
}
