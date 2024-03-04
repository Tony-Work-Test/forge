import { User, Worklog } from "../import/interfaces";
import { WorklogDictionary } from "./reports.service";

export async function createUserWorklogObjects(users: User[]) {
    const userWorklogsDict: WorklogDictionary[] = users.map((user) => {
        return {
            userId: user.accountId,
            displayName: user.displayName,
            worklogs: [],
        };
    });
    return userWorklogsDict;
  }

export async function mapWorklogData(userWorklogsDict: WorklogDictionary[], worklogs: Worklog[]) {
    worklogs.map((worklog) => {
        const userWorklogDict = userWorklogsDict.find((userWorklogDict) => userWorklogDict.userId === worklog.author.accountId);
        if (userWorklogDict) {
            userWorklogDict.worklogs.push(worklog);
        }
    });
    console.log('userWorklogsDict', userWorklogsDict);
    return userWorklogsDict;
  }