import type { Item } from "@/shared/services/dtmf/items";
import React from "react";
import { HoverableImage } from "@/shared/design/ItemCard/HoverableImage/HoverableImage";
import { getPriceInUSD } from "@/shared/helpers/money";
import styles from "./ItemCard.module.css";
import { AddToCartButton } from "@/shared/design/ItemCard/AddToCartButton";

export interface CardProps {
  item: Item;
}

export function ItemCard({ item }: CardProps) {
  const cartItem = {
    name: item.name,
    imageSrc: item.imageSrc,
    priceInCents: item.priceInCents,
  };

  return (
    <div className={styles.card}>
      <div className={styles.image}>
        <HoverableImage
          src={item.imageSrc}
          alt={item.name}
          alternativeImageSrc={item.alternativeImageSrc}
        />
        <AddToCartButton disabled={item.sold} cartItem={cartItem} />
      </div>
      <div className={styles.description}>
        <h3 className={styles.name}>{item.name}</h3>
        <h5 className={styles.type}>{item.type}</h5>
        <h4 className={styles.price}>{getPriceInUSD(item.priceInCents)}</h4>
      </div>
    </div>
  );
}
