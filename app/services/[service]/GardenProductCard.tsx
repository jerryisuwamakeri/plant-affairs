"use client";

import Image from "next/image";
import { ShoppingBag } from "lucide-react";
import { GardenProduct } from "@/lib/types";
import { formatPrice } from "@/lib/data";
import { useCart } from "@/components/CartContext";
import { useState } from "react";

const BADGE_STYLES: Record<string, string> = {
  bestseller: "bg-forest-700 text-white",
  new: "bg-blue-600 text-white",
  sale: "bg-red-500 text-white",
};

export default function GardenProductCard({ product }: { product: GardenProduct }) {
  const { dispatch } = useCart();
  const [added, setAdded] = useState(false);

  const handleAdd = () => {
    dispatch({ type: "ADD", product: { ...product, category: "indoor" as const, subcategory: product.subcategory, careLevel: "easy", light: "medium", water: "", tags: [], inStock: true, slug: product.slug, longDescription: product.description } });
    setAdded(true);
    setTimeout(() => setAdded(false), 1500);
  };

  const discount = product.originalPrice
    ? Math.round((1 - product.price / product.originalPrice) * 100)
    : null;

  return (
    <article className="group bg-white border border-warm-200 hover:border-forest-300 hover:shadow-lg hover:shadow-forest-100/40 transition-all duration-300 flex flex-col">
      <div className="relative overflow-hidden aspect-[4/3] bg-warm-50">
        <Image
          src={product.image}
          alt={product.name}
          fill
          className="object-cover group-hover:scale-105 transition-transform duration-500"
          sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 25vw"
        />
        <div className="absolute top-3 left-3 flex flex-col gap-1.5">
          {product.badge && (
            <span className={`tag-badge ${BADGE_STYLES[product.badge]}`}>
              {product.badge === "bestseller" ? "Best Seller" : product.badge.charAt(0).toUpperCase() + product.badge.slice(1)}
            </span>
          )}
          {discount && <span className="tag-badge bg-red-500 text-white">−{discount}%</span>}
        </div>
      </div>
      <div className="flex flex-col flex-1 p-4 gap-3">
        <h3 className="font-serif text-base text-forest-900 leading-snug">{product.name}</h3>
        <p className="text-xs text-stone-500 leading-relaxed line-clamp-2">{product.description}</p>
        <div className="flex items-center justify-between mt-auto pt-3 border-t border-warm-100">
          <div className="flex items-baseline gap-2">
            <span className="font-serif text-lg text-forest-800">{formatPrice(product.price)}</span>
            {product.originalPrice && (
              <span className="text-xs text-stone-400 line-through">{formatPrice(product.originalPrice)}</span>
            )}
          </div>
          <button
            onClick={handleAdd}
            className="flex items-center gap-1.5 px-3 py-2 bg-forest-700 text-white text-xs font-medium hover:bg-forest-800 transition-colors"
          >
            <ShoppingBag size={12} />
            {added ? "Added!" : "Add"}
          </button>
        </div>
      </div>
    </article>
  );
}
