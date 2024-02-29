import axios from 'axios';
import { lastValueFrom } from 'rxjs';
import { from } from 'rxjs';
import { jiraToken } from '../tokens/drc-token';
// import {token} from '../export/drc-token';
const assetsURL =
  'https://datarecognitioncorp-sandbox-645.atlassian.net/rest/api/3/users/search?startAt=0&maxResults=1000';
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
    const response = await lastValueFrom(from(axios.get(assetsURL, {
      headers: {
        Authorization: `Basic ${base64Credentials}`,
        Accept: 'application/json',
      },
      params: {
        startAt,
        maxResults,
      },
    })));
    // console.log('ran', response.data.length);
    const responseData = response.data;
    entries = entries.concat(responseData); // Assuming 'results' contains the list of items
    totalAvailable = responseData.total; // Assuming 'total' provides the total number of entries available
    startAt += responseData.length // Prepare the next startAt value for the next iteration
  }
  return entries;
}
