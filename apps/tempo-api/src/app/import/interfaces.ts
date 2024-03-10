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
  export interface IssueBase {
    self: string;
    id: number;
  }
  
  export interface WorklogDictionary
{
    userId: string;
    displayName: string;
    worklogs: FilteredWorklog[];
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

  export interface Issue {
    expand: string;
    id: string;
    self: string;
    key: string;
    fields: Fields;
  }
  
  export interface Fields {
    parent?: Parent;
    customfield_13580: unknown; // Replace 'any' with more specific types as needed
    customfield_13460: unknown;
    // Include other fields as required
    customfield_13418: CustomField[];
    customfield_13317: CustomField[];
    customfield_13316: CustomField[];
    // Add other custom fields as needed
    issuetype: IssueType;
    project: Project;
    assignee: Assignee;
    reporter: Reporter;
    worklog: Worklog;
    status: Status;
    // Add other properties as required
  }
  export interface IFilteredData {
    id: string;
    key: string;
    parent?: string | null;
  }

  export interface FilteredWorklog {
    issue: IFilteredData;
    worklog: Worklog;
    parent: string | null;
  }
  
  interface Parent {
    id: string;
    key: string;
    self: string;
    fields: ParentFields;
  }
  
  interface ParentFields {
    summary: string;
    status: Status;
    priority: Priority;
    issuetype: IssueType;
  }
  
  interface CustomField {
    // Structure depends on the custom field's content
  }
  
  interface IssueType {
    self: string;
    id: string;
    description: string;
    iconUrl: string;
    name: string;
    subtask: boolean;
    avatarId: number;
    hierarchyLevel: number;
  }
  
  interface Project {
    self: string;
    id: string;
    key: string;
    name: string;
    projectTypeKey: string;
    simplified: boolean;
    avatarUrls: AvatarUrls;
  }
  
  interface Assignee {
    self: string;
    accountId: string;
    emailAddress: string;
    avatarUrls: AvatarUrls;
    displayName: string;
    active: boolean;
    timeZone: string;
    accountType: string;
  }
  
  interface Reporter {
    self: string;
    accountId: string;
    emailAddress: string;
    avatarUrls: AvatarUrls;
    displayName: string;
    active: boolean;
    timeZone: string;
    accountType: string;
  }
  


  
  interface Status {
    self: string;
    description: string;
    iconUrl: string;
    name: string;
    id: string;
    statusCategory: StatusCategory;
  }
  
  interface StatusCategory {
    self: string;
    id: number;
    key: string;
    colorName: string;
    name: string;
  }
  
  interface Priority {
    self: string;
    iconUrl: string;
    name: string;
    id: string;
  }
  
  