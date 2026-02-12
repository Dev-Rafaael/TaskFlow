import { useAuthStore } from "../../../../stores/auth.store";
import { useModalStore } from "../../../../stores/ui/modal.store";
import ChangePassword from "../ChangePasswordModal";
import UpdateUser from "../UpdateUserModal";
import styles from "./ProfileInfo.module.css";

export default function ProfileInfo() {
  const logout = useAuthStore((u) => u.logout);
  const user = useAuthStore((u) => u.user);
  const openModal = useModalStore((state) => state.openModal);

  const submitLogout = () => {
    const confirmation = window.confirm("Tem certeza?");
    if (confirmation) logout();
  };
  return (
    <main className={styles.page}>
      <header className={styles.header}>
        <h1>Perfil</h1>
        <p>Gerencie suas informações e segurança</p>
      </header>
      <button onClick={() => openModal("editUser", user)}>Editar</button>
      <button onClick={() => openModal("editPassword")}>Editar Password</button>
      <UpdateUser />
      <ChangePassword />
      <section className={styles.card}>
        <div className={styles.avatarSection}>
          <div className={styles.avatar}>{user?.name?.slice(0, 1) || "U"}</div>

          <div className={styles.info}>
            {user && (
              <>
                <h3>Nome: {user?.name || "Teste"}</h3>
                <span>E-Mail: {user?.email || "teste@gmail.com"}</span>
                <p>
                  Data de Nascimento:{" "}
                  {user?.dataNascimento
                    ? new Date(user.dataNascimento).toLocaleDateString("pt-BR")
                    : "00/00/0000"}
                </p>
              </>
            )}
          </div>
        </div>

        <button type="button" onClick={submitLogout}>
          Logout
        </button>
      </section>
    </main>
  );
}
