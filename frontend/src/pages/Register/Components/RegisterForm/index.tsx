import styles from "./RegisterForm.module.css";
import { useForm} from "react-hook-form";
import { createUserSchema, type createUserDTO } from "../../../../schemas/user.schema";
import { zodResolver } from "@hookform/resolvers/zod";
import { createUser } from "../../../../services/user.service";

export default function RegisterForm() {
  const {register,handleSubmit,formState: {errors,isSubmitting}}= useForm<createUserDTO>({
      resolver: zodResolver(createUserSchema)

  })

  const onSubmit = async(data:createUserDTO)=>{
    await createUser({
      name: data.name,
      email:data.email,
      password: data.password
    })
  }
  return (
    <div className={styles.card}>
      <h2>Criar conta</h2>
      <p className={styles.subtitle}>Preencha os dados para se cadastrar</p>

      <form className={styles.form} onSubmit={handleSubmit(onSubmit)}>
        <label className={styles.label}>
          Nome Completo
          <input
           {...register("name")}
            type="text"
            placeholder="Nome completo"
            className={styles.input}
           
          />
          {errors.name && <span>{errors.name.message}</span>}
        </label>
    
        <label className={styles.label}>
          Email
          <input {...register("email")} type="email" placeholder="E-mail"  className={styles.input} />
          {errors.email && <span>{errors.email.message}</span>}
        </label>
        <label className={styles.label}>
          Senha
          <input {...register("password")} type="password" placeholder="Senha"  className={styles.input} />
          {errors.password && <span>{errors.password.message}</span>}
        </label>
        <label className={styles.label}>
          Confirme sua Senha
          <input
           {...register("confirmPassword")}
            type="password"
            placeholder="Confirmar senha"
            className={styles.input}
          />
           {errors.confirmPassword && <span>{errors.confirmPassword.message}</span>}
        </label>
        <button className={styles.button} type="submit" disabled={isSubmitting}>Criar conta</button>
      </form>
    </div>
  );
}
