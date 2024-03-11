import { Module } from '@nestjs/common';
import { AuthenticationService } from './authentication.service';
import { AuthenticationController } from './authentication.controller';

import { UserModule } from '../users/user.module';
import { PassportModule } from '@nestjs/passport';

import { SessionSerializer } from './session.serializer';


@Module({
  imports: [UserModule, PassportModule.register({ session: true })],
  providers: [AuthenticationService, SessionSerializer],
  controllers: [AuthenticationController],
})
export class AuthenticationModule {}
