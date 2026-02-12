export interface Project {
  id: string;
  title: string;
  description?: string;
  color?: string;
  progress: number;
  createdAt: string;
}
export interface ProjectCardProps {
  project: Project;
  onClick?: () => void;
}



export interface ProjectHeaderProps {
  title: string;
  description?: string;
}
export interface Task {
  id: string;
  title: string;
  description?: string;
  status: "backlog" | "in_progress" | "done";
  priority?: "low" | "medium" | "high";
  dueDate?: string;
}

export interface KanbanColumnProps {
  title: string;
  status: Task["status"];
  tasks: Task[];
}

export interface TaskCardProps {
  task: Task;
}
