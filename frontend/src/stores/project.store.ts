import { create } from "zustand";
import {
  createProjects,
  getProjects,
  updateProjectService,
} from "../services/project.service";
import type { CreateProjectDTO, ProjectDTO } from "../schemas/project.schema";

interface ProjectStore {
  projects: ProjectDTO[];
  isLoading: boolean;
  error: string | null;

  fetchProjects: () => Promise<void>;
  addProject: (data: CreateProjectDTO) => Promise<void>;
  updateProject: (
    id: string,
    data: Partial<CreateProjectDTO>
  ) => Promise<void>;
}

export const useProjectStore = create<ProjectStore>((set) => ({
  projects: [],
  isLoading: false,
  error: null,

  fetchProjects: async () => {
    set({ isLoading: true, error: null });
    try {
      const projects = await getProjects();
      set({ projects, isLoading: false });
    } catch {
      set({
        error: "Erro ao carregar projetos",
        isLoading: false,
      });
    }
  },

  addProject: async (data) => {
    try {
      const newProject = await createProjects(data);
      set((state) => ({
        projects: [...state.projects, newProject],
      }));
    } catch {
      set({ error: "Erro ao criar projeto" });
    }
  },

  updateProject: async (id, data) => {
    try {
      const updatedProject = await updateProjectService(id, data);

      set((state) => ({
        projects: state.projects.map((project) =>
          project.id === id ? updatedProject : project
        ),
      }));
    } catch {
      set({ error: "Erro ao atualizar projeto" });
    }
  },
}));
