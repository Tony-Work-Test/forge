import { Module } from '@nestjs/common';

import { AppController } from './app.controller';
import { AppService } from './app.service';
import { EmailService } from './export/csv-export';

import { UserModule } from './users/user.module';
import { WorklogsModule } from './worklogs/worklogs.module';
import { ProjectsModule } from './projects/projects.module';
import { AccountsModule } from './accounts/accounts.module';
import { TeamsModule } from './teams/teams.module';
import { ReportsModule } from './reports/reports.module';
import { AuthenticationModule } from './authentication/authentication.module';

@Module({
  imports: [
    UserModule,
    WorklogsModule,
    ProjectsModule,
    AccountsModule,
    TeamsModule,
    ReportsModule,
    AuthenticationModule,
  ],
  controllers: [AppController],
  providers: [AppService, EmailService],
})
export class AppModule {}
