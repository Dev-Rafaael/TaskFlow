import { Router } from "express";
import { makeAuthController } from "../factories/make-auth-controller";

const routes = Router();
const controller = makeAuthController();

routes.post("/register", (req, res) => controller.register(req, res));
routes.post("/login", (req, res) => controller.login(req, res));

export { routes as authRoutes };
