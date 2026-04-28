import Head from "next/head";
import SiteLayout from "@/components/layout/SiteLayout";
import SectionHeading from "@/components/ui/SectionHeading";
import { services } from "@/data/services";
import { businessTypes } from "@/data/businessTypes";
import BusinessCard from "@/components/ui/BusinessCard";

export default function ServicesPage() {
  return (
    <>
      <Head>
        <title>Services | Ventionz</title>
      </Head>
      <SiteLayout>
        <main className="mx-auto w-full max-w-6xl px-6 py-16">
          <SectionHeading
            eyebrow="Products & Services"
            title="Empowering Local Businesses with Digital Solutions"
            description="We help local businesses grow online through modern websites, digital marketing, and smart technology solutions tailored to your community."
          />

          <div className="mt-10 grid gap-6 md:grid-cols-2">
            {services.map((service) => (
              <article
                key={service.title}
                className="rounded-2xl border border-slate-200 bg-white p-6 shadow-[0_20px_55px_-35px_rgba(15,23,42,0.45)]"
              >
                <h3 className="text-xl font-semibold text-slate-900">
                  {service.title}
                </h3>
                <p className="mt-3 text-sm leading-relaxed text-slate-600">
                  {service.description}
                </p>
              </article>
            ))}
          </div>

          <section className="mt-16">
            <SectionHeading
              eyebrow="Business Types"
              title="Purpose-built for every stage"
              description="Explore tailored workflows and recommendations for your business model."
            />
            <div className="mt-8 grid gap-6 md:grid-cols-3">
              {businessTypes.map((item) => (
                <BusinessCard key={item.slug} item={item} />
              ))}
            </div>
          </section>
        </main>
      </SiteLayout>
    </>
  );
}
