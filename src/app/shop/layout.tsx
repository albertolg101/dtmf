import React from "react";
import styles from "./layout.module.css";

export default function HomeLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <div className={styles.itemListContainer}>{children}</div>;
}
