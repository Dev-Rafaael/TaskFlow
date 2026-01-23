export interface UpdateTaskDTO {
  taskId: string;
  userId: string;

  title?: string;
  description?: string;
  priority?: "LOW" | "MEDIUM" | "HIGH";
  dueDate?: Date;
  status?: "TODO" | "DOING" | "DONE";
  completedAt?: Date | null;
}