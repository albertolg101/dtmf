import styles from "./Footer.module.css";
import Link from "next/link";

export function Footer() {
  return (
    <footer className={styles.footer}>
      <hr className={styles.hr} />
      <p className={styles.p}>
        {"This site is just a copy of "}
        <Link href="https://shop.debitirarmasfotos.com" className={styles.a}>
          shop.debitirarmasfotos.com
        </Link>
      </p>
    </footer>
  );
}
