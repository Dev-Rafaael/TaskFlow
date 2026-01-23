import styles from "./CreateTaskModal.module.css";

export default function CreateTaskModal() {
  return (
    <div className={styles.overlay}>
      <div className={styles.modal}>
        <header className={styles.header}>
          <h2>Criar nova tarefa</h2>
          <button className={styles.close}>×</button>
        </header>

        <form className={styles.form}>
          <label className={styles.label}>
            Título
            <input
              className={styles.input}
              placeholder="Ex: Criar tela de login"
            />
          </label>

          <label className={styles.label}>
            Descrição
            <textarea
              className={styles.textarea}
              placeholder="Descreva a tarefa..."
            />
          </label>

          <div className={styles.row}>
            <label className={styles.label}>
              Status
              <select className={styles.select}>
                <option>A fazer</option>
                <option>Em progresso</option>
                <option>Concluído</option>
              </select>
            </label>

            <label className={styles.label}>
              Prioridade
              <select className={styles.select}>
                <option>Baixa</option>
                <option>Média</option>
                <option>Alta</option>
              </select>
            </label>
          </div>

          <label className={styles.label}>
            Prazo
            <input type="date" className={styles.input} />
          </label>

          <footer className={styles.footer}>
            <button
              type="button"
              className={styles.cancel}
            >
              Cancelar
            </button>

            <button
              type="submit"
              className={styles.submit}
            >
              Criar tarefa
            </button>
          </footer>
        </form>
      </div>
    </div>
  );
}
