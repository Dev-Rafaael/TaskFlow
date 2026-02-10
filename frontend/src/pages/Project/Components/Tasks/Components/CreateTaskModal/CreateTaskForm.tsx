
import { useForm } from "react-hook-form";
import styles from "./CreateTaskModal.module.css";
import { zodResolver } from "@hookform/resolvers/zod";
import {  createTaskSchema, type CreateTaskDTO } from "../../../../../../schemas/tasks.schema";
import { createTask } from "../../../../../../services/task.service";
import { toast } from "react-toastify";
type Props = {
  onSuccess: () => void;
};

function CreateTaskForm({ onSuccess }: Props) {
      const {register,handleSubmit,formState:{errors,isSubmitting}}=useForm<CreateTaskDTO>({
    resolver: zodResolver(createTaskSchema)
  })
  
  const onSubmit = async (data:CreateTaskDTO)=>{
    
    await createTask(data)
    toast.success('Task Criada Com Sucesso!')
    onSuccess()
  }
  return (
    <div>
       <form className={styles.form} onSubmit={handleSubmit(onSubmit)}>
          <label className={styles.label}>
            Título
            <input
            {...register('title')}
              className={styles.input}
              placeholder="Ex: Criar tela de login"
            />
            {errors.title && <span>{errors.title?.message}</span>}
          </label>

          <label className={styles.label}>
            Descrição
            <textarea
            {...register("description")}
              className={styles.textarea}
              placeholder="Descreva a tarefa..."
            />
             {errors.description && <span>{errors.description?.message}</span>}
          </label>

          <div className={styles.row}>
            <label className={styles.label}>
              Status
              <select className={styles.select} {...register("status")}>
                
                <option>TODO</option>
                <option>DOING</option>
                <option>DONE</option>
              </select>
               {errors.status && <span>{errors.status?.message}</span>}
            </label>

            <label className={styles.label} >
              Prioridade
              <select className={styles.select} {...register("priority")}>
                <option>LOW</option>
                <option>MEDIUM</option>
                <option>HIGH</option>
              </select>
               {errors.priority && <span>{errors.priority?.message}</span>}
            </label>
          </div>

          <label className={styles.label}>
            Prazo
            <input type="date" className={styles.input} {...register("dueDate")}/>
            {errors.dueDate && <span>{errors.dueDate.message}</span>}
          </label>

          <footer className={styles.footer}>
            <button
              type="button"
              className={styles.cancel}
            >
              Cancelar
            </button>

            <button
              type="submit"
              className={styles.submit}
              disabled={isSubmitting}
            >
              Criar tarefa
            </button>
          </footer>
        </form>
    </div>
  )
}

export default CreateTaskForm
