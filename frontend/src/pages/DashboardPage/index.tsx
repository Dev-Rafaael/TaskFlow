import styles from "./Dashboard.module.css";
import { useNavigate } from "react-router-dom";
import { useModalStore } from "../../stores/ui/modal.store";
import StatsCard from "./components/StatsCard";
import ProjectCard from "../../features/projects/Components/ProjectCard";
import CreateProject from "../../features/projects/Components/CreateProject";
import { useProjectStore } from "../../stores/project.store";



export default function DashboardPage() {
  const { projects } = useProjectStore();
  const navigate = useNavigate();
  const openModal = useModalStore((state) => state.openModal);

  return (
    <main className={styles.page}>
      <header className={styles.header}>
        <div>
          <h1>Dashboard</h1>
          <p>Visão geral dos seus projetos e tarefas</p>
        </div>

        <button
          className={styles.primaryButton}
          onClick={() => openModal("createProject")}
        >
          + Novo Projeto
        </button>
      </header>

      <section className={styles.stats}>
        <StatsCard label="Projetos Ativos" value={projects.length} />
      </section>

      <section className={styles.projects}>
        <h2>Seus Projetos</h2>

        <div className={styles.grid}>
          {projects.slice(0, 3).map((project) => (
            <ProjectCard
              project={undefined} key={project.id}
              {...project}
              onClick={() => navigate(`/projetos/${project.id}`)}            />
          ))}
        </div>
      </section>

      <CreateProject />
    </main>
  );
}
