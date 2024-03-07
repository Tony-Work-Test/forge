import { Injectable } from '@nestjs/common';
import { GetAllWorklogs, GetUpdatedWork, GetUsersWorklogs, GetWorkAttributes, restructureIssueData } from './worklogs';
import { FilteredWorklog } from '../import/interfaces';
import convertSecondsToHours from '../import/util';

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

    async getFilteredWorklogData(){
        const worklogs = await GetAllWorklogs();
        const filteredData = worklogs.map(async (worklog) => {
            const issueData = await restructureIssueData(worklog.issue.id.toString());
            worklog.timeSpentSeconds = convertSecondsToHours(worklog.timeSpentSeconds);
            worklog.billableSeconds = convertSecondsToHours(worklog.billableSeconds);
           // TODO: (Code Cleanup) convert Var name to billableHours and timeSpentHours
            const filteredWorklog: FilteredWorklog = {
                issue: issueData,
                worklog: worklog,
                parent: issueData.parent ?? null
            }
            return filteredWorklog
        });
        const data = await Promise.all(filteredData);
        return data;
    }
}
