import { Module } from '@nestjs/common';
import { WorkloadService } from './workload.service';

@Module({
  providers: [WorkloadService],
  exports: [WorkloadService],
})
export class WorkloadModule {}
