import { Test, TestingModule } from '@nestjs/testing';
import { WorklogsController } from './worklogs.controller';
import { WorklogsService } from './worklogs.service';
import { FilteredWorklogData, Worklog } from '../import/interfaces';

jest.mock('./worklogs.service');

describe('WorklogsController', () => {
  let controller: WorklogsController;
  let service: WorklogsService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [WorklogsController],
      providers: [WorklogsService],
    }).compile();

    controller = module.get<WorklogsController>(WorklogsController);
    service = module.get<WorklogsService>(WorklogsService);
    jest.clearAllMocks();
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });

  describe('getAllWorklogs', () => {
    it('should call getAllWorklogs method of the worklog service', async () => {
      const mockWorklog: Worklog = {
        issue: {
          id: 123,
          self: '',
        },
        timeSpentSeconds: 7200,
        billableSeconds: 3600,
        createdAt: '2021-01-01T00:00:00Z',
        self: '',
        tempoWorklogId: 123,
        startDate: '2021-01-01',
        startTime: '00:00:00',
        description: 'Worklog description',
        author: {
          self: '',
          accountId: 'user-123',
        },
        updatedAt: '2021-01-01T00:00:00Z',
      };
      const spy = jest
        .spyOn(service, 'getAllWorklogs')
        .mockImplementation(async () => [mockWorklog]);
      await controller.getAllWorklogs();
      expect(spy).toHaveBeenCalled();
    });
  });

  describe('getWorkAttributes', () => {
    it('should call getWorkAttributes method of the worklog service', async () => {
      const spy = jest
        .spyOn(service, 'getWorkAttributes')
        .mockImplementation(async () => 'mockData');
      await controller.getWorkAttributes();
      expect(spy).toHaveBeenCalled();
    });
  });

  describe('getUpdatedWorklogs', () => {
    it('should call getUpdatedWorklogs method of the worklog service', async () => {
      const spy = jest
        .spyOn(service, 'getUpdatedWorklogs')
        .mockImplementation(async () => 'mockData');
      await controller.getUpdatedWorklogs();
      expect(spy).toHaveBeenCalled();
    });
  });

  describe('getFilteredWorklogData', () => {
    it('should call getFilteredWorklogData method of the worklog service', async () => {
      const mockFilteredWorklogData: FilteredWorklogData = {
        logDate: '2024-03-01',
        worklog: {
          issue: {
            id: '1001',
            key: 'ABC-123',
            parent: null,
          },
          worklog: {
            self: 'https://example.com/rest/api/3/worklog/10001',
            tempoWorklogId: 10001,
            issue: {
              self: 'https://example.com/rest/api/3/issue/1001',
              id: 1001,
            },
            timeSpentSeconds: 7200,
            billableSeconds: 7200,
            startDate: '2024-03-01',
            startTime: '09:00:00',
            description: 'Worked on feature X',
            createdAt: '2024-03-01T12:00:00Z',
            updatedAt: '2024-03-01T12:00:00Z',
            author: {
              self: 'https://example.com/rest/api/3/user?accountId=user-123',
              accountId: 'user-123',
            },
          },
          parent: null,
        },
      };
      const spy = jest
        .spyOn(service, 'getFilteredWorklogData')
        .mockImplementation(async () => [mockFilteredWorklogData]);
      await controller.getFilteredWorklogData();
      expect(spy).toHaveBeenCalled();
    });
  });

  describe('getWorklogs', () => {
    it('should call getUserWorklogs method of the worklog service with userId', async () => {
      const worklog: Worklog = {
        issue: {
          id: 123,
          self: '',
        },
        timeSpentSeconds: 7200,
        billableSeconds: 3600,
        createdAt: '2021-01-01T00:00:00Z',
        self: '',
        tempoWorklogId: 123,
        startDate: '2021-01-01',
        startTime: '00:00:00',
        description: 'Worklog description',
        author: {
          self: '',
          accountId: 'user-123',
        },
        updatedAt: '2021-01-01T00:00:00Z',
      };
      const spy = jest
        .spyOn(service, 'getUserWorklogs')
        .mockImplementation(async () => [worklog]);
      const userId = 'testUserId';
      await controller.getWorklogs({ userId });
      expect(spy).toHaveBeenCalledWith(userId);
    });
  });
});
