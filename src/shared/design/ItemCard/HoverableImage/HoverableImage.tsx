"use client";

import React from "react";
import Image from "next/image";
import styles from "./HoverableImage.module.css";

export interface HoverableImageProps {
  src: string;
  alt: string;
  alternativeImageSrc?: string;
}

export function HoverableImage({
  src,
  alt,
  alternativeImageSrc,
}: HoverableImageProps) {
  const [isHovered, setIsHovered] = React.useState(false);

  return (
    <Image
      className={styles.image}
      src={
        isHovered && alternativeImageSrc !== undefined
          ? alternativeImageSrc
          : src
      }
      alt={alt}
      height={1000}
      width={1000}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    />
  );
}
