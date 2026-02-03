import { UserService } from "../service/user.service";

export class UserController {
  constructor(private userService: UserService) {}

  async list(req: any, res: any) {
    const { userId } = req.body;
    try {
      const user = await this.userService.getMe(userId);
      return res.status(200).json(user);
    } catch (error: any) {
      return res.status(400).json({ msg: error.message });
    }
  }

  async update(req: any, res: any) {
    try {
      const { userId, ...data } = req.body;

      const updated = await this.userService.update(userId, data);
      return res.status(200).json(updated);
    } catch (error: any) {
      return res.status(400).json({ msg: error.message });
    }
  }

  async updatePassword(req: any, res: any) {
    try {
      const { userId, oldPassword, newPassword } = req.body;

      const result = await this.userService.changePassword(
        userId,
        oldPassword,
        newPassword
      );

      return res.status(200).json(result);
    } catch (error: any) {
      return res.status(400).json({ msg: error.message });
    }
  }
}
