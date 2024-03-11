import { Controller,  UseGuards, Get } from '@nestjs/common';


import { AuthenticationService } from './authentication.service';
import { OAuth2AuthGuard } from './Oauth-auth.guard';

@Controller('authentication')
export class AuthenticationController {
    constructor(private authService: AuthenticationService) {}

    // auth.controller.ts
@Get('auth/jira')
@UseGuards(OAuth2AuthGuard)
jiraAuth() {
  // Passport handles the redirect
}
}

