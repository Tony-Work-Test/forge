export interface AvatarUrls {
    '48x48': string;
    '24x24': string;
    '16x16': string;
    '32x32': string;
  }
  
  export interface User {
    self: string;
    accountId: string;
    accountType: string;
    emailAddress: string;
    avatarUrls: AvatarUrls;
    displayName: string;
    active: boolean;
    locale: string;
  }
  
  export interface UserCondensed {
    id: string;
    displayName: string;
  }

  export interface WorklogResponse {
    self: string;
    metadata: Metadata;
    results: Worklog[];
  }
  
  interface Metadata {
    count: number;
    offset: number;
    limit: number;
  }
  
  export interface Worklog {
    self: string;
    tempoWorklogId: number;
    issue: {
      self: string;
      id: number;
    };
    timeSpentSeconds: number;
    billableSeconds: number;
    startDate: string;
    startTime: string;
    description: string;
    createdAt: string;
    updatedAt: string;
    author: {
      self: string;
      accountId: string;
    };
  }
  export interface Issue {
    self: string;
    id: number;
  }
  
  export interface Author {
    self: string;
    accountId: string;
  }
  
  // interface WorklogAttributes {
  //   self: string;
  //   values: any[]; // Use a more specific type if the structure of values is known
  // }
  
  export interface WeeklyReport {
    date: string; // Represents the start date of the week
    worklogs: Worklog[];
  }
  
  export interface MonthlyReport {
    month: number; // Represents the month of the report (1-12)
    year: number; // Represents the year of the report
    weeklyReports: WeeklyReport[];
  }