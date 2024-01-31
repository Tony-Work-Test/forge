export interface IGetAllTeamsResponse {
  metadata: ITeamMetadata;
  results: ITeamsResults[];
  self: string;
}

export interface ITeamsPayload {
  administrative: boolean;
  leadAccountId: string;
  name: string;
  programId: number;
  public: boolean;
  summary: string;
}

export interface IPostTeamsResponse {
  administrative: boolean;
  id: number;
  lead: IPostTeamLead;
  links: IPostTeamsLinks;
  members: IPostTeamsLinks;
  name: string;
  permissions: IPostTeamsLinks;
  program: IPostTeamsProgram;
  self: string;
  summary: string;
}

export interface IApiResponse {
  message: string;
  statusCode: number;
}

export interface ITeamLinkPayload {
  scopeId: number;
  scopeType: string;
  teamId: number;
}

export interface ITeamLinkResponse {
  id: number;
  scope: ITeamLinkScope;
  self: string;
  team: ITeam;
}

export interface ITeamLinkByProjectResponse {
  metadata: ITeamLinkMetadata;
  results: ITeamLinkResponse[];
  self: string;
}

export interface ITeamMembershipPayload {
  accountId: string;
  commitmentPercent: number;
  from: string;
  roleId: number;
  teamId: number;
  to: string;
}

export interface ITeamMembershipResponse {
  commitmentPercent: number;
  from: string;
  id: number;
  member: ITeamMember;
  role: ITeamMembershipRole;
  self: string;
  team: ITeamLink;
  to: string;
}

export interface IMembershipForTeamResponse {
  metadata: ITeamMembershipMetadata;
  results: ITeamMembershipResponse[];
  self: string;
}

export interface IMembershipResponse {
  commitmentPercent: number;
  from: string;
  id: number;
  member: ITeamMember;
  role: ITeamMembershipRole;
  self: string;
  team: ITeamLink;
  to: string;
}

export interface ITeamMembershipUpdatePayload {
  commitmentPercent: number;
  from: string;
  roleId: number;
  to: string;
}

export interface ITeamMemberByTeamResponse {
    metadata: ITeamMembersMetadata;
    results: ITeamMember[];
}

export interface IActiveTeamMemberResponse {
    metadata: ITeamMembersMetadata;
    results: IActiveTeamMemberResults[];
    self: string;
}

export interface IUpdateMembershipPayload {
  commitmentPercent: number;
  from: string;
  roleId: number;
  to: string;
}

export interface ICreateTeamLinkPayload {
  scopeId: number;
  scopeType: string;
  teamId: number;
}

export interface ICreateTeamLinkResponse {
  id: number;
  scope: ITeamLinkScope;
  self: string;
  team: ITeam;
}
export interface ICreateTeamMemberResponse {
  commitmentPercent: number;
  from: string;
  id: number;
  member: ITeamMember;
  role: ITeamMembershipRole;
  self: string;
  team: ITeamLink;
  to: string;
}

export interface IGetTeamMembershipsResponse {
  metadata: ITeamMembershipMetadata;
  results: IMembershipResponse[];
  self: string;
}

interface ITeamMetadata {
  count: number;
  limit: number;
  next: string;
  offset: number;
  previous: string;
}

interface ITeamsResults {
  administrative: boolean;
  id: number;
  lead: {
    accountId: string;
    self: string;
  };
  links: {
    self: string;
  };
  members: {
    self: string;
  };
  name: string;
  permissions: {
    self: string;
  };
  program: {
    id: number;
    name: string;
    self: string;
  };
  self: string;
  summary: string;
}
interface IPostTeamLead {
  accountId: string;
  self: string;
}
interface IPostTeamsLinks {
  self: string;
}
interface IPostTeamsProgram {
  id: number;
  name: string;
  self: string;
}

interface ITeamLinkScope {
  id: number;
  type: string;
  self: string;
}

interface ITeamLeadLink {
  accountId: string;
  self: string;
}

interface ITeam {
  administrative: boolean;
  id: number;
  lead: ITeamLeadLink;
  links: IPostTeamsLinks;
  members: IPostTeamsLinks;
  name: string;
  permissions: IPostTeamsLinks;
  program: ITeamLinkProgram;
  self: string;
  summary: string;
}

interface ITeamLinkProgram {
  id: number;
  name: string;
  self: string;
}
interface ITeamLinkMetadata {
  count: number;
}

interface ITeamMembershipRole {
  id: number;
  name: string;
  self: string;
}

interface ITeamMember {
  accountId: string;
  self: string;
}
interface ITeamLink {
  id: number;
  name: string;
  self: string;
}

interface ITeamMembershipMetadata {
  count: number;
}

interface ITeamMembersMetadata {
    count: number;
    limit: number;
    next: string;
    offset: number;
    previous: string;
}

interface IActiveTeamMemberResults {
    member: ITeamMember;
    memberships:IActiveMemberships;
    team: ITeamLink;
}

interface IActiveMemberships {
    active: IActiveTeamMemberResults;
    self: string;
}
export interface IGetMemberByIDResponse {
  commitmentPercent: number;
  from: string;
  id: number;
  member: {
    accountId: string;
    self: string;
  };
  role: {
    id: number;
    name: string;
    self: string;
  };
  self: string;
  team: {
    id: number;
    name: string;
    self: string;
  };
  to: string;
}
