import { useForm } from "react-hook-form";
import styles from "./LoginForm.module.css";
import { useAuthStore } from "../../../../stores/auth.store";
import { zodResolver } from "@hookform/resolvers/zod";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import axios from "axios";
import { authSchema, type LoginDTO } from "../../Types/auth.schema";
import { loginService } from "../../Services/auth.service";

export function LoginForm() {
const {
  register,
  handleSubmit,
  formState: { isSubmitting, errors },
} = useForm<LoginDTO>({
  resolver: zodResolver(authSchema),
});
  const auth = useAuthStore()
  const navigate = useNavigate()

const onSubmit = async (data: LoginDTO) => {
  try {
    const response = await loginService(data);

    auth.login(response.user, response.token);
    navigate("/DashBoard");
  } catch (error: unknown) {

    if (axios.isAxiosError(error)) {
      const message =
        error.response?.data?.msg || "Erro ao fazer login";
      toast.error(message);
    } else {
      toast.error("Erro inesperado");
    }
  }
};
  return (
    <div className={styles.card}>
      <h2>Entrar</h2>
      <p className={styles.subtitle}>Acesse sua conta para continuar</p>

      <form className={styles.form} onSubmit={handleSubmit(onSubmit)}>
        <label className={styles.label}>
          Email
          <input type="email" {...register("email")} className={styles.input} />
        </label>

        <label className={styles.label}>
          Senha
          <input type="password" {...register("password")}className={styles.input} />
        </label>

      <button
  className={styles.button}
  type="submit"
  disabled={isSubmitting}
>
  {isSubmitting? "Entrando..." : "Entrar"}
</button>

        {errors.email?.message}
      </form>
    </div>
  );
}


