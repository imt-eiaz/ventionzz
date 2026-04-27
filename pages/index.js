import Head from "next/head";
import { motion } from "framer-motion";
import { FiArrowRight } from "react-icons/fi";
import FeatureCard from "@/components/ui/FeatureCard";
import PrimaryButton from "@/components/ui/PrimaryButton";
import SectionHeading from "@/components/ui/SectionHeading";
import SiteLayout from "@/components/layout/SiteLayout";
import { features } from "@/data/features";

const fadeInUp = {
  hidden: { opacity: 0, y: 24 },
  show: { opacity: 1, y: 0 },
};

export default function HomePage() {
  return (
    <>
      <Head>
        <title>Ventionz | Modern Service Desk SaaS</title>
        <meta
          name="description"
          content="Ventionz helps modern businesses manage customer operations with intelligent service desk workflows."
        />
      </Head>

      <SiteLayout>
        <main>
          <section className="mx-auto grid w-full max-w-6xl items-center gap-12 px-6 pb-20 pt-16 md:grid-cols-2 md:pt-20">
            <motion.div
              initial="hidden"
              animate="show"
              variants={fadeInUp}
              transition={{ duration: 0.55 }}
            >
              <h1 className="text-4xl font-extrabold leading-tight tracking-tight text-slate-900 md:text-6xl">
                Build a support and you business in Swat Pakistan.
              </h1>

              <div className="mt-8 flex flex-wrap gap-4">
                <PrimaryButton href="/signup">Start Free Trial</PrimaryButton>
                <PrimaryButton
                  href="/services"
                  className="bg-blue-500 text-slate-900 ring-1 ring-slate-300 hover:bg-blue-600"
                >
                  Explore Services
                </PrimaryButton>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.65 }}
              className="rounded-3xl border border-slate-200 bg-white p-6 shadow-[0_35px_90px_-45px_rgba(15,23,42,0.45)]"
            >
              <div className="rounded-2xl bg-[linear-gradient(140deg,#0f766e_0%,#0e7490_70%,#0284c7_100%)] p-6 text-white">
                <p className="text-sm text-cyan-100">Number of Registered</p>
                <h3 className="mt-2 text-2xl font-bold">Businesses</h3>
                <div className="mt-6 grid gap-3 sm:grid-cols-2">
                  {[
                    ["Schools", "9"],
                    ["Shops", "34"],
                    ["Instituts", "4"],
                    ["Handicrafts", "7"],
                  ].map(([label, value]) => (
                    <div
                      key={label}
                      className="rounded-xl bg-white/10 p-3 backdrop-blur-sm"
                    >
                      <p className="text-xs text-cyan-50/80">{label}</p>
                      <p className="mt-1 text-lg font-semibold">{value}</p>
                    </div>
                  ))}
                </div>
              </div>
            </motion.div>
          </section>

          <section className="mx-auto w-full max-w-6xl px-6 py-16">
            <SectionHeading centered title="Local Businesses Trust Ventionz" />
            <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
              {features.map((item, idx) => {
                const categoryLinks = {
                  Schools: "https://ventionz.com/schools",
                  Shops: "https://ventionz.com/shops",
                  Instituts: "https://ventionz.com/instituts",
                  Handicrafts: "https://ventionz.com/handicrafts",
                };
                const href =
                  categoryLinks[item.title] || "https://ventionz.com";

                return (
                  <motion.div
                    key={item.title}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.45, delay: idx * 0.06 }}
                  >
                    <a href={href} target="_blank" rel="noopener noreferrer">
                      <FeatureCard {...item} />
                    </a>
                  </motion.div>
                );
              })}
            </div>
          </section>

          <section className="mx-auto w-full max-w-6xl px-6 pb-10 pt-14">
            <div className="rounded-3xl bg-[linear-gradient(130deg,#0f172a_0%,#0f766e_60%,#0891b2_100%)] p-8 text-white md:flex md:items-center md:justify-between md:p-12">
              <div>
                <p className="text-xs font-semibold uppercase tracking-[0.2em] text-cyan-100">
                  Ready to Scale?
                </p>
                <h3 className="mt-3 text-3xl font-bold leading-tight">
                  Start your next customer operations project with Ventionz.
                </h3>
                <p className="mt-3 max-w-2xl text-sm text-cyan-50/90">
                  Launch in days, not months, with a platform and implementation
                  team built for growth-stage and enterprise businesses.
                </p>
              </div>
              <div className="mt-6 md:mt-0">
                <PrimaryButton
                  href="/contact"
                  className="bg-blue-500 text-slate-900 hover:bg-blue-600"
                >
                  Start Your Project
                </PrimaryButton>
              </div>
            </div>
          </section>
        </main>
      </SiteLayout>
    </>
  );
}
