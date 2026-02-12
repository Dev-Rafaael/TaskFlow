
import { UpdateUserDTO } from "../dtos/update-user.dto";
import * as bcrypt from "bcrypt";

export class UserService {
  constructor(private repo: any) {}

async getMe(userId: string) {
  if (!userId) throw new Error("Não autenticado");

  return this.repo.findById(userId);
}


  async update(userId: string, data: UpdateUserDTO) {
    if (!userId) throw new Error("Não autenticado");
    return await this.repo.update(userId, data);
  }

  async changePassword(
    userId: string,
    oldPassword: string,
    newPassword: string,
  ) {
    if (!userId) throw new Error("Não autenticado");
    const user = await this.repo.findById(userId);
    if (!user) throw new Error("Usuário não encontrado");
    const passwordMatch = await bcrypt.compare(oldPassword, newPassword);
    if (!passwordMatch) throw new Error("Senha atual incorreta");
    const passwordHashed = await bcrypt.hash(newPassword, 10);

    await this.repo.updatePassword(userId, passwordHashed);
  }
}
