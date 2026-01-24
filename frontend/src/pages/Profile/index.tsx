import ChangePasswordForm from "./components/ChangePasswordForm";
import ProfileInfo from "./components/ProfileInfo";
import styles from "./Profile.module.css";


export default function Profile() {
  return (
    <main className={styles.page}>
      <header className={styles.header}>
        <h1>Perfil</h1>
        <p>Gerencie suas informações e segurança</p>
      </header>

      <section className={styles.card}>
        <div className={styles.avatarSection}>
          <div className={styles.avatar}>R</div>

          <div>
            <h3>Rafael</h3>
            <span>rafael@email.com</span>
          </div>
        </div>

        <div className={styles.info}>
          <label>
            Nome
            <input value="Rafael" disabled />
          </label>

          <label>
            Email
            <input value="rafael@email.com" disabled />
          </label>
        </div>
      </section>
         <ProfileInfo />
      <ChangePasswordForm />
    </main>
  );
}
