import z from "zod";



export const projectSchema = z.object({
    id: z.string().min(6),
    name: z.string().min(6),
    description: z.string().min(6),
    color: z.string().min(6),
    isArchived: z.string().min(6),
    userId: z.string().min(6),
})
export const createProjectSchema = z.object({
    name: z.string().min(6),
    description: z.string().min(6).optional(),
    color: z.string().min(6).optional(),

})

export type ProjectDTO = z.infer<typeof projectSchema>
export type CreateProjectDTO = z.infer<typeof createProjectSchema>