import { Injectable } from '@nestjs/common';
import { GetAllWorklogs, GetUpdatedWork, GetUsersWorklogs, GetWorkAttributes } from './worklogs';

@Injectable()
export class WorklogsService {
    
    async getUserWorklogs(userId: string) {
        return await GetUsersWorklogs(userId);
    }

    async getWorkAttributes(){
        return await GetWorkAttributes();
    }

    async getUpdatedWorklogs(){
        return await GetUpdatedWork();
    }

    async getAllWorklogs() {
        return await GetAllWorklogs();
    }
}
