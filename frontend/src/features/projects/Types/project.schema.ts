import z from "zod";



export const projectSchema = z.object({
  id: z.string(),
  name: z.string(),
 description: z.string().max(255).optional(),
color: z.string().regex(/^#([0-9a-fA-F]{6})$/).optional(),

  isArchived: z.boolean(),
  userId: z.string(),
})

export const createProjectSchema = z.object({
    name: z.string().min(6),
    description: z.string().max(255).optional(),
color: z.string().regex(/^#([0-9a-fA-F]{6})$/).optional(),


})


export type ProjectDTO = z.infer<typeof projectSchema>
export type CreateProjectDTO = z.infer<typeof createProjectSchema>