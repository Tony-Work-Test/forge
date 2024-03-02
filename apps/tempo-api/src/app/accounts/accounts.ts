import axios from 'axios';
import { bearerToken} from '../tokens/drc-token';


const TempoURL ='https://api.us.tempo.io/4';
 


export async function GetAccountTypes() {

    const response = await axios.get(`${TempoURL}/account-category-types`, {
      headers: {
        Authorization: `Bearer ${bearerToken}`, // `Basic ${base64Credentials}
        Accept: 'application/json',
      },
    });
    const responseData = response.data;
  return responseData;
}

export async function GetAccounts() {
  const response = await axios.get(`${TempoURL}/accounts`, {
    headers: {
      Authorization: `Bearer ${bearerToken}`, // `Basic ${base64Credentials}
      Accept: 'application/json',
    },
  });
  const responseData = response.data;
  return responseData;
}
