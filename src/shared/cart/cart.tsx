"use client";

import React from "react";

export type CartItem = {
  name: string;
  imageSrc: string;
  priceInCents: number;
  quantity: number;
};

export type Cart = Array<CartItem>;

interface CartContext {
  cart: Cart;
  addToCart: (cartItem: Omit<CartItem, "quantity">) => void;
  removeFromCart: (cartItemName: string) => void;
}

const Cart = React.createContext<CartContext | undefined>(undefined);

export function CartProvider({ children }: { children: React.ReactNode }) {
  const [cart, _setCart] = React.useState<Array<CartItem>>([]);

  function setCart(cart: Cart) {
    _setCart(cart);
    localStorage.setItem("cart", JSON.stringify(cart));
  }

  function handleAddToCart(cartItem: Omit<CartItem, "quantity">) {
    const itemInCartIndex = cart.findIndex(
      (item) => item.name === cartItem.name,
    );
    const updatedCart =
      itemInCartIndex === -1
        ? [...cart, { ...cartItem, quantity: 1 }]
        : cart.map((item, index) =>
            index === itemInCartIndex
              ? { ...item, quantity: item.quantity + 1 }
              : item,
          );

    setCart(updatedCart);
  }

  function handleRemoveFromCart(cartItemName: string) {
    const itemInCart = cart.find((item) => item.name === cartItemName);

    if (itemInCart === undefined) {
      return;
    }

    const updatedCart =
      itemInCart.quantity === 1
        ? cart.filter((item) => item.name !== cartItemName)
        : cart.map((item) =>
            item.name === cartItemName
              ? { ...item, quantity: item.quantity - 1 }
              : item,
          );

    setCart(updatedCart);
  }

  React.useEffect(() => {
    const cart = localStorage.getItem("cart");
    if (cart) {
      setCart(JSON.parse(cart));
    }
  }, []);

  const contextValue = {
    cart,
    addToCart: handleAddToCart,
    removeFromCart: handleRemoveFromCart,
  };

  return <Cart.Provider value={contextValue}>{children}</Cart.Provider>;
}

export function useCart() {
  const context = React.useContext(Cart);

  if (context === undefined) {
    throw new Error("useCart must be used within a CartProvider");
  }
  return context;
}
