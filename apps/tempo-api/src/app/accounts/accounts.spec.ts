// tempoService.test.ts
import axios from 'axios';
import { GetAccountTypes, GetAccounts } from './accounts';

// Mock the axios module
jest.mock('axios');
const mockedAxios = axios as jest.Mocked<typeof axios>;

describe('accounts', () => {
  describe('GetAccountTypes', () => {
    it('should fetch account category types', async () => {
      // Setup
      const mockData = {
        data: ['type1', 'type2'],
      };
      mockedAxios.get.mockResolvedValue(mockData);

      // Execution
      const result = await GetAccountTypes();

      // Assertions
      expect(result).toEqual(mockData.data);
      expect(mockedAxios.get).toHaveBeenCalledWith('https://api.us.tempo.io/4/account-category-types', {
        headers: {
          Authorization: expect.stringContaining('Bearer '), // You can make this more specific
          Accept: 'application/json',
        },
      });
    });

    // Additional tests for error cases or different responses could be added here
  });

  describe('GetAccounts', () => {
    it('should fetch accounts', async () => {
      // Setup
      const mockData = {
        data: [{ id: '1' }, { id: '2' }],
      };
      mockedAxios.get.mockResolvedValue(mockData);

      // Execution
      const result = await GetAccounts();

      // Assertions
      expect(result).toEqual(mockData.data);
      expect(mockedAxios.get).toHaveBeenCalledWith('https://api.us.tempo.io/4/accounts', {
        headers: {
          Authorization: expect.stringContaining('Bearer '), // This can also be more specific
          Accept: 'application/json',
        },
      });
    });

    // Additional tests for error handling or different scenarios could be placed here
  });
});
