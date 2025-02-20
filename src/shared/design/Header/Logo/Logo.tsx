import Link from "next/link";
import styles from "./Logo.module.css";

export function Logo() {
  return (
    <Link href="/">
      <h1 className={styles.logo}>
        DebÍ
        <br />
        TiRAR
        <br />
        MàS
        <br />
        FOToS
      </h1>
    </Link>
  );
}
