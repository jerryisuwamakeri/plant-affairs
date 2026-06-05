"use client";

import { useRouter, usePathname } from "next/navigation";

interface Sub { slug: string; label: string }

export default function CategoryToolbar({ subcategories, active }: { subcategories: Sub[]; active: string }) {
  const router = useRouter();
  const pathname = usePathname();

  const navigate = (slug: string) => {
    if (slug === "all") {
      router.push(pathname);
    } else {
      router.push(`${pathname}?sub=${slug}`);
    }
  };

  return (
    <div className="bg-white border-b border-warm-200 sticky top-16 z-20">
      <div className="max-w-7xl mx-auto px-4">
        <div className="flex items-center gap-1 overflow-x-auto no-scrollbar py-0">
          {subcategories.map((sub) => {
            const isActive = active === sub.slug || (active === "all" && sub.slug === "all");
            return (
              <button
                key={sub.slug}
                onClick={() => navigate(sub.slug)}
                className={`flex-shrink-0 px-4 py-3.5 text-sm font-sans font-medium border-b-2 transition-colors whitespace-nowrap ${
                  isActive
                    ? "border-forest-700 text-forest-700"
                    : "border-transparent text-stone-500 hover:text-forest-700 hover:border-forest-300"
                }`}
              >
                {sub.label}
              </button>
            );
          })}
        </div>
      </div>
    </div>
  );
}
