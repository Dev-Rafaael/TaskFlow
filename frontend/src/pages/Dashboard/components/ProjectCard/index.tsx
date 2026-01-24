import type { ProjectCardProps } from "../../../../types/types";
import styles from "./ProjectCard.module.css";


export default function ProjectCard({
  title,
  description,
  color = "#6366f1",
  progress = 0,
  onClick,
}: ProjectCardProps) {
  return (
    <article className={styles.card} onClick={onClick}>
      <div
        className={styles.color}
        style={{ background: color }}
      />

      <div className={styles.content}>
        <h3>{title}</h3>

        {description && (
          <p className={styles.description}>
            {description}
          </p>
        )}

        <div className={styles.footer}>
          <span className={styles.progressLabel}>
            Progresso
          </span>

          <div className={styles.progressBar}>
            <div
              className={styles.progress}
              style={{ width: `${progress}%` }}
            />
          </div>
        </div>
      </div>
    </article>
  );
}
