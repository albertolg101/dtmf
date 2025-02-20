"use client";

import { useCart } from "@/shared/cart/cart";
import { getPriceInUSD } from "@/shared/helpers/money";
import Image from "next/image";
import styles from "./Cart.module.css";

export function Cart() {
  const { cart, addToCart, removeFromCart } = useCart();
  const totalInCents = cart.reduce(
    (acc, item) => acc + item.priceInCents * item.quantity,
    0,
  );

  return (
    cart.length !== 0 && (
      <div className={styles.Cart}>
        <h3 className={styles.title}>
          <span>Cart Total:</span>
          <br />
          <span>{getPriceInUSD(totalInCents)}</span>
        </h3>
        <div className={styles.items}>
          {cart.map((item) => (
            <div className={styles.item} key={item.name}>
              <Image
                src={item.imageSrc}
                alt={item.name}
                height={100}
                width={100}
              />
              <h4 className={styles.name}>{item.name}</h4>
              <h5>{getPriceInUSD(item.priceInCents)}</h5>
              <div className={styles.actions}>
                <button
                  className={styles.button}
                  onClick={removeFromCart.bind(null, item.name)}
                >
                  -
                </button>
                <span className={styles.quantity}>{item.quantity}</span>
                <button
                  className={styles.button}
                  onClick={addToCart.bind(null, item)}
                >
                  +
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    )
  );
}
