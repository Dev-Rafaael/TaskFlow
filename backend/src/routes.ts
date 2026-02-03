import { Router } from "express";

import { authRoutes } from "./modules/auth/routes/auth.routes";

import { taskRoutes } from "./modules/tasks/routes/task.routes";
import { ProjectRoutes } from "./modules/projects/routes/project.routes";
import { userRoutes } from "./modules/User/routes/user.routes";

const routes = Router()

routes.use('/auth/',authRoutes)
routes.use('/projects/',ProjectRoutes)
routes.use('/tasks/',taskRoutes)
routes.use('/user/',userRoutes)
export {routes}