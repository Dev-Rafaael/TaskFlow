import api from "../../../lib/api/api";
import type { ChangePasswordDTO, UserDTO } from "../Types/user.schema";


export const getUser = async (id: string): Promise<UserDTO> => {
  if (!id) throw new Error("ID inválido");
  const { data } = await api.get(`/user/${id}`);
  return data;
};

export const updateUser = async (
  id: string,
  data: Partial<UserDTO>
): Promise<UserDTO> => {
  const { data: response } = await api.patch(`/user/${id}`, data);
  return response;
};

export const updatePassword = async (id:string,data: ChangePasswordDTO) => {
  const response = await api.patch(`/user/password/${id}`, data);
  return response.data;
};
