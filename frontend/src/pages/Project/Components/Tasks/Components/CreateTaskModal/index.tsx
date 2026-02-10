
import { useModalStore } from "../../../../../../stores/ui/modal.store";
import CreateTaskForm from "./CreateTaskForm";
import styles from "./CreateTaskModal.module.css";


export default function CreateTaskModal() {
  const { modal, closeModal } = useModalStore()

  if (modal !== "createTask") return null
  return (
    <div className={styles.overlay}>
      <div className={styles.modal}>
        <header className={styles.header}>
          <h2>Criar nova tarefa</h2>
          <button className={styles.close} onClick={closeModal}>×</button>
        </header>

        <CreateTaskForm onSuccess={closeModal}/>
      </div>
    </div>
  );
}
