import styles from "./Footer.module.css";

export default function Footer() {
  return (
    <footer className={styles.footer}>
      <span className={styles.left}>
        © {new Date().getFullYear()} TaskFlow
      </span>

      <span className={styles.right}>
        Feito com foco em produtividade 🚀
      </span>
    </footer>
  );
}
