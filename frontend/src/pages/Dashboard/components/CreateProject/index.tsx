import { useModalStore } from "../../../../stores/ui/modal.store";
import styles from "./CreateProject.module.css";
import CreateProjectForm from "./CreateProjectForm";



export default function CreateProject() {
const {modal,closeModal} = useModalStore()
if(modal !== "createProject") return null
  return (
    <div className={styles.overlay}>
      <div className={styles.modal}>
        <header className={styles.header}>
          <h2>Novo Projeto</h2>
          <button onClick={closeModal} className={styles.closeButton}>×</button>
        </header>

        <CreateProjectForm onSuccess={closeModal} />
      </div>
    </div>
  );
}
