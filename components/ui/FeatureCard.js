export default function FeatureCard({ icon: Icon, title, description }) {
  return (
    <article className="rounded-2xl border border-slate-200/70 bg-white p-6 shadow-[0_20px_55px_-30px_rgba(15,23,42,0.35)] transition hover:-translate-y-1 hover:shadow-[0_25px_60px_-25px_rgba(15,23,42,0.45)]">
      <span className="inline-flex rounded-xl bg-(--soft-accent) p-3 text-(--brand)">
        <Icon size={20} />
      </span>
      <h3 className="mt-5 text-lg font-semibold text-slate-900">{title}</h3>
      <p className="mt-3 text-sm leading-relaxed text-slate-600">
        {description}
      </p>
    </article>
  );
}
