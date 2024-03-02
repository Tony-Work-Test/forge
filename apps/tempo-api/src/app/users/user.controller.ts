import { Controller, Get, Param } from '@nestjs/common';
import { UserService } from './user.service';

@Controller('user')
export class UserController {
    constructor(private readonly userService: UserService) {}

    @Get('getAllUsers')
    getUsers() {
        return this.userService.getAllUsers();
    }

   @Get('groups:')
   getUserGroups(@Param() params: {userId: string}) {
    console.log('getUserGroups', params);
        return this.userService.getUserGroups(params.userId);
    }
}