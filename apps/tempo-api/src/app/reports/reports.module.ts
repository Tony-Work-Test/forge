import { Module } from '@nestjs/common';
import { ReportsController } from './reports.controller';
import { ReportsService } from './reports.service';
import { UserModule } from '../users/user.module';
import { WorklogsModule } from '../worklogs/worklogs.module';



@Module({
  imports: [UserModule, WorklogsModule],
  controllers: [ReportsController],
  providers: [ReportsService],
})
export class ReportsModule {}
