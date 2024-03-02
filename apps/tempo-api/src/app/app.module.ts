import { Module } from '@nestjs/common';

import { AppController } from './app.controller';
import { AppService } from './app.service';
import { EmailService } from './export/csv-export';

import { UserModule } from './users/user.module';
import { WorklogsModule } from './worklogs/worklogs.module';
import { ProjectsModule } from './projects/projects.module';
import { AccountsModule } from './accounts/accounts.module';

@Module({
  imports: [UserModule, WorklogsModule, ProjectsModule, AccountsModule],
  controllers: [AppController],
  providers: [AppService, EmailService],
})
export class AppModule {}
