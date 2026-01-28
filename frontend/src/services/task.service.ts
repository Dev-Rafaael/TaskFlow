import api from "../lib/api/api";
import type { CreateTaskDTO, TaskDTO } from "../schemas/tasks.schema";

export const getTasks = async () => {
 const {data} = (await api.get("/tasks/")).data
 return data
};

export const getTask= async (id: string) => {
    const {data} = (await api.get(`/tasks/${id}`)).data
    return data
};
export const createTask = async (data: CreateTaskDTO) => {
    const response = await api.post("/tasks/",data)
    return response.data
};

export const updateTaskService = async (
  id: string,
  data: Partial<TaskDTO>,
): Promise<TaskDTO> => {
    const response = await api.patch(`/tasks/${id}`,data)
    return response.data
};
export const deleteTask = async (id: string) => {
  await api.delete(`/tasks/${id}`)
};