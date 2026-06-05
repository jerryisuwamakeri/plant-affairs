"use client";

import { useState } from "react";
import Link from "next/link";
import { ChevronDown, Phone, Mail, ArrowRight } from "lucide-react";

const FAQ_SECTIONS = [
  {
    category: "Ordering & Delivery",
    items: [
      {
        q: "Which cities do you deliver to?",
        a: "We currently deliver to Abuja (FCT) and Lagos. For orders within Abuja, same-day or next-day delivery is available. Lagos orders are dispatched within 1–2 business days. We are expanding to Port Harcourt and Enugu — join our mailing list to be notified.",
      },
      {
        q: "Is there a minimum order for delivery?",
        a: "There is no minimum order value. However, delivery is complimentary on all orders above ₦30,000. Below that threshold, a flat delivery fee of ₦2,500 applies within city limits.",
      },
      {
        q: "How are my plants packaged for delivery?",
        a: "All plants are individually wrapped in breathable kraft paper and secured in sturdy double-walled boxes. Larger specimens travel in custom-fitted crates. We include care cards and a moisture sachet with every order.",
      },
      {
        q: "Can I collect my order in person?",
        a: "Yes. Click-and-collect is available from our Wuse II, Abuja location, Monday to Saturday 8:00–18:00 and Sunday 10:00–15:00. Select 'Collect in store' at checkout.",
      },
      {
        q: "What if my plant arrives damaged?",
        a: "Please photograph the plant and packaging within 24 hours of receipt and send it to info@bmltrees.com. We will arrange a replacement or full refund — no questions asked.",
      },
    ],
  },
  {
    category: "Plant Health & Care",
    items: [
      {
        q: "Do your plants come with a guarantee?",
        a: "All plants carry a 30-day health guarantee. If your plant declines or dies within 30 days of purchase through no fault of miscare, we will replace it free of charge. Simply contact us with a photo.",
      },
      {
        q: "What care information is provided with each plant?",
        a: "Every plant ships with a printed care card covering watering frequency, light requirements, feeding schedule, and common issues. Detailed digital care guides are also available on our website for every variety we stock.",
      },
      {
        q: "Can I get advice on caring for a plant I didn't buy from you?",
        a: "Absolutely — we love all plants, not just ours. Send us a photo and a brief description via WhatsApp or email and our horticulturist will respond within one business day.",
      },
      {
        q: "What is the best soil for indoor plants?",
        a: "Most indoor plants thrive in a well-draining, peat-free potting mix enriched with perlite. We sell our own premium blend in-store and online. For succulents and cacti, we recommend our specific gritty mix which includes coarse sand and fine gravel.",
      },
    ],
  },
  {
    category: "Services & Projects",
    items: [
      {
        q: "How do I book a garden design consultation?",
        a: "Call us on +234 806 646 5246 or email info@bmltrees.com. We will schedule a free 15-minute discovery call to understand your space, budget, and vision before confirming a full consultation.",
      },
      {
        q: "Do you offer maintenance contracts?",
        a: "Yes. Our monthly maintenance plans start from ₦18,000 per month and include two site visits, pruning, fertilising, pest monitoring, and a written condition report. Bespoke plans for larger properties are available on request.",
      },
      {
        q: "Can you design and install indoor plant schemes for offices?",
        a: "Corporate and commercial interior planting is a significant part of our work. We handle everything from initial consultation and plant selection to installation, ongoing maintenance, and replacement cover.",
      },
      {
        q: "What is the lead time for a full landscaping project?",
        a: "Lead times vary by project scale. A balcony or courtyard installation can typically begin within 1–2 weeks of design sign-off. Larger residential or commercial projects require 3–6 weeks of planning before groundworks begin.",
      },
    ],
  },
  {
    category: "Payments & Returns",
    items: [
      {
        q: "What payment methods do you accept?",
        a: "We accept bank transfer, card payment (Mastercard & Visa), and cash on collection. For service packages, a 50% deposit is required to confirm booking with the balance due on project completion.",
      },
      {
        q: "Can I return a plant if I change my mind?",
        a: "Unopened, unused garden supplies and accessories may be returned within 14 days with proof of purchase. Plants can be returned within 7 days if unused and in original condition. We cannot accept returns of plants that have been repotted or show signs of miscare.",
      },
      {
        q: "Do you offer gift cards?",
        a: "Yes — digital gift cards are available in denominations of ₦5,000, ₦10,000, ₦25,000 and ₦50,000. Contact us to purchase. Physical gift cards are available in-store.",
      },
    ],
  },
];

