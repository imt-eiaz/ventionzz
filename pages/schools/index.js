import Head from "next/head";
import Link from "next/link";
import { motion } from "framer-motion";
import SiteLayout from "@/components/layout/SiteLayout";
import SectionHeading from "@/components/ui/SectionHeading";
import SchoolCard from "@/components/ui/SchoolCard";
import { schools } from "@/data/schools";

const containerVariants = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: {
      staggerChildren: 0.05,
    },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  show: { opacity: 1, y: 0, transition: { duration: 0.45 } },
};

export default function SchoolsPage() {
  return (
    <>
      <Head>
        <title>Schools & Institutes | Ventionz</title>
        <meta
          name="description"
          content="Discover registered schools and educational institutes in Swat, Pakistan using Ventionz service desk solution."
        />
      </Head>

      <SiteLayout>
        <main className="mx-auto w-full max-w-6xl px-6 py-16">
          <div className="mb-12">
            <Link
              href="/"
              className="inline-flex items-center gap-2 text-sm font-medium text-(--brand) hover:underline"
            >
              ← Back to Home
            </Link>
          </div>

          <SectionHeading
            eyebrow="Educational Institutions"
            title="Schools & Institutes in Swat"
            description="Browse through registered schools and educational institutes that are transforming their student and parent support experience with Ventionz."
          />

          <motion.div
            className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3"
            variants={containerVariants}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true }}
          >
            {schools.map((school) => (
              <motion.div key={school.id} variants={itemVariants}>
                <SchoolCard school={school} />
              </motion.div>
            ))}
          </motion.div>

          <div className="mt-16 rounded-3xl border border-slate-200 bg-linear-to-br from-slate-50 to-slate-100 p-8 text-center md:p-12">
            <h2 className="text-2xl font-bold text-slate-900">
              Is Your School Not Listed?
            </h2>
            <p className="mt-3 text-slate-600">
              Register your educational institution with Ventionz today and start
              managing student and parent inquiries more efficiently.
            </p>
            <div className="mt-6 flex flex-col gap-3 sm:flex-row sm:justify-center sm:gap-4">
              <Link
                href="/signup"
                className="inline-flex rounded-xl bg-(--brand) px-6 py-3 font-medium text-white transition hover:bg-(--brand-deep)"
              >
                Register Your School
              </Link>
              <Link
                href="/contact"
                className="inline-flex rounded-xl border border-slate-300 px-6 py-3 font-medium text-slate-900 transition hover:bg-white"
              >
                Schedule a Demo
              </Link>
            </div>
          </div>
        </main>
      </SiteLayout>
    </>
  );
}
