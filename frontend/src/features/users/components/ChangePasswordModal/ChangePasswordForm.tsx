import { useForm } from "react-hook-form";

import { zodResolver } from "@hookform/resolvers/zod";

import { useModalStore } from "../../../../stores/ui/modal.store";
import { changePasswordSchema, type ChangePasswordDTO } from "../../Types/user.schema";
import { updatePassword } from "../../Service/user.service";

type Props = {
  onSuccess: () => void;
};
function ChangePasswordForm({onSuccess}:Props) {
  const closeModal = useModalStore(state=>state.closeModal)
      const {
        register,
        handleSubmit,
        formState: { errors, isSubmitting },
      } = useForm<ChangePasswordDTO>({
        resolver: zodResolver(changePasswordSchema),
      });
      const modalData = useModalStore(state=> state.modalData)
    const user = modalData
      const onSubmit = async (data: ChangePasswordDTO) => {
        if (user?.id) {
          await updatePassword(`/password/${user.id}`, data);
        }
        onSuccess()
      };
  return (
    <div>
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
         <button onClick={closeModal}>Fechar</button>
      </form>
    </div>
  )
}

export default ChangePasswordForm
