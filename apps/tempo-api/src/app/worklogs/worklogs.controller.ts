import { Controller, Get, Param, UseGuards } from '@nestjs/common';
import { WorklogsService } from './worklogs.service';
import { AuthGuard } from '@nestjs/passport';

@Controller('worklogs')
export class WorklogsController {
  constructor(private readonly worklogService: WorklogsService) {}
  @Get()
  @UseGuards(AuthGuard('jira'))
  getAllWorklogs() {
    return this.worklogService.getAllWorklogs();
  }

  @Get('attributes')
  @UseGuards(AuthGuard('jira'))
  getWorkAttributes() {
    console.log('getWorkAttributes');
    return this.worklogService.getWorkAttributes();
  }

  @Get('updated')
  @UseGuards(AuthGuard('jira'))
  getUpdatedWorklogs() {
    console.log('getUpdatedWorklogs');
    return this.worklogService.getUpdatedWorklogs();
  }

  @Get('filtered')
  @UseGuards(AuthGuard('jira'))
  getFilteredWorklogData() {
    console.log('filtered');
    return this.worklogService.getFilteredWorklogData();
  }

  @Get(':userId')
  @UseGuards(AuthGuard('jira'))
  getWorklogs(@Param() params: { userId: string }) {
    return this.worklogService.getUserWorklogs(params.userId);
  }
}
