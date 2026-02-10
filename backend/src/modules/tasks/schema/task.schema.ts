import { TaskPriority, TaskStatus } from "@prisma/client";
import z from "zod";


export const taskSchema = z.object({
  title: z.string().min(6),
  status: z.nativeEnum(TaskStatus),
  description: z.string().min(6),
  priority: z.nativeEnum(TaskPriority).nullable(),
  dueDate: z.date().nullable(),
  completedAt: z.date().nullable().optional(),
  projectId: z.string(),
  userId: z.string(),
})


export const createTaskSchema = z.object({
  title: z.string().min(6),
  priority: z.nativeEnum(TaskPriority).optional(),
  description: z.string().min(6),
  dueDate: z.coerce.date().optional()
})



export type TaskDTO = z.infer<typeof taskSchema> 
export type CreateTaskDTO = z.infer<typeof createTaskSchema> 