import styles from "./ChangePasswordForm.module.css";

export default function ChangePasswordForm() {
  return (
    <section className={styles.card}>
      <header className={styles.header}>
        <h2>Alterar senha</h2>
        <p>Use uma senha forte para manter sua conta segura</p>
      </header>

      <form className={styles.form}>
        <label>
          Senha atual
          <input type="password" placeholder="••••••••" />
        </label>

        <label>
          Nova senha
          <input type="password" placeholder="••••••••" />
        </label>

        <label>
          Confirmar nova senha
          <input type="password" placeholder="••••••••" />
        </label>

        <button type="submit" className={styles.button}>
          Atualizar senha
        </button>
      </form>
    </section>
  );
}
