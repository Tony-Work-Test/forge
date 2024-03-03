import { Injectable } from '@nestjs/common'
import { UserService } from '../users/user.service'
import { WorklogsService } from '../worklogs/worklogs.service'
@Injectable()
export class TeamsService {

    constructor(private readonly userService: UserService, private readonly worklogsService: WorklogsService) {}
    
    // async getTeamMembers(teamId: string) {
    //     const users = await this.userService.getAllUsers()
    //     const teamMembers = users.filter(user => user.teamId === teamId)
    //     return teamMembers
    // }
    
    // async getTeamWorklogs(teamId: string) {
    //     const teamMembers = await this.getTeamMembers(teamId)
    //     const worklogs = await this.worklogsService.getAllWorklogs()
    //     const teamWorklogs = worklogs.filter(worklog => teamMembers.some(member => member.id === worklog.userId))
    //     return teamWorklogs
    // }
}
