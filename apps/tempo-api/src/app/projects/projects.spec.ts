// Assuming your file is named jiraService.ts
import axios from 'axios';
import * as jiraService from './projects';
import { jiraToken } from '../tokens/drc-token';
import { jiraURL } from './projects'; // Add the missing import statement

jest.mock('axios');
const mockedAxios = axios as jest.Mocked<typeof axios>;

describe('jiraService', () => {
  const base64Credentials = Buffer.from(`tony.kelly@oasisdigital.com:${jiraToken}`).toString('base64');

  beforeEach(() => {
    jest.clearAllMocks();
  });

  describe('GetProjectRoles', () => {
    it('fetches project roles successfully', async () => {
      mockedAxios.get.mockResolvedValueOnce({
        data: { total: 1, length: 1, items: ['Role1'] },
      });

      const result = await jiraService.GetProjectRoles();
      expect(result).toEqual(['Role1']);
      expect(mockedAxios.get).toHaveBeenCalledWith(expect.any(String), {
        headers: {
          Authorization: `Basic ${base64Credentials}`,
          Accept: 'application/json',
        },
        params: {
          startAt: 0,
          maxResults: 50,
        },
      });
    });
  });

  describe('GetProjectComponents', () => {
    it('fetches project components successfully', async () => {
      const projectKey = 'TEST';
      mockedAxios.get.mockResolvedValueOnce({
        data: { total: 1, length: 1, items: ['Component1'] },
      });

      const result = await jiraService.GetProjectComponents(projectKey);
      expect(result).toEqual(['Component1']);
      expect(mockedAxios.get).toHaveBeenCalledWith(`${jiraService.jiraURL}/project/${projectKey}/components`, {
        headers: {
          Authorization: `Basic ${base64Credentials}`,
          Accept: 'application/json',
        },
        params: {
          startAt: 0,
          maxResults: 50,
        },
      });
    });
  });

  describe('GetIssueTypeScheme', () => {
    it('fetches issue type scheme successfully', async () => {
        const mockData = { schemes: ['Scheme1'] };
        mockedAxios.get.mockResolvedValueOnce({
            data: mockData,
        });

        const result = await jiraService.GetIssueTypeScheme();
        expect(result).toEqual(mockData);
        expect(mockedAxios.get).toHaveBeenCalledWith(`${jiraURL}/issuetypescheme`, { // Fix the reference to 'jiraURL'
            headers: {
                Authorization: `Basic ${base64Credentials}`,
                Accept: 'application/json',
            },
        });
    });
  });

  describe('GetAllProjects', () => {
    it('fetches all projects successfully', async () => {
      const mockData = { projects: ['Project1', 'Project2'] };
      mockedAxios.get.mockResolvedValueOnce({
        data: mockData,
      });

      const result = await jiraService.GetAllProjects();
      expect(result).toEqual(mockData);
      expect(mockedAxios.get).toHaveBeenCalledWith(jiraService.kanbanURl, {
        headers: {
          Authorization: `Basic ${base64Credentials}`,
          Accept: 'application/json',
        },
      });
    });
  });
});
