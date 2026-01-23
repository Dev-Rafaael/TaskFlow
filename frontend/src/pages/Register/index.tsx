

import RegisterForm from "./Components/RegisterForm/index";

import styles from "./Register.module.css";
import { Link } from "react-router-dom";

export default function Register() {
  return (
    <div className={styles.container}>
      <div className={styles.brand}>
        <h1>TaskFlow</h1>
        <p>Organize suas tarefas de forma simples e eficiente</p>
      </div>

      <div className={styles.card}>
        <RegisterForm/>

        <span className={styles.link}>
          Já tem conta? <Link to="/Login">Entrar</Link>
        </span>
      </div>
    </div>
  );
}
