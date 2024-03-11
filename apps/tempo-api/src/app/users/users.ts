import axios from 'axios';
import { lastValueFrom } from 'rxjs';
import { from } from 'rxjs';
import { jiraToken } from '../tokens/drc-token';
import { JiraUser, User } from '../import/interfaces';

// import {token} from '../export/drc-token';
const jiraURL =
  'https://datarecognitioncorp-sandbox-645.atlassian.net/rest/api/3';
let email = 'tony.kelly@oasisdigital.com';
const password = jiraToken;
const base64Credentials = Buffer.from(`${email}:${password}`).toString(
  'base64'
);

export async function GetAllUsers() {
  let entries = [];
  let totalAvailable = false; // Assuming we don't know the total initially
  let startAt = 0;
  const maxResults = 300; // Assuming we want to fetch 50 entries per request
  while (totalAvailable === false) {
    const response = await lastValueFrom(
      from(
        axios.get(`${jiraURL}/users/search`, {
          headers: {
            Authorization: `Basic ${base64Credentials}`,
            Accept: 'application/json',
          },
          params: {
            startAt,
            maxResults,
          },
        })
      )
    );
    const responseData = response.data as User[];
    const eData = responseData.map((user) => {
      // Below is wrapped in a employee object for Assets mapping
      return {
        employee: {
          displayName: user.displayName,
          accountId: user.accountId,
          active: user.active,
          avatarUrls: user.avatarUrls,
          emailAddress: user.emailAddress,
          locale: user.locale,
          drcID: '',
        },
      };

     
    });
    console.log(eData);
    entries = entries.concat(responseData);

    startAt += responseData.length;
    console.log(startAt, totalAvailable);
    if (responseData.length === 0) {
      totalAvailable = true;
    }

    // Assuming 'total' provides the total number of entries available
    // Prepare the next startAt value for the next iteration
  }
  // await saveJsonToFile(entries, 'users.json');
  return entries;
}

export async function GetUserGroups(userId: string) {
  const response = await axios.get(`${jiraURL}/user/groups`, {
    headers: {
      Authorization: `Basic ${base64Credentials}`,
      Accept: 'application/json',
    },
    params: {
      userId,
    },
  });
  const responseData = response.data;

  return responseData;
}

export async function GetCurrentUserData() {
  const response = await axios.get(`${jiraURL}/myself`, {
    headers: {
      Authorization: `Basic ${base64Credentials}`,
      Accept: 'application/json',
    },
  });
  const responseData = response.data;

  return responseData;
}

export async function GetUserByEmail(newEmail: string): Promise<JiraUser>{ 
  email = newEmail;
  const response = await axios.get(`${jiraURL}/user/search`, {
    headers: {
      Authorization: `Basic ${base64Credentials}`,
      Accept: 'application/json',
    },
    params: {
      query: email,
    },
  });
  const responseData = response.data as JiraUser;
  return responseData;
}
