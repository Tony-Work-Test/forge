import { Injectable } from '@nestjs/common';
import { PassportSerializer } from '@nestjs/passport';
import { JiraUser } from '../import/interfaces';

@Injectable()
export class SessionSerializer extends PassportSerializer {
  
  public serializeUser(user: JiraUser, done: (err: Error, user: JiraUser) => void): void {
    return done(null, user);
  }
// TODO: Verify what user data is needed for session 
  public deserializeUser(payload: string, done: (err: Error, payload: string) => void): void {
    return done(null, payload);
  }
}
