import { AuthService } from "../service/auth.service";

export class AuthController {
    constructor(private authService:AuthService){}


    async register(req:any,res:any){
        try {
          const result =  await this.authService.register(req.body)
            return res.status(201).json(result)
        } catch (error:any) {
            return res.status(400).json({msg:error.message})
        }
    }

    async login(req:any,res:any){
        try {
            const result = await this.authService.login(req.body)
        return res.status(200).json(result) 
        } catch (error:any) {
            return res.status(400).json({msg:error.message})
        }
      
    }
}
