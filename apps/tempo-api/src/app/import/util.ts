import * as fs from 'fs';
import * as path from 'path';
import { parse } from 'json2csv';
import {  FilteredWorklog, WorklogDictionary } from './interfaces';

export async function  saveJsonToFile(jsonData: unknown, filename: string): Promise<void> {
    const filePath = path.join("C:/Users/Tony/Downloads", filename);
    try {
      // Convert JSON object to string
      const data = JSON.stringify(jsonData, null, 2); // Beautify the JSON output
      // Asynchronously write file to disk
      await fs.promises.writeFile(filePath, data, 'utf-8');
      console.log('JSON file has been saved.');
    } catch (error) {
      console.error('An error occurred while saving the JSON file:', error);
      throw error; // Rethrow or handle error as needed
    }
  }

  export default function convertSecondsToHours(seconds: number): number {
    const hours = seconds / 3600;
    return hours;
  }

  export async function convertWorklogDictionaryToCsvAndSave(worklogDictionaries: WorklogDictionary[], fileName: string): Promise<string> {
    try {
      // Flatten the worklogDictionaries to a format suitable for CSV conversion
      const flattenedWorklogs = worklogDictionaries.reduce((acc, worklogDict) => {
        worklogDict.worklogs.forEach(worklog => {
          acc.push(flattenWorklog(worklogDict, worklog));
        });
        return acc;
      }, []);

      // Convert the flattened worklogs to CSV
      const csv = parse(flattenedWorklogs, {
        fields: [
          { label: 'User ID', value: 'userId' },
          { label: 'Display Name', value: 'displayName' },
          { label: 'Task ID', value: 'issue.id' },
          { label: 'Job Name', value: 'issue.key' },
          { label: 'Project Title', value: 'issue.parent' },
          { label: 'Hours Spent ', value: 'worklog.timeSpentSeconds' },
          { label: 'Billable Hours', value: 'worklog.billableSeconds' },
          { label: 'Start Date', value: 'worklog.startDate' },
          // Add more fields as necessary
        ],
      });

      // Define the path for the CSV file
      const filePath = path.join("C:/Users/Tony/Downloads", fileName);

      // Ensure the output directory exists
      fs.mkdirSync(path.dirname(filePath), { recursive: true });

      // Write the CSV to disk
      fs.writeFileSync(filePath, csv);

      return `File has been saved as ${filePath}`;
    } catch (error) {
      console.error('Error converting WorklogDictionary to CSV:', error);
      throw new Error('Failed to convert WorklogDictionary to CSV');
    }
  }

   function flattenWorklog(worklogDict: WorklogDictionary, worklog: FilteredWorklog) {
    // Flatten the worklog information along with user info for CSV conversion
    return {
      userId: worklogDict.userId,
      displayName: worklogDict.displayName,
      issue: worklog.issue,
      worklog: worklog.worklog, // Here you could extract and transform further if needed
      // You might want to transform or simplify nested structures further depending on your CSV structure needs
    };
  }
