import styles from "./Login.module.css";
import { LoginForm } from "./Components/LoginForm/index";

export default function LoginPage() {
  return (
    <div className={styles.container}>
      <div className={styles.left}>
        <div className={styles.brand}>
          <h1>TaskFlow</h1>
          <p>Organize tarefas. Ganhe foco. Entregue mais.</p>
        </div>
      </div>

      <div className={styles.right}>
        <LoginForm />
      </div>
    </div>
  );
}
