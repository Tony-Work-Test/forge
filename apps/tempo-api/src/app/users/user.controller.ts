import { Controller, Get, Param, UseGuards } from '@nestjs/common';
import { UserService } from './user.service';
import { AuthGuard } from '@nestjs/passport';

@Controller('user')
export class UserController {
    constructor(private readonly userService: UserService) {}

    @Get('getAllUsers')
    @UseGuards(AuthGuard('jira'))
    getUsers() {
        return this.userService.getAllUsers();
    }

   @Get('groups:')
   @UseGuards(AuthGuard('jira'))
   getUserGroups(@Param() params: {userId: string}) {
    console.log('getUserGroups', params);
        return this.userService.getUserGroups(params.userId);
    }
}