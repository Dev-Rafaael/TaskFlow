import { authSchema, registerSchema } from "../schema/auth.schema";
import { AuthService } from "../service/auth.service";

export class AuthController {
    constructor(private authService:AuthService){}


    async register(req:any,res:any){
        try {

            const data = registerSchema.parse(req.body)
          const result =  await this.authService.register(data)
            return res.status(201).json(result)
        } catch (error:any) {
            return res.status(400).json({msg:error.message})
        }
    }

    async login(req:any,res:any){
        try {
            const data = authSchema.parse(req.body)
            const result = await this.authService.login(data)
        return res.status(200).json(result) 
        } catch (error:any) {
            return res.status(400).json({msg:error.message})
        }
      
    }
}
