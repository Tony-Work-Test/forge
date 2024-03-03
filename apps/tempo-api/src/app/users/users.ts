import axios from 'axios';
import { lastValueFrom } from 'rxjs';
import { from } from 'rxjs';
import { jiraToken } from '../tokens/drc-token';
import { saveJsonToFile } from '../import/util';

// import {token} from '../export/drc-token';
const jiraURL ='https://datarecognitioncorp-sandbox-645.atlassian.net/rest/api/3';
const email = 'tony.kelly@oasisdigital.com';
const password = jiraToken
const base64Credentials = Buffer.from(`${email}:${password}`).toString(
  'base64'
);

export async function GetAllUsers() {
  let entries = [];
  let totalAvailable = Infinity; // Assuming we don't know the total initially
  let startAt = 0;
  const maxResults = 50; // Assuming we want to fetch 50 entries per request
  while (entries.length < totalAvailable) {
    const response = await lastValueFrom(from(axios.get(`${jiraURL}/users/search`, {
      headers: {
        Authorization: `Basic ${base64Credentials}`,
        Accept: 'application/json',
      },
      params: {
        startAt,
        maxResults,
      },
    })));
    const responseData = response.data;
    entries = entries.concat(responseData); // Assuming 'results' contains the list of items
    totalAvailable = responseData.total; // Assuming 'total' provides the total number of entries available
    startAt += responseData.length // Prepare the next startAt value for the next iteration
  }
  await saveJsonToFile(entries, 'users.json');
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

