import Head from "next/head";
import Link from "next/link";
import { motion } from "framer-motion";
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
            {features.map((item, idx) => (
              <motion.div
                key={item.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.45, delay: idx * 0.06 }}
              >
                <Link href={item.href}>
                  <FeatureCard {...item} />
                </Link>
              </motion.div>
            ))}
          </div>
        </main>
      </SiteLayout>
    </>
  );
}
