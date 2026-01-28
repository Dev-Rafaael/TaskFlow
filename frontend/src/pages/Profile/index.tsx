import { useAuthStore } from "../../stores/auth.store";
import ProfileInfo from "./components/ProfileInfo";
import styles from "./Profile.module.css";


export default function Profile() {
  const user = useAuthStore((state)=>state.user)
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
          {user && (
            <>
            <h3>{user.name || 'teste'}</h3>
            <span>{user.email || 'teste@gmail.com'}</span>
            </>
          )}
          </div>
        </div>

        <div className={styles.info}>
          <label>
            Nome
            <input value={user?.name || ''} disabled />
          </label>

          <label>
            Email
            <input value={user?.email || ''} disabled />
          </label>
        </div>
      </section>
         <ProfileInfo />
    </main>
  );
}
