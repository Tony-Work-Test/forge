import { Test, TestingModule } from '@nestjs/testing';
import { AccountsController } from './accounts.controller';
import { AccountsService } from './accounts.service';
import { AuthGuard } from '@nestjs/passport';

jest.mock('./accounts.service');
jest.mock('@nestjs/passport');

describe('AccountsController', () => {
  let controller: AccountsController;
  let service: AccountsService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [AccountsController],
      providers: [
        AccountsService,
        {
          provide: AuthGuard('jira'),
          useValue: jest.fn().mockImplementation(() => true),
        },
      ],
    }).compile();

    controller = module.get<AccountsController>(AccountsController);
    service = module.get<AccountsService>(AccountsService);
    jest.clearAllMocks();
  });

  describe('getAccountTypes', () => {
    it('should return an array of account types', async () => {
      const mockAccountTypes = ['type1', 'type2'];
      jest.spyOn(service, 'getAccountTypes').mockResolvedValue(mockAccountTypes);

      const result = await controller.getAccountTypes();
      expect(result).toEqual(mockAccountTypes);
      expect(service.getAccountTypes).toHaveBeenCalled();
    });

    it('should handle errors', async () => {
      const error = new Error('Error');
      jest.spyOn(service, 'getAccountTypes').mockRejectedValue(error);

      const result = await controller.getAccountTypes();
      expect(result).toBe(error);
      expect(service.getAccountTypes).toHaveBeenCalled();
    });
  });

  describe('getAllAccounts', () => {
    it('should return an array of all accounts', async () => {
      const mockAccounts = [{ id: '1' }, { id: '2' }];
      jest.spyOn(service, 'getAllAccounts').mockResolvedValue(mockAccounts);

      const result = await controller.getAllAccounts();
      expect(result).toEqual(mockAccounts);
      expect(service.getAllAccounts).toHaveBeenCalled();
    });

    it('should handle errors', async () => {
      const error = new Error('Error');
      jest.spyOn(service, 'getAllAccounts').mockRejectedValue(error);

      const result = await controller.getAllAccounts();
      expect(result).toBe(error);
      expect(service.getAllAccounts).toHaveBeenCalled();
    });
  });
});
