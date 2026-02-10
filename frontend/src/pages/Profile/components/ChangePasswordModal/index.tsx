
import { useModalStore } from "../../../../stores/ui/modal.store";
import ChangePasswordForm from "./ChangePasswordForm";
import styles from "./ChangePasswordForm.module.css";
export default function ChangePassword() {
  const {modal,closeModal} = useModalStore()
  if(modal !== 'editPassword') return null
  return (
    <section className={styles.card}>
      <header className={styles.header}>
        <h2>Alterar senha</h2>
        <p>Use uma senha forte para manter sua conta segura</p>
      </header>
     <ChangePasswordForm onSuccess={closeModal}/>
     
    </section>
  );
}
