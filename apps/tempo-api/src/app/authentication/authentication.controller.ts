import { Controller,  UseGuards, Get } from '@nestjs/common';

import { LocalAuthGuard } from './local-auth.guard'
import { AuthenticationService } from './authentication.service';

@Controller('authentication')
export class AuthenticationController {
    constructor(private authService: AuthenticationService) {}

    // auth.controller.ts
@Get('auth/jira')
@UseGuards(new LocalAuthGuard('jira'))
jiraAuth() {
  // Passport handles the redirect
}
}

