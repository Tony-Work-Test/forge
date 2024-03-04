import { Module } from '@nestjs/common';
import { TeamsController } from './teams.controller';
// import { TeamsService } from './teams.service';

@Module({
  controllers: [TeamsController],
  providers: [],
})
export class TeamsModule {}
