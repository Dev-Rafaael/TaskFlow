import { Link } from "react-router-dom";
import styles from "./NotFound.module.css";

export default function NotFound() {
  return (
    <main className={styles.container}>
      <div className={styles.card}>
        <span className={styles.code}>404</span>

        <h1>Página não encontrada</h1>

        <p>
          A página que você tentou acessar não existe ou foi movida.
        </p>

        <Link to="/" className={styles.button}>
          Voltar para o Dashboard
        </Link>
      </div>
    </main>
  );
}
