// users.spec.ts
import axios from 'axios';
import { GetAllUsers, GetCurrentUserData, GetUserGroups } from './users';
import { User } from '../import/interfaces';
import { base64Credentials, jiraURL } from '../projects/projects';

jest.mock('axios');
const mockedAxios = axios as jest.Mocked<typeof axios>;

describe('Users Service', () => {
  describe('GetAllUsers', () => {
    it('should fetch all users and return them', async () => {
      const mockUsers: User[] = [
        {
          accountId: '1',
          displayName: 'User One',
          active: true,
          accountType: 'atlassian',
          emailAddress: 'userone@example.com',
          avatarUrls: {
            '48x48': 'https://example.com/avatar1_48x48.png',
            '24x24': 'https://example.com/avatar1_24x24.png',
            '16x16': 'https://example.com/avatar1_16x16.png',
            '32x32': 'https://example.com/avatar1_32x32.png',
          },
          locale: 'en-US',
          self: 'https://example.com/api/user/1',
        },
      ];

      // Mock the axios response
      mockedAxios.get.mockResolvedValueOnce({
        data: mockUsers,
      });

      const users = await GetAllUsers();

      expect(users).toEqual(mockUsers);
      expect(mockedAxios.get).toHaveBeenCalledWith(`${jiraURL}/users/search`, {
        headers: {
          Authorization: `Basic ${base64Credentials}`,
          Accept: 'application/json',
        },
        params: {
          startAt: 0,
          maxResults: 300,
        },
      });
    });
  });

  describe('GetUserGroups', () => {
    it('should fetch user groups and return them', async () => {
      const userId = 'user-123';
      const mockGroups = {
        size: 2,
        items: [
          { name: 'Group 1' },
          { name: 'Group 2' },
        ],
      };
  
      mockedAxios.get.mockResolvedValueOnce({ data: mockGroups });
  
      const result = await GetUserGroups(userId);
  
      expect(result).toEqual(mockGroups);
      expect(mockedAxios.get).toHaveBeenCalledWith(`${jiraURL}/user/groups`, {
        headers: {
          Authorization: `Basic ${base64Credentials}`,
          Accept: 'application/json',
        },
        params: { userId },
      });
    });
  });
  
  describe('GetCurrentUserData', () => {
    it('should fetch current user data and return it', async () => {
      const mockCurrentUser = {
        accountId: 'current-user',
        displayName: 'Current User',
        emailAddress: 'currentuser@example.com',
      };
  
      mockedAxios.get.mockResolvedValueOnce({ data: mockCurrentUser });
  
      const result = await GetCurrentUserData();
  
      expect(result).toEqual(mockCurrentUser);
      expect(mockedAxios.get).toHaveBeenCalledWith(`${jiraURL}/myself`, {
        headers: {
          Authorization: `Basic ${base64Credentials}`,
          Accept: 'application/json',
        },
      });
    });
  });
  
});
