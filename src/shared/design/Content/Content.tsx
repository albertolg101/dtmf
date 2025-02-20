import React from "react";
import styles from "./Content.module.css";

export interface Content {
  children: React.ReactNode;
}

export function Content({ children }: Content) {
  return <main className={styles.main}>{children}</main>;
}
