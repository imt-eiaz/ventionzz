import Link from "next/link";
import {
  FiBarChart2,
  FiGrid,
  FiLogOut,
  FiSettings,
  FiUsers,
} from "react-icons/fi";

const sidebarItems = [
  { label: "Overview", icon: FiGrid, href: "/dashboard" },
  { label: "Customers", icon: FiUsers, href: "/dashboard" },
  { label: "Reports", icon: FiBarChart2, href: "/dashboard" },
  { label: "Settings", icon: FiSettings, href: "/dashboard" },
];

export default function DashboardShell({ children, onLogout, userEmail }) {
  return (
    <div className="grid min-h-screen bg-slate-50 md:grid-cols-[260px_1fr]">
      <aside className="border-r border-slate-200 bg-white px-5 py-6">
        <div className="mb-8 flex items-center gap-2 text-lg font-bold text-slate-900">
          <span className="inline-flex h-8 w-8 items-center justify-center rounded-lg bg-(--brand) text-xs text-white">
            VZ
          </span>
          Ventionz Console
        </div>

        <p className="mb-4 rounded-xl bg-(--soft-accent) px-3 py-2 text-xs text-slate-700">
          Signed in as {userEmail}
        </p>

        <nav className="space-y-2">
          {sidebarItems.map(({ label, href, icon: Icon }) => (
            <Link
              key={label}
              href={href}
              className="flex items-center gap-3 rounded-xl px-3 py-2 text-sm font-medium text-slate-600 transition hover:bg-slate-100 hover:text-slate-900"
            >
              <Icon size={16} />
              {label}
            </Link>
          ))}
        </nav>

        <button
          type="button"
          onClick={onLogout}
          className="mt-8 flex items-center gap-2 rounded-xl border border-slate-200 px-3 py-2 text-sm font-medium text-slate-600 transition hover:border-slate-300 hover:text-slate-900"
        >
          <FiLogOut size={16} />
          Logout
        </button>
      </aside>

      <section className="flex flex-col">
        <header className="border-b border-slate-200 bg-white px-6 py-4">
          <h1 className="text-xl font-semibold text-slate-900">Dashboard</h1>
        </header>
        <main className="flex-1 p-6">{children}</main>
      </section>
    </div>
  );
}
