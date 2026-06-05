"use client";

import { useRouter, useSearchParams, usePathname } from "next/navigation";
import { Suspense } from "react";

interface Sub { slug: string; label: string }

function ToolbarInner({ subcategories }: { subcategories: Sub[] }) {
  const router = useRouter();
  const pathname = usePathname();
  const searchParams = useSearchParams();
  const active = searchParams.get("sub") || "all";

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

export default function CategoryToolbar({ subcategories }: { subcategories: Sub[] }) {
  return (
    <Suspense>
      <ToolbarInner subcategories={subcategories} />
    </Suspense>
  );
}
