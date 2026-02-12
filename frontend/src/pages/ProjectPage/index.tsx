/* eslint-disable @typescript-eslint/no-explicit-any */
import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";

import ProjectLayout from "./ProjectLayout";
import ProjectHeader from "../../features/projects/Components/ProjectHeader";
import ProjectInfo from "../../features/projects/Components/ProjectInfo";
import KanbanBoard from "../../features/tasks/Board/KanbanBoard";
import CreateTaskModal from "../../features/tasks/Components/CreateTaskModal";

export default function ProjectPage() {
  const { projectId } = useParams();

  const [project, setProject] = useState<any>(null);
  const [tasks, setTasks] = useState<any[]>([]);

  useEffect(() => {
    // aqui você buscaria usando projectId
    const fakeProject = {
      title: "TaskFlow",
      description: "Organize suas tarefas",
      status: "active",
      progress: 45,
      createdAt: "22 Jan 2026",
      owner: "Você",
    };

    const fakeTasks: any[] = [];

    // eslint-disable-next-line react-hooks/set-state-in-effect
    setProject(fakeProject);
    setTasks(fakeTasks);
  }, [projectId]);

  if (!project) return <p>Carregando...</p>;

  return (
    <>
      <ProjectLayout
        header={
          <ProjectHeader
            title={project.title}
            description={project.description}
          />
        }
        info={
          <ProjectInfo
            status={project.status}
            progress={project.progress}
            createdAt={project.createdAt}
            owner={project.owner}
            totalTasks={tasks.length}
          />
        }
        content={
          <KanbanBoard
            title="Board"
            tasks={tasks}
          />
        }
      />

      <CreateTaskModal />
    </>
  );
}
