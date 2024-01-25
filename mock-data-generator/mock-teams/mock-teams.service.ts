import { Injectable } from '@nestjs/common';
import {
  IGetAllTeamsResponse,
  IPostTeamsResponse,
  ITeamsPayload,
  IApiResponse,
  ITeamLinkByProjectResponse
} from 'src/interfaces/teams';

@Injectable()
export class MockTeamsService {

  getMockTeams(): IGetAllTeamsResponse {
    const response: IGetAllTeamsResponse = {
      metadata: {
        count: 1,
        limit: 50,
        next: 'https://api.tempo.io/[...]',
        offset: 0,
        previous: 'https://api.tempo.io/[...]',
      },
      results: [
        {
          administrative: true,
          id: 123,
          lead: {
            accountId: '123456:01234567-89ab-cdef-0123-456789abcdef',
            self: 'https://api.tempo.io/[...]',
          },
          links: {
            self: 'https://api.tempo.io/[...]',
          },
          members: {
            self: 'https://api.tempo.io/[...]',
          },
          name: 'Team Alpha',
          permissions: {
            self: 'https://api.tempo.io/[...]',
          },
          program: {
            id: 100201,
            name: 'Program new Customer',
            self: 'https://api.tempo.io/[...]',
          },
          self: 'https://api.tempo.io/[...]',
          summary: 'Team created to solve the challenges in the company',
        },
      ],
      self: 'https://api.tempo.io/[...]',
    };
    return response;
  }

  createMockTeam(payload: ITeamsPayload): IPostTeamsResponse | IApiResponse {
    if (payload) {
      const response: IPostTeamsResponse = {
        administrative: true,
        id: 123,
        lead: {
          accountId: '123456:01234567-89ab-cdef-0123-456789abcdef',
          self: 'https://api.tempo.io/[...]',
        },
        links: {
          self: 'https://api.tempo.io/[...]',
        },
        members: {
          self: 'https://api.tempo.io/[...]',
        },
        name: 'Team Alpha',
        permissions: {
          self: 'https://api.tempo.io/[...]',
        },
        program: {
          id: 100201,
          name: 'Program new Customer',
          self: 'https://api.tempo.io/[...]',
        },
        self: 'https://api.tempo.io/[...]',
        summary: 'Team created to solve the challenges in the company',
      };
      return response;
    } else {
      const response: IApiResponse = {
        statusCode: 400,
        message: 'Team cannot be created for some reasons.',
      };
      return response;
    }
  }

  deleteMockTeam(id: number): IApiResponse {
    if (id) {
      const response: IApiResponse = {
        statusCode: 204,
        message: 'Team deleted successfully.',
      };
      return response;
    } else {
      const response: IApiResponse = {
        statusCode: 400,
        message: 'Team cannot be deleted for some reasons.',
      };
      return response;
    }
  }

getTeamById(id: number): IPostTeamsResponse | IApiResponse{
    if (id) {
    const response: IPostTeamsResponse = {
        "administrative": true,
        "id": 123,
        "lead": {
          "accountId": "123456:01234567-89ab-cdef-0123-456789abcdef",
          "self": "https://api.tempo.io/[...]"
        },
        "links": {
          "self": "https://api.tempo.io/[...]"
        },
        "members": {
          "self": "https://api.tempo.io/[...]"
        },
        "name": "Team Alpha",
        "permissions": {
          "self": "https://api.tempo.io/[...]"
        },
        "program": {
          "id": 100201,
          "name": "Program new Customer",
          "self": "https://api.tempo.io/[...]"
        },
        "self": "https://api.tempo.io/[...]",
        "summary": "Team created to solve the challenges in the company"
      }

    return response;
    } else {
      const response: IApiResponse = {
        statusCode: 404,
        message: "Team not Found"
      }
      return response;
    }

    }

