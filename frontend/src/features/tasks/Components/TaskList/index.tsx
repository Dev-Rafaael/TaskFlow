import styles from "./TaskList.module.css";
import TaskCard from "../TaskCard/index";

export default function TaskList() {
  return (
    <div className={styles.list}>
      <TaskCard
        title="Criar tela de login"
        description="Implementar layout e validações"
        priority="high"
        dueDate="25 Jan"
      />

      <TaskCard
        title="Criar ProjectHeader"
        description="Componente visual do topo"
        priority="medium"
      />

      <TaskCard
        title="Ajustar responsividade"
        priority="low"
      />
    </div>
  );
}
