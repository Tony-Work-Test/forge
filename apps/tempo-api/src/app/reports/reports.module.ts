import { Module } from '@nestjs/common';
import { ReportsController } from './reports.controller';
import { ReportsService } from './reports.service';
import { UserModule } from '../users/user.module';
import { WorklogsModule } from '../worklogs/worklogs.module';
import { WorklogsService } from '../worklogs/worklogs.service';
import { UserService } from '../users/user.service';


@Module({
  imports: [UserModule, WorklogsModule],
  controllers: [ReportsController],
  providers: [ReportsService, WorklogsService, UserService],
})
export class ReportsModule {}
