/* eslint-disable @typescript-eslint/no-explicit-any */
import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";


import KanbanBoard from "../../features/tasks/Board/KanbanBoard";
import ProjectLayout from "../ProjectPage/ProjectLayout";
import ProjectHeader from "../../features/projects/Components/ProjectHeader";
import ProjectInfo from "../../features/projects/Components/ProjectInfo";
import CreateTaskModal from "../../features/tasks/Components/CreateTaskModal";


export default function ProjectDetailsPage() {
  const { projectId } = useParams();

  const [project, setProject] = useState<any>(null);
  const [tasks, setTasks] = useState<any[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function fetchData() {
      try {
        // 🔥 depois você troca por API real
        const fakeProject = {
          id: projectId,
          name: "TaskFlow",
          description: "Organize suas tarefas",
          createdAt: "2026-01-22",
          progress: 45,
        };

        const fakeTasks: any[] = [];

        setProject(fakeProject);
        setTasks(fakeTasks);
      } finally {
        setLoading(false);
      }
    }

    fetchData();
  }, [projectId]);

  if (loading) return <p>Carregando projeto...</p>;
  if (!project) return <p>Projeto não encontrado</p>;

  return (
    <>
      <ProjectLayout
        header={
          <ProjectHeader
            title={project.name}
            description={project.description}
          />
        }
        info={
          <ProjectInfo
            status="active"
            progress={project.progress}
            createdAt={project.createdAt}
            owner="Você"
            totalTasks={tasks.length}
          />
        }
        content={<KanbanBoard title="top" tasks={tasks} />}
      />

      <CreateTaskModal />
    </>
  );
}
