import { Controller, Get, Param } from '@nestjs/common';
import { WorklogsService } from './worklogs.service';

@Controller('worklogs')
export class WorklogsController {
  constructor(private readonly worklogService: WorklogsService) {}
  @Get()
  getAllWorklogs() {
    return this.worklogService.getAllWorklogs();
  }

  @Get('attributes')
  getWorkAttributes() {
    console.log('getWorkAttributes');
    return this.worklogService.getWorkAttributes();
  }

  @Get('updated')
  getUpdatedWorklogs() {
    console.log('getUpdatedWorklogs');
    return this.worklogService.getUpdatedWorklogs();
  }

  @Get('filtered')
  getFilteredWorklogData() {
    console.log('filtered');
    return this.worklogService.getFilteredWorklogData();
  }

  @Get(':userId')
  getWorklogs(@Param() params: { userId: string }) {
    return this.worklogService.getUserWorklogs(params.userId);
  }
}
