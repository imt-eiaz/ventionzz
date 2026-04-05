import Head from "next/head";
import SiteLayout from "@/components/layout/SiteLayout";
import SectionHeading from "@/components/ui/SectionHeading";
import FeatureCard from "@/components/ui/FeatureCard";
import { features } from "@/data/features";

export default function FeaturesPage() {
  return (
    <>
      <Head>
        <title>Features | Ventionz</title>
      </Head>
      <SiteLayout>
        <main className="mx-auto w-full max-w-6xl px-6 py-16">
          <SectionHeading
            eyebrow="Platform Features"
            title="Built for speed, clarity, and scale"
            description="Every module is designed to reduce support friction while improving customer experience outcomes."
          />

          <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {features.map((item) => (
              <FeatureCard key={item.title} {...item} />
            ))}
          </div>
        </main>
      </SiteLayout>
    </>
  );
}
