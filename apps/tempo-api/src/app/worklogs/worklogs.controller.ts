import { Controller, Get, Param } from '@nestjs/common';
import { WorklogsService } from './worklogs.service';

@Controller('worklogs')
export class WorklogsController {
    constructor(private readonly worklogService: WorklogsService) {}

    @Get(':userId')
    getWorklogs(@Param() params:{userId: string}) {
        return this.worklogService.getUserWorklogs(params.userId);
    }
}
