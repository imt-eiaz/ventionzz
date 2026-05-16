import Head from "next/head";
import Link from "next/link";
import Image from "next/image";
import SiteLayout from "@/components/layout/SiteLayout";
import { staffMembers } from "@/data/staff";

export default function StaffMemberPage({ member }) {
  if (!member) {
    return (
      <SiteLayout>
        <main className="mx-auto w-full max-w-6xl px-6 py-16">
          <p className="text-center text-sm text-slate-500">
            Staff member not found.
          </p>
        </main>
      </SiteLayout>
    );
  }

  return (
    <>
      <Head>
        <title>{member.name} | Ventionz</title>
      </Head>
      <SiteLayout>
        <main className="mx-auto w-full max-w-4xl px-6 py-16">
          <div className="mb-8">
            <Link
              href="/staff"
              className="text-sm font-medium text-brand-600 hover:underline"
            >
              ← Back to Team
            </Link>
          </div>

          <div className="rounded-3xl border border-slate-200 bg-white p-8 shadow-lg">
            <div className="flex flex-col gap-8 md:flex-row md:items-center">
              <div className="relative h-32 w-32 overflow-hidden rounded-3xl bg-slate-100">
                <Image
                  src={member.image}
                  alt={member.name}
                  fill
                  sizes="128px"
                />
              </div>
              <div>
                <h1 className="text-3xl font-semibold text-slate-900">
                  {member.name}
                </h1>
                <p className="mt-2 text-lg font-medium text-slate-600">
                  {member.role}
                </p>
              </div>
            </div>

            <p className="mt-8 text-sm leading-relaxed text-slate-700">
              {member.bio}
            </p>

            {member.externalUrl ? (
              <div className="mt-6">
                <a
                  href={member.externalUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center rounded-full border border-slate-200 bg-slate-50 px-5 py-3 text-sm font-medium text-slate-900 transition hover:bg-slate-100"
                >
                  Visit personal website
                </a>
              </div>
            ) : null}

            <div className="mt-8 flex flex-wrap gap-2">
              {member.expertise.map((skill) => (
                <span
                  key={skill}
                  className="rounded-full bg-slate-100 px-3 py-1 text-xs font-medium text-slate-700"
                >
                  {skill}
                </span>
              ))}
            </div>
          </div>
        </main>
      </SiteLayout>
    </>
  );
}

export async function getStaticPaths() {
  const paths = staffMembers.map((member) => ({
    params: { slug: member.slug },
  }));
  return {
    paths,
    fallback: false,
  };
}

export async function getStaticProps({ params }) {
  const member = staffMembers.find((item) => item.slug === params.slug) || null;
  return {
    props: {
      member,
    },
  };
}
