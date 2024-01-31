import { Controller, Get, Post, Delete, Param } from '@nestjs/common';
import { MockTeamsService } from './mock-teams.service';

@Controller('mock-teams')
export class MockTeamsController {
    constructor(private teamsService: MockTeamsService) {}

    @Get(':id/members')
    getTeamByID(@Param('id') teamId: string) {
      return this.teamsService.getTeamById(teamId);
    }

    @Get('members/getAll')
    getAllMembers() {
      return this.teamsService.getMockTeams();
    }

    @Delete(':id/members/delete')
    deleteTeamByID(@Param('id') teamId: string) {
      return this.teamsService.deleteMockTeam(teamId);
    }
}
