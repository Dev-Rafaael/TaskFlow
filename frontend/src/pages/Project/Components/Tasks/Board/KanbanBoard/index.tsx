import KanbanColumn from "../KanbanColumn";
import styles from "./KanbanBoard.module.css";


export default function KanbanBoard() {
  return (
    <section className={styles.board}>
      <KanbanColumn
        title="Backlog"
        count={3}
        status="backlog"
      />

      <KanbanColumn
        title="Em Progresso"
        count={2}
        status="in_progress"
      />

      <KanbanColumn
        title="Concluído"
        count={5}
        status="done"
      />
    </section>
  );
}
