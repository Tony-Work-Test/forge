import { Test, TestingModule } from '@nestjs/testing';
import { UserController } from './user.controller';
import { UserService } from './user.service';
import { User } from '../import/interfaces';

jest.mock('./user.service');

describe('UserController', () => {
  let controller: UserController;
  let userService: UserService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [UserController],
      providers: [UserService],
    }).compile();

    controller = module.get<UserController>(UserController);
    userService = module.get<UserService>(UserService);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });

  describe('getUsers', () => {
    it('should return an array of all users', async () => {
      const mockUsers: User[] = [
       { 
          accountId: '1', 
          displayName: 'User One',
          self: '',
          accountType: '',
          emailAddress: '',
          avatarUrls: {
            '48x48': '',
            '24x24': '',
            '16x16': '',
            '32x32': '',
          },
          active: true, // Add the 'active' property
          locale: 'en-US', // Add the 'locale' property
    }
      ];
      jest.spyOn(userService, 'getAllUsers').mockResolvedValue(mockUsers);

      const result = await controller.getUsers();
      expect(result).toEqual(mockUsers);
      expect(userService.getAllUsers).toHaveBeenCalled();
    });
  });

  describe('getUserGroups', () => {
    it('should return groups for a given user ID', async () => {
      const userId = 'user-123';
      const mockGroups = ['Group 1', 'Group 2'];
      jest.spyOn(userService, 'getUserGroups').mockResolvedValue(mockGroups);

      const result = await controller.getUserGroups({ userId });
      expect(result).toEqual(mockGroups);
      expect(userService.getUserGroups).toHaveBeenCalledWith(userId);
    });
  });
});
