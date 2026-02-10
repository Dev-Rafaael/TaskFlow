import { Router } from "express";

import { authRoutes } from "./modules/auth/routes/auth.routes";

import { taskRoutes } from "./modules/tasks/routes/task.routes";
import { ProjectRoutes } from "./modules/projects/routes/project.routes";
import { userRoutes } from "./modules/User/routes/user.routes";
import { verifyToken } from "./middlewares/auth.middlewate";

const routes = Router()

routes.use('/auth',authRoutes)
routes.use('/projects',verifyToken,ProjectRoutes)
routes.use('/tasks',taskRoutes)
routes.use('/user',verifyToken,userRoutes)
export {routes}