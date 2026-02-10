
import ProjectLayout from "./ProjectLayout";
import ProjectHeader from "./Components/ProjectHeader";
import ProjectInfo from "./Components/ProjectInfo";
import KanbanBoard from "./Components/Tasks/Board/KanbanBoard";
import CreateTaskModal from "./Components/Tasks/Components/CreateTaskModal";


export default function Project() {

  return (
    <>
      <ProjectLayout
        header={
          <ProjectHeader
            title="TaskFlow"
            description="Organize suas tarefas"
          />
        }
        info={<ProjectInfo />}
        content={<KanbanBoard />}
      />

      <CreateTaskModal
      />
    </>
  );
}
