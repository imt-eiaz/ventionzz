import Link from "next/link";

export default function PrimaryButton({
  href,
  children,
  className = "",
  type = "button",
  onClick,
  fullWidth = false,
}) {
  const baseClass = `inline-flex items-center justify-center rounded-xl bg-[var(--brand)] px-6 py-3 text-sm font-semibold text-white transition hover:-translate-y-0.5 hover:bg-[var(--brand-deep)] focus:outline-none focus:ring-2 focus:ring-[var(--brand)] focus:ring-offset-2 ${
    fullWidth ? "w-full" : ""
  } ${className}`;

  if (href) {
    return (
      <Link href={href} className={baseClass}>
        {children}
      </Link>
    );
  }

  return (
    <button type={type} className={baseClass} onClick={onClick}>
      {children}
    </button>
  );
}
