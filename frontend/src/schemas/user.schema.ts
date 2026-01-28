import z from "zod";



export const userSchema = z.object({
    id: z.string().uuid(),
     name: z.string(),
    email: z.string().email(),
   createdAt: z.string(),
    
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

export const createUserSchema = z.object({
   name: z.string().min(2, "Nome muito curto"),
    email: z.string().email("Email inválido"),
    password: z.string().min(6, "Mínimo 6 caracteres"),
    confirmPassword: z.string()
}).refine((data)=> data.password === data.confirmPassword,{
    message: "As senhas não conferem",
    path: ["confirmPassword"],
})
export type UserDTO = z.infer<typeof userSchema>
export type createUserDTO = z.infer<typeof createUserSchema>
export type ChangePasswordDTO  = z.infer<typeof  changePasswordSchema >