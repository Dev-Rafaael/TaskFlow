import jwt from "jsonwebtoken";
import * as bcrypt from "bcrypt";
import { LoginDTO, RegisterDTO } from "../schema/auth.schema";
import { PrismaAuthRepository } from "../repository/auth.repository";

  


export class AuthService {
  constructor(private repo: PrismaAuthRepository) {}

async register({ name, email, password,dataNascimento }: RegisterDTO) {
  const emailExist = await this.repo.findByEmail(email);
  if (emailExist) {
    throw new Error("Email já existe");
  }

  const hashedPassword = await bcrypt.hash(password, 10);

  return this.repo.create({
    name,
    email,
    password: hashedPassword,
    dataNascimento
  });
}

  async login({email,password}:LoginDTO) {
   const user = await this.repo.findByEmail(email)
   if(!user){
      throw new Error('Credenciais Inválidas')
   }

   const passwordMatch = await bcrypt.compare(password,user.password)

   if(!passwordMatch){
      throw new Error('Credenciais Inválidas')
   }

   const token = jwt.sign({sub:user.id},process.env.JWT_SECRET!,{expiresIn:'1d'})

   return {token,
    user:{
      id:user.id,
      name:user.name,
      dataNascimento:user.dataNascimento,
      email:user.email,
    }
   }
  }
}
