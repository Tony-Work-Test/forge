import axios from 'axios';
import { lastValueFrom } from 'rxjs';
import { from } from 'rxjs';
import { jiraToken } from '../tokens/drc-token';
// import {token} from '../export/drc-token';
// TODO: Move to .env
export const jiraURL ='https://datarecognitioncorp-sandbox-645.atlassian.net/rest/api/3';
export const kanbanURl = 'https://datarecognitioncorp-sandbox-645.atlassian.net/rest/agile/1.0/board';
export const email = 'tony.kelly@oasisdigital.com';
export const password = jiraToken
export const base64Credentials = Buffer.from(`${email}:${password}`).toString(
  'base64'
);

// Project Methods //

export async function GetProjectRoles() {
  let entries = [];
  let totalAvailable = Infinity; // Assuming we don't know the total initially
  let startAt = 0;
  const maxResults = 50; // Assuming we want to fetch 50 entries per request
  while (entries.length < totalAvailable) {
    const response = await lastValueFrom(from(axios.get(`${jiraURL}/role`, {
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
  return entries;
}

export async function GetProjectComponents(projectKey: string) {
    let entries = [];
    let totalAvailable = Infinity; // Assuming we don't know the total initially
    let startAt = 0;
    const maxResults = 50; // Assuming we want to fetch 50 entries per request
    while (entries.length < totalAvailable) {
      const response = await lastValueFrom(from(axios.get(`${jiraURL}/project/${projectKey}/components`, {
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
    return entries;
  }

  // Issue Methods //

  export async function GetIssueTypeScheme() {

      const response = await axios.get(`${jiraURL}/issuetypescheme`, {
        headers: {
          Authorization: `Basic ${base64Credentials}`,
          Accept: 'application/json',
        },
        
      });
      const responseData = response.data;
     // Prepare the next startAt value for the next iteration
   
    return responseData;
  
}

export async function GetAllProjects() {
console.log('ran')
    const response = await axios.get(kanbanURl, {
      headers: {
        Authorization: `Basic ${base64Credentials}`,
        Accept: 'application/json',
      },
      
    });
    const responseData = response.data;
   // Prepare the next startAt value for the next iteration
 
  return responseData;

}
