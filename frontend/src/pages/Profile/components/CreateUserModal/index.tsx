import { useModalStore } from "../../../../stores/ui/modal.store";
import CreateUserForm from "./CreateUserForm"
import styles from "./CreateUserForm.module.css";
function CreateUser() {
    const {modal,closeModal} = useModalStore()
    if(modal !== 'editUser') return null
  return (
          <div className={styles.overlay}>
      <div className={styles.modal}>
        <h2>Detalhes do Usuário</h2>
      <CreateUserForm onSuccess={closeModal} />

    </div>
    </div>
  )
}

export default CreateUser
