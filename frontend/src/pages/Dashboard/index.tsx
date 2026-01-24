import ProjectCard from "./components/ProjectCard";
import StatsCard from "./components/StatsCard";
import styles from "./Dashboard.module.css";


export default function Dashboard() {
  return (
    <main className={styles.page}>
      {/* Header */}
      <header className={styles.header}>
        <div>
          <h1>Dashboard</h1>
          <p>Visão geral dos seus projetos e tarefas</p>
        </div>

        <button className={styles.primaryButton}>
          + Novo Projeto
        </button>
      </header>

      {/* Stats */}
      <section className={styles.stats}>
        <StatsCard
          label="Projetos Ativos"
          value={4}
          footer="2 finalizados este mês"
        />

        <StatsCard
          label="Tarefas Pendentes"
          value={18}
          trend="up"
          footer="+5 desde ontem"
        />

        <StatsCard
          label="Concluídas"
          value="76%"
          trend="neutral"
          footer="Últimos 7 dias"
        />
      </section>

      {/* Projects */}
      <section className={styles.projects}>
        <h2>Seus Projetos</h2>

        <div className={styles.grid}>
          <ProjectCard
            title="TaskFlow"
            description="Gerenciador de tarefas estilo Kanban"
            progress={65}
            color="#6366f1"
          />

          <ProjectCard
            title="Website pessoal"
            description="Portfólio e blog"
            progress={90}
            color="#22c55e"
          />

          <ProjectCard
            title="API Financeira"
            description="Controle de gastos"
            progress={35}
            color="#f97316"
          />
        </div>
      </section>
    </main>
  );
}
