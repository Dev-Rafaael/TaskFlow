import z from "zod";


export const taskSchema = z.object({
    id: z.string().uuid(),
    title: z.string().min(6),
     status: z.string().min(4),
     description:z.string().min(6),
    priority: z.string().min(6),
     dueDate: z.string().date(),
    completedAt: z.string().date(),
    projectId: z.string().uuid(),
    userId: z.string().uuid(),
})

export const createTaskSchema = z.object({
  title: z.string().min(6),
     status: z.string().min(4),
    priority: z.string().min(6),
     description:z.string().min(6),
     dueDate: z.string().date(),
})


export type TaskDTO = z.infer<typeof taskSchema> 
export type CreateTaskDTO = z.infer<typeof createTaskSchema> 