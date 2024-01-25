import { Module } from '@nestjs/common';
import { WorkloadController } from './workload.controller';

@Module({
  controllers: [WorkloadController]
})
export class WorkloadModule {}
