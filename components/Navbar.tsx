"use client";

import { useState, useRef, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import { Search, ShoppingBag, Menu, X, ChevronDown, Phone, Mail } from "lucide-react";
import { useCart, useCartCount } from "./CartContext";

const NAV = [
  {
    label: "Indoor Plants",
    href: "/shop/indoor",
    sub: [
      { label: "All Indoor Plants", href: "/shop/indoor", desc: "Full indoor collection" },
      { label: "Air Purifying", href: "/shop/indoor?sub=air-purifying", desc: "Clean your home's air naturally" },
      { label: "Low Light Varieties", href: "/shop/indoor?sub=low-light", desc: "For darker corners & rooms" },
      { label: "Succulents & Cacti", href: "/shop/indoor?sub=succulents", desc: "Minimal water, maximum style" },
      { label: "Herbs & Edibles", href: "/shop/indoor?sub=herbs", desc: "From garden to kitchen" },
      { label: "Flowering Indoors", href: "/shop/indoor?sub=flowering", desc: "Year-round colour indoors" },
    ],
  },
  {
    label: "Outdoor Plants",
    href: "/shop/outdoor",
    sub: [
      { label: "All Outdoor Plants", href: "/shop/outdoor", desc: "Full outdoor collection" },
      { label: "Garden Flowers", href: "/shop/outdoor?sub=flowers", desc: "Vibrant seasonal blooms" },
      { label: "Shrubs & Hedges", href: "/shop/outdoor?sub=shrubs", desc: "Structure and privacy" },
      { label: "Climbing Plants", href: "/shop/outdoor?sub=climbing", desc: "For walls, fences & arches" },
      { label: "Ornamental Foliage", href: "/shop/outdoor?sub=ornamental", desc: "Texture and year-round interest" },
    ],
  },
  {
    label: "Fruit Plants",
    href: "/shop/fruit",
    sub: [
      { label: "All Fruit Plants", href: "/shop/fruit", desc: "Full fruit collection" },
      { label: "Tropical Fruit Trees", href: "/shop/fruit?sub=tropical", desc: "Mango, pawpaw, avocado & more" },
      { label: "Citrus Trees", href: "/shop/fruit?sub=citrus", desc: "Lemon, orange and lime" },
      { label: "Dwarf Varieties", href: "/shop/fruit?sub=dwarf", desc: "Perfect for pots and small gardens" },
    ],
  },
  {
    label: "Garden Needs",
    href: "/services/garden-needs",
    sub: [
      { label: "All Garden Needs", href: "/services/garden-needs", desc: "Complete shop" },
      { label: "Soil & Compost", href: "/services/garden-needs?sub=soil", desc: "Premium growing media" },
      { label: "Tools & Equipment", href: "/services/garden-needs?sub=tools", desc: "Precision hand tools" },
      { label: "Pots & Planters", href: "/services/garden-needs?sub=pots", desc: "Terracotta, ceramic & more" },
      { label: "Fertilisers & Feed", href: "/services/garden-needs?sub=fertilisers", desc: "Organic and mineral feeds" },
      { label: "Seeds & Bulbs", href: "/services/garden-needs?sub=seeds", desc: "Heirloom and heritage varieties" },
    ],
  },
  {
    label: "Landscaping",
    href: "/services/landscaping",
    sub: [
      { label: "All Services", href: "/services/landscaping", desc: "Full service overview" },
      { label: "Garden Design", href: "/services/landscaping?sub=design", desc: "Concept to completion" },
      { label: "Planting & Installation", href: "/services/landscaping?sub=installation", desc: "Full garden builds" },
      { label: "Maintenance Plans", href: "/services/landscaping?sub=maintenance", desc: "Monthly & seasonal care" },
      { label: "Lawn Care", href: "/services/landscaping?sub=lawn", desc: "Renovation and ongoing turf care" },
      { label: "Irrigation Systems", href: "/services/landscaping?sub=irrigation", desc: "Smart water management" },
    ],
  },
  {
    label: "Company",
    href: "/about",
    sub: [
      { label: "About Us", href: "/about", desc: "Our story, values and team" },
      { label: "FAQs", href: "/faq", desc: "Common questions answered" },
      { label: "Contact", href: "/contact", desc: "Get in touch with our team" },
    ],
  },
];

export default function Navbar() {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [activeMenu, setActiveMenu] = useState<string | null>(null);
  const [searchOpen, setSearchOpen] = useState(false);
  const [mobileExpanded, setMobileExpanded] = useState<string | null>(null);
  const { dispatch } = useCart();
  const cartCount = useCartCount();
  const timeoutRef = useRef<ReturnType<typeof setTimeout> | null>(null);

  const handleMouseEnter = (label: string) => {
    if (timeoutRef.current) clearTimeout(timeoutRef.current);
    setActiveMenu(label);
  };

  const handleMouseLeave = () => {
    timeoutRef.current = setTimeout(() => setActiveMenu(null), 150);
  };

  useEffect(() => () => { if (timeoutRef.current) clearTimeout(timeoutRef.current); }, []);

  return (
    <>
      {/* ── Top strip ─────────────────────────────────── */}
      <div className="bg-forest-800 text-white/80 text-xs py-2 px-4 hidden md:block">
        <div className="max-w-7xl mx-auto flex justify-between items-center">
          <span className="flex items-center gap-4">
            <span className="flex items-center gap-1.5"><Phone size={11} /> +234 806 646 5246</span>
            <span className="flex items-center gap-1.5"><Mail size={11} /> hello@plantaffairs.com</span>
          </span>
          <span>Free delivery on orders over ₦30,000 &nbsp;·&nbsp; Abuja & Lagos</span>
        </div>
      </div>

      {/* ── Main nav ──────────────────────────────────── */}
      <header className="bg-white border-b border-warm-200 sticky top-0 z-30">
        <div className="max-w-7xl mx-auto px-4 h-16 flex items-center justify-between gap-6">
          {/* Logo */}
          <Link href="/" className="flex-shrink-0 flex items-center gap-2.5">
            <div className="w-9 h-9 relative">
              <Image src="/images/logo.jpg" alt="Plant Affairs" fill className="object-cover rounded-full" />
            </div>
            <span className="font-serif text-xl text-forest-800 tracking-tight hidden sm:block">
              Plant Affairs
            </span>
          </Link>

          {/* Desktop nav */}
          <nav className="hidden lg:flex items-center gap-1">
            <Link
              href="/"
              className="px-3 py-2 text-sm font-sans font-medium text-stone-600 hover:text-forest-700 transition-colors whitespace-nowrap"
            >
              Home
            </Link>
            {NAV.map((item) => (
              <div
                key={item.label}
                className="nav-item relative"
                onMouseEnter={() => handleMouseEnter(item.label)}
                onMouseLeave={handleMouseLeave}
              >
                <Link
                  href={item.href}
                  className="flex items-center gap-1 px-3 py-2 text-sm font-sans font-medium text-stone-600 hover:text-forest-700 transition-colors whitespace-nowrap"
                >
                  {item.label}
                  <ChevronDown size={13} className="text-stone-400" />
                </Link>

                {/* Mega dropdown */}
                {activeMenu === item.label && (
                  <div
                    className="mega-menu absolute top-full left-1/2 -translate-x-1/2 w-80 bg-white border border-warm-200 shadow-xl z-50 py-4"
                    onMouseEnter={() => handleMouseEnter(item.label)}
                    onMouseLeave={handleMouseLeave}
                  >
                    {item.sub.map((s) => (
                      <Link
                        key={s.href}
                        href={s.href}
                        onClick={() => setActiveMenu(null)}
                        className="flex flex-col px-5 py-2.5 hover:bg-warm-50 group transition-colors"
                      >
                        <span className="text-sm font-medium text-forest-800 group-hover:text-forest-600">
                          {s.label}
                        </span>
                        <span className="text-xs text-stone-400 mt-0.5">{s.desc}</span>
                      </Link>
                    ))}
                  </div>
                )}
              </div>
            ))}
          </nav>

          {/* Right icons */}
          <div className="flex items-center gap-1">
            {/* Search */}
            <div className="relative">
              <button
                onClick={() => setSearchOpen((v) => !v)}
                className="p-2 text-stone-500 hover:text-forest-700 transition-colors"
                aria-label="Search"
              >
                <Search size={18} />
              </button>
              {searchOpen && (
                <div className="absolute right-0 top-full mt-1 w-72 bg-white border border-warm-200 shadow-lg p-3 z-50">
                  <input
                    autoFocus
                    placeholder="Search plants, services…"
                    className="w-full text-sm outline-none border border-warm-200 px-3 py-2 text-forest-800 placeholder-stone-300 focus:border-forest-400"
                    onKeyDown={(e) => e.key === "Escape" && setSearchOpen(false)}
                  />
                </div>
              )}
            </div>

            {/* Cart */}
            <button
              onClick={() => dispatch({ type: "TOGGLE" })}
              className="p-2 text-stone-500 hover:text-forest-700 transition-colors relative"
              aria-label="Cart"
            >
              <ShoppingBag size={18} />
              {cartCount > 0 && (
                <span className="absolute top-1 right-1 w-4 h-4 bg-forest-700 text-white text-[10px] flex items-center justify-center rounded-full font-medium">
                  {cartCount}
                </span>
              )}
            </button>

            {/* Mobile hamburger */}
            <button
              className="lg:hidden p-2 text-stone-500 hover:text-forest-700 transition-colors ml-1"
              onClick={() => setMobileOpen((v) => !v)}
              aria-label="Menu"
            >
              {mobileOpen ? <X size={20} /> : <Menu size={20} />}
            </button>
          </div>
        </div>

        {/* ── Mobile menu ───────────────────────────── */}
        {mobileOpen && (
          <div className="lg:hidden bg-white border-t border-warm-200 max-h-[80vh] overflow-y-auto">
            <div className="border-b border-warm-100">
              <Link
                href="/"
                onClick={() => setMobileOpen(false)}
                className="block px-5 py-3.5 text-sm font-medium text-forest-800"
              >
                Home
              </Link>
            </div>
            {NAV.map((item) => (
              <div key={item.label} className="border-b border-warm-100">
                <button
                  className="w-full flex items-center justify-between px-5 py-3.5 text-sm font-medium text-forest-800"
                  onClick={() => setMobileExpanded(mobileExpanded === item.label ? null : item.label)}
                >
                  {item.label}
                  <ChevronDown
                    size={15}
                    className={`text-stone-400 transition-transform ${mobileExpanded === item.label ? "rotate-180" : ""}`}
                  />
                </button>
                {mobileExpanded === item.label && (
                  <div className="bg-warm-50 pb-2">
                    {item.sub.map((s) => (
                      <Link
                        key={s.href}
                        href={s.href}
                        onClick={() => { setMobileOpen(false); setMobileExpanded(null); }}
                        className="block px-8 py-2.5 text-sm text-stone-600 hover:text-forest-700"
                      >
                        {s.label}
                      </Link>
                    ))}
                  </div>
                )}
              </div>
            ))}
            <div className="px-5 py-4 text-xs text-stone-400 space-y-1">
              <p>+234 806 646 5246</p>
              <p>hello@plantaffairs.com</p>
            </div>
          </div>
        )}
      </header>
    </>
  );
}
