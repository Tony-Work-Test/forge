import { Injectable } from '@nestjs/common';
import { GetAccounts, GetAccountTypes } from './accounts';

@Injectable()
export class AccountsService {

    async getAccountTypes() {
        return await GetAccountTypes();
    }

    async getAllAccounts() {
        return await GetAccounts();
    }
}
