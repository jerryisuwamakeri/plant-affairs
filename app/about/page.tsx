import { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { Leaf, Heart, Award, Users, ArrowRight, Quote } from "lucide-react";

export const metadata: Metadata = {
  title: "About Us",
  description:
    "Learn about BML Trees — our story, our philosophy, and the team behind Nigeria's premier tree and garden studio.",
};

const VALUES = [
  {
    icon: Leaf,
    title: "Botanical Integrity",
    text: "Every plant we stock is hand-selected, healthy, and true to its species. We never compromise on quality.",
  },
  {
    icon: Heart,
    title: "Genuine Care",
    text: "We care about your plants long after purchase — free advice, aftercare guides, and a 30-day health guarantee.",
  },
  {
    icon: Award,
    title: "Expert Knowledge",
    text: "Our team holds formal horticultural qualifications and decades of combined field experience.",
  },
  {
    icon: Users,
    title: "Community First",
    text: "We support local growers, employ skilled local gardeners, and share knowledge freely with our community.",
  },
];

const STATS = [
  { value: "2,400+", label: "Plants sold" },
  { value: "850+", label: "Happy clients" },
  { value: "120+", label: "Projects completed" },
  { value: "5 yrs", label: "In business" },
];

const TEAM = [
  {
    name: "Hon. Felix Leo Gimbason",
    role: "Founder & Head Horticulturist",
    bio: "With over a decade of experience in tropical horticulture, Leo founded BML Trees to make premium plant and tree culture accessible across Nigeria. He holds a BSc in Botany and has designed gardens from Abuja to Lagos.",
    image: "/images/team-leo.jpg",
  },
];

export default function AboutPage() {
  return (
    <>
      {/* ── Hero ──────────────────────────────────────────── */}
      <div className="relative bg-forest-800 text-white overflow-hidden">
        <div className="absolute inset-0">
          <Image
            src="/images/garden-two.webp"
            alt="BML Trees garden"
            fill
            className="object-cover opacity-25"
            priority
          />
        </div>
        <div className="relative max-w-7xl mx-auto px-4 py-20 md:py-32">
          <p className="text-sage text-xs uppercase tracking-[0.2em] mb-4">Our Story</p>
          <h1 className="font-serif text-5xl md:text-7xl font-light leading-tight max-w-2xl">
            Grown from a Love of Plants
          </h1>
          <p className="text-white/65 mt-6 max-w-lg text-base md:text-lg leading-relaxed">
            BML Trees began as one person's obsession with tropical botanicals and grew into
            Nigeria's most thoughtful tree, plant and garden studio.
          </p>
        </div>
      </div>

      {/* ── Mission quote ─────────────────────────────────── */}
      <section className="bg-warm-50 py-16 md:py-24">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <Quote size={32} className="text-forest-300 mx-auto mb-6" />
          <blockquote className="font-serif text-2xl md:text-4xl font-light text-forest-800 leading-relaxed">
            We believe every home deserves a living thing — something that breathes, grows,
            and quietly transforms the space around it.
          </blockquote>
          <p className="mt-6 text-stone-400 text-sm font-sans">— Hon. Felix Leo Gimbason, Founder</p>
        </div>
      </section>

      {/* ── Our story ─────────────────────────────────────── */}
      <section className="max-w-7xl mx-auto px-4 py-16 md:py-24">
        <div className="grid md:grid-cols-2 gap-12 md:gap-20 items-center">
          <div className="relative aspect-[4/5] overflow-hidden">
            <Image
              src="/images/team-leo.jpg"
              alt="Leo, Founder of BML Trees"
              fill
              className="object-cover"
            />
          </div>
          <div>
            <p className="text-stone-400 text-xs uppercase tracking-[0.15em] mb-4">The Beginning</p>
            <h2 className="font-serif text-3xl md:text-4xl font-light text-forest-800 mb-6 leading-snug">
              Started in a Small Abuja Nursery. Built into Something Bigger.
            </h2>
            <div className="space-y-4 text-stone-600 text-sm leading-relaxed">
              <p>
                BML Trees was founded in 2019 by Hon. Felix Leo Gimbason, a botanist with an unshakeable
                belief that access to quality plants could genuinely improve everyday life — not just
                aesthetically, but mentally and physically.
              </p>
              <p>
                What started as a weekend market stall in Wuse grew steadily through word of mouth.
                Clients didn't just come back for more plants — they sent their neighbours, their
                offices, their event planners. The demand for a proper studio became undeniable.
              </p>
              <p>
                Today, BML Trees serves hundreds of homes and businesses across Abuja and Lagos,
                offering not just plants but full landscaping design, installation, and ongoing
                maintenance — all delivered with the same personal attention that made that first
                stall so memorable.
              </p>
            </div>
            <Link
              href="/services/landscaping"
              className="inline-flex items-center gap-2 mt-8 px-6 py-3 bg-forest-700 text-white font-sans font-medium text-sm hover:bg-forest-800 transition-colors"
            >
              View Our Services <ArrowRight size={14} />
            </Link>
          </div>
        </div>
      </section>

      {/* ── Stats strip ───────────────────────────────────── */}
      <section className="bg-forest-800 text-white py-14">
        <div className="max-w-5xl mx-auto px-4">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
            {STATS.map(({ value, label }) => (
              <div key={label}>
                <p className="font-serif text-4xl md:text-5xl font-light text-sage">{value}</p>
                <p className="text-white/60 text-sm mt-2 font-sans">{label}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Values ────────────────────────────────────────── */}
      <section className="max-w-7xl mx-auto px-4 py-16 md:py-24">
        <div className="text-center mb-12">
          <p className="text-stone-400 text-xs uppercase tracking-[0.15em] mb-3">What We Stand For</p>
          <h2 className="section-title">Our Values</h2>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {VALUES.map(({ icon: Icon, title, text }) => (
            <div key={title} className="border border-warm-200 p-7 hover:border-forest-300 hover:shadow-md transition-all duration-300">
              <div className="w-10 h-10 bg-forest-50 flex items-center justify-center mb-5">
                <Icon size={18} className="text-forest-600" />
              </div>
              <h3 className="font-serif text-lg text-forest-800 mb-3">{title}</h3>
              <p className="text-stone-500 text-sm leading-relaxed">{text}</p>
            </div>
          ))}
        </div>
      </section>

      {/* ── Team ──────────────────────────────────────────── */}
      <section className="bg-warm-50 py-16 md:py-24">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center mb-12">
            <p className="text-stone-400 text-xs uppercase tracking-[0.15em] mb-3">The People</p>
            <h2 className="section-title">Meet the Team</h2>
            <p className="section-subtitle mx-auto mt-4 text-center max-w-lg">
              Horticulturists, designers, and plant lovers — united by a shared obsession with making
              things grow.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {TEAM.map(({ name, role, bio, image }) => (
              <article key={name} className="bg-white group">
                <div className="relative aspect-[3/4] overflow-hidden">
                  <Image
                    src={image}
                    alt={name}
                    fill
                    className="object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                </div>
                <div className="p-6">
                  <h3 className="font-serif text-xl text-forest-800">{name}</h3>
                  <p className="text-sage text-xs uppercase tracking-wide font-sans mt-1 mb-3">{role}</p>
                  <p className="text-stone-500 text-sm leading-relaxed">{bio}</p>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* ── CTA ───────────────────────────────────────────── */}
      <section className="max-w-7xl mx-auto px-4 py-16 md:py-24">
        <div className="grid md:grid-cols-2 gap-0 overflow-hidden">
          <div className="relative aspect-[4/3] md:aspect-auto min-h-[280px]">
            <Image src="/images/balcony-garden.png" alt="Garden" fill className="object-cover" />
          </div>
          <div className="bg-forest-700 text-white p-10 md:p-14 flex flex-col justify-center">
            <h2 className="font-serif text-3xl md:text-4xl font-light leading-tight mb-4">
              Ready to Start Your Green Journey?
            </h2>
            <p className="text-white/65 text-sm leading-relaxed mb-8">
              Whether you need a single houseplant or a full garden transformation, our team is here
              to help. Reach out and let&apos;s talk.
            </p>
            <div className="flex flex-wrap gap-3">
              <Link
                href="/contact"
                className="inline-flex items-center gap-2 px-6 py-3 bg-white text-forest-800 font-sans font-medium text-sm hover:bg-warm-100 transition-colors"
              >
                Get in Touch <ArrowRight size={13} />
              </Link>
              <Link
                href="/shop/indoor"
                className="inline-flex items-center gap-2 px-6 py-3 border border-white/40 text-white font-sans font-medium text-sm hover:border-white transition-colors"
              >
                Browse Plants
              </Link>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
