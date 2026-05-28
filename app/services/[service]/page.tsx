import { Metadata } from "next";
import { notFound } from "next/navigation";
import Image from "next/image";
import { Suspense } from "react";
import { Check, Phone, ArrowRight, ShoppingBag } from "lucide-react";
import Link from "next/link";
import {
  gardenNeedsMeta,
  landscapingMeta,
  gardenProducts,
  getServicesByCategory,
  formatPrice,
} from "@/lib/data";
import CategoryToolbar from "@/components/CategoryToolbar";
import GardenProductCard from "./GardenProductCard";
import ServiceFilterWrapper from "./ServiceFilterWrapper";

interface Props {
  params: { service: string };
  searchParams: { sub?: string };
}

export async function generateStaticParams() {
  return [{ service: "garden-needs" }, { service: "landscaping" }];
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  if (params.service === "garden-needs") {
    return { title: gardenNeedsMeta.label, description: gardenNeedsMeta.description };
  }
  if (params.service === "landscaping") {
    return { title: landscapingMeta.label, description: landscapingMeta.description };
  }
  return {};
}

export default function ServicePage({ params, searchParams }: Props) {
  const isGardenNeeds = params.service === "garden-needs";
  const isLandscaping = params.service === "landscaping";
  if (!isGardenNeeds && !isLandscaping) notFound();

  const meta = isGardenNeeds ? gardenNeedsMeta : landscapingMeta;
  const activeSub = searchParams.sub || "all";
  const services = getServicesByCategory(params.service as "garden-needs" | "landscaping");

  const filteredServices =
    activeSub === "all" || activeSub === "services"
      ? services
      : services.filter((s) => s.subcategory === activeSub);

  const filteredProducts =
    activeSub === "all" || activeSub === "services"
      ? gardenProducts
      : activeSub === "services"
      ? []
      : gardenProducts.filter((p) => p.subcategory === activeSub);

  const showProducts = isGardenNeeds && activeSub !== "services";
  const showServices = isLandscaping || activeSub === "services" || activeSub === "all";

  return (
    <>
      {/* Subcategory toolbar */}
      <CategoryToolbar subcategories={meta.subcategories} active={activeSub} />

      {/* Hero */}
      <div className="relative bg-forest-800 text-white overflow-hidden">
        <div className="absolute inset-0">
          <Image src={meta.image} alt={meta.label} fill className="object-cover opacity-20" />
        </div>
        <div className="relative max-w-7xl mx-auto px-4 py-14 md:py-20">
          <p className="text-sage text-xs uppercase tracking-[0.2em] mb-3">
            Services / {meta.label}
          </p>
          <h1 className="font-serif text-4xl md:text-6xl font-light max-w-2xl">{meta.label}</h1>
          <p className="text-white/65 mt-4 max-w-xl text-sm md:text-base leading-relaxed">
            {meta.description}
          </p>
          {isLandscaping && (
            <a
              href="tel:+2348066465246"
              className="inline-flex items-center gap-2 mt-8 bg-white text-forest-800 px-6 py-3 text-sm font-medium hover:bg-warm-100 transition-colors"
            >
              <Phone size={14} />
              Speak to a Designer
            </a>
          )}
        </div>
      </div>

      {/* ── Garden Needs: Products ─────────────────────────────── */}
      {showProducts && isGardenNeeds && (
        <section className="max-w-7xl mx-auto px-4 py-12">
          <h2 className="font-serif text-2xl text-forest-800 mb-6">
            {activeSub === "all" ? "All Products" : meta.subcategories.find((s) => s.slug === activeSub)?.label}
          </h2>
          {filteredProducts.length > 0 ? (
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
              {filteredProducts.map((p) => (
                <GardenProductCard key={p.id} product={p} />
              ))}
            </div>
          ) : (
            <p className="text-stone-400 text-sm py-10">No products in this category yet.</p>
          )}
        </section>
      )}

      {/* ── Garden Needs: Our Services section ────────────────── */}
      {isGardenNeeds && (activeSub === "all" || activeSub === "services") && (
        <section className="bg-warm-50 py-12">
          <div className="max-w-7xl mx-auto px-4">
            <div className="mb-8">
              <p className="text-stone-400 text-xs uppercase tracking-[0.15em] mb-2">Professional Care</p>
              <h2 className="font-serif text-3xl text-forest-800">Garden Services</h2>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {filteredServices.map((s) => (
                <div key={s.id} className={`bg-white border p-6 ${s.featured ? "border-forest-400 ring-1 ring-forest-200" : "border-warm-200"}`}>
                  {s.featured && (
                    <span className="inline-block mb-3 px-2.5 py-0.5 bg-forest-700 text-white text-xs font-medium uppercase tracking-wide">
                      Popular
                    </span>
                  )}
                  <h3 className="font-serif text-xl text-forest-800 mb-2">{s.name}</h3>
                  <p className="text-stone-500 text-sm leading-relaxed mb-4">{s.description}</p>
                  <div className="font-serif text-2xl text-forest-700 mb-1">{formatPrice(s.price)}</div>
                  {s.priceNote && <p className="text-stone-400 text-xs mb-4">{s.priceNote}</p>}
                  <ul className="space-y-2 mb-5">
                    {s.features.map((f) => (
                      <li key={f} className="flex gap-2 text-xs text-stone-600">
                        <Check size={13} className="text-forest-500 flex-shrink-0 mt-0.5" />
                        {f}
                      </li>
                    ))}
                  </ul>
                  <a
                    href="tel:+2348066465246"
                    className="inline-flex items-center justify-center gap-2 w-full px-4 py-3 bg-forest-700 text-white text-xs font-medium hover:bg-forest-800 transition-colors"
                  >
                    Book This Service <ArrowRight size={13} />
                  </a>
                </div>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* ── Landscaping: Service packages ─────────────────────── */}
      {isLandscaping && (
        <section className="max-w-7xl mx-auto px-4 py-12">
          <div className="mb-10">
            <p className="text-stone-400 text-xs uppercase tracking-[0.15em] mb-2">
              {activeSub === "all" ? "All Services" : meta.subcategories.find((s) => s.slug === activeSub)?.label}
            </p>
            <h2 className="font-serif text-3xl text-forest-800">Our Service Packages</h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {filteredServices.map((s) => (
              <div
                key={s.id}
                className={`flex flex-col border p-6 ${
                  s.featured
                    ? "bg-forest-800 text-white border-forest-800"
                    : "bg-white border-warm-200"
                }`}
              >
                {s.featured && (
                  <span className="inline-block mb-4 px-2.5 py-0.5 bg-sage text-forest-900 text-xs font-medium uppercase tracking-wide self-start">
                    Most Popular
                  </span>
                )}
                <h3 className={`font-serif text-xl mb-2 ${s.featured ? "text-white" : "text-forest-800"}`}>
                  {s.name}
                </h3>
                <p className={`text-sm leading-relaxed mb-4 ${s.featured ? "text-white/70" : "text-stone-500"}`}>
                  {s.description}
                </p>

                {s.duration && (
                  <p className={`text-xs mb-2 ${s.featured ? "text-sage" : "text-stone-400"}`}>
                    Timeline: {s.duration}
                  </p>
                )}

                <div className={`font-serif text-3xl mb-1 ${s.featured ? "text-sage" : "text-forest-700"}`}>
                  {formatPrice(s.price)}
                </div>
                {s.priceNote && (
                  <p className={`text-xs mb-5 ${s.featured ? "text-white/50" : "text-stone-400"}`}>
                    {s.priceNote}
                  </p>
                )}

                <ul className="space-y-2.5 mb-6 flex-1">
                  {s.features.map((f) => (
                    <li key={f} className={`flex gap-2 text-xs ${s.featured ? "text-white/80" : "text-stone-600"}`}>
                      <Check size={13} className={s.featured ? "text-sage flex-shrink-0 mt-0.5" : "text-forest-500 flex-shrink-0 mt-0.5"} />
                      {f}
                    </li>
                  ))}
                </ul>

                <a
                  href="tel:+2348066465246"
                  className={
                    s.featured
                      ? "inline-flex items-center justify-center gap-2 px-6 py-3 bg-white text-forest-800 text-xs font-medium hover:bg-warm-100 transition-colors"
                      : "inline-flex items-center justify-center gap-2 px-6 py-3 w-full border border-forest-700 text-forest-700 text-xs font-medium hover:bg-forest-700 hover:text-white transition-colors"
                  }
                >
                  <Phone size={12} />
                  Get a Quote
                </a>
              </div>
            ))}
          </div>
        </section>
      )}

      {/* ── CTA strip ─────────────────────────────────────────── */}
      <section className="bg-forest-800 text-white py-14">
        <div className="max-w-3xl mx-auto px-4 text-center">
          <h2 className="font-serif text-3xl md:text-4xl font-light mb-4">
            Not sure where to start?
          </h2>
          <p className="text-white/60 text-sm mb-8">
            Our team of horticulturists is happy to advise on the right plants or service for
            your space. Call us or book a free 15-minute consultation.
          </p>
          <div className="flex flex-wrap gap-4 justify-center">
            <a
              href="tel:+2348066465246"
              className="inline-flex items-center gap-2 px-7 py-3.5 bg-white text-forest-800 font-sans font-medium text-sm hover:bg-warm-100 transition-colors"
            >
              <Phone size={14} /> Call Us Now
            </a>
            <Link
              href="/shop/indoor"
              className="inline-flex items-center gap-2 px-7 py-3.5 border border-white/40 text-white font-sans font-medium text-sm hover:border-white transition-colors"
            >
              Browse Plants <ArrowRight size={14} />
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