    updateTeamById(id: number, payload: ITeamsPayload): IPostTeamsResponse | IApiResponse{
      if (id && payload) {
        const response: IPostTeamsResponse = {
          "administrative": true,
          "id": 123,
          "lead": {
            "accountId": "123456:01234567-89ab-cdef-0123-456789abcdef",
            "self": "https://api.tempo.io/[...]"
          },
          "links": {
            "self": "https://api.tempo.io/[...]"
          },
          "members": {
            "self": "https://api.tempo.io/[...]"
          },
          "name": "Team Alpha",
          "permissions": {
            "self": "https://api.tempo.io/[...]"
          },
          "program": {
            "id": 100201,
            "name": "Program new Customer",
            "self": "https://api.tempo.io/[...]"
          },
          "self": "https://api.tempo.io/[...]",
          "summary": "Team created to solve the challenges in the company"
        }
        return response;
      } else {
        const response: IApiResponse = {
          statusCode: 404,
          message: "Team not Found"
        }
        return response;
      }
    }


    getTeamLinksByTeamId(id: number): ITeamLinkByProjectResponse | IApiResponse {
      if (id) {
        const response: ITeamLinkByProjectResponse = {
          "metadata": {
            "count": 1,
            "limit": 50,
            "next": "https://api.tempo.io/[...]",
            "offset": 0,
            "previous": "https://api.tempo.io/[...]"
          },
          "results": [
            {
              "id": 123,
              "scope": {
                "id": 100201,
                "name": "Program new Customer",
                "self": "https://api.tempo.io/[...]"
              },
              "self": "https://api.tempo.io/[...]",
              "team": {
                "administrative": true,
                "id": 123,
                "lead": {
                  "accountId": "123456:01234567-89ab-cdef-0123-456789abcdef",
                  "self": "https://api.tempo.io/[...]"
                },
                "links": {
                  "self": "https://api.tempo.io/[...]"
                },
                "members": {
                  "self": "https://api.tempo.io/[...]"
                },
                "name": "Team Alpha",
                "permissions": {
                  "self": "https://api.tempo.io/[...]"
                },
                "program": {
                  "id": 100201,
                  "name": "Program new Customer",
                  "self": "https://api.tempo.io/[...]"
                },
                "self": "https://api.tempo.io/[...]",
                "summary": "Team created to solve the challenges in the company"
              }
            }
          ],
          "self": "https://api.tempo.io/[...]"
        }
        return response;
      } else {
        const response: IApiResponse = {
          statusCode: 404,
          message: "Team not Found"
        }
        return response;
      }
    }

    getTeamMembersByTeamId(id: number): IActiveTeamMemberResults | IApiResponse {
      if (id) {
        const response: IActiveTeamMemberResults = {
          "metadata": {
            "count": 1,
            "limit": 50,
            "next": "https://api.tempo.io/[...]",
            "offset": 0,
            "previous": "https://api.tempo.io/[...]"
          },
          "results": [
            {
              "commitmentPercent": 100,
              "from": "2020-01-01",
              "id": 123,
              "member": {
                "accountId": "123456:01234567-89ab-cdef-0123-456789abcdef",
                "self": "https://api.tempo.io/[...]"
              },
              "role": {
                "id": 123,
                "name": "Team Member",
                "self": "https://api.tempo.io/[...]"
              },
              "self": "https://api.tempo.io/[...]",
              "team": {
                "administrative": true,
                "id": 123,
                "lead": {
                  "accountId": "123456:01234567-89ab-cdef-0123-456789abcdef",
                  "self": "https://api.tempo.io/[...]"
                },
                "links": {
                  "self": "https://api.tempo.io/[...]"
                },
                "members": {
                  "self": "https://api.tempo.io/[...]"
                },
                "name": "Team Alpha",
                "permissions": {
                  "self": "https://api.tempo.io/[...]"
                },
                "program": {
                  "id": 100201,
                  "name": "Program new Customer",
                  "self": "https://api.tempo.io/[...]"
                },
                "self": "https://api.tempo.io/[...]",
                "summary": "Team created to solve the challenges in the company"
              },
              "to": "2020-12-31"
            }
          ],
          "self": "https://api.tempo.io/[...]"
        }
        return response;
      } else {
        const response: IApiResponse = {
          statusCode: 404,
          message: "Team not Found"
        }
        return response;
      }
    }
}
