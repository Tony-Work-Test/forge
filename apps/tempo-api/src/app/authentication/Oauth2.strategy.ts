import { Injectable } from '@nestjs/common';
import { PassportStrategy } from '@nestjs/passport';
import { Strategy as OAuth2Strategy } from 'passport-oauth2';
@Injectable()

export class OAuthStrategy extends PassportStrategy(OAuth2Strategy, 'jira') {
  constructor() {
    super({
      authorizationURL: process.env.Authorization_URL || "",
      tokenURL: process.env.Token_URL || "",
      clientID: process.env.Client_ID || "", // Provided by Jira
      clientSecret: process.env.Client_Secret || "", // Provided by Jira
      callbackURL: process.env.Callback_URL || "",
      scope: process.env.Scope || "",
    });
  }
  
  async validate(accessToken: string, refreshToken: string, profile: unknown, done: (error: unknown, user?: unknown) => void): Promise<unknown> {
    // Here, you can handle the user information returned by Jira
    // For example, find or create the user in your database
    const user = { accessToken, refreshToken, profile };
    return done(null, user);
  }
}

// appID: 039227e5-7fa5-4d7d-8c14-ff340e6522bc

