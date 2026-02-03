import { useForm } from "react-hook-form";
import {
  changePasswordSchema,
  type ChangePasswordDTO,
} from "../../../../schemas/user.schema";
import styles from "./ChangePasswordForm.module.css";
import { zodResolver } from "@hookform/resolvers/zod";
import { updatePassword } from "../../../../services/user.service";
import { useAuthStore } from "../../../../stores/auth.store";

export default function ChangePasswordForm() {
  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
  } = useForm<ChangePasswordDTO>({
    resolver: zodResolver(changePasswordSchema),
  });
const user = useAuthStore((state)=> state.user)
  const onSubmit = async (data: ChangePasswordDTO) => {
    if (user?.id) {
      await updatePassword(String(user.id), data);
    }
  };
  return (
    <section className={styles.card}>
      <header className={styles.header}>
        <h2>Alterar senha</h2>
        <p>Use uma senha forte para manter sua conta segura</p>
      </header>

      <form onSubmit={handleSubmit(onSubmit)}>
        <label htmlFor="currentPassword">
          <input
            type="password"
            placeholder="Senha atual"
            {...register("currentPassword")}
          />
          {errors.currentPassword && (
            <span>{errors.currentPassword.message}</span>
          )}
        </label>
        {/* {isSubmitting && ( */}
          <>
            <label htmlFor="newPassword">
              <input
                type="password"
                placeholder="Nova senha"
                {...register("newPassword")}
              />
              {errors.newPassword && <span>{errors.newPassword.message}</span>}
            </label>

            <label htmlFor="confirmPassword">
              <input
                type="password"
                placeholder="Confirmar nova senha"
                {...register("confirmPassword")}
              />{" "}
              {errors.confirmPassword && (
                <span>{errors.confirmPassword.message}</span>
              )}
            </label>
          </>
        {/* )} */}

        <button disabled={isSubmitting}>Atualizar senha</button>
      </form>
    </section>
  );
}
