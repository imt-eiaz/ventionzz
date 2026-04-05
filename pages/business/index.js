import Head from "next/head";
import SiteLayout from "@/components/layout/SiteLayout";
import SectionHeading from "@/components/ui/SectionHeading";
import BusinessCard from "@/components/ui/BusinessCard";
import { businessTypes } from "@/data/businessTypes";

export default function BusinessTypesPage() {
  return (
    <>
      <Head>
        <title>Business Solutions | Ventionz</title>
      </Head>
      <SiteLayout>
        <main className="mx-auto w-full max-w-6xl px-6 py-16">
          <SectionHeading
            eyebrow="Business Type"
            title="Solutions tailored to your business"
            description="Choose your category to view recommended workflows, priorities, and support architecture."
          />
          <div className="mt-10 grid gap-6 md:grid-cols-3">
            {businessTypes.map((item) => (
              <BusinessCard key={item.slug} item={item} />
            ))}
          </div>
        </main>
      </SiteLayout>
    </>
  );
}
