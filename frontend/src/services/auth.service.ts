import api from "../lib/api/api";
import { authSchema, registerSchema, type LoginDTO, type RegisterDTO } from "../schemas/auth.schema";




export const loginService= async(data:LoginDTO)=>{
    try {
        const dataSchema = authSchema.safeParse(data)
        if(dataSchema.error) throw new Error('Dados Incorretos')

        const response = await api.post('/auth/login/',data)
        return response.data
        
    } catch (error) {
        console.log(error);
        
    }
}
export const registerService= async(data:RegisterDTO)=>{
    try {
        const dataSchema = registerSchema.safeParse(data)
        if(dataSchema.error) throw new Error('Dados Incorretos')

        const response = await api.post('/auth/register/',data)
        return response.data
        
    } catch (error) {
        console.log(error);
        
    }
}
