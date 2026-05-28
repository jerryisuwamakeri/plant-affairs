"use client";

import { useRouter, usePathname, useSearchParams } from "next/navigation";

export default function ShopControls() {
  const router = useRouter();
  const pathname = usePathname();
  const searchParams = useSearchParams();

  const setSort = (sort: string) => {
    const params = new URLSearchParams(searchParams.toString());
    if (sort === "default") params.delete("sort");
    else params.set("sort", sort);
    router.push(`${pathname}?${params.toString()}`);
  };

  const current = searchParams.get("sort") || "default";

  return (
    <div className="flex items-center gap-2">
      <span className="text-xs text-stone-400">Sort by:</span>
      <select
        value={current}
        onChange={(e) => setSort(e.target.value)}
        className="text-sm border border-warm-200 bg-white text-forest-800 px-3 py-1.5 outline-none focus:border-forest-400 cursor-pointer"
      >
        <option value="default">Recommended</option>
        <option value="price-asc">Price: Low to High</option>
        <option value="price-desc">Price: High to Low</option>
        <option value="name">Name: A–Z</option>
      </select>
    </div>
  );
}
