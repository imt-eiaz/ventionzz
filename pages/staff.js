import Head from "next/head";
import SiteLayout from "@/components/layout/SiteLayout";
import SectionHeading from "@/components/ui/SectionHeading";
import StaffCard from "@/components/staff/StaffCard";
import { staffMembers } from "@/data/staff";

export default function StaffPage() {
  return (
    <>
      <Head>
        <title>Staff | Ventionz</title>
      </Head>
      <SiteLayout>
        <main className="mx-auto w-full max-w-6xl px-6 py-16">
          <SectionHeading
            eyebrow="Our Team"
            title="Meet the people behind Ventionz"
            description="A multidisciplinary team of operators, designers, and engineers focused on customer operations excellence."
          />

          <div className="mt-10 grid gap-6 sm:grid-cols-2">
            {staffMembers.map((member) => (
              <StaffCard key={member.name} member={member} />
            ))}
          </div>
        </main>
      </SiteLayout>
    </>
  );
}
