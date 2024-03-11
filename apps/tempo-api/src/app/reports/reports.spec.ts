import { createUserWorklogObjects, mapWorklogData } from './reports';
import { User, WorklogDictionary, FilteredWorklogData } from '../import/interfaces';

describe('Reports functions', () => {
  describe('createUserWorklogObjects', () => {
    it('should correctly create worklog dictionary objects from user array', async () => {
      const users: User[] = [
        {
          accountId: '1',
          displayName: 'User One',
          emailAddress: 'userone@example.com',
          active: true,
          accountType: 'atlassian',
          avatarUrls: {
            '48x48': 'url',
            '24x24': 'url',
            '16x16': 'url',
            '32x32': 'url',
          },
          self: 'url',
          locale: 'en-US',
        },
      ];

      const expectedResult: WorklogDictionary[] = [
        {
          userId: '1',
          displayName: 'User One',
          worklogs: [],
        },
      ];

      const result = await createUserWorklogObjects(users);
      expect(result).toEqual(expectedResult);
    });
  });

  describe('mapWorklogData', () => {
    it('should correctly map worklog data to user worklog dictionaries', async () => {
      const userWorklogsDict: WorklogDictionary[] = [
        {
          userId: '1',
          displayName: 'User One',
          worklogs: [],
        },
      ];

      const worklogs: FilteredWorklogData[] = [
        {
          logDate: '2023-03-15',
          worklog: {
            issue: {
              id: '1001',
              key: 'ISSUE-1',
              parent: null,
            },
            worklog: {
              self: 'worklog_url',
              tempoWorklogId: 101,
              issue: {
                self: 'issue_url',
                id: 1001,
              },
              timeSpentSeconds: 3600,
              billableSeconds: 3600,
              startDate: '2023-03-15',
              startTime: '10:00',
              description: 'Worked on task',
              createdAt: '2023-03-15T11:00:00.000Z',
              updatedAt: '2023-03-15T11:00:00.000Z',
              author: {
                self: 'author_url',
                accountId: '1',
              },
            },
            parent: 'PARENT-1',
          },
        },
      ];

      const expectedResult: WorklogDictionary[] = [
        {
          userId: '1',
          displayName: 'User One',
          worklogs: [
            worklogs[0].worklog,
          ],
        },
      ];

      const result = await mapWorklogData(userWorklogsDict, worklogs);
      expect(result).toEqual(expectedResult);
      expect(result[0].worklogs.length).toBe(1);
      expect(result[0].worklogs[0].worklog.description).toEqual('Worked on task');
    });
  });
});
