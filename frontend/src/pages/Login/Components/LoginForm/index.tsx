import { useFormState } from "react-hook-form";
import { authSchema, type LoginDTO } from "../../../../schemas/auth.schema";
import styles from "./LoginForm.module.css";
import { useAuthStore } from "../../../../stores/auth.store";
import { loginService } from "../../../../services/auth.service";

export function LoginForm() {
  const {register,handleSubmit,formState}= useFormState<LoginDTO>({
      resolver: zodResolver(authSchema)

  })

  const auth = useAuthStore()
  const onSubmit = async(data:LoginDTO)=>{
    const response = await loginService(data)
    auth.login(response.user,response.token)
  }
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

        <button className={styles.button} type="submit">Entrar</button>

        {formState.errors.email?.message}
      </form>
    </div>
  );
}


