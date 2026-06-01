import Head from "next/head";
import SiteLayout from "@/components/layout/SiteLayout";
import SectionHeading from "@/components/ui/SectionHeading";
import { MdEmail, MdPhone, MdLocationOn } from "react-icons/md";

export default function ContactPage() {
  return (
    <>
      <Head>
        <title>Contact Us | Ventionz</title>
      </Head>
      <SiteLayout>
        <main className="mx-auto w-full max-w-4xl px-6 py-16">
          <SectionHeading
            eyebrow="Contact Us"
            title="Tell us about your customer support goals"
            centered
          />
          <div className="mt-10">
            <div className="rounded-3xl border border-slate-200 bg-white p-6 md:p-8">
              <h3 className="text-lg font-semibold text-slate-800">
                Contact Details
              </h3>

              <ul className="mt-6 space-y-4 text-sm">
                <li className="flex items-center space-x-3">
                  <span className="inline-flex h-9 w-9 items-center justify-center rounded-full bg-emerald-50 text-emerald-600">
                    <MdEmail className="h-5 w-5" />
                  </span>
                  <span className="text-slate-700">
                    <a
                      className="text-emerald-600"
                      href="mailto:ventionnz@gmail.com"
                    >
                      ventionnz@gmail.com
                    </a>
                  </span>
                </li>

                <li className="flex items-center space-x-3">
                  <span className="inline-flex h-9 w-9 items-center justify-center rounded-full bg-emerald-50 text-emerald-600">
                    <MdPhone className="h-5 w-5" />
                  </span>
                  <span className="text-slate-700">
                    <a className="text-emerald-600" href="tel:+447424344806">
                      +44 7424344806
                    </a>
                  </span>
                </li>

                <li className="flex items-center space-x-3">
                  <span className="inline-flex h-9 w-9 items-center justify-center rounded-full bg-emerald-50 text-emerald-600">
                    <MdLocationOn className="h-5 w-5" />
                  </span>
                  <span className="text-emerald-600">Swindon UK</span>
                </li>
              </ul>
            </div>
          </div>
        </main>
      </SiteLayout>
    </>
  );
}
