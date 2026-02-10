import { useForm } from "react-hook-form";
import styles from "./CreateProject.module.css";
import {
  createProjectSchema,
  type CreateProjectDTO,
} from "../../../../schemas/project.schema";
import { zodResolver } from "@hookform/resolvers/zod";
import { createProjects } from "../../../../services/project.service";
import { toast } from "react-toastify";

type Props = {
  onSuccess: () => void;
};

export default function CreateProjectForm({ onSuccess }: Props) {
  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
  } = useForm<CreateProjectDTO>({
    resolver: zodResolver(createProjectSchema),
  });

  const onSubmit = async (data: CreateProjectDTO) => {
    await createProjects(data);
    
    toast.success('Criado com Sucesso!!')
    onSuccess();
  };
  return (
    <form className={styles.form} onSubmit={handleSubmit(onSubmit)}>
      <label>
        Nome do projeto
        <input
          type="text"
          placeholder="Ex: TaskFlow"
          {...register("name", { required: true })}
        />
        {errors.name && <span>{errors.name.message}</span>}
      </label>

      <label>
        Descrição
        <textarea placeholder="Opcional" {...register("description")} />
        {errors.description && <span>{errors.description.message}</span>}
      </label>

      <label>
        Cor
        <input type="color" {...register("color")} />
        {errors.color && <span>{errors.color.message}</span>}
      </label>
      <button
        type="submit"
        disabled={isSubmitting}
        className={styles.submitButton}
      >
        Criar Projeto
      </button>
    </form>
  );
}
