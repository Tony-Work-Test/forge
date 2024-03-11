import { Module } from '@nestjs/common';
import { AuthenticationService } from './authentication.service';
import { AuthenticationController } from './authentication.controller';

import { UserModule } from '../users/user.module';
import { PassportModule } from '@nestjs/passport';
import { JwtService } from '@nestjs/jwt';

import { SessionSerializer } from './session.serializer';



@Module({
  imports: [UserModule, PassportModule.register({ session: true })],
  providers: [AuthenticationService, SessionSerializer, JwtService],
  controllers: [AuthenticationController],
  exports: [AuthenticationService],
})
export class AuthenticationModule {}
