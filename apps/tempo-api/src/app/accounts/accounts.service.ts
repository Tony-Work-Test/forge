import { Injectable } from '@nestjs/common';
import { GetAccounts, GetAccountTypes } from './accounts';

@Injectable()
export class AccountsService {

    async getAccountTypes() {
        return await GetAccountTypes().catch((e) => {
            console.error(e);
        return e;
        });

    }

    async getAllAccounts() {
        return await GetAccounts().catch((e) => {
            console.error(e);
            return e;
        });
    }
}
