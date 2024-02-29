import { Injectable } from '@nestjs/common';
import { GetUsersWorklogs } from './worklogs';

@Injectable()
export class WorklogsService {
    async getUserWorklogs(userId: string) {
        return await GetUsersWorklogs(userId);
    }
}
