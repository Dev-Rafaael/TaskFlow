import styles from "./ProjectInfo.module.css";

type Props = {
  status: "active" | "paused" | "done";
  progress: number;
  createdAt: string;
  owner: string;
  totalTasks: number;
};

export default function ProjectInfo({
  status,
  progress,
  createdAt,
  owner,
  totalTasks,
}: Props) {
  return (
    <section className={styles.container}>
      <div className={styles.item}>
        <span className={styles.label}>Status</span>
        <span
          className={`${styles.value} ${
            status === "active" ? styles.active : ""
          }`}
        >
          {status}
        </span>
      </div>

      <div className={styles.item}>
        <span className={styles.label}>Progresso</span>
        <div className={styles.progressWrapper}>
          <div className={styles.progressBar}>
            <div
              className={styles.progressFill}
              style={{ width: `${progress}%` }}
            />
          </div>
          <span className={styles.progressText}>{progress}%</span>
        </div>
      </div>

      <div className={styles.item}>
        <span className={styles.label}>Criado em</span>
        <span className={styles.value}>{createdAt}</span>
      </div>

      <div className={styles.item}>
        <span className={styles.label}>Responsável</span>
        <span className={styles.value}>{owner}</span>
      </div>

      <div className={styles.item}>
        <span className={styles.label}>Tarefas</span>
        <span className={styles.value}>{totalTasks}</span>
      </div>
    </section>
  );
}
