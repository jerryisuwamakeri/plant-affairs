"use client";

import { useState } from "react";
import { MapPin, Phone, Mail, Clock, Send, CheckCircle } from "lucide-react";

const SUBJECTS = [
  "General Enquiry",
  "Plant Order",
  "Garden Design Consultation",
  "Landscaping Services",
  "Maintenance Plan",
  "Corporate / Commercial",
  "Other",
];

export default function ContactPage() {
  const [submitted, setSubmitted] = useState(false);
  const [form, setForm] = useState({
    name: "",
    email: "",
    phone: "",
    subject: "",
    message: "",
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // In production this would POST to an API route or service
    setSubmitted(true);
  };

  const set = (field: string) => (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) =>
    setForm((f) => ({ ...f, [field]: e.target.value }));

  return (
    <>
      {/* ── Hero ──────────────────────────────────────────── */}
      <div className="bg-forest-800 text-white">
        <div className="max-w-7xl mx-auto px-4 py-20 md:py-28">
          <p className="text-sage text-xs uppercase tracking-[0.2em] mb-4">Get in Touch</p>
          <h1 className="font-serif text-5xl md:text-6xl font-light leading-tight max-w-xl">
            We&apos;d Love to Hear from You
          </h1>
          <p className="text-white/60 mt-5 max-w-md text-sm leading-relaxed">
            Whether you have a question about a plant, want to book a service, or simply need
            some advice — our team is ready to help.
          </p>
        </div>
      </div>

      {/* ── Main content ──────────────────────────────────── */}
      <div className="max-w-7xl mx-auto px-4 py-14 md:py-20">
        <div className="grid lg:grid-cols-5 gap-14">

          {/* Contact info */}
          <aside className="lg:col-span-2 space-y-8">
            {/* Info cards */}
            <div className="space-y-5">
              <div className="flex gap-4 p-5 border border-warm-200 bg-white">
                <div className="w-10 h-10 bg-forest-50 flex items-center justify-center flex-shrink-0">
                  <MapPin size={17} className="text-forest-600" />
                </div>
                <div>
                  <p className="font-sans font-medium text-forest-800 text-sm mb-1">Visit Us</p>
                  <p className="text-stone-500 text-sm leading-relaxed">
                    23 Botanical Avenue<br />
                    Wuse II, Abuja<br />
                    Federal Capital Territory, Nigeria
                  </p>
                </div>
              </div>

              <div className="flex gap-4 p-5 border border-warm-200 bg-white">
                <div className="w-10 h-10 bg-forest-50 flex items-center justify-center flex-shrink-0">
                  <Phone size={17} className="text-forest-600" />
                </div>
                <div>
                  <p className="font-sans font-medium text-forest-800 text-sm mb-1">Call or WhatsApp</p>
                  <a
                    href="tel:+2348066465246"
                    className="text-forest-700 text-sm font-medium hover:text-forest-900 transition-colors"
                  >
                    +234 806 646 5246
                  </a>
                  <p className="text-stone-400 text-xs mt-0.5">We respond within a few hours</p>
                </div>
              </div>

              <div className="flex gap-4 p-5 border border-warm-200 bg-white">
                <div className="w-10 h-10 bg-forest-50 flex items-center justify-center flex-shrink-0">
                  <Mail size={17} className="text-forest-600" />
                </div>
                <div>
                  <p className="font-sans font-medium text-forest-800 text-sm mb-1">Email Us</p>
                  <a
                    href="mailto:hello@plantaffairs.com"
                    className="text-forest-700 text-sm font-medium hover:text-forest-900 transition-colors"
                  >
                    hello@plantaffairs.com
                  </a>
                  <p className="text-stone-400 text-xs mt-0.5">Replies within 1 business day</p>
                </div>
              </div>

              <div className="flex gap-4 p-5 border border-warm-200 bg-white">
                <div className="w-10 h-10 bg-forest-50 flex items-center justify-center flex-shrink-0">
                  <Clock size={17} className="text-forest-600" />
                </div>
                <div>
                  <p className="font-sans font-medium text-forest-800 text-sm mb-2">Opening Hours</p>
                  <div className="space-y-1 text-sm text-stone-500">
                    <div className="flex justify-between gap-6">
                      <span>Monday – Friday</span>
                      <span className="text-forest-700 font-medium">8:00 – 18:00</span>
                    </div>
                    <div className="flex justify-between gap-6">
                      <span>Saturday</span>
                      <span className="text-forest-700 font-medium">8:00 – 17:00</span>
                    </div>
                    <div className="flex justify-between gap-6">
                      <span>Sunday</span>
                      <span className="text-forest-700 font-medium">10:00 – 15:00</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Map placeholder */}
            <div className="relative bg-forest-50 border border-warm-200 aspect-[4/3] flex items-center justify-center overflow-hidden">
              <div className="absolute inset-0 opacity-10"
                style={{ backgroundImage: "radial-gradient(circle, #2D5A40 1px, transparent 1px)", backgroundSize: "24px 24px" }}
              />
              <div className="relative text-center p-6">
                <MapPin size={32} className="text-forest-400 mx-auto mb-3" />
                <p className="font-serif text-forest-700 text-base">23 Botanical Avenue</p>
                <p className="text-stone-500 text-xs mt-1">Wuse II, Abuja, Nigeria</p>
                <a
                  href="https://maps.google.com/?q=Wuse+II+Abuja+Nigeria"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1.5 mt-4 text-xs text-forest-700 font-medium border-b border-forest-300 hover:border-forest-600 transition-colors pb-0.5"
                >
                  Open in Google Maps
                </a>
              </div>
            </div>
          </aside>

          {/* Contact form */}
          <div className="lg:col-span-3">
            {submitted ? (
              <div className="flex flex-col items-center justify-center text-center py-20 px-8 border border-warm-200 bg-white h-full min-h-[500px]">
                <CheckCircle size={48} className="text-forest-500 mb-5" strokeWidth={1.5} />
                <h2 className="font-serif text-3xl text-forest-800 mb-3">Message Sent</h2>
                <p className="text-stone-500 text-sm leading-relaxed max-w-sm">
                  Thank you for reaching out. A member of our team will get back to you within
                  one business day.
                </p>
                <button
                  onClick={() => { setSubmitted(false); setForm({ name: "", email: "", phone: "", subject: "", message: "" }); }}
                  className="mt-8 text-sm text-forest-700 font-medium border-b border-forest-300 hover:border-forest-600 transition-colors pb-0.5"
                >
                  Send another message
                </button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="bg-white border border-warm-200 p-8 md:p-10 space-y-6">
                <div>
                  <h2 className="font-serif text-2xl text-forest-800 mb-1">Send a Message</h2>
                  <p className="text-stone-400 text-xs">All fields marked * are required.</p>
                </div>

                <div className="grid sm:grid-cols-2 gap-5">
                  <div>
                    <label className="block text-xs font-sans font-medium text-forest-800 mb-1.5">
                      Full Name *
                    </label>
                    <input
                      required
                      type="text"
                      value={form.name}
                      onChange={set("name")}
                      placeholder="Your full name"
                      className="w-full border border-warm-200 px-4 py-3 text-sm text-forest-900 placeholder-stone-300 outline-none focus:border-forest-500 transition-colors bg-warm-50"
                    />
                  </div>
                  <div>
                    <label className="block text-xs font-sans font-medium text-forest-800 mb-1.5">
                      Email Address *
                    </label>
                    <input
                      required
                      type="email"
                      value={form.email}
                      onChange={set("email")}
                      placeholder="you@example.com"
                      className="w-full border border-warm-200 px-4 py-3 text-sm text-forest-900 placeholder-stone-300 outline-none focus:border-forest-500 transition-colors bg-warm-50"
                    />
                  </div>
                </div>

                <div className="grid sm:grid-cols-2 gap-5">
                  <div>
                    <label className="block text-xs font-sans font-medium text-forest-800 mb-1.5">
                      Phone Number
                    </label>
                    <input
                      type="tel"
                      value={form.phone}
                      onChange={set("phone")}
                      placeholder="+234 ···"
                      className="w-full border border-warm-200 px-4 py-3 text-sm text-forest-900 placeholder-stone-300 outline-none focus:border-forest-500 transition-colors bg-warm-50"
                    />
                  </div>
                  <div>
                    <label className="block text-xs font-sans font-medium text-forest-800 mb-1.5">
                      Subject *
                    </label>
                    <select
                      required
                      value={form.subject}
                      onChange={set("subject")}
                      className="w-full border border-warm-200 px-4 py-3 text-sm text-forest-900 outline-none focus:border-forest-500 transition-colors bg-warm-50 appearance-none cursor-pointer"
                    >
                      <option value="" disabled>Select a topic…</option>
                      {SUBJECTS.map((s) => (
                        <option key={s} value={s}>{s}</option>
                      ))}
                    </select>
                  </div>
                </div>

                <div>
                  <label className="block text-xs font-sans font-medium text-forest-800 mb-1.5">
                    Message *
                  </label>
                  <textarea
                    required
                    rows={6}
                    value={form.message}
                    onChange={set("message")}
                    placeholder="Tell us what you need — the more detail the better, especially for service enquiries."
                    className="w-full border border-warm-200 px-4 py-3 text-sm text-forest-900 placeholder-stone-300 outline-none focus:border-forest-500 transition-colors bg-warm-50 resize-none"
                  />
                </div>

                <button
                  type="submit"
                  className="inline-flex items-center gap-2 px-8 py-4 bg-forest-700 text-white font-sans font-medium text-sm hover:bg-forest-800 transition-colors w-full justify-center"
                >
                  <Send size={14} />
                  Send Message
                </button>

                <p className="text-stone-400 text-xs text-center leading-relaxed">
                  Prefer a call? Reach us directly on{" "}
                  <a href="tel:+2348066465246" className="text-forest-600 hover:underline">
                    +234 806 646 5246
                  </a>
                </p>
              </form>
            )}
          </div>
        </div>
      </div>
    </>
  );
}
