import { Test, TestingModule } from '@nestjs/testing';
import { UserService } from './user.service';
import * as usersModule from './users';
import { JiraUser } from '../import/interfaces';

jest.mock('./users', () => ({
  GetAllUsers: jest.fn(),
  GetCurrentUserData: jest.fn(),
  GetUserGroups: jest.fn(),
  GetUserByEmail: jest.fn(),
}));

describe('UserService', () => {
  let service: UserService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [UserService],
    }).compile();

    service = module.get<UserService>(UserService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });

  describe('getAllUsers', () => {
    it('should return an array of users', async () => {
      const mockUsers = [{ accountId: '1', displayName: 'Test User' }];
      jest.spyOn(usersModule, 'GetAllUsers').mockResolvedValue(mockUsers);

      const result = await service.getAllUsers();
      expect(result).toEqual(mockUsers);
      expect(usersModule.GetAllUsers).toHaveBeenCalled();
    });
  });

  describe('getUserGroups', () => {
    it('should return user groups', async () => {
      const userId = 'user-123';
      const mockGroups = ['Group 1', 'Group 2'];
      jest.spyOn(usersModule, 'GetUserGroups').mockResolvedValue(mockGroups);

      const result = await service.getUserGroups(userId);
      expect(result).toEqual(mockGroups);
      expect(usersModule.GetUserGroups).toHaveBeenCalledWith(userId);
    });
  });

  describe('getCurrentUser', () => {
    it('should return current user data', async () => {
      const mockCurrentUser = { accountId: 'current-user', displayName: 'Current User' };
      jest.spyOn(usersModule, 'GetCurrentUserData').mockResolvedValue(mockCurrentUser);

      const result = await service.getCurrentUser();
      expect(result).toEqual(mockCurrentUser);
      expect(usersModule.GetCurrentUserData).toHaveBeenCalled();
    });
  });

  describe('getUserByEmail', () => {
    it('should return user data by email', async () => {
      const email = 'test@example.com';
      const mockUser: JiraUser = {
        accountId: 'user-456',
        displayName: 'User Example',
        emailAddress: email,
        accountType: '',
        active: true,
        applicationRoles: { items: [], size: 0 },
        avatarUrls: {
          '16x16': '',
          '24x24': '',
          '32x32': '',
          '48x48': '',
        },
        groups: undefined,
        key: '',
        name: '',
        self: '',
        timeZone: ''
      };
      jest.spyOn(usersModule, 'GetUserByEmail').mockResolvedValue(mockUser);

      const result = await service.getUserByEmail(email);
      expect(result).toEqual(mockUser);
      expect(usersModule.GetUserByEmail).toHaveBeenCalledWith(email);
    });
  });
});
