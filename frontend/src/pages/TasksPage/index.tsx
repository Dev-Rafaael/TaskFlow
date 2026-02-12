import ProjectHeader from "../../features/projects/Components/ProjectHeader";
import ProjectInfo from "../../features/projects/Components/ProjectInfo";
import KanbanBoard from "../../features/tasks/Board/KanbanBoard";
import CreateTaskModal from "../../features/tasks/Components/CreateTaskModal";
import ProjectLayout from "../ProjectPage/ProjectLayout";

;

export default function Task() {
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
 
       <CreateTaskModal/>
     </>
   );
 }
 