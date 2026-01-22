import { Router } from "express";
import { makeProjectController } from "../factories/make-project-controller";


const controller = makeProjectController()
const routes = Router()

routes.use('/create',(req,res)=> controller.create(req,res))
routes.use('/list',(req,res)=> controller.list(req,res))
routes.use('/update/:id',(req,res)=> controller.update(req,res))
routes.use('/delete/:id',(req,res)=> controller.delete(req,res))

export {routes as serviceRoutes}