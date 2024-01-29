import { Injectable } from '@nestjs/common';
import {
  IGetAllTeamsResponse,
  IPostTeamsResponse,
  ITeamsPayload,
  IApiResponse,
  ITeamLinkByProjectResponse,
  IActiveTeamMemberResponse,
  IGetMemberByIDResponse,
  IUpdateMembershipPayload,
  ICreateTeamLinkPayload,
  ICreateTeamLinkResponse,
  ICreateTeamMemberResponse,
  IGetTeamMembershipsResponse
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
            "count": 1
          },
          "results": [
            {
              "id": 100201,
              "scope": {
                "id": 100201,
                "self": "https://api.tempo.io/[...]",
                "type": "BOARD"
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

    getTeamMembersByTeamId(id: number): IGetMemberByIDResponse | IApiResponse {
      if (id) {
        const response: IGetMemberByIDResponse = {
          "commitmentPercent": 50,
          "from": "2019-08-24",
          "id": 2,
          "member": {
            "accountId": "123456:01234567-89ab-cdef-0123-456789abcdef",
            "self": "https://api.tempo.io/[...]"
          },
          "role": {
            "id": 2,
            "name": "Developer",
            "self": "https://api.tempo.io/[...]"
          },
          "self": "https://api.tempo.io/[...]",
          "team": {
            "id": 12345,
            "name": "Team new adventure",
            "self": "https://api.tempo.io/[...]"
          },
          "to": "2019-08-24"
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

    updateTeamMemberById( payload: IUpdateMembershipPayload): IGetMemberByIDResponse | IApiResponse {
      if (payload) {
        const response: IGetMemberByIDResponse = {
          "commitmentPercent": 50,
          "from": "2019-08-24",
          "id": 2,
          "member": {
            "accountId": "123456:01234567-89ab-cdef-0123-456789abcdef",
            "self": "https://api.tempo.io/[...]"
          },
          "role": {
            "id": 2,
            "name": "Developer",
            "self": "https://api.tempo.io/[...]"
          },
          "self": "https://api.tempo.io/[...]",
          "team": {
            "id": 12345,
            "name": "Team new adventure",
            "self": "https://api.tempo.io/[...]"
          },
          "to": "2019-08-24"
        }
      
        return response;
      } else {
        const response: IApiResponse = {
          statusCode: 404,
          message: "Member not Found"
        }
        return response;
      }
    }

    createTeamLink(payload: ICreateTeamLinkPayload): ICreateTeamLinkResponse | IApiResponse {
      if (payload) {
        const response: ICreateTeamLinkResponse = {
          "id": 100201,
          "scope": {
            "id": 100201,
            "self": "https://api.tempo.io/[...]",
            "type": "BOARD"
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
        return response;
      } else {
        const response: IApiResponse = {
          statusCode: 404,
          message: "Team not Found"
        }
        return response;
      }
      
    }

    deleteTeamLink(id: number): IApiResponse {
      if (id) {
        const response: IApiResponse = {
          statusCode: 204,
          message: "Team Link deleted successfully"
        }
        return response;
      } else {
        const response: IApiResponse = {
          statusCode: 404,
          message: "Team Link not Found"
        }
        return response;
      }
    }

    getTeamLinkByProjectId(id: number): ITeamLinkByProjectResponse | IApiResponse {
      if (id) {
        const response: ITeamLinkByProjectResponse = {
          "metadata": {
            "count": 1
          },
          "results": [
            {
              "id": 100201,
              "scope": {
                "id": 100201,
                "self": "https://api.tempo.io/[...]",
                "type": "BOARD"
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

    getTeamLinkByLinkId(id: number): ICreateTeamLinkResponse | IApiResponse {
      if (id) {
        const response: ICreateTeamLinkResponse = {
          "id": 100201,
          "scope": {
            "id": 100201,
            "self": "https://api.tempo.io/[...]",
            "type": "BOARD"
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
        return response;
      } else {
        const response: IApiResponse = {
          statusCode: 404,
          message: "Team Link not Found"
        }
        return response;
      }
    }

    createTeamMember(payload: ICreateTeamMemberResponse): ICreateTeamMemberResponse | IApiResponse {
      if (payload) {
        const response: ICreateTeamMemberResponse = {
          "commitmentPercent": 50,
          "from": "2019-08-24",
          "id": 2,
          "member": {
            "accountId": "123456:01234567-89ab-cdef-0123-456789abcdef",
            "self": "https://api.tempo.io/[...]"
          },
          "role": {
            "id": 2,
            "name": "Developer",
            "self": "https://api.tempo.io/[...]"
          },
          "self": "https://api.tempo.io/[...]",
          "team": {
            "id": 12345,
            "name": "Team new adventure",
            "self": "https://api.tempo.io/[...]"
          },
          "to": "2019-08-24"
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

    getMembershipsByTeamId(id: number): IGetTeamMembershipsResponse | IApiResponse {
      if (id) {
        const response: IGetTeamMembershipsResponse = {
          "metadata": {
            "count": 1
          },
          "results": [
            {
              "commitmentPercent": 50,
              "from": "2019-08-24",
              "id": 2,
              "member": {
                "accountId": "123456:01234567-89ab-cdef-0123-456789abcdef",
                "self": "https://api.tempo.io/[...]"
              },
              "role": {
                "id": 2,
                "name": "Developer",
                "self": "https://api.tempo.io/[...]"
              },
              "self": "https://api.tempo.io/[...]",
              "team": {
                "id": 12345,
                "name": "Team new adventure",
                "self": "https://api.tempo.io/[...]"
              },
              "to": "2019-08-24"
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

    deleteTeamMember(id: number): IApiResponse {
      if (id) {
        const response: IApiResponse = {
          statusCode: 204,
          message: "Team Member deleted successfully"
        }
        return response;
      } else {
        const response: IApiResponse = {
          statusCode: 404,
          message: "Team Member not Found"
        }
        return response;
      }
    }

    getMembershipsByMemberId(id: number): IGetTeamMembershipsResponse | IApiResponse {
      if (id) {
        const response: IGetTeamMembershipsResponse = {
          "metadata": {
            "count": 1
          },
          "results": [
            {
              "commitmentPercent": 50,
              "from": "2019-08-24",
              "id": 2,
              "member": {
                "accountId": "123456:01234567-89ab-cdef-0123-456789abcdef",
                "self": "https://api.tempo.io/[...]"
              },
              "role": {
                "id": 2,
                "name": "Developer",
                "self": "https://api.tempo.io/[...]"
              },
              "self": "https://api.tempo.io/[...]",
              "team": {
                "id": 12345,
                "name": "Team new adventure",
                "self": "https://api.tempo.io/[...]"
              },
              "to": "2019-08-24"
            }
          ],
          "self": "https://api.tempo.io/[...]"
        }
        return response;
      } else {
        const response: IApiResponse = {
          statusCode: 404,
          message: "Member not Found"
        }
        return response;
      }
    }

    updateMembershipByMemberId(payload: IUpdateMembershipPayload): IGetTeamMembershipsResponse | IApiResponse {
      if (payload) {
        const response: IGetTeamMembershipsResponse = {
          "metadata": {
            "count": 1
          },
          "results": [
            {
              "commitmentPercent": 50,
              "from": "2019-08-24",
              "id": 2,
              "member": {
                "accountId": "123456:01234567-89ab-cdef-0123-456789abcdef",
                "self": "https://api.tempo.io/[...]"
              },
              "role": {
                "id": 2,
                "name": "Developer",
                "self": "https://api.tempo.io/[...]"
              },
              "self": "https://api.tempo.io/[...]",
              "team": {
                "id": 12345,
                "name": "Team new adventure",
                "self": "https://api.tempo.io/[...]"
              },
              "to": "2019-08-24"
            }
          ],
          "self": "https://api.tempo.io/[...]"
        }
        return response;
      } else {
        const response: IApiResponse = {
          statusCode: 404,
          message: "Member not Found"
        }
        return response;
      }
    }
}
