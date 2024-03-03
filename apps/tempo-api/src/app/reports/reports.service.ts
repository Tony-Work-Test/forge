import { Injectable } from '@nestjs/common';
import { WorklogsService } from '../worklogs/worklogs.service';
import { UserService } from '../users/user.service';
import { User, Worklog } from '../import/interfaces';
import { createUserWorklogObjects, mapWorklogData } from './reports';

export interface WorklogDictionary
{
    userId: string;
    displayName: string;
    worklogs: Worklog[];
}

@Injectable()
export class ReportsService {
    constructor(
        private readonly userService: UserService,
        private readonly worklogsService: WorklogsService
    ) {}
    
    async getUsers(): Promise<User[]> {
        const users = await this.userService.getAllUsers();
        return users;
    }
    
    async getWorklogs() {
       
        const worklogs = await this.worklogsService.getAllWorklogs();
        return worklogs;
    }

    async getUserWorklogDictionary() {
        const initWorklogDictionary = await createUserWorklogObjects(await this.getUsers());
        const worklogDictionary = await mapWorklogData(initWorklogDictionary, await this.getWorklogs());

        return worklogDictionary;
    }
}
