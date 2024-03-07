import axios from 'axios';
import { lastValueFrom } from 'rxjs';
import { from } from 'rxjs';
import { bearerToken, jiraToken} from '../tokens/drc-token';
// import { saveJsonToFile } from '../import/util';
import { IFilteredData, Issue, Worklog } from '../import/interfaces';
// import {token} from '../export/drc-token';



const TempoURL = 'https://api.us.tempo.io/4/worklogs/user';
const TempoBaseURL = 'https://api.us.tempo.io/4';

const JiraURL = 'https://datarecognitioncorp-sandbox-645.atlassian.net/rest/api/3'
const email = 'tony.kelly@oasisdigital.com';
const password = jiraToken
const base64Credentials = Buffer.from(`${email}:${password}`).toString(
  'base64'
);

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

export async function GetUpdatedWork() {

     // Assuming we want to fetch 50 entries per request
    console.log('ran')
      const response = await axios.get(`${JiraURL}/worklog/updated`, {
        headers: {
          Authorization: `Basic ${base64Credentials}`, // `Basic ${base64Credentials}
          Accept: 'application/json',
        },
      
      });
      const responseData = response.data;
      // Prepare the next startAt value for the next iteration
   
    return responseData;
  }
  

  export async function GetWorkAttributes() {
  
   
     // Assuming we want to fetch 50 entries per request
     console.log('ran',)
  
      const response = await axios.get(`${TempoBaseURL}/work-attributes`, {
        headers: {
          Authorization: `Bearer ${bearerToken}`, // `Basic ${base64Credentials}
          Accept: 'application/json',
        },
       
      });
      const responseData = response.data;
  
    return responseData;
  }

  export async function GetAllWorklogs(): Promise<Worklog[]> {
    const response = await axios.get(`${TempoBaseURL}/worklogs`, {
      headers: {
        Authorization: `Bearer ${bearerToken}`, // `Basic ${base64Credentials}
        Accept: 'application/json',
      },
    });
    const responseData = response.data.results as Worklog[];
    // await saveJsonToFile(responseData, 'worklogs.json')
    return responseData;
  }

  export async function restructureIssueData(issueId: string): Promise<IFilteredData> {
    const response = await axios.get(`${JiraURL}/issue/${issueId}`, {
      headers: {
        Authorization: `Basic ${base64Credentials}`, // `Basic ${base64Credentials}
        Accept: 'application/json',
      },
    });
    const responseData = response.data as Issue;

    const filteredData: IFilteredData = {
      id: responseData.id,
      key: responseData.key,
      parent: responseData.fields.parent?.key || null,
    };

    return filteredData;

  }
