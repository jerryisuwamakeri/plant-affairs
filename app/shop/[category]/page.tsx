import { Metadata } from "next";
import { notFound } from "next/navigation";
import Image from "next/image";
import { Suspense } from "react";
import { categoryMeta, getProductsBySubcategory } from "@/lib/data";
import ProductCard from "@/components/ProductCard";
import CategoryToolbar from "@/components/CategoryToolbar";
import ShopControls from "./ShopControls";

interface Props {
  params: { category: string };
  searchParams: { sub?: string; sort?: string };
}

export async function generateStaticParams() {
  return [{ category: "indoor" }, { category: "outdoor" }, { category: "fruit" }];
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const meta = categoryMeta[params.category];
  if (!meta) return {};
  return { title: meta.label, description: meta.description };
}

export default function ShopCategoryPage({ params, searchParams }: Props) {
  const meta = categoryMeta[params.category];
  if (!meta) notFound();

  const activeSub = searchParams.sub || "all";
  const sort = searchParams.sort || "default";

  let items = getProductsBySubcategory(params.category, activeSub);

  if (sort === "price-asc") items = [...items].sort((a, b) => a.price - b.price);
  else if (sort === "price-desc") items = [...items].sort((a, b) => b.price - a.price);
  else if (sort === "name") items = [...items].sort((a, b) => a.name.localeCompare(b.name));

  return (
    <>
      {/* Subcategory toolbar */}
      <CategoryToolbar subcategories={meta.subcategories} active={activeSub} />

      {/* Hero */}
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

      {/* Grid section */}
      <section className="max-w-7xl mx-auto px-4 py-12">
        {/* Controls row */}
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 mb-8">
          <p className="text-sm text-stone-500">
            <span className="text-forest-800 font-medium">{items.length}</span>{" "}
            {items.length === 1 ? "plant" : "plants"} found
          </p>
          <Suspense>
            <ShopControls />
          </Suspense>
        </div>

        {items.length === 0 ? (
          <div className="text-center py-24 text-stone-400">
            <p className="font-serif text-2xl mb-2">No plants found</p>
            <p className="text-sm">Try a different category or remove filters.</p>
          </div>
        ) : (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-5">
            {items.map((p) => (
              <ProductCard key={p.id} product={p} />
            ))}
          </div>
        )}
      </section>
    </>
  );
}
