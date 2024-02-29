// src/services/assets.service.ts
import { Injectable } from '@nestjs/common';
import axios from 'axios';
import {token} from '../tokens/drc-token';
interface IEmployee {
    objectType: string,
    name: string,
    employeeNumber: string,
    email: string,
    department: string,
    location: string,
    jobTitle: string,
    startDate: string
};
// const links = {
//   getStatus: "https://api.atlassian.com/jsm/assets/workspace/735ae9cf-8ded-47af-82c2-a59e2cd699f0/v1/importsource/bd524903-79cf-45a6-90fd-79cd3adc337f/configstatus",
//   start: "https://api.atlassian.com/jsm/assets/workspace/735ae9cf-8ded-47af-82c2-a59e2cd699f0/v1/importsource/bd524903-79cf-45a6-90fd-79cd3adc337f/executions",
//   mapping: "https://api.atlassian.com/jsm/assets/workspace/735ae9cf-8ded-47af-82c2-a59e2cd699f0/v1/importsource/bd524903-79cf-45a6-90fd-79cd3adc337f/mapping"
// }
@Injectable()
export class AssetsService {
    // TODO: Move to url dictionary
  private readonly assetsApiUrl = 'https://datarecognitioncorp-sandbox-645.atlassian.net/rest/assets/1.0/object'; 
  
  // TODO: Securely store and retrieve your access token
  private readonly accessToken = token; // Securely store and retrieve your access token

  async loadEmployeeDataToAssets(employeeData: IEmployee[]): Promise<void> {
    try {
      const response = await axios.post(this.assetsApiUrl, employeeData, {
        headers: {
          'Authorization': `Bearer ${this.accessToken}`,
          'Accept': 'application/json',
          'Content-Type': 'application/json'
        },
      });
      console.log('Data successfully loaded to Assets', response.data);
    } catch (error) {
      console.error('Error loading data to Assets', error.response?.data || error.message);
    }
  }
}
