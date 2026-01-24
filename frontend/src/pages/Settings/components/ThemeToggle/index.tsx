import styles from "./ThemeToggle.module.css";

export default function ThemeToggle() {
  return (
    <div className={styles.container}>
      <div>
        <h4>Tema</h4>
        <p>Alternar entre claro e escuro</p>
      </div>

      <button className={styles.toggle}>
        🌙
      </button>
    </div>
  );
}
