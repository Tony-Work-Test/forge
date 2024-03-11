import { AccountsService } from './accounts.service';
import * as accountsModule from './accounts';

describe('AccountsService', () => {
  let accountsService: AccountsService;

  beforeEach(() => {
    accountsService = new AccountsService();
  });

  describe('getAccountTypes', () => {
    it('should return account types', async () => {
      const mockAccountTypes = ['type1', 'type2'];
      jest.spyOn(accountsModule, 'GetAccountTypes').mockResolvedValue(mockAccountTypes);

      const result = await accountsService.getAccountTypes();
      expect(result).toEqual(mockAccountTypes);
    });

    it('should handle errors', async () => {
      const error = new Error('Error fetching account types');
      jest.spyOn(accountsModule, 'GetAccountTypes').mockRejectedValue(error);

      const result = await accountsService.getAccountTypes();
      expect(result).toBe(error);
    });
  });

  describe('getAllAccounts', () => {
    it('should return all accounts', async () => {
      const mockAccounts = [{ id: '1' }, { id: '2' }];
      jest.spyOn(accountsModule, 'GetAccounts').mockResolvedValue(mockAccounts);

      const result = await accountsService.getAllAccounts();
      expect(result).toEqual(mockAccounts);
    });

    it('should handle errors', async () => {
      const error = new Error('Error fetching accounts');
      jest.spyOn(accountsModule, 'GetAccounts').mockRejectedValue(error);

      const result = await accountsService.getAllAccounts();
      expect(result).toBe(error);
    });
  });
});
