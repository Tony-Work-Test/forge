import { Injectable } from '@nestjs/common';
import { GetAllUsers } from './users';

@Injectable()
export class UserService {
    async getAllUsers() {
        return await GetAllUsers();
    }
}
