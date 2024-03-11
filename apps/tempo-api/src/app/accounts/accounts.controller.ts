import { Controller, Get, UseGuards } from '@nestjs/common';
import { AccountsService } from './accounts.service';
import { AuthGuard } from '@nestjs/passport';

@Controller('accounts')
export class AccountsController {
    constructor(private readonly accountService: AccountsService) {}

    @Get("types")
    @UseGuards(AuthGuard('jira'))
    getAccountTypes() {
        return this.accountService.getAccountTypes();
    }

    @Get("allAccounts")
    @UseGuards(AuthGuard('jira'))
    getAllAccounts() {
        return this.accountService.getAllAccounts();
    }
}
