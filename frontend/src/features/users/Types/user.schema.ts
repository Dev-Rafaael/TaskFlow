import z from "zod";



export const userSchema = z.object({
    id: z.string().uuid(),
     name: z.string(),
    email: z.string().email(),
    dataNascimento: z.string(),
   createdAt: z.string(),
    
})
export const userUpdateSchema = z.object({
    name: z.string(),
    email: z.string().email(),
    dataNascimento: z.string(),
    
})
export const  changePasswordSchema  = z.object({
    currentPassword: z.string().min(6, "Mínimo 6 caracteres"),
    newPassword: z.string().min(6, "Mínimo 6 caracteres"),
    confirmPassword: z.string()
    
}).refine((data)=> data.newPassword === data.confirmPassword,
{
    message:"As senhas não conferem",
    path: ["confirmPassword"]
})


export type UserDTO = z.infer<typeof userSchema>
export type UserUpdateDTO = z.infer<typeof userUpdateSchema>
export type ChangePasswordDTO  = z.infer<typeof  changePasswordSchema >