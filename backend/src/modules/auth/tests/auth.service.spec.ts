import * as bcrypt from "bcrypt";

import { AuthService } from "../service/auth.service";



vi.mock("bcrypt", () => ({
  hash: vi.fn().mockResolvedValue("hashed-password"),
  compare: vi.fn().mockResolvedValue(true),
}));

vi.mock("jsonwebtoken", () => ({
  default: {
    sign: vi.fn(() => "fake-jwt-token"),
  },
}));

class FakeAuthRepository {
  private users: any[] = [];

  async findByEmail(email: string) {
    return this.users.find((e) => e.email === email);
  }

  async create(data: any) {
    const user = { id: "1", ...data };
    this.users.push(user);
    return user;
  }
}
describe("AuthService - register", () => {
  let repo: FakeAuthRepository;
  let service: AuthService;

  beforeEach(() => {
    repo = new FakeAuthRepository();
    service = new AuthService(repo as any);
  });

  it("should has a Email", async () => {
    await expect(
      service.register({ email: "", password: "123456" }),
    ).rejects.toThrow("Email é Obrigatorio");
  });
  it("should not register duplicate email", async () => {
    await service.register({ email: "a@gmail.com", password: "123456" });

    await expect(
      service.register({ email: "a@gmail.com", password: "123456" }),
    ).rejects.toThrow("Email ja Existe");
  });

  it("should not register with weak password", async () => {
    await expect(
      service.register({ email: "a@gmail.com", password: "1234" }),
    ).rejects.toThrow("Senha Muito Fraca");
  });
  it("should register user successfully", async () => {
    const user = await service.register({
      email: "crypto@gmail.com",
      password: "123456",
    });

    expect(user).toHaveProperty("id");
    expect(user.email).toBe("crypto@gmail.com");
  });

  it('should hash the password on register', async() => {
    await service.register({ email: "crypto@gmail.com", password: "1234567" })

    expect(bcrypt.hash).toHaveBeenCalledWith('1234567',expect.any(Number))
  });
});

describe("AuthService - login", () => {
  let repo: FakeAuthRepository;
  let service: AuthService;

  beforeEach(() => {
    repo = new FakeAuthRepository();
    service = new AuthService(repo as any);
  });

  it("should return token if credentials are valid", async () => {
    await service.register({ email: "r@gmail.com", password: "123456" });

    const login = await service.login({
      email: "r@gmail.com",
      password: "123456",
    });

    expect(login.token).toBe("fake-jwt-token");
  });

  it("should not login if email does not exist", async () => {
    await expect(
      service.login({ email: "rr@gmail.com", password: "123456" }),
    ).rejects.toThrow("Credenciais Inválidas");
  });

  it("should not login if password is incorrect", async () => {
    await service.register({ email: "r@gmail.com", password: "1234567" });

    (bcrypt.compare as any).mockResolvedValueOnce(false)

    await expect(
      service.login({ email: "r@gmail.com", password: "123456" }),
    ).rejects.toThrow("Credenciais Inválidas");
  });
});
