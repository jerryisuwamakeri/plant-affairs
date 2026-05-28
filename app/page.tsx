import Image from "next/image";
import Link from "next/link";
import { ArrowRight, Leaf, Award, Truck, HeartHandshake } from "lucide-react";
import { products } from "@/lib/data";
import ProductCard from "@/components/ProductCard";

const HERO_CATEGORIES = [
  { label: "Indoor Plants", href: "/shop/indoor", image: "/images/peace-lily.webp", count: 8 },
  { label: "Outdoor Plants", href: "/shop/outdoor", image: "/images/garden-two.webp", count: 7 },
  { label: "Fruit Plants", href: "/shop/fruit", image: "/images/mango-tree.jpg", count: 7 },
  { label: "Garden Needs", href: "/services/garden-needs", image: "/images/formal-garden.jpg", count: null },
  { label: "Landscaping", href: "/services/landscaping", image: "/images/balcony-garden.png", count: null },
];

const FEATURES = [
  { icon: Leaf, label: "Expert Curation", text: "Every plant selected by our horticulturists for quality and health." },
  { icon: Truck, label: "Free Delivery", text: "Complimentary delivery on orders over ₦30,000 in Abuja & Lagos." },
  { icon: Award, label: "Guaranteed Quality", text: "30-day plant health guarantee on all purchases." },
  { icon: HeartHandshake, label: "Aftercare Support", text: "Ongoing care advice from our team, free of charge." },
];

const featured = products.filter((p) => p.badge === "bestseller" || p.badge === "featured").slice(0, 4);

