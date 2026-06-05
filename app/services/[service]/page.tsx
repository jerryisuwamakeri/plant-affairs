import { Metadata } from "next";
import { notFound } from "next/navigation";
import Image from "next/image";
import { Phone } from "lucide-react";
import {
  gardenNeedsMeta,
  landscapingMeta,
  gardenProducts,
  getServicesByCategory,
} from "@/lib/data";
import CategoryToolbar from "@/components/CategoryToolbar";
import ServiceContent from "./ServiceContent";

export const dynamic = "force-static";

interface Props {
  params: { service: string };
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

export default function ServicePage({ params }: Props) {
  const isGardenNeeds = params.service === "garden-needs";
  const isLandscaping = params.service === "landscaping";
  if (!isGardenNeeds && !isLandscaping) notFound();

  const meta = isGardenNeeds ? gardenNeedsMeta : landscapingMeta;
  const allServices = getServicesByCategory(params.service as "garden-needs" | "landscaping");

  return (
    <>
      <CategoryToolbar subcategories={meta.subcategories} />

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

      <ServiceContent
        isGardenNeeds={isGardenNeeds}
        isLandscaping={isLandscaping}
        meta={meta}
        allServices={allServices}
        allProducts={gardenProducts}
      />
    </>
  );
}
