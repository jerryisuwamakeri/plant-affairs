export type CareLevel = "easy" | "medium" | "hard";
export type PlantCategory = "indoor" | "outdoor" | "fruit";
export type ServiceCategory = "garden-needs" | "landscaping";

export interface Product {
  id: string;
  name: string;
  slug: string;
  description: string;
  longDescription?: string;
  price: number;
  originalPrice?: number;
  image: string;
  category: PlantCategory;
  subcategory: string;
  tags: string[];
  careLevel: CareLevel;
  light: "low" | "medium" | "bright";
  water: string;
  badge?: "bestseller" | "new" | "sale" | "featured";
  inStock: boolean;
  sizes?: { label: string; price: number }[];
}

export interface GardenProduct {
  id: string;
  name: string;
  slug: string;
  description: string;
  price: number;
  originalPrice?: number;
  image: string;
  subcategory: string;
  badge?: "new" | "sale" | "bestseller";
}

export interface ServicePackage {
  id: string;
  name: string;
  slug: string;
  description: string;
  price: number;
  priceNote?: string;
  features: string[];
  duration?: string;
  featured?: boolean;
  category: ServiceCategory;
  subcategory: string;
}

export interface CartItem {
  product: Product | GardenProduct;
  quantity: number;
  selectedSize?: string;
}

export interface CategoryMeta {
  slug: string;
  label: string;
  description: string;
  image: string;
  subcategories: { slug: string; label: string }[];
}
