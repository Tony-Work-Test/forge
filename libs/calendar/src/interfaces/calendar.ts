export interface IHolidaySchemesResponse {
  metadata: {
    count: number;
  };
  results: IHolidayScheme[];
  self: string;
}

export interface IHolidayScheme {
  id: number;
  name: string;
  self: string;
  memberCount: number;
  description: string;
  defaultScheme: boolean;
}

export interface ICreateHolidaySchemePayload {
  name: string;
  description: string;
}

export interface IGetGHolidaysResponse {  
  metadata: {
    count: number;
  };
  results: IHoliday[];
  self: string;
}

export interface IHoliday {
  date: string;
  description: string;
  durationSeconds: number;
  id: number;
  name: string;
  schemeId: number;
  self: string;
  type: string;
}

export interface ICreateHolidayPayload {
  date: string;
  description: string;
  durationSeconds: number;
  name: string;
  schemeId: number;
  type: string;
}

export interface IGetMembersInHolidaySchemeResponse {
  metadata: {
    count: number;
    limit: number;
    next: string;
    offset: number;
    previous: string;
  };
  results: IMemberInHolidayScheme[];
  self: string;
}

export interface IMemberInHolidayScheme {
  accountId: string;
  self: string;
} 

export interface IAddMemberToHolidaySchemePayload {
  accountIds: string[];
}

export interface IApiResponse {
  message: string;
  statusCode: number;
}
