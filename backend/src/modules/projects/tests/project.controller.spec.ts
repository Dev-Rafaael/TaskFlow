import express, { response } from "express";
import { ProjectController } from "../controller/project.controller";
import request from "supertest";
describe("ProjectController", () => {
  const app = express();
  app.use(express.json());

  const fakeProjectService = {
    create: vi.fn(),
    list: vi.fn(),
    update: vi.fn(),
    delete: vi.fn(),
  };

  const controller = new ProjectController(fakeProjectService as any);

  app.post("/create", (req, res) => controller.create(req, res));
  app.post("/list", (req, res) => controller.list(req, res));
  app.post("/update/:id", (req, res) => controller.update(req, res));
  app.post("/delete/:id", (req, res) => controller.delete(req, res));
  it("should show 201 in create", async () => {
    fakeProjectService.create.mockResolvedValue({
      name: "Todo",
      userId: "user-1",
    });

    const response = await request(app)
      .post("/create")
      .send({
        name: "Todo",
        userId: "user-1",
      });

    expect(response.status).toBe(201);
  });
  it("should show 400 in create", async () => {
    fakeProjectService.create.mockRejectedValue(
      new Error("UserId é Obrigatorio"),
    );

    const response = await request(app)
      .post("/create")
      .send({
        name: "Todo",
        userId: "user-1",
      });

    expect(response.status).toBe(400);
  });

  it("should show 200 in list", async () => {
    fakeProjectService.list.mockResolvedValue({
      name: "Todo",
      userId: "user-1",
    });

    const response = await request(app)
      .post("/list")
      .send({ name: "Todo", userId: "user-1" });
    expect(response.status).toBe(200);
  });
  it("should show 400 in list", async () => {
    fakeProjectService.list.mockRejectedValue(new Error("UserId é Obrigatorio"));

    const response = await request(app)
      .post("/list")
      .send({ name: "Todo", userId: "user-1" });

    expect(response.status).toBe(400);
  });

  it("should show 200 in update", async () => {
    fakeProjectService.update.mockResolvedValue({
      name: "New Todo",
    });

    const response = await request(app)
      .post("/update/123")
      .send({ name: "New Todo", userId: "user-1" });
    expect(response.status).toBe(200);
  });
  it("should show 400 in update", async () => {
    fakeProjectService.update.mockRejectedValue(new Error("Project not found"));

    const response = await request(app)
      .post("/update/123")
      .send({ name: "Todo", userId: "user-1" });
    expect(response.status).toBe(400);
  });

  it("should show 200 in delete", async () => {
    fakeProjectService.delete.mockResolvedValue({
      name: "Todo",
      userId: "user-1",
    });

    const response = await request(app)
      .post("/delete/123")
      .send({});
    expect(response.status).toBe(200);
  });
  it("should show 400 in delete", async () => {
    fakeProjectService.delete.mockRejectedValue(new Error("Project not found"));
    const response = await request(app)
      .post("/delete/123")
      .send({ name: "Todo", userId: "user-1" });
    expect(response.status).toBe(400);
  });
});
