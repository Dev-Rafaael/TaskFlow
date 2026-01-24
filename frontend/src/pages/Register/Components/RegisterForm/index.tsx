import styles from "./RegisterForm.module.css";

export default function RegisterForm() {
  return (
    <div className={styles.card}>
      <h2>Criar conta</h2>
      <p className={styles.subtitle}>Preencha os dados para se cadastrar</p>

      <form className={styles.form}>
        <label className={styles.label}>
          Nome Completo
          <input
            type="text"
            placeholder="Nome completo"
            className={styles.input}
          />
        </label>
    
        <label className={styles.label}>
          Email
          <input type="email" placeholder="E-mail" className={styles.input} />
        </label>
        <label className={styles.label}>
          Senha
          <input type="password" placeholder="Senha" className={styles.input} />
        </label>
        <label className={styles.label}>
          Confirme sua Senha
          <input
            type="password"
            placeholder="Confirmar senha"
            className={styles.input}
          />
        </label>
        <button className={styles.button}>Criar conta</button>
      </form>
    </div>
  );
}
