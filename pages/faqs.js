import { useState } from "react";
import Head from "next/head";
import SiteLayout from "@/components/layout/SiteLayout";
import SectionHeading from "@/components/ui/SectionHeading";
import PrimaryButton from "@/components/ui/PrimaryButton";

const faqItems = [
  {
    question: "What types of digital and IT services does Ventionz provide?",
    answer:
      "We provide web development, managed IT support, cloud migration, cybersecurity, digital marketing, and customer service automation for businesses of all sizes.",
  },
  {
    question: "How do you onboard new clients for IT and digital projects?",
    answer:
      "Our process begins with discovery, followed by technical scoping, timeline planning, and a dedicated team match to ensure alignment with your business goals.",
  },
  {
    question: "Can Ventionz support ongoing maintenance after launch?",
    answer:
      "Yes, we offer support and managed services packages that include monitoring, security updates, performance tuning, and iterative improvements.",
  },
  {
    question: "How do you ensure our systems remain secure?",
    answer:
      "We take a security-first approach, using best practices in secure architecture, access control, encryption, vulnerability scanning, and regular review cycles.",
  },
  {
    question:
      "What is the typical delivery timeline for a digital transformation engagement?",
    answer:
      "Most projects take 4 to 12 weeks depending on complexity and scope, with faster timelines available for focused MVP and implementation work.",
  },
  {
    question: "Do you integrate with existing tools and infrastructure?",
    answer:
      "Yes, we integrate with existing CRMs, help desks, payment gateways, cloud providers, and other systems to preserve your current investments.",
  },
  {
    question: "How do I get started with a customized IT project?",
    answer:
      "Contact us with your requirements and we will provide a discovery call, solution proposal, and roadmap tailored to your business needs.",
  },
  ,
  {
    question: "How much would it cost for one single student",
    answer:
      "Depents on the course you choose and the class you are enroled in. Please contact us for more details.",
  },
];

export default function FaqsPage() {
  const [activeFaqIndex, setActiveFaqIndex] = useState(null);

  return (
    <>
      <Head>
        <title>FAQs | Ventionz</title>
      </Head>

      <SiteLayout>
        <main className="mx-auto w-full max-w-6xl px-6 py-16">
          <section className="rounded-3xl bg-[linear-gradient(130deg,#0f172a_0%,#0f766e_60%,#0891b2_100%)] p-8 text-white md:p-12">
            <SectionHeading
              title="Frequently Asked Questions"
              centered
              titleClassName="text-white"
            />
            <div className="mt-8 flex flex-col gap-4 text-center sm:flex-row sm:items-center sm:justify-between">
              <p className="max-w-2xl text-sm leading-7 text-cyan-100">
                Explore answers for local businesses and technology teams
                looking to modernize customer operations and IT workflows.
              </p>
            </div>
          </section>

          <section className="mt-10 rounded-3xl border border-slate-200 bg-white p-6 shadow-sm">
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
                      onClick={() => setActiveFaqIndex(isActive ? null : index)}
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
          </section>
        </main>
      </SiteLayout>
    </>
  );
}
