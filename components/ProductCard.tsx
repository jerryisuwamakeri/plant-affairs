"use client";

import { useState } from "react";
import Image from "next/image";
import { ShoppingBag, Eye, Droplets, Sun } from "lucide-react";
import { Product } from "@/lib/types";
import { formatPrice } from "@/lib/data";
import { useCart } from "./CartContext";

const CARE_COLORS: Record<string, string> = {
  easy: "bg-forest-50 text-forest-600 border-forest-200",
  medium: "bg-amber-50 text-amber-700 border-amber-200",
  hard: "bg-red-50 text-red-600 border-red-200",
};

const BADGE_STYLES: Record<string, string> = {
  bestseller: "bg-forest-700 text-white",
  new: "bg-blue-600 text-white",
  sale: "bg-red-500 text-white",
  featured: "bg-gold text-white",
};

export default function ProductCard({ product }: { product: Product }) {
  const { dispatch } = useCart();
  const [addedSize, setAddedSize] = useState<string | undefined>(undefined);
  const [showSizes, setShowSizes] = useState(false);
  const [added, setAdded] = useState(false);

  const handleAdd = (size?: string) => {
    dispatch({ type: "ADD", product, size });
    setAdded(true);
    setTimeout(() => setAdded(false), 1500);
    setShowSizes(false);
  };

  const discount = product.originalPrice
    ? Math.round((1 - product.price / product.originalPrice) * 100)
    : null;

  return (
    <article className="group relative bg-white border border-warm-200 hover:border-forest-300 hover:shadow-lg hover:shadow-forest-100/40 transition-all duration-300 flex flex-col">
      {/* Image */}
      <div className="relative overflow-hidden aspect-[4/3] bg-warm-50">
        <Image
          src={product.image}
          alt={product.name}
          fill
          className="object-cover group-hover:scale-105 transition-transform duration-500"
          sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
        />

        {/* Badges */}
        <div className="absolute top-3 left-3 flex flex-col gap-1.5">
          {product.badge && (
            <span className={`tag-badge ${BADGE_STYLES[product.badge]}`}>
              {product.badge === "bestseller" ? "Best Seller" : product.badge.charAt(0).toUpperCase() + product.badge.slice(1)}
            </span>
          )}
          {discount && (
            <span className="tag-badge bg-red-500 text-white">−{discount}%</span>
          )}
        </div>

        {/* Quick view */}
        <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-200 bg-forest-900/10">
          <button className="flex items-center gap-1.5 bg-white/90 backdrop-blur-sm text-forest-800 text-xs font-medium px-3 py-2 border border-white/60 shadow hover:bg-white transition-colors">
            <Eye size={13} />
            Quick View
          </button>
        </div>
      </div>

      {/* Content */}
      <div className="flex flex-col flex-1 p-4 gap-3">
        {/* Name + care level */}
        <div className="flex justify-between items-start gap-2">
          <h3 className="font-serif text-base text-forest-900 leading-snug">{product.name}</h3>
          <span className={`tag-badge border flex-shrink-0 ${CARE_COLORS[product.careLevel]}`}>
            {product.careLevel.charAt(0).toUpperCase() + product.careLevel.slice(1)}
          </span>
        </div>

        <p className="text-xs text-stone-500 leading-relaxed line-clamp-2">{product.description}</p>

        {/* Care icons */}
        <div className="flex gap-4 text-xs text-stone-400">
          <span className="flex items-center gap-1">
            <Droplets size={11} className="text-blue-400" />
            {product.water}
          </span>
          <span className="flex items-center gap-1">
            <Sun size={11} className="text-amber-400" />
            {product.light === "low" ? "Low light" : product.light === "medium" ? "Medium light" : "Full sun"}
          </span>
        </div>

        {/* Price + Add */}
        <div className="flex items-center justify-between mt-auto pt-3 border-t border-warm-100">
          <div className="flex items-baseline gap-2">
            <span className="font-serif text-lg text-forest-800">{formatPrice(product.price)}</span>
            {product.originalPrice && (
              <span className="text-xs text-stone-400 line-through">{formatPrice(product.originalPrice)}</span>
            )}
          </div>

          {/* Add to cart / size picker */}
          <div className="relative">
            {product.sizes && product.sizes.length > 0 ? (
              <>
                <button
                  onClick={() => setShowSizes((v) => !v)}
                  className="flex items-center gap-1.5 px-3 py-2 bg-forest-700 text-white text-xs font-medium hover:bg-forest-800 transition-colors"
                >
                  <ShoppingBag size={12} />
                  {added ? "Added!" : "Add"}
                </button>
                {showSizes && (
                  <div className="absolute bottom-full right-0 mb-1 bg-white border border-warm-200 shadow-lg z-20 min-w-[160px]">
                    {product.sizes.map((s) => (
                      <button
                        key={s.label}
                        onClick={() => handleAdd(s.label)}
                        className="w-full text-left px-3 py-2 text-xs hover:bg-warm-50 flex justify-between"
                      >
                        <span className="text-forest-800">{s.label}</span>
                        <span className="text-stone-500 ml-4">{formatPrice(s.price)}</span>
                      </button>
                    ))}
                  </div>
                )}
              </>
            ) : (
              <button
                onClick={() => handleAdd()}
                className="flex items-center gap-1.5 px-3 py-2 bg-forest-700 text-white text-xs font-medium hover:bg-forest-800 transition-colors"
              >
                <ShoppingBag size={12} />
                {added ? "Added!" : "Add to Basket"}
              </button>
            )}
          </div>
        </div>
      </div>
    </article>
  );
}
