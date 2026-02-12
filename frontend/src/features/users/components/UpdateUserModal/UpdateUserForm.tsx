import { zodResolver } from "@hookform/resolvers/zod";
import { useModalStore } from "../../../../stores/ui/modal.store";
import styles from "./updateUserForm.module.css";
import { useForm } from "react-hook-form";
import api from "../../../../lib/api/api";
import { toast } from "react-toastify";
import { useEffect } from "react";
import { userUpdateSchema, type UserUpdateDTO } from "../../Types/user.schema";

type Props = {
  onSuccess: () => void;
};

export default function UpdateUserForm({ onSuccess }: Props) {
      const closeModal = useModalStore((state) => state.closeModal);
  const modalData = useModalStore((state) => state.modalData);

  const user = modalData;
  const {
    register,
    handleSubmit,
    formState: { isSubmitting, errors },
reset
  } = useForm<UserUpdateDTO>({
    resolver: zodResolver(userUpdateSchema),
  });
useEffect(()=>{
if(modalData){
    reset({
        name:modalData.name,
        email:modalData.email,
        dataNascimento:modalData.dataNascimento?.split("T")[0]
    })
}
},[reset,modalData])
  if (!modalData) return null;
 const onSubmit = async (data: Partial<UserUpdateDTO>) => {
  try {
    console.log(data);
    
    await api.patch(`/user/${String(user.id)}`, data);
    toast.success("Atualizado com sucesso");
    onSuccess();
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  } catch (error) {
    toast.error("Erro ao atualizar usuário");
  }
};
  return (
    <div>
      <form onSubmit={handleSubmit(onSubmit)}>
        <div className={styles.info}>
          <label>
            Nome
            <input type="text" {...register("name")} />
            {errors.name ? errors.name.message : ""}
          </label>

          <label>
            Email
            <input value={user.email} disabled />
          </label>

          <label>
            Data Nascimento
            <input type="date" {...register("dataNascimento")} />

            {errors.dataNascimento ? errors.dataNascimento.message : ""}
          </label>
        </div>
        <button type="submit" disabled={isSubmitting}>
          {isSubmitting ? "Salvando" : "Salvar"}
        </button>
      </form>

      <button onClick={closeModal}>Fechar</button>
    </div>
  );
}
