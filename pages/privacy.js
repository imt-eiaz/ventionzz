import Head from "next/head";
import SiteLayout from "@/components/layout/SiteLayout";

export default function PrivacyPage() {
  return (
    <>
      <Head>
        <title>Privacy | Ventionz</title>
      </Head>
      <SiteLayout>
        <main className="mx-auto w-full max-w-4xl px-6 py-16">
          <h1 className="text-3xl font-bold text-slate-900">
            Privacy Policy Ventionz
          </h1>
          <p className="mt-4 text-sm leading-relaxed text-slate-600">
            Ventionz values your privacy. We only collect data needed to provide
            service operations, product analytics, and communication about your
            account. Contact us to request updates or deletion of your personal
            data.
          </p>
        </main>
      </SiteLayout>
    </>
  );
}
