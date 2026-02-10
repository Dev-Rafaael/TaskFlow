

import { useModalStore } from "../../../../stores/ui/modal.store";
import styles from "./ProjectHeader.module.css";

type Props = {
  title: string;
  description?: string;
};
export default function ProjectHeader({
title,
  description,
}: Props) {
    const openModal = useModalStore(state => state.openModal)
  return (
    <header className={styles.container}>
      <div className={styles.left}>
        <h1 className={styles.title}>{title}</h1>
        {description && (
          <p className={styles.description}>{description}</p>
        )}
      </div>

      <div className={styles.right}>
        <button className={styles.secondaryButton}>
           Configurações
        </button>

        <button className={styles.primaryButton } onClick={()=>openModal('createTask')}>
          + Nova tarefa
        </button>
      </div>
    </header>
  );
}
