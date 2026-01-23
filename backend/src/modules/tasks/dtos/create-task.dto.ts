export interface CreateTaskDTO {
  title: string;
  description?: string;
  priority?: "LOW" | "MEDIUM" | "HIGH";
  dueDate?: Date;

  projectId: string;
  userId: string;
}