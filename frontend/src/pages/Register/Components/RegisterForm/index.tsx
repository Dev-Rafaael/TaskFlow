import styles from "./RegisterForm.module.css";

export default function RegisterForm() {
  return (
    <form className={styles.form}>
      <h2>Criar conta</h2>
      <p>Preencha os dados para se cadastrar</p>

      <input
        type="text"
        placeholder="Nome completo"
        className={styles.input}
      />

      <input
        type="email"
        placeholder="E-mail"
        className={styles.input}
      />

      <input
        type="password"
        placeholder="Senha"
        className={styles.input}
      />

      <input
        type="password"
        placeholder="Confirmar senha"
        className={styles.input}
      />

      <button className={styles.button}>
        Criar conta
      </button>
    </form>
  );
}
