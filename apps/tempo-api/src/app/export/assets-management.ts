// src/services/assets.service.ts
import { Injectable } from '@nestjs/common';
import axios from 'axios';
import {token} from './drc-token';
interface IEmployee {
    objectType: "employee",
    name: "John Doe",
    employeeNumber: "12345",
    email: "test@test.com",
    department: "Engineering",
    location: "New York",
    jobTitle: "Software Developer",
    startDate: "2021-01-01"
};
@Injectable()
export class AssetsService {
  private readonly assetsApiUrl = 'https://datarecognitioncorp-sandbox-645.atlassian.net/rest/assets/1.0/object'; // Update with your actual Assets API URL
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
