import { TaskService } from "../service/task.service";

class FakeTaskRepository {
  private tasks: any[] = [];

  async create(data: any) {
    const task = { id: crypto.randomUUID(), ...data };
    this.tasks.push(task);
    return task;
  }


  async findById(taskId: string) {
    return this.tasks.find((t) => t.id === taskId);
  }

  async findByProjectId(projectId: string, userId: string) {
    return this.tasks.filter(
      (t) => t.projectId === projectId && t.userId === userId
    );
  }
  async update(id: string, data: any) {
    const index = this.tasks.findIndex((p) => p.id === id);
    if (index === -1) return null;

    this.tasks[index] = {
      ...this.tasks[index],
      ...data,
    };
    return this.tasks[index];
  }
  async delete(id: string) {
    this.tasks = this.tasks.filter((i) => i.id !== id);
  }
}
let repo: FakeTaskRepository;
let service: TaskService;

beforeEach(() => {
  repo = new FakeTaskRepository();
  service = new TaskService(repo);
});
const userId = "user-1";
const otherUserId = "user-2";
const projectId = "project-1";
describe("TaskService - create", () => {
  it("should create a task ", async () => {
    const task = await service.create({
      title: "Responsividade",
      projectId,
      userId,
    });

    expect(task).toHaveProperty("id");
    expect(task.title).toBe("Responsividade");
  });

  it("should not create a task without title", async () => {
    await expect(
      service.create({
        title: "",
        projectId,
        userId,
      }),
    ).rejects.toThrow("Title is required");
  });

  it("should not create a task without userId", async () => {
    await expect(
      service.create({
        title: "Responsividade",
        projectId,
        userId: "",
      }),
    ).rejects.toThrow("UserId is required");
  });
});

describe("TaskService - update", () => {
  it("should update task data", async () => {
    const oldTask = await service.create({
      title: "Responsividade",
      projectId,
      userId,
    });
    const updateTask = await service.update({
      taskId: oldTask.id,
      title: "New Responsividade",
      userId,
    });
    expect(updateTask.title).toBe("New Responsividade");
  });
  it("should not update non-existing task", async () => {
    await expect(
      service.update({
        taskId: "invalid",
        title: "Responsividade",
        userId,
      }),
    ).rejects.toThrow("Task not found");
  });
  it("should not update task from another user", async () => {
    const task = await service.create({
      title: "Responsividade",
      projectId,
      userId,
    });
    await expect(
      service.update({
        taskId: task.id,
        title: "New Responsividade",
        userId: otherUserId,
      }),
    ).rejects.toThrow("Owner not found");
  });
});
describe("TaskService - delete", () => {
  it("should delete a project", async () => {
    const task = await service.create({
      title: "Responsividade",
      projectId,
      userId,
    });

    await service.delete({
      taskId: task.id,
      userId,
    });

    const tasks = await service.listByProject({ projectId, userId: "user-1" });
    expect(tasks).toHaveLength(0);
  });
  it("should not delete non-existing project", async () => {
    await expect(
      service.delete({
        taskId: "invalid-id",
        userId,
      }),
    ).rejects.toThrow("Task not found");
  });
  it("should not delete project from another user", async () => {
    const task = await service.create({
      title: "Responsivo",
      projectId,
      userId,
    });

    await expect(
      service.delete({
        taskId: task.id,
        userId: otherUserId,
      }),
    ).rejects.toThrow("Owner not found");
  });
});
describe("TaskService - list", () => {
  it("should list all tasks from user", async () => {
    await service.create({
      title: "Responsivo",
      projectId,
      userId,
    });

    const tasks = await service.listByProject({projectId,userId:"user-1"});
    expect(tasks).toHaveLength(1);
    expect(tasks[0]).toHaveProperty("id");
    expect(tasks[0].title).toBe("Responsivo");
  });
  it("should void list tasks from user", async () => {
    await service.create({
      title: "Responsividade",
      projectId,
      userId,
    });
    await service.create({
      title: "Responsividade",
      projectId,
      userId,
    });
    const tasks = await service.listByProject({projectId,userId:"user-2"});
    expect(tasks).toEqual([]);
  });
});
