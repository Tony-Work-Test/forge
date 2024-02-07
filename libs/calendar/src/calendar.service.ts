import { Injectable } from '@nestjs/common';
import {
  ICreateHolidayPayload,
  IHolidaySchemesResponse,
  IApiResponse,
} from './interfaces/calendar';

@Injectable()
export class CalendarService {
  // Holiday Schemes

  getHolidaySchemes(): IHolidaySchemesResponse {
    const response: IHolidaySchemesResponse = {
      metadata: {
        count: 1,
      },
      results: [
        {
          defaultScheme: true,
          description: 'Default holiday scheme for all employees',
          id: 1,
          memberCount: 67,
          name: 'Default Holiday Scheme',
          self: 'https://api.tempo.io/[...]',
        },
      ],
      self: 'https://api.tempo.io/[...]',
    };
    return response;
  }

  addHolidayScheme(
    payload: ICreateHolidayPayload
  ): IHolidaySchemesResponse | IApiResponse {
    if (payload) {
      const response: IHolidaySchemesResponse = {
        metadata: {
          count: 1,
        },
        results: [
          {
            defaultScheme: true,
            description: 'Default holiday scheme for all employees',
            id: 1,
            memberCount: 67,
            name: 'Default Holiday Scheme',
            self: 'https://api.tempo.io/[...]',
          },
        ],
        self: 'https://api.tempo.io/[...]',
      };
      return response;
    } else {
      const response: IApiResponse = {
        message: 'Holiday scheme not created',
        statusCode: 400,
      };
      return response;
    }

  }

  
}
