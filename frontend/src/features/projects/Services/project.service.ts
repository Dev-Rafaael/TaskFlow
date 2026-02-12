import api from "../../../lib/api/api";
import type { CreateProjectDTO, ProjectDTO } from "../Types/project.schema";

export const getProjects = async () => {
  const response = await api.get("/projects/");
  return response.data;
};

export const getProject = async (id: string) => {
  const response = await api.get(`/projects/${id}`);
  return response.data;
};
export const createProjects = async (data: CreateProjectDTO) => {
  const response = await api.post("/projects/", data);
  return response.data;
};

export const updateProjectService = async (
  id: string,
  data: Partial<ProjectDTO>,
): Promise<ProjectDTO> => {
  const response = await api.patch(`/projects/${id}`, data);
  return response.data;
};
export const deleteProject = async (id: string) => {
  await api.delete(`/projects/${id}`);
};
