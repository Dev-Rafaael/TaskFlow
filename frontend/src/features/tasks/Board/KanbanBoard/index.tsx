
import type { Task } from "../../../../types/types";
import TaskCard from "../../Components/TaskCard";
import styles from "./KanbanBoard.module.css";


type Props = {
  title: string;
  tasks: Task[];
};

export default function KanbanColumn({
  title,
  tasks,
}: Props) {
  return (
    <div className={styles.column}>
      <header className={styles.header}>
        <h3>{title}</h3>
        <span className={styles.badge}>
          {tasks.length}
        </span>
      </header>

      <div className={styles.list}>
        {tasks.length === 0 ? (
          <div className={styles.empty}>
            Nenhuma tarefa
          </div>
        ) : (
          tasks.map(task => (
            <TaskCard
              key={task.id}
              task={task}
            />
          ))
        )}
      </div>
    </div>
  );
}
