import Link from "next/link";

export default function BusinessCard({ item }) {
  return (
    <article className="rounded-2xl border border-slate-200 bg-white p-6 shadow-[0_20px_55px_-35px_rgba(15,23,42,0.45)]">
      <h3 className="text-xl font-semibold text-slate-900">{item.title}</h3>
      <p className="mt-3 text-sm leading-relaxed text-slate-600">
        {item.subtitle}
      </p>
      <ul className="mt-4 space-y-2 text-sm text-slate-600">
        {item.points.map((point) => (
          <li key={point} className="flex items-start gap-2">
            <span className="mt-1 inline-block h-2 w-2 rounded-full bg-(--brand)" />
            <span>{point}</span>
          </li>
        ))}
      </ul>
      {/* <Link
        href={`/business/${item.slug}`}
        className="mt-5 inline-flex rounded-lg border border-slate-300 px-4 py-2 text-sm font-medium text-slate-700 transition hover:border-slate-400 hover:text-slate-900"
      >
        Learn More
      </Link> */}
    </article>
  );
}
