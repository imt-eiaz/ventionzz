import Head from "next/head";
import SiteLayout from "@/components/layout/SiteLayout";
import SectionHeading from "@/components/ui/SectionHeading";

export default function AboutPage() {
  return (
    <>
      <Head>
        <title>About Us | Ventionz</title>
      </Head>
      <SiteLayout>
        <main className="mx-auto w-full max-w-6xl px-6 py-16">
          <SectionHeading
            eyebrow="About Us"
            title="We design better customer support systems"
            description="Ventionz is a full-stack service desk platform and consulting team helping businesses move from reactive support to strategic customer operations."
          />

          <div className="mt-10 grid gap-8 md:grid-cols-2">
            <article className="rounded-2xl border border-slate-200 bg-white p-7">
              <h3 className="text-xl font-semibold text-slate-900">
                Our mission
              </h3>
              <p className="mt-3 text-sm leading-relaxed text-slate-600">
                We believe support should be a brand advantage. Our mission is
                to help teams deliver fast, human-centered service at scale.
              </p>
            </article>
            <article className="rounded-2xl border border-slate-200 bg-white p-7">
              <h3 className="text-xl font-semibold text-slate-900">
                How we work
              </h3>
              <p className="mt-3 text-sm leading-relaxed text-slate-600">
                We combine product implementation, process engineering, and
                analytics to produce measurable outcomes in every support
                channel.
              </p>
            </article>
          </div>
        </main>
      </SiteLayout>
    </>
  );
}
