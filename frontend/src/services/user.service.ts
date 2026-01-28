import api from "../lib/api/api"
import type { ChangePasswordDTO, UserDTO } from "../schemas/user.schema";




export const getUsers = async(): Promise<UserDTO[]> => {
        const {data} = await api.get('/users/')
        return data    
    
}

export const getUser = async (id:string): Promise<UserDTO> =>{
        if(!id) throw new Error('Credenciais Invalidas')
        const {data} = await api.get(`/users/${id}`)
        return data;
 
}
export const createUser = async(data:{name:string,email:string,password:string}):Promise<UserDTO> =>{   
        const response = await api.post('/users/',data)
        return response.data
}

export const updateUser = async(id:string,data:Partial<UserDTO>):Promise<UserDTO>=>{
        const response = await api.patch(`/users/${id}`,data)
        return response.data
  
}
export const updatePassword = async(data: ChangePasswordDTO)=>{
       const response = await api.patch("/users/password", data);
  return response.data;
  
}