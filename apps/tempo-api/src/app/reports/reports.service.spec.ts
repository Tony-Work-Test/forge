// reports.service.spec.ts
import { Test, TestingModule } from '@nestjs/testing';
import { ReportsService } from './reports.service';
import { UserService } from '../users/user.service';
import { WorklogsService } from '../worklogs/worklogs.service';
import * as reportsModule from './reports';
import * as utilModule from '../import/util';
import { FilteredWorklogData, User, WorklogDictionary } from '../import/interfaces';

jest.mock('../users/user.service');
jest.mock('../worklogs/worklogs.service');
jest.mock('./reports');
jest.mock('../import/util');

describe('ReportsService', () => {
  let service: ReportsService;
  let userService: UserService;
  let worklogsService: WorklogsService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [
        ReportsService,
        UserService,
        WorklogsService,
      ],
    }).compile();

    service = module.get<ReportsService>(ReportsService);
    userService = module.get<UserService>(UserService);
    worklogsService = module.get<WorklogsService>(WorklogsService);

    jest.clearAllMocks();
  });

  describe('getUserWorklogDictionary', () => {
    it('should create and return a worklog dictionary for users', async () => {
      const mockUsers: User[] = [
        { 
          accountId: '1', 
          displayName: 'User One',
          self: 'https://example.com/api/user/1',
          accountType: 'atlassian',
          emailAddress: 'userone@example.com',
          avatarUrls: {
            '48x48': 'https://example.com/avatar1_48x48.png',
            '24x24': 'https://example.com/avatar1_24x24.png',
            '16x16': 'https://example.com/avatar1_16x16.png',
            '32x32': 'https://example.com/avatar1_32x32.png',
          },
          active: true,
          locale: 'en-US',
        }
      ];
  
      const mockWorklogs: FilteredWorklogData[] = [
        { 
          logDate: '2023-03-15', 
          worklog: {
            issue: {
              id: '1001',
              key: 'ISSUE-1',
              parent: null
            },
            parent: null,
            worklog: {
              self: '',
              tempoWorklogId: 0,
              issue: {
                self: '',
                id: 0
              },
              timeSpentSeconds: 3600,
              billableSeconds: 3600,
              startDate: '2023-03-15',
              startTime: '09:00',
              description: 'Work description',
              createdAt: '2023-03-15T10:00:00Z',
              updatedAt: '2023-03-15T10:00:00Z',
              author: {
                self: 'https://example.com/api/user/1',
                accountId: '1',
              }
            }
          }
        }
      ];
  
      const mockWorklogDictionary: WorklogDictionary[] = [
        { 
          userId: '1', 
          displayName: 'User One', 
          worklogs: [
            // Assuming this array should contain actual worklog data from mockWorklogs
          ]
        }
      ];
  
      jest.spyOn(userService, 'getAllUsers').mockResolvedValue(mockUsers);
      jest.spyOn(worklogsService, 'getFilteredWorklogData').mockResolvedValue(mockWorklogs);
      jest.spyOn(reportsModule, 'createUserWorklogObjects').mockResolvedValue(mockWorklogDictionary);
      jest.spyOn(reportsModule, 'mapWorklogData').mockResolvedValue(mockWorklogDictionary);
      jest.spyOn(utilModule, 'saveJsonToFile').mockResolvedValue(void 0);
  
      const result = await service.getUserWorklogDictionary();
  
      expect(result).toEqual(mockWorklogDictionary);
      expect(userService.getAllUsers).toHaveBeenCalled();
      expect(worklogsService.getFilteredWorklogData).toHaveBeenCalled();
      expect(reportsModule.createUserWorklogObjects).toHaveBeenCalledWith(mockUsers);
      expect(reportsModule.mapWorklogData).toHaveBeenCalledWith(mockWorklogDictionary, mockWorklogs);
      expect(utilModule.saveJsonToFile).toHaveBeenCalledWith(mockUsers, 'employees.json');
    });
  });
});
