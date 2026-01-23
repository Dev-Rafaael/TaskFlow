import { Router } from "express";

import { authRoutes } from "./modules/auth/routes/auth.routes";
import { serviceRoutes } from "./modules/projects/routes/project.routes";
import { taskRoutes } from "./modules/tasks/routes/task.routes";

const routes = Router()

routes.use(authRoutes)
routes.use(serviceRoutes)
routes.use(taskRoutes)
export {routes}