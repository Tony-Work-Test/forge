// Import necessary modules and interfaces
import { Injectable } from '@nestjs/common';
import moment from 'moment'; // For handling dates
import { Worklog, WeeklyReport, MonthlyReport } from './interfaces';

@Injectable()
export class MockDataService {
  // Function to generate a single mock worklog
  generateMockWorklog(): Worklog {
    return {
      self: `https://api.tempo.io/4/worklogs/${Math.floor(Math.random() * 10000)}`,
      tempoWorklogId: Math.floor(Math.random() * 10000),
      issue: {
        self: `https://datarecognitioncorp-sandbox-645.atlassian.net/rest/api/2/issue/${Math.floor(Math.random() * 10000)}`,
        id: Math.floor(Math.random() * 10000)
      },
      timeSpentSeconds: Math.floor(Math.random() * 3600), // Random number of seconds spent
      billableSeconds: Math.floor(Math.random() * 3600), // Random number of billable seconds
      startDate: moment().format('YYYY-MM-DD'), // Current date
      startTime: moment().format('HH:mm:ss'), // Current time
      description: 'testing tempo',
      createdAt: moment().format(),
      updatedAt: moment().format(),
      author: {
        self: `https://datarecognitioncorp-sandbox-645.atlassian.net/rest/api/2/user?accountId=${Math.random().toString(36).substring(7)}`,
        accountId: Math.random().toString(36).substring(7)
      }
    };
  }

  // Function to generate a weekly report with an array of mock worklogs
  generateMockWeeklyReport(): WeeklyReport {
    const worklogs = [];
    for (let i = 0; i < 5; i++) { // Assuming 5 worklogs per week
      worklogs.push(this.generateMockWorklog());
    }

    return {
      date: moment().startOf('isoWeek').format('YYYY-MM-DD'), // Start of the current week
      worklogs: worklogs
    };
  }

  // Function to generate a monthly report with 4 weekly reports
  generateMockMonthlyReport(): MonthlyReport {
    const weeklyReports = [];
    for (let i = 0; i < 4; i++) { // Assuming 4 weeks per month
      weeklyReports.push(this.generateMockWeeklyReport());
    }

    return {
      month: moment().month() + 1, // Current month (moment.js is 0-indexed for months, hence the +1)
      year: moment().year(), // Current year
      weeklyReports: weeklyReports
    };
  }
}
