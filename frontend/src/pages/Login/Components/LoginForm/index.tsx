import styles from "./LoginForm.module.css";

export function LoginForm() {
  return (
    <div className={styles.card}>
      <h2>Entrar</h2>
      <p className={styles.subtitle}>Acesse sua conta para continuar</p>

      <form className={styles.form}>
        <label className={styles.label}>
          Email
          <input type="email" className={styles.input} />
        </label>

        <label className={styles.label}>
          Senha
          <input type="password" className={styles.input} />
        </label>

        <button className={styles.button}>Entrar</button>
      </form>
    </div>
  );
}
