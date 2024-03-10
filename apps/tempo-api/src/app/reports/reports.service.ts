import { Injectable } from '@nestjs/common';
import { WorklogsService } from '../worklogs/worklogs.service';
import { UserService } from '../users/user.service';
import { FilteredWorklog, User, WorklogDictionary} from '../import/interfaces';
import { createUserWorklogObjects, mapWorklogData } from './reports';
import { saveJsonToFile } from '../import/util';



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
    
    async getWorklogs(): Promise<any[]> {
        const worklogs = await this.worklogsService.getFilteredWorklogData();
        return worklogs;
    }

    async getUserWorklogDictionary(): Promise<WorklogDictionary[]>{
        const users = await this.getUsers();
        const initWorklogDictionary = await createUserWorklogObjects(users);
        const worklogs = await this.getWorklogs();
        const worklogDictionary = await mapWorklogData(initWorklogDictionary, worklogs);
        await saveJsonToFile(users, 'employees.json');
        /// await convertWorklogDictionaryToCsvAndSave(worklogDictionary, 'DRC-Finance-Sample.csv');
        return worklogDictionary; 
    } 
}
