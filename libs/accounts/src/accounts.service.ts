import { Injectable } from '@nestjs/common';
import {
  IAccountPayload,
  IApiResponse,
  ICreateAccountLinkPayload,
  ICreateAccountLinkResponse,
  ICreateAccountResponse,
  ICreateCategoryPayload,
  ICreateCategoryResponse,
  IGetAccountByIdResponse,
  IGetAccountLinksByAccountIdResponse,
  IGetAccountLinksByIdResponse,
  IGetAccountLinksByProjectIdResponse,
  IGetAccountsResponse,
  ISearchAccountsPayload,
  ISearchAccountsResponse,
  IUpdateAccountResponse,
} from '../interfaces/accounts';

@Injectable()
export class AccountsService {
  // Accounts

  getAllMockAccounts(): IGetAccountsResponse {
    const response: IGetAccountsResponse = {
      metadata: {
        count: 1,
        limit: 50,
        next: 'https://api.tempo.io/[...]',
        offset: 0,
        previous: 'https://api.tempo.io/[...]',
      },
      results: [
        {
          category: {
            id: 14,
            key: '300',
            name: 'Development',
            self: 'https://api.tempo.io/[...]',
            type: {
              name: 'BILLABLE',
            },
          },
          contact: {
            accountId: '1111aaaa2222bbbb3333cccc',
            self: 'https://api.tempo.io/[...]',
            type: 'USER',
          },
          customer: {
            id: 234,
            key: 'CLOUDBAY_DEVELOPMENT',
            name: 'Cloudbay: Development',
            self: 'https://api.tempo.io/[...]',
          },
          global: false,
          id: 7,
          key: 'CLOUDBAY_DEVELOPMENT',
          lead: 'The lead of the `Account`',
          links: {
            self: 'https://api.tempo.io/[...]',
          },
          monthlyBudget: 600,
          name: 'Cloudbay: Development',
          self: 'https://api.tempo.io/[...]',
          status: 'OPEN',
        },
      ],
      self: 'https://api.tempo.io/[...]',
    };
    return response;
  }

  createMockAccount(
    payload: IAccountPayload
  ): ICreateAccountResponse | IApiResponse {
    if (payload) {
      const response: ICreateAccountResponse = {
        category: {
          id: 14,
          key: '300',
          name: 'Development',
          self: 'https://api.tempo.io/[...]',
          type: {
            name: 'BILLABLE',
          },
        },
        contact: {
          accountId: '1111aaaa2222bbbb3333cccc',
          self: 'https://api.tempo.io/[...]',
          type: 'USER',
        },
        customer: {
          id: 234,
          key: 'CLOUDBAY_DEVELOPMENT',
          name: 'Cloudbay: Development',
          self: 'https://api.tempo.io/[...]',
        },
        global: false,
        id: 7,
        key: 'CLOUDBAY_DEVELOPMENT',
        lead: 'The lead of the `Account`',
        links: {
          self: 'https://api.tempo.io/[...]',
        },
        monthlyBudget: 600,
        name: 'Cloudbay: Development',
        self: 'https://api.tempo.io/[...]',
        status: 'OPEN',
      };
      return response;
    } else {
      const response: IApiResponse = {
        statusCode: 400,
        message: 'Account cannot be created for some reasons.',
      };
      return response;
    }
  }

  deleteMockAccount(id: string): IApiResponse {
    if (id) {
      const response: IApiResponse = {
        statusCode: 204,
        message: 'Account deleted successfully.',
      };
      return response;
    } else {
      const response: IApiResponse = {
        statusCode: 400,
        message: 'Account cannot be deleted for some reasons.',
      };
      return response;
    }
  }

  getAccountById(id: string): IGetAccountByIdResponse | IApiResponse {
    if (id) {
      const response: IGetAccountByIdResponse = {
        category: {
          id: 14,
          key: '300',
          name: 'Development',
          self: 'https://api.tempo.io/[...]',
          type: {
            name: 'BILLABLE',
          },
        },
        contact: {
          accountId: '1111aaaa2222bbbb3333cccc',
          self: 'https://api.tempo.io/[...]',
          type: 'USER',
        },
        customer: {
          id: 234,
          key: 'CLOUDBAY_DEVELOPMENT',
          name: 'Cloudbay: Development',
          self: 'https://api.tempo.io/[...]',
        },
        global: false,
        id: 7,
        key: 'CLOUDBAY_DEVELOPMENT',
        lead: 'The lead of the `Account`',
        links: {
          self: 'https://api.tempo.io/[...]',
        },
        monthlyBudget: 600,
        name: 'Cloudbay: Development',
        self: 'https://api.tempo.io/[...]',
        status: 'OPEN',
      };

      return response;
    } else {
      const response: IApiResponse = {
        statusCode: 404,
        message: 'Account not Found',
      };
      return response;
    }
  }

