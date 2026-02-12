import { create } from "zustand";
import type { TaskDTO } from "../features/tasks/Types/tasks.schema";
import { createTask, getTask, updateTaskService } from "../features/tasks/Service/task.service";





interface TaskStore{
    tasks: TaskDTO[];
    isLoading: boolean;
    error: string | null;
    fetchTasks: (projectId:string)=> Promise<void>
    addTask:(data:TaskDTO)=>Promise<void>
    updateTask:(id:string,data:TaskDTO)=> Promise<void>
    moveTask:(id:string,status: TaskDTO['status'])=> Promise<void>
}

export const useTaskStore = create<TaskStore>((set)=>({
    tasks:[],
    isLoading:false,
    error:null,

    fetchTasks:async(projectId)=> {
        set({isLoading:true,error:null})
        try {
         const tasks = await getTask(projectId)
         set({tasks,isLoading:false})
        } catch {
            set({error:'Tasks Não encontradas', isLoading:false})
        }
    },

    addTask:async(data) => {
        set({isLoading:true,error:null})
        try {
        const newTask = await createTask(data)
        set((state)=>({
            tasks:{...state.tasks,newTask}
        }))         
        } catch {
            set({error: "Erro ao criar task"})
        }
    },

    updateTask: async(id, data)=>{
        set({isLoading:true,error:null})
        try {
            const updatedTask = await updateTaskService(id,data)
            set((state)=>({
                tasks: state.tasks.map((u)=> u.id === id ? updatedTask : u)
            }))
        } catch  {
            set({error: "Erro ao atualizar task"})
        }
    },
    moveTask:async(id, status) => {
        set({isLoading:true,error:null})
        try {
          const updated = await updateTaskService(id,{status})
          set((state)=>({
            tasks: state.tasks.map((task)=> task.id === id ? updated : task)
          }))
        } catch {
            set({error: "Erro ao atualizar task"})
        }
    },
}))