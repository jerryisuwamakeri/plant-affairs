import type { Metadata } from "next";
import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import CartSidebar from "@/components/CartSidebar";
import { CartProvider } from "@/components/CartContext";

export const metadata: Metadata = {
  title: { default: "BML Trees", template: "%s | BML Trees" },
  description:
    "Premium trees, plants, landscaping services and garden expertise — curated for discerning homes and gardens across Nigeria.",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body className="min-h-screen flex flex-col bg-ivory">
        <CartProvider>
          <Navbar />
          <CartSidebar />
          <main className="flex-1">{children}</main>
          <Footer />
        </CartProvider>
      </body>
    </html>
  );
}