  updateAccountById(
    id: string,
    payload: IAccountPayload
  ): IUpdateAccountResponse | IApiResponse {
    if (id && payload) {
      const response: IUpdateAccountResponse = {
        category: {
          id: 14,
          key: '300',
          name: 'Development',
          self: 'https://api.tempo.io/[...]',
          type: {
            name: 'BILLABLE',
          },
        },
        contact: {
          accountId: '1111aaaa2222bbbb3333cccc',
          self: 'https://api.tempo.io/[...]',
          type: 'USER',
        },
        customer: {
          id: 234,
          key: 'CLOUDBAY_DEVELOPMENT',
          name: 'Cloudbay: Development',
          self: 'https://api.tempo.io/[...]',
        },
        global: false,
        id: 7,
        key: 'CLOUDBAY_DEVELOPMENT',
        lead: 'The lead of the `Account`',
        links: {
          self: 'https://api.tempo.io/[...]',
        },
        monthlyBudget: 600,
        name: 'Cloudbay: Development',
        self: 'https://api.tempo.io/[...]',
        status: 'OPEN',
      };
      return response;
    } else {
      const response: IApiResponse = {
        statusCode: 404,
        message: 'Account not Found',
      };
      return response;
    }
  }

  getAccountLinksByAccountId(
    id: string
  ): IGetAccountLinksByAccountIdResponse | IApiResponse {
    if (id) {
      const response: IGetAccountLinksByAccountIdResponse = {
        metadata: {
          count: 1,
          limit: 50,
          next: 'https://api.tempo.io/[...]',
          offset: 0,
          previous: 'https://api.tempo.io/[...]',
        },
        results: [
          {
            account: {
              self: 'https://api.tempo.io/[...]',
            },
            default: true,
            id: 1,
            scope: {
              id: 10012,
              self: 'https://api.tempo.io/[...]',
              type: 'PROJECT',
            },
            self: 'https://api.tempo.io/[...]',
          },
        ],
        self: 'https://api.tempo.io/[...]',
      };
      return response;
    } else {
      const response: IApiResponse = {
        statusCode: 404,
        message: 'Account not Found',
      };
      return response;
    }
  }

  searchAccounts(
    payload: ISearchAccountsPayload
  ): ISearchAccountsResponse | IApiResponse {
    if (payload) {
      const response: ISearchAccountsResponse = {
        metadata: {
          count: 1,
          limit: 50,
          next: 'https://api.tempo.io/[...]',
          offset: 0,
          previous: 'https://api.tempo.io/[...]',
        },
        results: [
          {
            category: {
              id: 14,
              key: '300',
              name: 'Development',
              self: 'https://api.tempo.io/[...]',
              type: {
                name: 'BILLABLE',
              },
            },
            contact: {
              accountId: '1111aaaa2222bbbb3333cccc',
              self: 'https://api.tempo.io/[...]',
              type: 'USER',
            },
            customer: {
              id: 234,
              key: 'CLOUDBAY_DEVELOPMENT',
              name: 'Cloudbay: Development',
              self: 'https://api.tempo.io/[...]',
            },
            global: false,
            id: 7,
            key: 'CLOUDBAY_DEVELOPMENT',
            lead: 'The lead of the `Account`',
            links: {
              self: 'https://api.tempo.io/[...]',
            },
            monthlyBudget: 600,
            name: 'Cloudbay: Development',
            self: 'https://api.tempo.io/[...]',
            status: 'OPEN',
          },
        ],
        self: 'https://api.tempo.io/[...]',
      };

      return response;
    } else {
      const response: IApiResponse = {
        statusCode: 404,
        message: 'Account not Found',
      };
      return response;
    }
  }

  // Account Categories

  getAccountCategories(): IApiResponse {
    const response: IApiResponse = {
      statusCode: 200,
      message: 'Account Categories retrieved successfully.',
    };
    return response;
  }

