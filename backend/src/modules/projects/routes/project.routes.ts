import { Router } from "express";
import { makeProjectController } from "../factories/make-project-controller";


const controller = makeProjectController()
const routes = Router()

routes.post("/", (req, res) => controller.create(req, res))
routes.get("/", (req, res) => controller.list(req, res))
routes.patch("/:id", (req, res) => controller.update(req, res))
routes.delete("/:id", (req, res) => controller.delete(req, res))

export {routes as ProjectRoutes}