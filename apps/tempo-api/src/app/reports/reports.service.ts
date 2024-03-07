import { Injectable } from '@nestjs/common';
import { WorklogsService } from '../worklogs/worklogs.service';
import { UserService } from '../users/user.service';
import { FilteredWorklog, User, Worklog } from '../import/interfaces';
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
    
    async getWorklogs(): Promise<FilteredWorklog[]> {
        const worklogs = await this.worklogsService.getFilteredWorklogData();
        return worklogs;
    }

    async getUserWorklogDictionary(): Promise<WorklogDictionary[]>{
        const users = await this.getUsers();
        const initWorklogDictionary = await createUserWorklogObjects(users);
        const worklogs = await this.getWorklogs();
        const worklogDictionary = await mapWorklogData(initWorklogDictionary, worklogs);
        return worklogDictionary; 
    } 
}
