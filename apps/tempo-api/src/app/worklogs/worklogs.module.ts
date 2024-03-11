import { Module } from '@nestjs/common';
import { WorklogsService } from './worklogs.service';
import { WorklogsController } from './worklogs.controller';

@Module({
  providers: [WorklogsService],
  controllers: [WorklogsController],
  exports: [WorklogsService],
})
export class WorklogsModule {}
