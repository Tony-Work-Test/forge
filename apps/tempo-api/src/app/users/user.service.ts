import { Injectable } from '@nestjs/common';
import { GetAllUsers, GetUserGroups } from './users';
import { User } from '../import/interfaces';

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

    
}
