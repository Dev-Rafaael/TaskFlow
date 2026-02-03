import { describe, it, expect, beforeEach } from "vitest";

interface User {
  id: string;
  password: string;
  name?: string;
  email?: string;
}

class FakeUserRepository {
  private users: User[] = [];

  async getMe(id: string) {
    return this.users.find(user => user.id === id) || null;
  }

  async update(id: string, data: Partial<User>) {
    let updatedUser: User | null = null;

    this.users = this.users.map(user => {
      if (user.id === id) {
        updatedUser = { ...user, ...data };
        return updatedUser;
      }
      return user;
    });

    return updatedUser;
  }

  async changePassword(
    userId: string,
    oldPassword: string,
    newPassword: string
  ) {
    let updatedUser: User | null = null;

    this.users = this.users.map(user => {
      if (user.id === userId) {
        if (user.password !== oldPassword) {
          throw new Error("Senha antiga incorreta");
        }

        updatedUser = { ...user, password: newPassword };
        return updatedUser;
      }
      return user;
    });

    return updatedUser;
  }

  add(user: User) {
    this.users.push(user);
  }
}

describe("FakeUserRepository", () => {
  let repository: FakeUserRepository;

  const user: User = {
    id: "1",
    name: "Rafael",
    email: "rafa@email.com",
    password: "123456",
  };

  beforeEach(() => {
    repository = new FakeUserRepository();
    repository.add({ ...user });
  });

  it("should return user by id", async () => {
    const result = await repository.getMe("1");

    expect(result).toEqual(user);
  });

  it("should return null when user does not exist", async () => {
    const result = await repository.getMe("999");

    expect(result).toBeNull();
  });

  it("should update user data", async () => {
    const result = await repository.update("1", {
      name: "Novo Nome",
    });

    expect(result?.name).toBe("Novo Nome");

    const updatedUser = await repository.getMe("1");
    expect(updatedUser?.name).toBe("Novo Nome");
  });

  it("should change password when old password is correct", async () => {
    const result = await repository.changePassword(
      "1",
      "123456",
      "novaSenha"
    );

    expect(result?.password).toBe("novaSenha");

    const updatedUser = await repository.getMe("1");
    expect(updatedUser?.password).toBe("novaSenha");
  });

  it("should throw error when old password is incorrect", async () => {
    await expect(
      repository.changePassword("1", "senhaErrada", "novaSenha")
    ).rejects.toThrow("Senha antiga incorreta");
  });

  it("should return null when updating non-existing user", async () => {
    const result = await repository.update("999", {
      name: "Nada",
    });

    expect(result).toBeNull();
  });
});
