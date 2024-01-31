
export interface IApiResponse {
  message: string;
  statusCode: number;
}

  export interface IGetAccountsResponse {
    metadata: {
      count: number;
      limit: number;
      next: string;
      offset: number;
      previous: string;
    };
    results: IAccount[];
    self: string;
  }

    export interface IAccount {
        category: {
        id: number;
        key: string;
        name: string;
        self: string;
        type: {
            name: string;
        };
        };
        contact: {
        accountId: string;
        self: string;
        type: string;
        };
        customer: {
        id: number;
        key: string;
        name: string;
        self: string;
        };
        global: boolean;
        id: number;
        key: string;
        lead: string;
        links: {
        self: string;
        };
        monthlyBudget: number;
        name: string;
        self: string;
        status: string;
    }


    export interface IAccountPayload {
      categoryKey: string;
      contactAccountId: string;
      customerKey: string;
      externalContactName: string;
      global: boolean;
      key: string;
      leadAccountId: string;
      monthlyBudget: number;
      name: string;
      status: string;
    }

   

    export interface ISearchAccountsPayload {
      global: boolean;
      ids: number[];
      keys: string[];
      statuses: string[];
    }

    export interface ICreateAccountPayload {
      categoryKey: string;
      contactAccountId: string;
      customerKey: string;
      externalContactName: string;
      global: boolean;
      key: string;
      leadAccountId: string;
      monthlyBudget: number;
      name: string;
      status: string;
    } 

    export interface ICreateAccountResponse {
      category: {
        id: number;
        key: string;
        name: string;
        self: string;
        type: {
          name: string;
        };
      };
      contact: {
        accountId: string;
        self: string;
        type: string;
      };
      customer: {
        id: number;
        key: string;
        name: string;
        self: string;
      };
      global: boolean;
      id: number;
      key: string;
      lead: string;
      links: {
        self: string;
      };
      monthlyBudget: number;
      name: string;
      self: string;
      status: string;
    }

    export interface IUpdateAccountPayload {
      categoryKey: string;
      contactAccountId: string;
      customerKey: string;
      externalContactName: string;
      global: boolean;
      key: string;
      leadAccountId: string;
      monthlyBudget: number;
      name: string;
      status: string;
    }

    export interface IUpdateAccountResponse {
      category: {
        id: number;
        key: string;
        name: string;
        self: string;
        type: {
          name: string;
        };
      };
      contact: {
        accountId: string;
        self: string;
        type: string;
      };
      customer: {
        id: number;
        key: string;
        name: string;
        self: string;
      };
      global: boolean;
      id: number;
      key: string;
      lead: string;
      links: {
        self: string;
      };
      monthlyBudget: number;
      name: string;
      self: string;
      status: string;
    }


   
    export interface ISearchAccountsResponse {
      metadata: {
        count: number;
        limit: number;
        next: string;
        offset: number;
        previous: string;
      };
      results: IAccount[];
      self: string;
    }

    export interface IGetAccountByIdResponse {
      category: {
        id: number;
        key: string;
        name: string;
        self: string;
        type: {
          name: string;
        };
      };
      contact: {
        accountId: string;
        self: string;
        type: string;
      };
      customer: {
        id: number;
        key: string;
        name: string;
        self: string;
      };
      global: boolean;
      id: number;
      key: string;
      lead: string;
      links: {
        self: string;
      };
      monthlyBudget: number;
      name: string;
      self: string;
      status: string;
    }

    export interface IGetAccountLinksByAccountIdResponse {
      metadata: {
        count: number;
        limit: number;
        next: string;
        offset: number;
        previous: string;
      };
      results: IAccountLink[];
      self: string;
    }

    export interface IAccountLink {
      account: {
        self: string;
      };
      default: boolean;
      id: number;
      scope: {
        id: number;
        self: string;
        type: string;
      };
      self: string;
    }

    // Account Categories

    export interface ICreateCategoryPayload {
      key: string;
      name: string;
      typeName: string;
    }

    export interface ICreateCategoryResponse {
      id: number;
      key: string;
      name: string;
      self: string;
      type: {
        name: string;
      };
    }

    export interface IGetAccountCategoriesResponse {
      metadata: {
        count: number;
      };
      results: IAccountCategory[];
      self: string;
    }

    export interface IAccountCategory {
      id: number;
      key: string;
      name: string;
      self: string;
      type: {
        name: string;
      };
    }

    export interface IGetAccountCategoryTypesResponse {
      metadata: {
        count: number;
      };
      results: IAccountCategoryType[];
      self: string;
    }

    export interface IAccountCategoryType {
      name: string;
    }

    export interface ICreateAccountLinkPayload {
      accountKey: string;
      default: boolean;
      scopeId: number;
      scopeType: string;
    }

    export interface ICreateAccountLinkResponse {
      account: {
        self: string;
      };
      default: boolean;
      id: number;
      scope: {
        id: number;
        self: string;
        type: string;
      };
      self: string;
    }

    export interface IGetAccountLinksByProjectIdResponse {
      metadata: {
        count: number;
      };
      results: IAccountLink[];
      self: string;
    }

    export interface IGetAccountLinksByIdResponse {
      account: {
        self: string;
      };
      default: boolean;
      id: number;
      scope: {
        id: number;
        self: string;
        type: string;
      };
      self: string;
    }