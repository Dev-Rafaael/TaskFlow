import { LoginForm } from "../../features/auth/Components/LoginForm";
import styles from "./Login.module.css";
import { Link } from "react-router-dom";

export default function LoginPage() {
  return (
    <section className={styles.container}>
      <article className={styles.left}>
        <div className={styles.brand}>
          <h1>TaskFlow</h1>
          <p>Organize tarefas. Ganhe foco. Entregue mais.</p>
        </div>
      </article>

      <article className={styles.right}>
        <LoginForm />

           <div className={styles.link}>
         Não tem conta? <Link to="/Cadastro">Se Cadastre!</Link>
        </div>
      </article>
    </section>
  );
}