export default function HomePage() {
  return (
    <>
      {/* ── Hero ──────────────────────────────────────────────────── */}
      <section className="relative bg-forest-800 text-white overflow-hidden">
        <div className="absolute inset-0">
          <Image
            src="/images/garden-two.webp"
            alt="Plant Affairs hero garden"
            fill
            className="object-cover opacity-30"
            priority
          />
        </div>
        <div className="relative max-w-7xl mx-auto px-4 py-28 md:py-40">
          <p className="text-sage text-sm uppercase tracking-[0.2em] mb-5 font-sans">
            Premium Plant & Garden Studio
          </p>
          <h1 className="font-serif text-5xl md:text-7xl font-light leading-tight max-w-3xl mb-6">
            Plants That <em className="italic not-italic text-sage">Elevate</em>{" "}
            Every Space
          </h1>
          <p className="text-white/70 text-lg md:text-xl max-w-xl leading-relaxed mb-10">
            Indoor botanicals, outdoor specimens, fruit trees and full landscaping services —
            curated for discerning homes and gardens across Nigeria.
          </p>
          <div className="flex flex-wrap gap-4">
            <Link href="/shop/indoor" className="btn-primary bg-white text-forest-800 hover:bg-warm-100 hover:text-forest-900 px-8 py-4 text-sm">
              Shop Plants <ArrowRight size={15} />
            </Link>
            <Link href="/services/landscaping" className="btn-outline border-white text-white hover:bg-white hover:text-forest-800 px-8 py-4 text-sm">
              Our Services
            </Link>
          </div>
        </div>
      </section>

      {/* ── Category cards ────────────────────────────────────────── */}
      <section className="max-w-7xl mx-auto px-4 py-16 md:py-24">
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-4 mb-10">
          <div>
            <p className="text-stone-400 text-xs uppercase tracking-[0.15em] mb-3">Browse by category</p>
            <h2 className="section-title">What Are You Looking For?</h2>
          </div>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4">
          {HERO_CATEGORIES.map((cat) => (
            <Link
              key={cat.href}
              href={cat.href}
              className="group relative overflow-hidden aspect-[3/4] bg-warm-100"
            >
              <Image
                src={cat.image}
                alt={cat.label}
                fill
                className="object-cover group-hover:scale-105 transition-transform duration-500"
                sizes="(max-width: 640px) 50vw, 20vw"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-forest-900/80 via-forest-900/20 to-transparent" />
              <div className="absolute bottom-0 left-0 p-4">
                <p className="font-serif text-white text-sm md:text-base leading-tight">
                  {cat.label}
                </p>
                {cat.count && (
                  <p className="text-white/60 text-xs mt-0.5">{cat.count} varieties</p>
                )}
              </div>
            </Link>
          ))}
        </div>
      </section>

      {/* ── Featured products ─────────────────────────────────────── */}
      <section className="bg-warm-50 py-16 md:py-24">
        <div className="max-w-7xl mx-auto px-4">
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-4 mb-10">
            <div>
              <p className="text-stone-400 text-xs uppercase tracking-[0.15em] mb-3">Handpicked for you</p>
              <h2 className="section-title">Staff Favourites</h2>
            </div>
            <Link href="/shop/indoor" className="btn-ghost text-forest-700 gap-1.5 self-start md:self-auto">
              View all plants <ArrowRight size={14} />
            </Link>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
            {featured.map((p) => (
              <ProductCard key={p.id} product={p} />
            ))}
          </div>
        </div>
      </section>

      {/* ── Editorial banner ──────────────────────────────────────── */}
      <section className="max-w-7xl mx-auto px-4 py-16 md:py-24">
        <div className="grid md:grid-cols-2 gap-0 overflow-hidden">
          <div className="relative aspect-[4/3] md:aspect-auto">
            <Image
              src="/images/formal-garden.jpg"
              alt="Landscaping services"
              fill
              className="object-cover"
            />
          </div>
          <div className="bg-forest-800 text-white p-10 md:p-16 flex flex-col justify-center">
            <p className="text-sage text-xs uppercase tracking-[0.2em] mb-5">Professional Services</p>
            <h2 className="font-serif text-3xl md:text-4xl font-light leading-tight mb-5">
              From Concept to a Garden You Love
            </h2>
            <p className="text-white/70 text-sm leading-relaxed mb-8 max-w-md">
              Our certified horticulturists design, install and maintain outdoor spaces of every
              scale — from a terrace pot arrangement to a full estate landscape.
            </p>
            <div className="flex flex-wrap gap-3">
              <Link href="/services/landscaping" className="btn-primary bg-white text-forest-800 hover:bg-warm-100 px-6 py-3 text-xs">
                View Landscaping Services <ArrowRight size={13} />
              </Link>
              <Link href="/services/garden-needs" className="btn-outline border-white/40 text-white hover:border-white px-6 py-3 text-xs">
                Garden Needs & Supplies
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* ── Features strip ────────────────────────────────────────── */}
      <section className="border-t border-b border-warm-200 bg-white">
        <div className="max-w-7xl mx-auto px-4 py-10">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
            {FEATURES.map(({ icon: Icon, label, text }) => (
              <div key={label} className="flex gap-4">
                <div className="flex-shrink-0 w-10 h-10 bg-forest-50 flex items-center justify-center">
                  <Icon size={18} className="text-forest-600" />
                </div>
                <div>
                  <p className="font-sans font-medium text-forest-800 text-sm mb-1">{label}</p>
                  <p className="text-stone-500 text-xs leading-relaxed">{text}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Garden design showcase ────────────────────────────────── */}
      <section className="max-w-7xl mx-auto px-4 py-16 md:py-24">
        <div className="text-center mb-12">
          <p className="text-stone-400 text-xs uppercase tracking-[0.15em] mb-3">Portfolio</p>
          <h2 className="section-title">Gardens We&apos;ve Transformed</h2>
          <p className="section-subtitle mx-auto mt-4 text-center">
            Each project is unique — from compact urban balconies to sweeping estate landscapes.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          {[
            { img: "/images/balcony-garden.png", title: "Modern Balcony Garden", sub: "Abuja, 2024" },
            { img: "/images/garden-two.webp", title: "Tropical Backyard Oasis", sub: "Lagos, 2024" },
            { img: "/images/formal-garden.jpg", title: "Formal Estate Garden", sub: "Abuja, 2023" },
          ].map(({ img, title, sub }) => (
            <div key={title} className="group relative overflow-hidden aspect-[4/3]">
              <Image src={img} alt={title} fill className="object-cover group-hover:scale-105 transition-transform duration-500" />
              <div className="absolute inset-0 bg-gradient-to-t from-forest-900/70 to-transparent" />
              <div className="absolute bottom-0 left-0 p-5">
                <p className="font-serif text-white text-lg leading-tight">{title}</p>
                <p className="text-white/60 text-xs mt-1">{sub}</p>
              </div>
            </div>
          ))}
        </div>

        <div className="text-center mt-8">
          <Link href="/services/landscaping" className="btn-outline text-forest-700 border-forest-700 gap-2">
            See All Projects <ArrowRight size={14} />
          </Link>
        </div>
      </section>

      {/* ── Newsletter ────────────────────────────────────────────── */}
      <section className="bg-forest-800 text-white py-16">
        <div className="max-w-xl mx-auto px-4 text-center">
          <p className="text-sage text-xs uppercase tracking-[0.2em] mb-4">Stay in the know</p>
          <h2 className="font-serif text-3xl md:text-4xl font-light mb-4">
            Seasonal Plant Advice, Direct to You
          </h2>
          <p className="text-white/60 text-sm mb-8">
            Subscribe for care guides, seasonal specials and new arrivals.
          </p>
          <form className="flex gap-0 max-w-md mx-auto">
            <input
              type="email"
              placeholder="Your email address"
              className="flex-1 px-4 py-3 bg-white/10 border border-white/20 text-white placeholder-white/40 text-sm outline-none focus:border-white/50"
            />
            <button type="submit" className="px-5 py-3 bg-sage text-forest-900 text-sm font-medium hover:bg-white transition-colors whitespace-nowrap">
              Subscribe
            </button>
          </form>
        </div>
      </section>
    </>
  );
}
