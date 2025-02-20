import React from "react";
import { CartProvider } from "@/shared/cart/cart";
import { Header } from "@/shared/design/Header";
import { Content } from "@/shared/design/Content";
import { Footer } from "@/shared/design/Footer";
import { Cart } from "@/shared/design/Cart";
import styles from "./layout.module.css";
import "./global.css";

export interface AppLayoutProps {
  children: React.ReactNode;
}

export default function RootLayout({ children }: AppLayoutProps) {
  return (
    <html lang="en">
      <body>
        <CartProvider>
          <div className={styles.page}>
            <Header />
            <Content>{children}</Content>
            <Footer />
          </div>
          <Cart />
        </CartProvider>
      </body>
    </html>
  );
}
