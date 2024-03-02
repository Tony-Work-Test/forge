import { Controller, Get } from '@nestjs/common';
import { AccountsService } from './accounts.service';

@Controller('accounts')
export class AccountsController {
    constructor(private readonly accountService: AccountsService) {}

    @Get("types")
    getAccountTypes() {
        return this.accountService.getAccountTypes();
    }

    @Get("allAccounts")
    getAllAccounts() {
        return this.accountService.getAllAccounts();
    }
}
