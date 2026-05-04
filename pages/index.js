import { useState } from "react";
import Head from "next/head";
import Link from "next/link";
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

const faqItems = [
  {
    question: "What digital services do you offer for IT businesses?",
    answer:
      "We deliver web application development, cloud migration, managed IT support, cybersecurity, and digital marketing solutions tailored to technology-focused businesses.",
  },
  {
    question: "How do you onboard new clients for IT projects?",
    answer:
      "Our onboarding includes a discovery session, requirements review, timeline planning, and a dedicated project manager to align technical scope with business goals.",
  },
  {
    question: "Can you support ongoing maintenance and managed services?",
    answer:
      "Yes — we provide ongoing support packages for infrastructure, software updates, security monitoring, and performance tuning so your digital systems stay reliable.",
  },
  {
    question: "How do you ensure the security of our IT systems?",
    answer:
      "We follow security best practices including secure architecture design, vulnerability assessments, encryption, access controls, and regular security reviews.",
  },
  {
    question:
      "What is the typical timeline for a digital transformation project?",
    answer:
      "Timelines vary by scope, but most digital and IT service implementations take 4 to 12 weeks from discovery through launch, depending on complexity.",
  },
];

export default function HomePage() {
  const [activeFaqIndex, setActiveFaqIndex] = useState(null);

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
                Build and Support Your Business in Swat, Pakistan.
              </h1>

              <div className="mt-8 flex flex-wrap gap-4">
                <PrimaryButton href="/signup">Start Free Trial</PrimaryButton>
                <PrimaryButton
                  href="/services"
                  // className="bg-blue-500 text-slate-900 ring-1 ring-slate-300 hover:bg-blue-600"
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
          </section>

          {/* <section className="mx-auto w-full max-w-6xl px-6 pb-10 pt-14">
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
                  className="hidden text-sm font-medium text-slate-600 hover:text-white-900 md:inline-block"
                >
                  Start Your Project
                </PrimaryButton>
              </div>
            </div>
          </section> */}

          <section className="mx-auto w-full max-w-6xl px-6 pb-20 pt-10">
            <div className="rounded-3xl bg-[linear-gradient(130deg,#0f172a_0%,#0f766e_60%,#0891b2_100%)] p-8 text-white md:p-12">
              <div className="mb-6">
                <SectionHeading
                  centered
                  title="Frequently Asked Questions"
                  titleClassName="text-white"
                  // description="Answers for businesses offering digital and IT services, from onboarding to support and security."
                />
              </div>

              <div className="mb-8 flex justify-center">
                <PrimaryButton href="/faqs">See more questions</PrimaryButton>
              </div>

              <div className="rounded-3xl bg-white p-6 shadow-sm text-slate-900">
                <div className="space-y-4">
                  {faqItems.map((item, index) => {
                    const isActive = activeFaqIndex === index;
                    return (
                      <div
                        key={item.question}
                        className={`rounded-3xl border transition ${
                          isActive
                            ? "border-slate-300 bg-slate-50"
                            : "border-slate-200 bg-white"
                        }`}
                      >
                        <button
                          type="button"
                          onClick={() =>
                            setActiveFaqIndex(isActive ? null : index)
                          }
                          className="flex w-full items-center justify-between gap-4 px-5 py-4 text-left text-sm font-semibold text-slate-900 transition hover:bg-slate-50"
                          aria-expanded={isActive}
                          aria-controls={`faq-content-${index}`}
                        >
                          {item.question}
                          <span
                            className={`inline-flex h-9 w-9 items-center justify-center rounded-full border text-lg transition ${
                              isActive
                                ? "border-slate-300 bg-slate-900 text-white"
                                : "border-slate-200 bg-white text-slate-700"
                            }`}
                          >
                            {isActive ? "−" : "+"}
                          </span>
                        </button>
                        <div
                          id={`faq-content-${index}`}
                          className={`overflow-hidden px-5 transition-all duration-300 ${
                            isActive ? "max-h-72 pb-5" : "max-h-0"
                          }`}
                        >
                          <p className="mt-2 text-sm leading-7 text-slate-600">
                            {item.answer}
                          </p>
                        </div>
                      </div>
                    );
                  })}
                </div>
              </div>
            </div>
          </section>
        </main>
      </SiteLayout>
    </>
  );
}
