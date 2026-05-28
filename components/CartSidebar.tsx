"use client";

import { X, Minus, Plus, ShoppingBag } from "lucide-react";
import Image from "next/image";
import { useCart, useCartTotal } from "./CartContext";
import { formatPrice } from "@/lib/data";

export default function CartSidebar() {
  const { state, dispatch } = useCart();
  const total = useCartTotal();

  return (
    <>
      {/* Backdrop */}
      {state.isOpen && (
        <div
          className="fixed inset-0 bg-black/30 z-40 backdrop-blur-sm"
          onClick={() => dispatch({ type: "CLOSE" })}
        />
      )}

      {/* Panel */}
      <aside
        className={`fixed top-0 right-0 h-full w-full max-w-sm bg-white z-50 flex flex-col shadow-2xl transition-transform duration-300 ease-in-out ${
          state.isOpen ? "translate-x-0" : "translate-x-full"
        }`}
      >
        {/* Header */}
        <div className="flex items-center justify-between px-6 py-5 border-b border-warm-200">
          <span className="font-serif text-xl text-forest-800">Your Basket</span>
          <button
            onClick={() => dispatch({ type: "CLOSE" })}
            className="p-1 text-stone-400 hover:text-forest-700 transition-colors"
          >
            <X size={20} />
          </button>
        </div>

        {/* Items */}
        <div className="flex-1 overflow-y-auto px-6 py-4 space-y-5">
          {state.items.length === 0 ? (
            <div className="flex flex-col items-center justify-center h-full text-center gap-4 text-stone-400">
              <ShoppingBag size={48} strokeWidth={1} />
              <p className="font-serif text-lg">Your basket is empty</p>
              <p className="text-sm">Add some plants to get started.</p>
            </div>
          ) : (
            state.items.map((item) => (
              <div key={item.product.id + (item.selectedSize || "")} className="flex gap-4">
                <div className="relative w-20 h-20 flex-shrink-0 overflow-hidden bg-warm-100">
                  <Image
                    src={"image" in item.product ? item.product.image : "/images/garden-two.webp"}
                    alt={item.product.name}
                    fill
                    className="object-cover"
                  />
                </div>
                <div className="flex-1 min-w-0">
                  <p className="font-serif text-forest-800 text-sm leading-tight">
                    {item.product.name}
                  </p>
                  {item.selectedSize && (
                    <p className="text-xs text-stone-400 mt-0.5">{item.selectedSize}</p>
                  )}
                  <p className="text-forest-600 font-medium text-sm mt-1">
                    {formatPrice("price" in item.product ? item.product.price : 0)}
                  </p>
                  <div className="flex items-center gap-3 mt-2">
                    <button
                      onClick={() => dispatch({ type: "DECREMENT", id: item.product.id })}
                      className="w-6 h-6 flex items-center justify-center border border-warm-300 text-stone-500 hover:border-forest-500 hover:text-forest-700 transition-colors"
                    >
                      <Minus size={12} />
                    </button>
                    <span className="text-sm w-4 text-center">{item.quantity}</span>
                    <button
                      onClick={() => dispatch({ type: "INCREMENT", id: item.product.id })}
                      className="w-6 h-6 flex items-center justify-center border border-warm-300 text-stone-500 hover:border-forest-500 hover:text-forest-700 transition-colors"
                    >
                      <Plus size={12} />
                    </button>
                  </div>
                </div>
                <button
                  onClick={() => dispatch({ type: "REMOVE", id: item.product.id })}
                  className="text-stone-300 hover:text-red-400 transition-colors self-start mt-1"
                >
                  <X size={14} />
                </button>
              </div>
            ))
          )}
        </div>

        {/* Footer */}
        {state.items.length > 0 && (
          <div className="px-6 py-5 border-t border-warm-200 space-y-4">
            <div className="flex justify-between items-center">
              <span className="text-sm text-stone-500">Subtotal</span>
              <span className="font-serif text-lg text-forest-800">{formatPrice(total)}</span>
            </div>
            <p className="text-xs text-stone-400">Delivery calculated at checkout.</p>
            <button className="btn-primary w-full">Proceed to Checkout</button>
            <button
              onClick={() => dispatch({ type: "CLOSE" })}
              className="btn-ghost w-full text-stone-500"
            >
              Continue Shopping
            </button>
          </div>
        )}
      </aside>
    </>
  );
}
