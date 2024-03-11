import { Injectable } from '@nestjs/common';

import { GetAllUsers } from './users/users';


@Injectable()
export class AppService {

  constructor() {}

  getData(): { message: string } {
    return { message: 'Hello API' };
  }

  async getAllUsers(): Promise<unknown> {
    return  GetAllUsers();
  }

  
  
}
