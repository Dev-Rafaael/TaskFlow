import { ProjectService } from "../service/project.service";

class FakeProjectRepository {
  private projects: any[] = [];

  async create(data: any) {
    const project = { id: crypto.randomUUID(), ...data };
    this.projects.push(project);
    return project;
  }

  async findByUserId(userId: string) {
    return this.projects.filter(p => p.userId === userId);
  }

  async findById(id: string) {
    return this.projects.find(p => p.id === id);
  }

  async update(id: string, data: any) {
    const index = this.projects.findIndex(p => p.id === id);
    if (index === -1) return null;

    this.projects[index] = {
      ...this.projects[index],
      ...data,
    };
    return this.projects[index];
  }

  async delete(id: string) {
    this.projects = this.projects.filter(p => p.id !== id);
  }
}

let repo: FakeProjectRepository;
let service: ProjectService;

beforeEach(() => {
  repo = new FakeProjectRepository();
  service = new ProjectService(repo as any);
});

describe("ProjectService - create", () => {
  it("should create a project", async () => {
    const projeto = await service.create({
      name: "Todo",
      userId: "user-1",
    });

    expect(projeto).toHaveProperty("id");
    expect(projeto.name).toBe("Todo");
  });

  it("should not create project without name", async () => {
    await expect(
      service.create({
        name: "",
        userId: "user-1",
      }),
    ).rejects.toThrow("Name é Obrigatorio ");
  });

  it("should not create project without userId", async () => {
    await expect(
      service.create({
        name: "Todo",
        userId: "",
      }),
    ).rejects.toThrow("UserId é Obrigatorio");
  });
});

describe("ProjectService - update", () => {
  it("should update project data", async () => {
    const oldProject = await service.create({
      name: "Todo",
      userId: "user-1",
    });

    const updated = await service.update({
      projectId: oldProject.id,
      userId: "user-1",
      name: "NewTodo",
    });

    expect(updated.name).toBe("NewTodo");
  });

  it("should not update non-existing project", async () => {
    await expect(
      service.update({
        projectId: "invalid-id",
        userId: "user-1",
        name: "NewTodo",
      }),
    ).rejects.toThrow("Project not found");
  });

  it("should not update project from another user", async () => {
    const project = await service.create({
      name: "Todo",
      userId: "user-1",
    });

    await expect(
      service.update({
        projectId: project.id,
        userId: "user-2",
        name: "NewTodo",
      }),
    ).rejects.toThrow("Owner not found");
  });
});

describe("ProjectService - delete", () => {
  it("should delete a project", async () => {
    const project = await service.create({
      name: "Todo",
      userId: "user-1",
    });

    await service.delete({
      projectId: project.id,
      userId: "user-1",
    });

    const projects = await service.list({userId:"user-1"});
    expect(projects).toHaveLength(0);
  });

  it("should not delete non-existing project", async () => {
    await expect(
      service.delete({
        projectId: "invalid-id",
        userId: "user-1",
      }),
    ).rejects.toThrow("Project not found");
  });

  it("should not delete project from another user", async () => {
    const project = await service.create({
      name: "Todo",
      userId: "user-1",
    });

    await expect(
      service.delete({
        projectId: project.id,
        userId: "user-2",
      }),
    ).rejects.toThrow("Owner not found");

    const projects = await service.list({userId:"user-1"});
    expect(projects).toHaveLength(1);
  });
});

describe("ProjectService - list", () => {
  it("should list all projects from user", async () => {
    await service.create({
      name: "Todo",
      userId: "user-2",
    });

    const projects = await service.list({userId:"user-2"});
    expect(projects).toHaveLength(1);
  });

  it("should list all projects from user", async () => {
    await service.create({
      name: "Todo",
      userId: "user-1",
    });

    const projects = await service.list({userId:"user-2"});
    expect(projects).toEqual([]);
  });
});
