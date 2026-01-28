import api from "../lib/api/api";
import type { CreateProjectDTO, ProjectDTO } from "../schemas/project.schema";

export const getProjects = async () => {
  const { data } = (await api.get("/projects/")).data;
  return data;
};

export const getProject = async (id: string) => {
  const { data } = (await api.get(`/projects/${id}`)).data;
  return data;
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
