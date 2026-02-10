
import ProjectHeader from "../ProjectHeader";
import ProjectInfo from "../ProjectInfo";
import KanbanBoard from "./Board/KanbanBoard";
import CreateTaskModal from "./Components/CreateTaskModal";
import ProjectLayout from "../../ProjectLayout";
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
 