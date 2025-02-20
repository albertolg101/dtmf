"use client";

import React from "react";
import { useCart } from "@/shared/cart/cart";
import type { CartItem } from "@/shared/cart/cart";
import styles from "./AddToCartButton.module.css";

export interface AddToCartButtonProps {
  disabled?: boolean;
  cartItem: Omit<CartItem, "quantity">;
}

export function AddToCartButton({ disabled, cartItem }: AddToCartButtonProps) {
  const { addToCart } = useCart();

  return disabled ? (
    <button disabled className={styles.soldTag}>
      Sold Out
    </button>
  ) : (
    <button
      onClick={addToCart.bind(null, cartItem)}
      className={styles.addToCartButton}
    >
      Add to Cart
    </button>
  );
}
