import Footer from "@/components/layout/Footer";
import Navbar from "@/components/layout/Navbar";

export default function SiteLayout({ children }) {
  return (
    <div className="relative min-h-screen bg-slate-50 text-slate-900">
      <div className="pointer-events-none absolute inset-x-0 top-0 h-105 bg-[radial-gradient(circle_at_20%_20%,rgba(15,118,110,0.18),transparent_45%),radial-gradient(circle_at_80%_25%,rgba(14,116,144,0.16),transparent_42%),linear-gradient(180deg,#f8fafc_0%,#f8fafc_100%)]" />
      <div className="relative z-10">
        <Navbar />
        {children}
        <Footer />
      </div>
    </div>
  );
}
