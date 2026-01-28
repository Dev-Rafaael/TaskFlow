import styles from "./CreateProject.module.css";
import CreateProjectForm from "./CreateProjectForm";

type Props = {
  isOpen: boolean;
  onClose: () => void;
};

export default function CreateProject({ isOpen, onClose }: Props) {
  if (!isOpen) return null;

  return (
    <div className={styles.overlay}>
      <div className={styles.modal}>
        <header className={styles.header}>
          <h2>Novo Projeto</h2>
          <button onClick={onClose} className={styles.closeButton}>×</button>
        </header>

        <CreateProjectForm onSuccess={onClose} />
      </div>
    </div>
  );
}
