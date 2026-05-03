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
            Privacy Policy 1. Introduction Ventionz is committed to protecting
            the privacy and personal information of students, parents/guardians,
            staff, and visitors who use our School Management System ("SMS Web
            App"). This Privacy Policy explains how we collect, use, store, and
            protect personal data in compliance with applicable data protection
            laws. 2. Information We Collect We may collect the following
            categories of information: A. Student Information * Full name * Date
            of birth * Gender * Admission number / Student ID * Class/Section
            details * Attendance records * Academic records (marks, grades,
            report cards) * Disciplinary records * Health or medical information
            (if provided by parents) * Photographs (if applicable) B.
            Parent/Guardian Information * Full name * Contact number * Email
            address * Residential address * Relationship to student * Payment
            information (if applicable) C. Staff Information * Full name *
            Contact details * Qualification details * Attendance records *
            Payroll information (if applicable) D. Technical Information * IP
            address * Browser type * Device information * Login activity * Usage
            logs --- 3. How We Use the Information We use collected information
            to: * Manage student admissions and records * Track attendance and
            academic performance * Facilitate communication between school,
            parents, and staff * Process fee payments * Generate report cards
            and certificates * Ensure system security and prevent unauthorized
            access * Comply with legal obligations 4. Data Sharing and
            Disclosure We do **not sell, rent, or trade personal data**.
            Information may be shared only with: * Authorized school staff *
            Parents/guardians (regarding their child) * Government authorities
            (if legally required) * IT service providers maintaining the system
            (under strict confidentiality agreements) Despite best efforts, no
            online system is 100% secure. 6. Data Retention Personal data is
            retained: * As long as the student/staff is associated with the
            school * As required by applicable education or legal regulations *
            Until records are archived or securely deleted 9. Third-Party
            Services If the system integrates third-party services (e.g.,
            payment gateways, SMS/email providers), those providers may process
            limited information necessary to perform their services and are
            expected to comply with data protection standards. 10. Changes to
            This Policy The School reserves the right to update this Privacy
            Policy. 11. Contact Information For questions regarding this Privacy
            Policy: Contact Ventionz.com staff or school.
          </p>
        </main>
      </SiteLayout>
    </>
  );
}
