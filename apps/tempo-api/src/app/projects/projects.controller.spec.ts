import { Test, TestingModule } from '@nestjs/testing';
import { ProjectsController } from './projects.controller';
import { ProjectsService } from './projects.service';
import { AuthGuard } from '@nestjs/passport';

jest.mock('./projects.service', () => ({
  ProjectsService: jest.fn().mockImplementation(() => ({
    getAllProjects: jest.fn(),
    getIssueTypeSchemes: jest.fn(),
    getProjectRoles: jest.fn(),
    getProjectComponents: jest.fn(),
  })),
}));

describe('ProjectsController', () => {
  let controller: ProjectsController;
  let service: ProjectsService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [ProjectsController],
      providers: [
        ProjectsService,
        {
          provide: AuthGuard('jira'),
          useValue: { canActivate: jest.fn().mockReturnValue(true) },
        },
      ],
    }).compile();

    controller = module.get<ProjectsController>(ProjectsController);
    service = module.get<ProjectsService>(ProjectsService);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });

  describe('getAllProjects', () => {
    it('should return an array of projects', async () => {
      const mockProjects = ['Project1', 'Project2'];
      jest.spyOn(service, 'getAllProjects').mockResolvedValue(mockProjects);

      expect(await controller.getAllProjects()).toBe(mockProjects);
    });
  });

  describe('getIssueTypeSchemes', () => {
    it('should return an array of issue type schemes', async () => {
      const mockIssueTypeSchemes = ['Scheme1', 'Scheme2'];
      jest.spyOn(service, 'getIssueTypeSchemes').mockResolvedValue(mockIssueTypeSchemes);

      expect(await controller.getIssueTypeSchemes()).toBe(mockIssueTypeSchemes);
    });
  });

  describe('getProjectRoles', () => {
    it('should return an array of project roles', async () => {
      const mockProjectRoles = ['Role1', 'Role2'];
      jest.spyOn(service, 'getProjectRoles').mockResolvedValue(mockProjectRoles);

      expect(await controller.getProjectRoles()).toBe(mockProjectRoles);
    });
  });

  describe('getProjectComponents', () => {
    it('should return an array of project components', async () => {
      const mockProjectComponents = ['Component1', 'Component2'];
      jest.spyOn(service, 'getProjectComponents').mockResolvedValue(() => Promise.resolve(mockProjectComponents));

      expect(await controller.getProjectComponents()).toBe(mockProjectComponents);
    });
  });
});
