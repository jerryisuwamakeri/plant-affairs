import { Metadata } from "next";
import { notFound } from "next/navigation";
import Image from "next/image";
import { categoryMeta, getProductsByCategory } from "@/lib/data";
import CategoryToolbar from "@/components/CategoryToolbar";
import ShopGrid from "./ShopGrid";

export const dynamic = "force-static";

interface Props {
  params: { category: string };
}

export async function generateStaticParams() {
  return [{ category: "indoor" }, { category: "outdoor" }, { category: "fruit" }];
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const meta = categoryMeta[params.category];
  if (!meta) return {};
  return { title: meta.label, description: meta.description };
}

export default function ShopCategoryPage({ params }: Props) {
  const meta = categoryMeta[params.category];
  if (!meta) notFound();

  const allProducts = getProductsByCategory(params.category);

  return (
    <>
      <CategoryToolbar subcategories={meta.subcategories} />

      <div className="relative bg-forest-800 text-white overflow-hidden">
        <div className="absolute inset-0">
          <Image src={meta.image} alt={meta.label} fill className="object-cover opacity-25" />
        </div>
        <div className="relative max-w-7xl mx-auto px-4 py-14 md:py-20">
          <p className="text-sage text-xs uppercase tracking-[0.2em] mb-3">
            Shop / {meta.label}
          </p>
          <h1 className="font-serif text-4xl md:text-6xl font-light">{meta.label}</h1>
          <p className="text-white/65 mt-4 max-w-xl text-sm md:text-base leading-relaxed">
            {meta.description}
          </p>
        </div>
      </div>

      <ShopGrid allProducts={allProducts} />
    </>
  );
}
