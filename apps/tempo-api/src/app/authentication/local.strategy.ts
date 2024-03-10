import { Injectable } from '@nestjs/common';
import { PassportStrategy } from '@nestjs/passport';
import { Strategy as OAuth2Strategy } from 'passport-oauth2';
@Injectable()

export class LocalStrategy extends PassportStrategy(OAuth2Strategy, 'jira') {
  constructor() {
    super({
      authorizationURL: 'https://auth.atlassian.com/authorize',
      tokenURL: 'https://auth.atlassian.com/oauth/token',
      clientID: 'YOUR_CLIENT_ID', // Provided by Jira
      clientSecret: 'YOUR_CLIENT_SECRET', // Provided by Jira
      callbackURL: 'http://yourapp.com/auth/jira/callback',
      scope: 'read:jira-user',
    });
  }
  async validate(accessToken: string, refreshToken: string, profile: any, done: (error: any, user?: any) => void): Promise<any> {
    // Here, you can handle the user information returned by Jira
    // For example, find or create the user in your database
    return done(null, profile);
  }
}

