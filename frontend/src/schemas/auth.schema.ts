
import z from "zod";


export const authSchema = z.object({
    email: z.string().email('Email Invalido'),
    senha: z.string().min(6,'Mínimo 6 caracteres'),
})
export type LoginDTO = z.infer<typeof authSchema>