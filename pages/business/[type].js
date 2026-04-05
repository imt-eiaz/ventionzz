import Head from "next/head";
import Link from "next/link";
import SiteLayout from "@/components/layout/SiteLayout";
import { businessTypes } from "@/data/businessTypes";
import PrimaryButton from "@/components/ui/PrimaryButton";

export default function BusinessTypeDetailPage({ businessType }) {
  if (!businessType) {
    return (
      <SiteLayout>
        <main className="mx-auto w-full max-w-4xl px-6 py-20 text-center">
          <h1 className="text-3xl font-bold text-slate-900">
            Business Type Not Found
          </h1>
          <p className="mt-3 text-slate-600">
            Please select one of our available solution categories.
          </p>
          <Link
            href="/business"
            className="mt-6 inline-flex rounded-xl border border-slate-300 px-4 py-2 text-sm font-medium"
          >
            Back to Business Types
          </Link>
        </main>
      </SiteLayout>
    );
  }

  return (
    <>
      <Head>
        <title>{businessType.title} | Ventionz</title>
      </Head>
      <SiteLayout>
        <main className="mx-auto w-full max-w-5xl px-6 py-16">
          <p className="text-xs font-semibold uppercase tracking-[0.2em] text-(--brand)">
            Business Solutions
          </p>
          <h1 className="mt-3 text-4xl font-bold tracking-tight text-slate-900">
            {businessType.title}
          </h1>
          <p className="mt-4 max-w-2xl text-slate-600">
            {businessType.subtitle}
          </p>

          <div className="mt-10 rounded-3xl border border-slate-200 bg-white p-7">
            <h2 className="text-xl font-semibold text-slate-900">
              Recommended Focus Areas
            </h2>
            <ul className="mt-5 space-y-3 text-slate-600">
              {businessType.points.map((point) => (
                <li key={point} className="flex items-center gap-3 text-sm">
                  <span className="inline-block h-2 w-2 rounded-full bg-(--brand)" />
                  {point}
                </li>
              ))}
            </ul>

            <div className="mt-8 flex flex-wrap gap-3">
              <PrimaryButton href="/contact">
                Book a Strategy Call
              </PrimaryButton>
              <PrimaryButton
                href="/services"
                className="bg-white text-slate-900 ring-1 ring-slate-300 hover:bg-slate-100"
              >
                View Services
              </PrimaryButton>
            </div>
          </div>
        </main>
      </SiteLayout>
    </>
  );
}

export async function getStaticPaths() {
  return {
    paths: businessTypes.map((item) => ({ params: { type: item.slug } })),
    fallback: false,
  };
}

export async function getStaticProps({ params }) {
  const businessType =
    businessTypes.find((item) => item.slug === params.type) || null;

  return {
    props: { businessType },
  };
}
