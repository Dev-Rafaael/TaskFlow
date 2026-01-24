import type { ProjectHeaderProps } from "../../../../types/types";

import styles from "./ProjectHeader.module.css";


export default function ProjectHeader({
  title,
  description,
}: ProjectHeaderProps) {
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

        <button className={styles.primaryButton}>
          + Nova tarefa
        </button>
      </div>
    </header>
  );
}
