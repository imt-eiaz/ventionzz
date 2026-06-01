import Link from "next/link";
import Image from "next/image";
import { useRouter } from "next/router";
import PrimaryButton from "@/components/ui/PrimaryButton";

const menuItems = [
  { label: "Home", href: "/" },
  { label: "Services", href: "/services" },
  { label: "Businesses", href: "/features" },
  { label: "Meet Staff", href: "/staff" },
  { label: "Contact", href: "/contact" },
];

export default function Navbar() {
  const router = useRouter();

  return (
    <header className="sticky top-0 z-40 border-b border-slate-200/70 bg-white/85 backdrop-blur-md">
      <div className="mx-auto flex w-full max-w-6xl items-center justify-between px-6 py-4">
        <Link
          href="/"
          className="flex items-center gap-2 text-xl font-extrabold tracking-tight text-slate-900"
        >
          {/* Mobile: small square logo; Desktop: full logo */}
          <Image
            src="/header-logo-400x120.png"
            alt="Ventionz"
            width={36}
            height={36}
            className="block h-9 w-auto rounded-xl md:hidden"
          />
          <Image
            src="/header-logo-400x120.png"
            alt="Ventionz"
            width={160}
            height={48}
            className="hidden h-9 w-auto rounded-xl md:block"
          />
          Ventionz
        </Link>

        <nav className="hidden items-center gap-6 md:flex">
          {menuItems.map((item) => {
            const isActive = router.pathname === item.href;
            return (
              <Link
                key={item.href}
                href={item.href}
                className={`text-sm font-medium transition ${
                  isActive
                    ? "text-slate-900"
                    : "text-slate-600 hover:text-slate-900"
                }`}
              >
                {item.label}
              </Link>
            );
          })}
        </nav>

        <div className="flex items-center gap-3">
          <Link
            href="login/"
            className="hidden text-sm font-medium text-slate-600 hover:text-slate-900 md:inline-block"
          >
            Login
          </Link>
          <PrimaryButton
            href="signup/"
            className="px-5 py-2.5 text-xs md:text-sm"
          >
            Get Started
          </PrimaryButton>
        </div>
      </div>
    </header>
  );
}
