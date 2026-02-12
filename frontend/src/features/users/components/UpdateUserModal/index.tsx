
import { useModalStore } from '../../../../stores/ui/modal.store'
import UpdateUserForm from './UpdateUserForm'
import styles from "./UpdateUserForm.module.css";
function UpdateUser() {
    const {modal,closeModal}= useModalStore()
    if(modal !== 'editUser') return null
  return (
       <div className={styles.overlay}>
      <div className={styles.modal}>
        <h2>Atualizar Usuário</h2>
      <UpdateUserForm onSuccess={closeModal}/>
    </div>
    </div>
  )
}

export default UpdateUser
