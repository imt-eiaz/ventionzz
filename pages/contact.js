import { useState } from "react";
import Head from "next/head";
import SiteLayout from "@/components/layout/SiteLayout";
import SectionHeading from "@/components/ui/SectionHeading";
import PrimaryButton from "@/components/ui/PrimaryButton";
import { supabase } from "@/lib/supabaseClient";

const initialState = {
  name: "",
  email: "",
  company: "",
  message: "",
};

export default function ContactPage() {
  const [formData, setFormData] = useState(initialState);
  const [status, setStatus] = useState({ type: "", message: "" });
  const [loading, setLoading] = useState(false);

  const handleChange = (event) => {
    const { name, value } = event.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    setLoading(true);
    setStatus({ type: "", message: "" });

    try {
      const { error } = await supabase.from("contact_requests").insert({
        name: formData.name,
        email: formData.email,
        company: formData.company,
        message: formData.message,
      });

      if (error) {
        throw error;
      }

      setStatus({
        type: "success",
        message: "Thanks! We will contact you shortly.",
      });
      setFormData(initialState);
    } catch (error) {
      setStatus({
        type: "error",
        message:
          "Unable to submit right now. Please verify Supabase setup and table policies.",
      });
      console.error("Contact form error:", error);
    } finally {
      setLoading(false);
    }
  };

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
            description="Share your requirements and our team will help you map the right plan, architecture, and rollout timeline."
            centered
          />

          <form
            onSubmit={handleSubmit}
            className="mt-10 space-y-5 rounded-3xl border border-slate-200 bg-white p-6 md:p-8"
          >
            <div className="grid gap-5 md:grid-cols-2">
              <label className="space-y-2">
                <span className="text-sm font-medium text-slate-700">Name</span>
                <input
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                  className="w-full rounded-xl border border-slate-300 px-4 py-3 text-sm outline-none transition focus:border-slate-500"
                  placeholder="Your full name"
                />
              </label>

              <label className="space-y-2">
                <span className="text-sm font-medium text-slate-700">
                  Email
                </span>
                <input
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  className="w-full rounded-xl border border-slate-300 px-4 py-3 text-sm outline-none transition focus:border-slate-500"
                  placeholder="you@company.com"
                />
              </label>
            </div>

            <label className="space-y-2 block">
              <span className="text-sm font-medium text-slate-700">
                Company
              </span>
              <input
                name="company"
                value={formData.company}
                onChange={handleChange}
                className="w-full rounded-xl border border-slate-300 px-4 py-3 text-sm outline-none transition focus:border-slate-500"
                placeholder="Company name"
              />
            </label>

            <label className="space-y-2 block">
              <span className="text-sm font-medium text-slate-700">
                Project Details
              </span>
              <textarea
                name="message"
                value={formData.message}
                onChange={handleChange}
                required
                rows={5}
                className="w-full rounded-xl border border-slate-300 px-4 py-3 text-sm outline-none transition focus:border-slate-500"
                placeholder="What do you want to build?"
              />
            </label>

            {status.message ? (
              <p
                className={`text-sm ${status.type === "success" ? "text-emerald-600" : "text-rose-600"}`}
              >
                {status.message}
              </p>
            ) : null}

            <PrimaryButton type="submit" fullWidth className="py-3.5">
              {loading ? "Submitting..." : "Send Message"}
            </PrimaryButton>
          </form>
        </main>
      </SiteLayout>
    </>
  );
}
