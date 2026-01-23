import styles from "./EditTaskModal.module.css";

export default function EditTaskModal() {
  return (
    <div className={styles.overlay}>
      <div className={styles.modal}>
        <header className={styles.header}>
          <h2>Editar tarefa</h2>
          <button className={styles.close}>×</button>
        </header>

        <form className={styles.form}>
          <label className={styles.label}>
            Título
            <input
              className={styles.input}
              defaultValue="Criar tela de login"
            />
          </label>

          <label className={styles.label}>
            Descrição
            <textarea
              className={styles.textarea}
              defaultValue="Criar layout e validações do formulário"
            />
          </label>

          <div className={styles.row}>
            <label className={styles.label}>
              Status
              <select className={styles.select}>
                <option>A fazer</option>
                <option selected>Em progresso</option>
                <option>Concluído</option>
              </select>
            </label>

            <label className={styles.label}>
              Prioridade
              <select className={styles.select}>
                <option>Baixa</option>
                <option selected>Média</option>
                <option>Alta</option>
              </select>
            </label>
          </div>

          <label className={styles.label}>
            Prazo
            <input
              type="date"
              className={styles.input}
            />
          </label>

          <footer className={styles.footer}>
            <button
              type="button"
              className={styles.delete}
            >
              Excluir tarefa
            </button>

            <div className={styles.actions}>
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
                Salvar alterações
              </button>
            </div>
          </footer>
        </form>
      </div>
    </div>
  );
}
