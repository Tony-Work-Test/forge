import { Injectable } from '@nestjs/common';
import { GetAllUsers, GetCurrentUserData, GetUserGroups, GetUserByEmail } from './users';
import { JiraUser, User } from '../import/interfaces';

@Injectable()
export class UserService {
    getGroups() {
        throw new Error('Method not implemented.');
    }

    async getAllUsers(): Promise<User[]> {
        return await GetAllUsers();
    }

    async getUserGroups(userId: string) {
        console.log('userId', userId);
        return await GetUserGroups(userId);
    }

    async getCurrentUser() {
        return await GetCurrentUserData();
    }

    async getUserByEmail(email: string):Promise<JiraUser> {
        return await GetUserByEmail(email);
    }

    
}
