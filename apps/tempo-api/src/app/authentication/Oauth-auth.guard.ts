import { Get, Injectable, Req, Res, UseGuards } from '@nestjs/common';
import { AuthGuard } from '@nestjs/passport';

@Injectable()
export class OAuth2AuthGuard extends AuthGuard('jira') {
  // auth.controller.ts
  @Get('auth/jira')
  @UseGuards(AuthGuard('jira'))
  jiraAuth() {
    // Passport handles the redirect
  }

  @Get('auth/jira/callback')
  @UseGuards(AuthGuard('jira'))
  jiraAuthCallback(@Req() req, @Res() res) {
    // User is authenticated, redirect them to the desired location
    res.redirect('/profile');
  }
}
