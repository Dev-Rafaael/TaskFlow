import { Router } from "express";

import { authRoutes } from "./modules/auth/routes/auth.routes";
import { serviceRoutes } from "./modules/projects/routes/project.routes";

const routes = Router()

routes.use(authRoutes)
routes.use(serviceRoutes)

export {routes}