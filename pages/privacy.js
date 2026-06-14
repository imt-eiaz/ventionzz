import Head from "next/head";
import SiteLayout from "@/components/layout/SiteLayout";
import SectionHeading from "@/components/ui/SectionHeading";

export default function PrivacyPage() {
  return (
    <>
      <Head>
        <title>Privacy Policy | Ventionz</title>
      </Head>
      <SiteLayout>
        <main className="mx-auto w-full max-w-6xl px-6 py-16">
          <section className="rounded-3xl border border-slate-200 bg-white p-8 shadow-sm">
            <SectionHeading
              eyebrow="Privacy Policy"
              title="Privacy & Policy VentionZ"
              description="We are committed to protecting personal information for students, parents/guardians, staff, and visitors who use our School Management System."
            />
          </section>

          <section className="mt-10 space-y-10">
            <article className="rounded-3xl border border-slate-200 bg-white p-8 shadow-sm">
              <h2 className="text-2xl font-semibold text-slate-900">
                1. Introduction
              </h2>
              <p className="mt-4 text-sm leading-7 text-slate-600">
                Ventionz is committed to protecting the privacy and personal
                information of students, parents/guardians, staff, and visitors
                who use our School Management System ("SMS Web App"). This
                Privacy Policy explains how we collect, use, store, and protect
                personal data in compliance with applicable data protection
                laws.
              </p>
            </article>

            <article className="rounded-3xl border border-slate-200 bg-white p-8 shadow-sm">
              <h2 className="text-2xl font-semibold text-slate-900">
                2. Information We Collect
              </h2>
              <p className="mt-4 text-sm leading-7 text-slate-600">
                We may collect the following categories of information:
              </p>

              <div className="mt-6 grid gap-8 lg:grid-cols-2">
                <div>
                  <h3 className="text-lg font-semibold text-slate-900">
                    A. Student Information
                  </h3>
                  <ul className="mt-4 list-disc space-y-2 pl-5 text-sm leading-7 text-slate-600">
                    <li>Full name</li>
                    <li>Date of birth</li>
                    <li>Gender</li>
                    <li>Admission number / Student ID</li>
                    <li>Class/Section details</li>
                    <li>Attendance records</li>
                    <li>Academic records (marks, grades, report cards)</li>
                    <li>Disciplinary records</li>
                    <li>
                      Health or medical information (if provided by parents)
                    </li>
                    <li>Photographs (if applicable)</li>
                  </ul>
                </div>

                <div>
                  <h3 className="text-lg font-semibold text-slate-900">
                    B. Parent/Guardian Information
                  </h3>
                  <ul className="mt-4 list-disc space-y-2 pl-5 text-sm leading-7 text-slate-600">
                    <li>Full name</li>
                    <li>Contact number</li>
                    <li>Email address</li>
                    <li>Residential address</li>
                    <li>Relationship to student</li>
                    <li>Payment information (if applicable)</li>
                  </ul>
                </div>
              </div>

              <div className="mt-8 grid gap-8 lg:grid-cols-2">
                <div>
                  <h3 className="text-lg font-semibold text-slate-900">
                    C. Staff Information
                  </h3>
                  <ul className="mt-4 list-disc space-y-2 pl-5 text-sm leading-7 text-slate-600">
                    <li>Full name</li>
                    <li>Contact details</li>
                    <li>Qualification details</li>
                    <li>Attendance records</li>
                    <li>Payroll information (if applicable)</li>
                  </ul>
                </div>

                <div>
                  <h3 className="text-lg font-semibold text-slate-900">
                    D. Technical Information
                  </h3>
                  <ul className="mt-4 list-disc space-y-2 pl-5 text-sm leading-7 text-slate-600">
                    <li>IP address</li>
                    <li>Browser type</li>
                    <li>Device information</li>
                    <li>Login activity</li>
                    <li>Usage logs</li>
                  </ul>
                </div>
              </div>
            </article>

            <article className="rounded-3xl border border-slate-200 bg-white p-8 shadow-sm">
              <h2 className="text-2xl font-semibold text-slate-900">
                3. How We Use the Information
              </h2>
              <p className="mt-4 text-sm leading-7 text-slate-600">
                We use collected information to:
              </p>
              <ul className="mt-4 list-disc space-y-2 pl-5 text-sm leading-7 text-slate-600">
                <li>Manage student admissions and records</li>
                <li>Track attendance and academic performance</li>
                <li>
                  Facilitate communication between school, parents, and staff
                </li>
                <li>Process fee payments</li>
                <li>Generate report cards and certificates</li>
                <li>Ensure system security and prevent unauthorized access</li>
                <li>Comply with legal obligations</li>
              </ul>
            </article>

            <article className="rounded-3xl border border-slate-200 bg-white p-8 shadow-sm">
              <h2 className="text-2xl font-semibold text-slate-900">
                4. Data Sharing and Disclosure
              </h2>
              <ul className="mt-4 list-disc space-y-2 pl-5 text-sm leading-7 text-slate-600">
                <li>We do not sell, rent, or trade personal data.</li>
                <li>
                  Information may be shared only with authorized school staff.
                </li>
                <li>Parents/guardians (regarding their child).</li>
                <li>Government authorities (if legally required).</li>
                <li>
                  IT service providers maintaining the system (under strict
                  confidentiality agreements).
                </li>
              </ul>
              <p className="mt-4 text-sm leading-7 text-slate-600">
                Despite best efforts, no online system is 100% secure.
              </p>
            </article>

            <article className="rounded-3xl border border-slate-200 bg-white p-8 shadow-sm">
              <h2 className="text-2xl font-semibold text-slate-900">
                6. Data Retention
              </h2>
              <p className="mt-4 text-sm leading-7 text-slate-600">
                Personal data is retained:
              </p>
              <ul className="mt-4 list-disc space-y-2 pl-5 text-sm leading-7 text-slate-600">
                <li>
                  As long as the student/staff is associated with the school.
                </li>
                <li>
                  As required by applicable education or legal regulations.
                </li>
                <li>Until records are archived or securely deleted.</li>
              </ul>
            </article>

            <article className="rounded-3xl border border-slate-200 bg-white p-8 shadow-sm">
              <h2 className="text-2xl font-semibold text-slate-900">
                9. Third-Party Services
              </h2>
              <p className="mt-4 text-sm leading-7 text-slate-600">
                If the system integrates third-party services (e.g., payment
                gateways, SMS/email providers), those providers may process
                limited information necessary to perform their services and are
                expected to comply with data protection standards.
              </p>
            </article>

            <article className="rounded-3xl border border-slate-200 bg-white p-8 shadow-sm">
              <h2 className="text-2xl font-semibold text-slate-900">
                10. Changes to This Policy
              </h2>
              <p className="mt-4 text-sm leading-7 text-slate-600">
                The School reserves the right to update this Privacy Policy.
              </p>
            </article>

            <article className="rounded-3xl border border-slate-200 bg-white p-8 shadow-sm">
              <h2 className="text-2xl font-semibold text-slate-900">
                11. Contact Information
              </h2>
              <p className="mt-4 text-sm leading-7 text-slate-600">
                For questions regarding this Privacy Policy: contact Ventionz
                staff or the school.
              </p>
            </article>
          </section>
        </main>
      </SiteLayout>
    </>
  );
}
