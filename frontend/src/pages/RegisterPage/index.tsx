
import RegisterForm from "../../features/auth/Components/RegisterForm";
import styles from "./Register.module.css";
import { Link } from "react-router-dom";

export default function Register() {
  return (
    <section className={styles.container}>
       <article className={styles.left}>
      <div className={styles.brand}>
        <h1>TaskFlow</h1>
        <p>Organize suas tarefas de forma simples e eficiente</p>
      </div>
</article>
      <article className={styles.right}>
        <RegisterForm/>

        <span className={styles.link}>
          Já tem conta? <Link to="/Login">Entrar</Link>
        </span>
      </article>
    </section>
  );
}
