import styles from "./ProjectInfo.module.css";

export default function ProjectInfo() {
  return (
    <section className={styles.container}>
      <div className={styles.item}>
        <span className={styles.label}>Status</span>
        <span className={`${styles.value} ${styles.active}`}>
          Ativo
        </span>
      </div>

      <div className={styles.item}>
        <span className={styles.label}>Progresso</span>
        <div className={styles.progressWrapper}>
          <div className={styles.progressBar}>
            <div className={styles.progressFill} />
          </div>
          <span className={styles.progressText}>45%</span>
        </div>
      </div>

      <div className={styles.item}>
        <span className={styles.label}>Criado em</span>
        <span className={styles.value}>22 Jan 2026</span>
      </div>

      <div className={styles.item}>
        <span className={styles.label}>Responsável</span>
        <span className={styles.value}>Você</span>
      </div>

      <div className={styles.item}>
        <span className={styles.label}>Tarefas</span>
        <span className={styles.value}>12</span>
      </div>
    </section>
  );
}
