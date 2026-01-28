import api from "../lib/api/api";
import { authSchema, type LoginDTO } from "../schemas/auth.schema";




export const loginService= async(data:LoginDTO)=>{
    try {
        const dataSchema = authSchema.safeParse(data)
        if(dataSchema.error) throw new Error('Dados Incorretos')

        const response = await api.post('/auth/login',data)
        return response.data
        
    } catch (error) {
        console.log(error);
        
    }
}
