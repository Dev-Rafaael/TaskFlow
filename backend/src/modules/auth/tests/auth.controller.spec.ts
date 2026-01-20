import express from "express";
import { AuthController } from "../controller/auth.controller";
import request from "supertest";
describe("AuthController", () => {
  const app = express();
  app.use(express.json());

  const fakeAuthService = {
    register: vi.fn(),
    login: vi.fn(),
  };

  const controller = new AuthController(fakeAuthService as any);

  app.post("/register", (req, res) => controller.register(req, res));
  app.post("/login", (req, res) => controller.login(req, res));
  it("should return status 201", async() => {
    fakeAuthService.register.mockResolvedValue({
        id:'1',
        email: 'teste@gmail.com'
    })

    const response = await request(app)
    .post('/register')
    .send({email:'teste@gmail.com',password:'123456'})


    expect(response.status).toBe(201)
  });
  it("should return status 400",async () => {
    fakeAuthService.login.mockRejectedValue(
        new Error('Credenciais Invalidas')
    )
    const response = await request(app)
    .post('/login')
    .send({email:'x@xt.com',password:'123456'})

    expect(response.status).toBe(400)
  });
});

