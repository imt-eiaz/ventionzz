import Image from "next/image";

export default function StaffCard({ member }) {
  return (
    <article className="rounded-2xl border border-slate-200 bg-white p-6 shadow-[0_20px_55px_-35px_rgba(15,23,42,0.45)]">
      <div className="relative h-24 w-24 overflow-hidden rounded-2xl">
        <Image src={member.image} alt={member.name} fill sizes="96px" />
      </div>
      <h3 className="mt-5 text-xl font-semibold text-slate-900">
        {member.name}
      </h3>
      <p className="mt-1 text-sm font-medium text-(--brand)">{member.role}</p>
      <p className="mt-3 text-sm leading-relaxed text-slate-600">
        {member.bio}
      </p>
      <div className="mt-4 flex flex-wrap gap-2">
        {member.expertise.map((skill) => (
          <span
            key={skill}
            className="rounded-full bg-slate-100 px-3 py-1 text-xs font-medium text-slate-700"
          >
            {skill}
          </span>
        ))}
      </div>
    </article>
  );
}
