import axios from 'axios';
import {
  GetUsersWorklogs,
  GetUpdatedWork,
  GetWorkAttributes,
  GetAllWorklogs,
  restructureIssueData,
} from './worklogs';
import { Worklog, IFilteredData, Issue } from '../import/interfaces';

jest.mock('axios');
const mockedAxios = axios as jest.Mocked<typeof axios>;

describe('Worklogs Service', () => {
  beforeEach(() => {
    jest.clearAllMocks();
  });

  describe('GetUsersWorklogs', () => {
    it('should return user worklogs', async () => {
      // Mock response setup
      const mockWorklogsResponse = { results: [], total: 0 }; // Simplified for illustration
      mockedAxios.get.mockResolvedValue({ data: mockWorklogsResponse });

      const userId = 'someUserId';
      const result = await GetUsersWorklogs(userId);

      expect(result).toEqual(mockWorklogsResponse.results);
      expect(mockedAxios.get).toHaveBeenCalled();
    });
  });

  describe('GetUpdatedWork', () => {
    it('should return updated work data', async () => {
      const mockUpdatedWorkData = {
        /* mock data structure */
      };
      mockedAxios.get.mockResolvedValue({ data: mockUpdatedWorkData });

      const result = await GetUpdatedWork();

      expect(result).toEqual(mockUpdatedWorkData);
      expect(mockedAxios.get).toHaveBeenCalled();
    });
  });

  describe('GetWorkAttributes', () => {
    it('should return work attributes', async () => {
      const mockWorkAttributesData = {
        /* mock data structure */
      };
      mockedAxios.get.mockResolvedValue({ data: mockWorkAttributesData });

      const result = await GetWorkAttributes();

      expect(result).toEqual(mockWorkAttributesData);
      expect(mockedAxios.get).toHaveBeenCalled();
    });
  });

  describe('GetAllWorklogs', () => {
    it('should return all worklogs', async () => {
      const mockAllWorklogs = [
        {
          /* mock Worklog */
        },
      ] as Worklog[];
      mockedAxios.get.mockResolvedValue({ data: { results: mockAllWorklogs } });

      const result = await GetAllWorklogs();

      expect(result).toEqual(mockAllWorklogs);
      expect(mockedAxios.get).toHaveBeenCalled();
    });
  });

  describe('restructureIssueData', () => {
    it('should restructure and return issue data', async () => {
      const mockIssueId = '12345';
      const mockIssueData: Issue = {
        expand: '',
        id: '',
        self: '',
        key: '',
        fields: undefined,
      };
      const expectedFilteredData: IFilteredData = {
        id: '',
        key: '',
      };
      mockedAxios.get.mockResolvedValue({ data: mockIssueData });

      const result = await restructureIssueData(mockIssueId);

      expect(result).toEqual(expectedFilteredData);
      expect(mockedAxios.get).toHaveBeenCalledWith(
        expect.any(String),
        expect.any(Object)
      );
    });
  });
});
