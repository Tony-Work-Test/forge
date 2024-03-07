import * as fs from 'fs';
import * as path from 'path';

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
  