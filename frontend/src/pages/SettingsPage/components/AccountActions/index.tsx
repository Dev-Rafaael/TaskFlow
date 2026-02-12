import styles from "./AccountActions.module.css";

export default function AccountActions() {
  return (
    <div className={styles.container}>
      <h4>Ações</h4>

      <div className={styles.actions}>
        <button className={styles.danger}>
          Arquivar Projeto
        </button>

        <button className={styles.dangerOutline}>
          Excluir Projeto
        </button>
      </div>
    </div>
  );
}
