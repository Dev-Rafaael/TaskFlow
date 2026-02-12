import AccountActions from "./components/AccountActions";
import ThemeToggle from "./components/ThemeToggle";
import styles from "./SettingsModal.module.css";


interface Props {
  onClose: () => void;
}

export default function Settings({ onClose }: Props) {
  return (
    <div className={styles.overlay}>
      <div className={styles.modal}>
        <header className={styles.header}>
          <h2>Configurações do Projeto</h2>
          <button onClick={onClose}>✕</button>
        </header>

        <section className={styles.section}>
          <ThemeToggle />
        </section>

        <section className={styles.section}>
          <AccountActions />
        </section>
      </div>
    </div>
  );
}
