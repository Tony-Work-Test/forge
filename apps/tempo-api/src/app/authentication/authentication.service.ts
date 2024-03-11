import { Injectable } from '@nestjs/common';
import { JwtService } from '@nestjs/jwt';
import { UserService } from '../users/user.service';
import { JiraUser } from '../import/interfaces';

@Injectable()
export class AuthenticationService {

    constructor(
        private usersService: UserService,
        private jwtService: JwtService
    ) {}
    
   public async validateUser(email: string): Promise<JiraUser> {
        const user = await this.usersService.getUserByEmail(email);
        if (user) {
        const groups = user.groups.items.find(group => group.name === process.env.JIRA_ADMIN_GROUP);
        if (groups) {
            return user;
        } else{
            return null;
        }
    
        }
        return null;
    }
    
   public async login(user: JiraUser) {
        const payload = { username: user.displayName, sub: user.accountId };
        return {
        access_token: this.jwtService.sign(payload),
        };
    }
}
