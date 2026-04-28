import { useEffect, useState } from "react";
import Head from "next/head";
import Link from "next/link";
import { useRouter } from "next/router";
import { supabase } from "@/lib/supabaseClient";
import PrimaryButton from "@/components/ui/PrimaryButton";

export default function SignupPage() {
  const router = useRouter();
  const [form, setForm] = useState({ email: "", password: "", fullName: "" });
  const [error, setError] = useState("");
  const [success, setSuccess] = useState("");
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

  const handleSignup = async (event) => {
    event.preventDefault();
    setError("");
    setSuccess("");
    setLoading(true);

    const { error: authError } = await supabase.auth.signUp({
      email: form.email,
      password: form.password,
      options: {
        data: {
          full_name: form.fullName,
        },
      },
    });

    setLoading(false);

    if (authError) {
      setError(authError.message);
      return;
    }

    setSuccess(
      "Account created. Please verify your email if confirmation is enabled.",
    );
    setForm({ email: "", password: "", fullName: "" });

    setTimeout(() => {
      router.push("/login");
    }, 1200);
  };

  return (
    <>
      <Head>
        <title>Signup | Ventionz</title>
      </Head>
      <main className="relative min-h-screen bg-slate-50 px-4 py-16">
        <div className="mb-12">
          <Link
            href="/"
            className="inline-flex items-center gap-2 text-sm font-medium text-(--brand) hover:underline"
          >
            ← Back to Home
          </Link>
        </div>
        <div className="pointer-events-none absolute inset-x-0 top-0 h-90 bg-[radial-gradient(circle_at_20%_25%,rgba(15,118,110,0.22),transparent_45%),radial-gradient(circle_at_75%_22%,rgba(2,132,199,0.2),transparent_40%)]" />
        <section className="relative z-10 mx-auto w-full max-w-md rounded-3xl border border-slate-200 bg-white p-8 shadow-[0_30px_80px_-35px_rgba(15,23,42,0.5)]">
          <h1 className="text-2xl font-bold tracking-tight text-slate-900">
            Create your account
          </h1>
          <p className="mt-2 text-sm text-slate-600">
            Start your project with Ventionz today.
          </p>

          <form onSubmit={handleSignup} className="mt-6 space-y-4">
            <label className="block space-y-2">
              <span className="text-sm font-medium text-slate-700">
                Full Name
              </span>
              <input
                name="fullName"
                value={form.fullName}
                onChange={handleChange}
                required
                className="w-full rounded-xl border border-slate-300 px-4 py-3 text-sm outline-none transition focus:border-slate-500"
                placeholder="Your full name"
              />
            </label>

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
                minLength={6}
                className="w-full rounded-xl border border-slate-300 px-4 py-3 text-sm outline-none transition focus:border-slate-500"
                placeholder="At least 6 characters"
              />
            </label>

            {error ? <p className="text-sm text-rose-600">{error}</p> : null}
            {success ? (
              <p className="text-sm text-emerald-600">{success}</p>
            ) : null}

            <PrimaryButton type="submit" fullWidth className="py-3.5">
              {loading ? "Creating account..." : "Sign Up"}
            </PrimaryButton>
          </form>

          <p className="mt-6 text-center text-sm text-slate-600">
            Already registered?{" "}
            <Link href="/login" className="font-semibold text-(--brand)">
              Login
            </Link>
          </p>
        </section>
      </main>
    </>
  );
}
