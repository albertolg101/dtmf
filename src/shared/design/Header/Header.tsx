import Link from "next/link";
import { Logo } from "./Logo";
import styles from "./Header.module.css";

export function Header() {
  return (
    <header>
      <nav className={styles.nav}>
        <Logo />
        <div className={styles.actions}>
          <Link href="/" className={styles.a}>
            Home
          </Link>
          <Link href="/shop" className={styles.a}>
            Shop
          </Link>
        </div>
      </nav>
    </header>
  );
}