  createAccountCategory(
    payload: ICreateCategoryPayload
  ): ICreateCategoryResponse | IApiResponse {
    if (payload) {
      const response: ICreateCategoryResponse = {
        id: 14,
        key: '300',
        name: 'Development',
        self: 'https://api.tempo.io/[...]',
        type: {
          name: 'BILLABLE',
        },
      };
      return response;
    } else {
      const response: IApiResponse = {
        statusCode: 400,
        message: 'Account Category cannot be created for some reasons.',
      };
      return response;
    }
  }

  deleteAccountCategory(id: string): IApiResponse {
    if (id) {
      const response: IApiResponse = {
        statusCode: 204,
        message: 'Account Category deleted successfully.',
      };
      return response;
    } else {
      const response: IApiResponse = {
        statusCode: 400,
        message: 'Account Category cannot be deleted for some reasons.',
      };
      return response;
    }
  }

  getAccountCategoryById(id: string): IApiResponse {
    if (id) {
      const response: IApiResponse = {
        statusCode: 200,
        message: 'Account Category retrieved successfully.',
      };
      return response;
    } else {
      const response: IApiResponse = {
        statusCode: 404,
        message: 'Account Category not Found',
      };
      return response;
    }
  }

  updateAccountCategoryById(
    id: string,
    payload: ICreateCategoryPayload
  ): ICreateCategoryResponse | IApiResponse {
    if (id && payload) {
      const response: ICreateCategoryResponse = {
        id: 14,
        key: '300',
        name: 'Development',
        self: 'https://api.tempo.io/[...]',
        type: {
          name: 'BILLABLE',
        },
      };
      return response;
    } else {
      const response: IApiResponse = {
        statusCode: 404,
        message: 'Account Category not Found',
      };
      return response;
    }
  }

  // Account Category Types

  getAccountCategoryTypes(): IApiResponse {
    const response: IApiResponse = {
      statusCode: 200,
      message: 'Account Category Types retrieved successfully.',
    };
    return response;
  }

  // Account Links

  getAccountLinks(
    payload: ICreateAccountLinkPayload
  ): ICreateAccountLinkResponse | IApiResponse {
    if (payload) {
      const response: ICreateAccountLinkResponse = {
        account: {
          self: 'https://api.tempo.io/[...]',
        },
        default: true,
        id: 1,
        scope: {
          id: 10012,
          self: 'https://api.tempo.io/[...]',
          type: 'PROJECT',
        },
        self: 'https://api.tempo.io/[...]',
      };
      return response;
    } else {
      const response: IApiResponse = {
        statusCode: 404,
        message: 'Account Link not Found',
      };
      return response;
    }
  }

    deleteAccountLink(id: string): IApiResponse {
        if (id) {
        const response: IApiResponse = {
            statusCode: 204,
            message: 'Account Link deleted successfully.',
        };
        return response;
        } else {
        const response: IApiResponse = {
            statusCode: 400,
            message: 'Account Link cannot be deleted for some reasons.',
        };
        return response;
        }
    }

    getAccountLinkByProjectId(id: string): IGetAccountLinksByProjectIdResponse | IApiResponse {

        if (id) {
        const response: IGetAccountLinksByProjectIdResponse = {
            "metadata": {
              "count": 1
            },
            "results": [
              {
                "account": {
                  "self": "https://api.tempo.io/[...]"
                },
                "default": true,
                "id": 1,
                "scope": {
                  "id": 10012,
                  "self": "https://api.tempo.io/[...]",
                  "type": "PROJECT"
                },
                "self": "https://api.tempo.io/[...]"
              }
            ],
            "self": "https://api.tempo.io/[...]"
          }
        return response;
        } else {
        const response: IApiResponse = {
            statusCode: 404,
            message: 'Account Link not Found',
        };
        return response;
        }
    }

    getAccountLinkById(id: string): IGetAccountLinksByIdResponse | IApiResponse {

        if (id) {
        const response: IGetAccountLinksByIdResponse= {
            "account": {
              "self": "https://api.tempo.io/[...]"
            },
            "default": true,
            "id": 1,
            "scope": {
              "id": 10012,
              "self": "https://api.tempo.io/[...]",
              "type": "PROJECT"
            },
            "self": "https://api.tempo.io/[...]"
          }
        return response;
        } else {
        const response: IApiResponse = {
            statusCode: 404,
            message: 'Account Link not Found',
        };
        return response;
        }
    }


    
}
