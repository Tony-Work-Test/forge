import axios from 'axios';
import { lastValueFrom } from 'rxjs';
import { from } from 'rxjs';
import { bearerToken} from '../tokens/drc-token';
// import {token} from '../export/drc-token';

const TempoURL =
  `https://api.us.tempo.io/4/worklogs/user`;


export async function GetUsersWorklogs(userId: string) {
  let entries = [];
  let totalAvailable = Infinity; // Assuming we don't know the total initially
  let offset = 0;
  const limit = 50;
 
   // Assuming we want to fetch 50 entries per request
  while (entries.length < totalAvailable) {
    const response = await lastValueFrom(from(axios.get(`${TempoURL}/${userId}`, {
      headers: {
        Authorization: `Bearer ${bearerToken}`, // `Basic ${base64Credentials}
        Accept: 'application/json',
      },
      params: {
        offset,
        limit,
      },
    })));
    const responseData = response.data;
    entries = entries.concat(responseData); // Assuming 'results' contains the list of items
    totalAvailable = responseData.total; // Assuming 'total' provides the total number of entries available
    offset += responseData.length // Prepare the next startAt value for the next iteration
  }
  return entries;
}
