import type { KanbanColumnProps } from "../../../../../../types/types";
import styles from "./KanbanColumn.module.css";


export default function KanbanColumn({
  title,
  count,
}: KanbanColumnProps) {
  return (
    <div className={styles.column}>
      <header className={styles.header}>
        <h3>{title}</h3>
        <span className={styles.badge}>{count}</span>
      </header>

      <div className={styles.list}>
        {/* TaskCard entra aqui */}
        <div className={styles.empty}>
          Nenhuma tarefa
        </div>
      </div>
    </div>
  );
}
