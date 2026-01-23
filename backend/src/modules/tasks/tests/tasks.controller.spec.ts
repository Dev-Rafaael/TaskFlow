
import express from "express";
import { TaskController } from "../controller/task.controller";
import request from "supertest";
describe("TaskController", () => {
  const app = express();
  app.use(express.json());

  const fakeTaskService = {
    create: vi.fn(),
    listByProject: vi.fn(),
    update: vi.fn(),
    delete: vi.fn(),
  };
  const controller = new TaskController(fakeTaskService as any);

  app.post("/create", (req, res) => controller.create(req, res));
  app.post("/list", (req, res) => controller.list(req, res));
  app.post("/update/:id", (req, res) => controller.update(req, res));
  app.post("/delete/:id", (req, res) => controller.delete(req, res));

  it("should show 201 in create", async () => {
    fakeTaskService.create.mockResolvedValue({
      title: "Responsivo",
      userId: "user-1",
    });
    const response = await request(app)
      .post("/create")
      .send({ title: "Responsivo", userId: "user-1" });
    expect(response.status).toBe(201);
    expect(fakeTaskService.create).toHaveBeenCalledWith({
       title: "Responsivo",
      userId: "user-1",
    })
  });
  it("should show 400 in create", async () => {
    fakeTaskService.create.mockRejectedValue(new Error("UserId é Obrigatorio"));
    const response = await request(app)
      .post("/create")
      .send({ title: "Responsivo", userId: "" });
    expect(response.status).toBe(400);
    expect(fakeTaskService.create).toHaveBeenCalledWith({
      title: "Responsivo", userId: ""
    })
  });

  it("should show 200 in list", async () => {
    fakeTaskService.listByProject.mockResolvedValue({
      title: "Responsivo",
      userId: "user-1",
    });

    const response = await request(app)
      .post("/list")
      .send({ projectId: "project-1", userId: "user-1" });
    expect(response.status).toBe(200);
    expect(fakeTaskService.listByProject).toHaveBeenCalledWith({
       projectId: "project-1", userId: "user-1" 
    })
  });
  it("should show 400 in list", async () => {
    fakeTaskService.listByProject.mockRejectedValue(new Error("UserId é Obrigatorio"));
    const response = await request(app)
      .post("/list")
      .send({ projectId: "project-1", userId: "user-1" });
    expect(response.status).toBe(400);
    expect(fakeTaskService.listByProject).toHaveBeenCalledWith({
       projectId: "project-1", userId: "user-1" 
    })
  });

  it("should show 200 in update", async () => {
    fakeTaskService.update.mockResolvedValue({
      title: "Responsivo",
      userId: "user-1",
    });
    const response = await request(app).post("/update/123").send({
      title: "Responsivo",
      userId: "user-1",
    });
    expect(response.status).toBe(200);
    expect(fakeTaskService.update).toHaveBeenCalledWith(
      expect.objectContaining({
         title: "Responsivo",
    }))
  });
  it("should show 400 in update", async () => {
    fakeTaskService.update.mockRejectedValue(new Error("UserId é Obrigatorio"));
    const response = await request(app).post("/update/123").send({
      title: "Responsivo",
      userId: "user-1",
    });
    expect(response.status).toBe(400);
    expect(fakeTaskService.update).toHaveBeenCalledWith( 
      expect.objectContaining({
         title: "Responsivo",
      userId: "user-1",
      }))
  });

  it("should show 200 in delete", async () => {
    fakeTaskService.delete.mockResolvedValue({
      userId: "user-1",
    });
    const response = await request(app).post("/delete/123").send({
      userId: "user-1",
    });
    expect(response.status).toBe(200);
    expect(fakeTaskService.delete).toHaveBeenCalledWith(
      expect.objectContaining({
      userId: "user-1"
    }))
  });
  it("should show 400 in delete", async () => {
    fakeTaskService.delete.mockRejectedValue(new Error("UserId é Obrigatorio"));

    const response = await request(app)
    .post('/delete/123')
    .send({
      userId: ""})
    expect(response.status).toBe(400);
    expect(fakeTaskService.delete).toHaveBeenCalledWith(
      expect.objectContaining({
      userId: ""
    }))
  });
});
