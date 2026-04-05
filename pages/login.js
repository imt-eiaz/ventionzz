import { useEffect, useState } from "react";
import Head from "next/head";
import Link from "next/link";
import { useRouter } from "next/router";
import { supabase } from "@/lib/supabaseClient";
import PrimaryButton from "@/components/ui/PrimaryButton";

export default function LoginPage() {
  const router = useRouter();
  const [form, setForm] = useState({ email: "", password: "" });
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    const checkSession = async () => {
      const {
        data: { session },
      } = await supabase.auth.getSession();
      if (session) {
        router.replace("/dashboard");
      }
    };

    checkSession();
  }, [router]);

  const handleChange = (event) => {
    const { name, value } = event.target;
    setForm((prev) => ({ ...prev, [name]: value }));
  };

  const handleLogin = async (event) => {
    event.preventDefault();
    setError("");
    setLoading(true);

    const { error: authError } = await supabase.auth.signInWithPassword({
      email: form.email,
      password: form.password,
    });

    setLoading(false);

    if (authError) {
      setError(authError.message);
      return;
    }

    router.push("/dashboard");
  };

  return (
    <>
      <Head>
        <title>Login | Ventionz</title>
      </Head>
      <main className="relative min-h-screen bg-slate-50 px-4 py-16">
        <div className="pointer-events-none absolute inset-x-0 top-0 h-90 bg-[radial-gradient(circle_at_15%_20%,rgba(15,118,110,0.22),transparent_45%),radial-gradient(circle_at_80%_20%,rgba(2,132,199,0.2),transparent_40%)]" />
        <section className="relative z-10 mx-auto w-full max-w-md rounded-3xl border border-slate-200 bg-white p-8 shadow-[0_30px_80px_-35px_rgba(15,23,42,0.5)]">
          <h1 className="text-2xl font-bold tracking-tight text-slate-900">
            Welcome back
          </h1>
          <p className="mt-2 text-sm text-slate-600">
            Login to access your Ventionz dashboard.
          </p>

          <form onSubmit={handleLogin} className="mt-6 space-y-4">
            <label className="block space-y-2">
              <span className="text-sm font-medium text-slate-700">Email</span>
              <input
                type="email"
                name="email"
                value={form.email}
                onChange={handleChange}
                required
                className="w-full rounded-xl border border-slate-300 px-4 py-3 text-sm outline-none transition focus:border-slate-500"
                placeholder="you@company.com"
              />
            </label>

            <label className="block space-y-2">
              <span className="text-sm font-medium text-slate-700">
                Password
              </span>
              <input
                type="password"
                name="password"
                value={form.password}
                onChange={handleChange}
                required
                className="w-full rounded-xl border border-slate-300 px-4 py-3 text-sm outline-none transition focus:border-slate-500"
                placeholder="Your password"
              />
            </label>

            {error ? <p className="text-sm text-rose-600">{error}</p> : null}

            <PrimaryButton type="submit" fullWidth className="py-3.5">
              {loading ? "Logging in..." : "Login"}
            </PrimaryButton>
          </form>

          <p className="mt-6 text-center text-sm text-slate-600">
            New to Ventionz?{" "}
            <Link href="/signup" className="font-semibold text-(--brand)">
              Create an account
            </Link>
          </p>
        </section>
      </main>
    </>
  );
}
