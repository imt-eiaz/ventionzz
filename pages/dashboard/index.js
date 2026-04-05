import { useEffect, useState } from "react";
import Head from "next/head";
import { useRouter } from "next/router";
import DashboardShell from "@/components/dashboard/DashboardShell";
import { supabase } from "@/lib/supabaseClient";

export default function DashboardPage() {
  const router = useRouter();
  const [loading, setLoading] = useState(true);
  const [user, setUser] = useState(null);

  useEffect(() => {
    // Guard the dashboard route on the client side based on Supabase session.
    const bootstrapSession = async () => {
      const {
        data: { session },
      } = await supabase.auth.getSession();

      if (!session) {
        router.replace("/login");
        return;
      }

      setUser(session.user);
      setLoading(false);
    };

    bootstrapSession();

    const {
      data: { subscription },
    } = supabase.auth.onAuthStateChange((_event, session) => {
      if (!session) {
        router.replace("/login");
      } else {
        setUser(session.user);
      }
    });

    return () => subscription.unsubscribe();
  }, [router]);

  const handleLogout = async () => {
    await supabase.auth.signOut();
    router.push("/login");
  };

  if (loading) {
    return (
      <main className="flex min-h-screen items-center justify-center bg-slate-50">
        <p className="text-sm text-slate-600">Loading dashboard...</p>
      </main>
    );
  }

  return (
    <>
      <Head>
        <title>Dashboard | Ventionz</title>
      </Head>
      <DashboardShell
        onLogout={handleLogout}
        userEmail={user?.email || "Unknown user"}
      >
        <div className="grid gap-6 md:grid-cols-3">
          {[
            ["Total Tickets", "1,284"],
            ["Pending Escalations", "18"],
            ["Avg Resolution Time", "4h 18m"],
          ].map(([label, value]) => (
            <article
              key={label}
              className="rounded-2xl border border-slate-200 bg-white p-5"
            >
              <p className="text-sm text-slate-500">{label}</p>
              <h3 className="mt-2 text-2xl font-bold text-slate-900">
                {value}
              </h3>
            </article>
          ))}
        </div>

        <section className="mt-6 rounded-2xl border border-slate-200 bg-white p-6">
          <h2 className="text-xl font-semibold text-slate-900">
            Team Activity
          </h2>
          <p className="mt-2 text-sm text-slate-600">
            Your dashboard is connected and protected. Next, integrate your real
            data models and KPI widgets.
          </p>
        </section>
      </DashboardShell>
    </>
  );
}
