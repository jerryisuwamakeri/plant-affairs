"use client";

import { useSearchParams } from "next/navigation";
import { Suspense } from "react";
import ProductCard from "@/components/ProductCard";
import ShopControls from "./ShopControls";
import type { Product } from "@/lib/types";

function ShopGridInner({ allProducts }: { allProducts: Product[] }) {
  const searchParams = useSearchParams();
  const activeSub = searchParams.get("sub") || "all";
  const sort = searchParams.get("sort") || "default";

  let items =
    activeSub === "all"
      ? allProducts
      : allProducts.filter((p) => p.subcategory === activeSub);

  if (sort === "price-asc") items = [...items].sort((a, b) => a.price - b.price);
  else if (sort === "price-desc") items = [...items].sort((a, b) => b.price - a.price);
  else if (sort === "name") items = [...items].sort((a, b) => a.name.localeCompare(b.name));

  return (
    <section className="max-w-7xl mx-auto px-4 py-12">
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 mb-8">
        <p className="text-sm text-stone-500">
          <span className="text-forest-800 font-medium">{items.length}</span>{" "}
          {items.length === 1 ? "plant" : "plants"} found
        </p>
        <ShopControls />
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
  );
}

export default function ShopGrid({ allProducts }: { allProducts: Product[] }) {
  return (
    <Suspense>
      <ShopGridInner allProducts={allProducts} />
    </Suspense>
  );
}
