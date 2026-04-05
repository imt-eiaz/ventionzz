import Link from "next/link";
import { FiGithub, FiLinkedin, FiTwitter } from "react-icons/fi";

const footerLinks = [
  { label: "Home", href: "/" },
  { label: "Privacy", href: "/privacy" },
  { label: "Contact", href: "/contact" },
];

const socialLinks = [
  { label: "Twitter", href: "https://x.com", icon: FiTwitter },
  { label: "LinkedIn", href: "https://linkedin.com", icon: FiLinkedin },
  { label: "GitHub", href: "https://github.com", icon: FiGithub },
];

export default function Footer() {
  return (
    <footer className="mt-24 border-t border-slate-200 bg-white/95">
      <div className="mx-auto flex w-full max-w-6xl flex-col gap-6 px-6 py-10 md:flex-row md:items-center md:justify-between">
        <p className="text-sm text-slate-500">
          © {new Date().getFullYear()} Ventionz. All rights reserved.
        </p>

        <nav className="flex items-center gap-6">
          {footerLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className="text-sm font-medium text-slate-600 transition hover:text-slate-900"
            >
              {link.label}
            </Link>
          ))}
        </nav>

        <div className="flex items-center gap-3">
          {socialLinks.map(({ label, href, icon: Icon }) => (
            <a
              key={label}
              href={href}
              className="rounded-lg border border-slate-200 p-2 text-slate-500 transition hover:border-slate-300 hover:text-slate-800"
              aria-label={label}
              target="_blank"
              rel="noreferrer"
            >
              <Icon size={16} />
            </a>
          ))}
        </div>
      </div>
    </footer>
  );
}
