export interface ProjectCardProps {
  title: string;
  description?: string;
  color?: string;
  progress?: number; // 0 a 100
  onClick?: () => void;
}
export interface ProjectHeaderProps {
  title: string;
  description?: string;
}
export interface KanbanColumnProps {
  title: string;
  count: number;
  status: "backlog" | "in_progress" | "done";
}

export interface TaskCardProps {
  title: string;
  description?: string;
  priority?: "low" | "medium" | "high";
  dueDate?: string;
}