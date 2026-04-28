import { FiMapPin, FiUsers, FiCalendar, FiMail, FiGlobe } from "react-icons/fi";

export default function SchoolCard({ school }) {
  const cardContent = (
    <article className="rounded-2xl border border-slate-200/70 bg-white p-6 shadow-[0_20px_55px_-30px_rgba(15,23,42,0.35)] transition hover:-translate-y-1 hover:shadow-[0_25px_60px_-25px_rgba(15,23,42,0.45)] cursor-pointer">
      <div className="flex items-start justify-between">
        <div className="flex-1">
          <h3 className="text-lg font-semibold text-slate-900">
            {school.name}
          </h3>
          <p className="mt-1 text-xs font-medium uppercase tracking-widest text-(--brand)">
            {school.type}
          </p>
        </div>
      </div>

      <div className="mt-5 space-y-3 text-sm text-slate-600">
        <div className="flex items-center gap-3">
          <FiMapPin size={16} className="shrink-0 text-(--brand)" />
          <span>{school.location}</span>
        </div>

        <div className="flex items-center gap-3">
          <FiUsers size={16} className="shrink-0 text-(--brand)" />
          <span>{school.students} Students</span>
        </div>

        <div className="flex items-center gap-3">
          <FiCalendar size={16} className="shrink-0 text-(--brand)" />
          <span>Founded {school.founded}</span>
        </div>

        <div className="flex items-center gap-3">
          <FiMail size={16} className="shrink-0 text-(--brand)" />
          <a
            href={`mailto:${school.contact}`}
            className="text-(--brand) hover:underline"
          >
            {school.contact}
          </a>
        </div>

        <div className="flex items-center gap-3">
          <FiGlobe size={16} className="shrink-0 text-(--brand)" />
          <a
            href={`https://${school.website}`}
            target="_blank"
            rel="noopener noreferrer"
            className="text-(--brand) hover:underline"
          >
            {school.website}
          </a>
        </div>
      </div>
    </article>
  );

  if (school.link) {
    return (
      <a
        href={school.link}
        target="_blank"
        rel="noopener noreferrer"
        className="block"
      >
        {cardContent}
      </a>
    );
  }

  return cardContent;
}
