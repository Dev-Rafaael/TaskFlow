import styles from "./Task.module.css";

import ProjectHeader from "../ProjectHeader";
import ProjectInfo from "../ProjectInfo";
import KanbanBoard from "./Board/KanbanBoard";
;

export default function Task() {
  return (
    <main className={styles.page}>
      <ProjectHeader
        title="TaskFlow"
        description="Organize suas tarefas e acompanhe o progresso do projeto"
      />

      <ProjectInfo />

      <section className={styles.boardWrapper}>
        <KanbanBoard />
      </section>
    </main>
  );
}
