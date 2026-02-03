
import z from "zod";


export const authSchema = z.object({
    email: z.string().email('Email Invalido'),
    password: z.string().min(6,'Mínimo 6 caracteres'),
})

export const registerSchema = z.object({
   name: z.string().min(2, "Nome muito curto"),
    email: z.string().email("Email inválido"),
    dataNascimento: z.coerce.date(),
    password: z.string().min(6, "Mínimo 6 caracteres"),
    confirmPassword: z.string()
}).refine((data)=> data.password === data.confirmPassword,{
    message: "As senhas não conferem",
    path: ["confirmPassword"],
})
export type LoginDTO = z.infer<typeof authSchema>
export type RegisterDTO = z.infer<typeof registerSchema>