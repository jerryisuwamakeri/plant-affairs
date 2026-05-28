"use client";

import React, { createContext, useContext, useReducer, ReactNode } from "react";
import { Product, GardenProduct, CartItem } from "@/lib/types";

type CartState = { items: CartItem[]; isOpen: boolean };
type CartAction =
  | { type: "ADD"; product: Product | GardenProduct; size?: string }
  | { type: "REMOVE"; id: string }
  | { type: "INCREMENT"; id: string }
  | { type: "DECREMENT"; id: string }
  | { type: "TOGGLE" }
  | { type: "CLOSE" };

function cartReducer(state: CartState, action: CartAction): CartState {
  switch (action.type) {
    case "ADD": {
      const key = action.size ? `${action.product.id}-${action.size}` : action.product.id;
      const existing = state.items.find((i) => {
        const k = i.selectedSize ? `${i.product.id}-${i.selectedSize}` : i.product.id;
        return k === key;
      });
      if (existing) {
        return {
          ...state,
          isOpen: true,
          items: state.items.map((i) => {
            const k = i.selectedSize ? `${i.product.id}-${i.selectedSize}` : i.product.id;
            return k === key ? { ...i, quantity: i.quantity + 1 } : i;
          }),
        };
      }
      return {
        ...state,
        isOpen: true,
        items: [...state.items, { product: action.product, quantity: 1, selectedSize: action.size }],
      };
    }
    case "REMOVE":
      return { ...state, items: state.items.filter((i) => i.product.id !== action.id) };
    case "INCREMENT":
      return {
        ...state,
        items: state.items.map((i) =>
          i.product.id === action.id ? { ...i, quantity: i.quantity + 1 } : i
        ),
      };
    case "DECREMENT":
      return {
        ...state,
        items: state.items
          .map((i) => (i.product.id === action.id ? { ...i, quantity: i.quantity - 1 } : i))
          .filter((i) => i.quantity > 0),
      };
    case "TOGGLE":
      return { ...state, isOpen: !state.isOpen };
    case "CLOSE":
      return { ...state, isOpen: false };
    default:
      return state;
  }
}

const CartContext = createContext<{
  state: CartState;
  dispatch: React.Dispatch<CartAction>;
} | null>(null);

export function CartProvider({ children }: { children: ReactNode }) {
  const [state, dispatch] = useReducer(cartReducer, { items: [], isOpen: false });
  return <CartContext.Provider value={{ state, dispatch }}>{children}</CartContext.Provider>;
}

export function useCart() {
  const ctx = useContext(CartContext);
  if (!ctx) throw new Error("useCart must be inside CartProvider");
  return ctx;
}

export function useCartCount() {
  const { state } = useCart();
  return state.items.reduce((sum, i) => sum + i.quantity, 0);
}

export function useCartTotal() {
  const { state } = useCart();
  return state.items.reduce((sum, i) => {
    const price = "price" in i.product ? i.product.price : 0;
    return sum + price * i.quantity;
  }, 0);
}