function AccordionItem({ q, a }: { q: string; a: string }) {
  const [open, setOpen] = useState(false);
  return (
    <div className="border-b border-warm-200 last:border-b-0">
      <button
        onClick={() => setOpen((v) => !v)}
        className="w-full flex items-center justify-between gap-4 py-5 text-left group"
      >
        <span className="font-sans font-medium text-sm text-forest-800 group-hover:text-forest-600 transition-colors leading-snug">
          {q}
        </span>
        <ChevronDown
          size={16}
          className={`flex-shrink-0 text-stone-400 transition-transform duration-200 ${open ? "rotate-180" : ""}`}
        />
      </button>
      {open && (
        <p className="pb-5 text-sm text-stone-500 leading-relaxed pr-8">{a}</p>
      )}
    </div>
  );
}

export default function FAQPage() {
  const [activeSection, setActiveSection] = useState<string | null>(null);

  return (
    <>
      {/* ── Hero ──────────────────────────────────────────── */}
      <div className="bg-forest-800 text-white">
        <div className="max-w-7xl mx-auto px-4 py-20 md:py-28">
          <p className="text-sage text-xs uppercase tracking-[0.2em] mb-4">Help Centre</p>
          <h1 className="font-serif text-5xl md:text-6xl font-light leading-tight max-w-xl">
            Frequently Asked Questions
          </h1>
          <p className="text-white/60 mt-5 max-w-md text-sm leading-relaxed">
            Everything you need to know about our plants, services, delivery and aftercare.
            Can&apos;t find your answer? Our team is one call away.
          </p>
        </div>
      </div>

      {/* ── Content ───────────────────────────────────────── */}
      <div className="max-w-7xl mx-auto px-4 py-12 md:py-20">
        <div className="grid lg:grid-cols-4 gap-12">

          {/* Sidebar nav */}
          <aside className="lg:col-span-1">
            <div className="sticky top-24 space-y-1">
              <p className="text-xs uppercase tracking-[0.15em] text-stone-400 mb-4 font-sans">
                Jump to section
              </p>
              {FAQ_SECTIONS.map(({ category }) => (
                <a
                  key={category}
                  href={`#${category.toLowerCase().replace(/\s+/g, "-")}`}
                  className="block px-3 py-2.5 text-sm font-sans text-stone-500 hover:text-forest-700 hover:bg-warm-50 border-l-2 border-transparent hover:border-forest-500 transition-all"
                >
                  {category}
                </a>
              ))}

              {/* Contact callout */}
              <div className="mt-8 p-5 bg-forest-50 border border-forest-100">
                <p className="font-serif text-base text-forest-800 mb-2">Still have questions?</p>
                <p className="text-xs text-stone-500 mb-4 leading-relaxed">
                  Our team responds to all enquiries within one business day.
                </p>
                <a
                  href="tel:+2348066465246"
                  className="flex items-center gap-2 text-xs text-forest-700 font-medium mb-2 hover:text-forest-900 transition-colors"
                >
                  <Phone size={12} /> +234 806 646 5246
                </a>
                <a
                  href="mailto:info@bmltrees.com"
                  className="flex items-center gap-2 text-xs text-forest-700 font-medium hover:text-forest-900 transition-colors"
                >
                  <Mail size={12} /> info@bmltrees.com
                </a>
              </div>
            </div>
          </aside>

          {/* FAQ accordion */}
          <div className="lg:col-span-3 space-y-12">
            {FAQ_SECTIONS.map(({ category, items }) => (
              <section
                key={category}
                id={category.toLowerCase().replace(/\s+/g, "-")}
              >
                <h2 className="font-serif text-2xl text-forest-800 mb-2 pb-4 border-b border-warm-300">
                  {category}
                </h2>
                <div>
                  {items.map((item) => (
                    <AccordionItem key={item.q} q={item.q} a={item.a} />
                  ))}
                </div>
              </section>
            ))}
          </div>
        </div>
      </div>

      {/* ── Bottom CTA ────────────────────────────────────── */}
      <section className="bg-warm-50 border-t border-warm-200 py-14">
        <div className="max-w-3xl mx-auto px-4 text-center">
          <h2 className="font-serif text-3xl text-forest-800 mb-3">
            Didn&apos;t find what you were looking for?
          </h2>
          <p className="text-stone-500 text-sm mb-8">
            Send us a message and we&apos;ll get back to you within one business day.
          </p>
          <Link
            href="/contact"
            className="inline-flex items-center gap-2 px-8 py-4 bg-forest-700 text-white font-sans font-medium text-sm hover:bg-forest-800 transition-colors"
          >
            Contact Us <ArrowRight size={14} />
          </Link>
        </div>
      </section>
    </>
  );
}
