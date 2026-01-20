import jwt from "jsonwebtoken";
import * as bcrypt from "bcrypt";


interface RegisterDTO {
  email: string;
  password: string;
}

interface LoginDTO {
  email: string;
  password: string;
}
export class AuthService {
  constructor(private repo: any) {}

  async register({ email, password }: RegisterDTO) {
    if (!email) {
      throw Error("Email é Obrigatorio");
    }
    const emailExist = await this.repo.findByEmail(email);
    if (emailExist) {
      throw new Error("Email ja Existe");
    }
    if (!password || password.length < 6) {
      throw Error("Senha Muito Fraca");
    }

    const hashedPassword = await bcrypt.hash(password, 10);

    const user = await  this.repo.create({
      email,
      password: hashedPassword,
    });
    return user;
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

   const token = jwt.sign({sub:user.id},'fake-jwt-token',{expiresIn:'1d'})

   return {token}
  }
}
