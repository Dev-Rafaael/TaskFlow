import ProjectHeader from "./Components/ProjectHeader";
import ProjectInfo from "./Components/ProjectInfo";
import TaskList from "./Components/Tasks/Components/TaskList";
import styles from "./Project.module.css";



export default function Project() {
  return (
    <main className={styles.page}>
      <ProjectHeader
        title="TaskFlow"
        description="Organize suas tarefas e acompanhe o progresso do projeto"
      />

      <ProjectInfo />

      <TaskList />
    </main>
  );
}
