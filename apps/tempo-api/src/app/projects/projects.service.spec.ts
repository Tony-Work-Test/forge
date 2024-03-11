import * as projectsModule from './projects';
import { ProjectsService } from './projects.service';

jest.mock('./projects', () => ({
  GetIssueTypeScheme: jest.fn(),
  GetProjectRoles: jest.fn(),
  GetProjectComponents: jest.fn(),
  GetAllProjects: jest.fn(),
}));

describe('ProjectsService', () => {
  let service: ProjectsService;

  beforeEach(() => {
    service = new ProjectsService();
  });

  describe('getIssueTypeSchemes', () => {
    it('should return issue type schemes', async () => {
      const mockData = ['Scheme1', 'Scheme2'];
      (projectsModule.GetIssueTypeScheme as jest.Mock).mockResolvedValue(mockData);

      const result = await service.getIssueTypeSchemes();
      expect(result).toEqual(mockData);
      expect(projectsModule.GetIssueTypeScheme).toHaveBeenCalled();
    });
  });

  describe('getProjectRoles', () => {
    it('should return project roles', async () => {
      const mockData = ['Role1', 'Role2'];
      (projectsModule.GetProjectRoles as jest.Mock).mockResolvedValue(mockData);

      const result = await service.getProjectRoles();
      expect(result).toEqual(mockData);
      expect(projectsModule.GetProjectRoles).toHaveBeenCalled();
    });
  });

  describe('getProjectComponents', () => {
    it('should return project components', async () => {
      const mockData = ['Component1', 'Component2'];
      (projectsModule.GetProjectComponents as jest.Mock).mockResolvedValue(mockData);

      const result = await service.getProjectComponents();
      expect(result).toEqual(mockData);
      expect(projectsModule.GetProjectComponents).toHaveBeenCalled();
    });
  });

  describe('getAllProjects', () => {
    it('should return all projects', async () => {
      const mockData = ['Project1', 'Project2'];
      (projectsModule.GetAllProjects as jest.Mock).mockResolvedValue(mockData);

      const result = await service.getAllProjects();
      expect(result).toEqual(mockData);
      expect(projectsModule.GetAllProjects).toHaveBeenCalled();
    });
  });
});
