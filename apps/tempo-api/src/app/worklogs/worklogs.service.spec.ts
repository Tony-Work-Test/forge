import { Test, TestingModule } from '@nestjs/testing';
import { WorklogsService } from './worklogs.service';
import * as worklogsModule from './worklogs';
import convertSecondsToHours, * as util from '../import/util';
import { Worklog, FilteredWorklogData, IFilteredData } from '../import/interfaces';

jest.mock('./worklogs', () => ({
  GetAllWorklogs: jest.fn(),
  GetUpdatedWork: jest.fn(),
  GetUsersWorklogs: jest.fn(),
  GetWorkAttributes: jest.fn(),
  restructureIssueData: jest.fn(),
}));

jest.mock('../import/util', () => ({
  convertSecondsToHours: jest.fn().mockImplementation((seconds) => seconds / 3600),
  saveJsonToFile: jest.fn(),
}));

describe('WorklogsService', () => {
  let service: WorklogsService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [WorklogsService],
    }).compile();

    service = module.get<WorklogsService>(WorklogsService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });

  // Tests for other methods remain unchanged

  describe('getFilteredWorklogData', () => {
    it('should retrieve and filter worklogs data', async () => {
      const mockWorklogs: Worklog[] = [
        {
          issue: {
            id: 123,
            self: ''
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
        },
      ];

      const mockIssueData: IFilteredData = {
        id: '123',
        key: 'KEY-123',
        parent: null,
      };

      jest.spyOn(worklogsModule, 'GetAllWorklogs').mockResolvedValue(mockWorklogs);
      jest.spyOn(worklogsModule, 'restructureIssueData').mockResolvedValue(mockIssueData);

      const expectedFilteredData: FilteredWorklogData[] = mockWorklogs.map(worklog => ({
        logDate: worklog.createdAt,
        worklog: {
          issue: mockIssueData,
          worklog,
          parent: mockIssueData.parent,
        },
      }));

      // Convert times to hours in the expectation to match the service's conversion
      expectedFilteredData.forEach(fwd => {
        fwd.worklog.worklog.timeSpentSeconds = convertSecondsToHours(fwd.worklog.worklog.timeSpentSeconds);
        fwd.worklog.worklog.billableSeconds = convertSecondsToHours(fwd.worklog.worklog.billableSeconds);
      });

      const result = await service.getFilteredWorklogData();
      expect(result).toEqual(expectedFilteredData);
      expect(util.saveJsonToFile).toHaveBeenCalledWith(result, 'filteredWorklogs.json');
    });
  });
});
