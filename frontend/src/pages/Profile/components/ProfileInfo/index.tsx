import { useAuthStore } from "../../../../stores/auth.store";
import ChangePasswordForm from "../ChangePasswordForm";
import styles from "./ProfileInfo.module.css";


export default function ProfileInfo() {
  const logout = useAuthStore((u)=> u.logout)
  const user = useAuthStore((u)=> u.user)

  const submitLogout = ()=>{
    const confirmation = window.confirm('Tem certeza?')
    if(confirmation) logout()
    

  }
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
            <h3>{user?.name || 'Teste'}</h3>
            <span>{user?.email || 'teste@gmail.com'}</span>
         </> )}
          </div>
        </div>

        <div className={styles.info}>
          <label>
            Nome
            <input value={user?.name ||""} disabled />
          </label>

          <label>
            Email
            <input value={user?.email ||""} disabled />
          </label>
        </div>
        <button onClick={submitLogout}>Logout</button>
      </section>

      <ChangePasswordForm />
    </main>
  );
}
