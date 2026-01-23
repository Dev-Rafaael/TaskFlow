import styles from "./TaskCard.module.css";

interface TaskCardProps {
  title: string;
  description?: string;
  priority?: "low" | "medium" | "high";
  dueDate?: string;
}

export default function TaskCard({
  title,
  description,
  priority = "medium",
  dueDate,
}: TaskCardProps) {
  return (
    <div className={styles.card}>
      <header className={styles.header}>
        <h3 className={styles.title}>{title}</h3>

        <span
          className={`${styles.priority} ${styles[priority]}`}
        />
      </header>

      {description && (
        <p className={styles.description}>
          {description}
        </p>
      )}

      <footer className={styles.footer}>
        {dueDate && (
          <span className={styles.date}>
            📅 {dueDate}
          </span>
        )}
      </footer>
    </div>
  );
}
