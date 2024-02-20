import { Injectable } from '@nestjs/common';
import { EmailService } from './export/csv-export';

interface TableEntry {
  employeeNumber: string;
  name: string;
  projectCode: string;
  projectTitle: string;
  departmentName: string;
  departmentLedgerCode: string;
  date: string;
  payCode: string;
  hours: number;
  task: string;
  jobName: string;
  payCategoryName: string;
}
@Injectable()
export class AppService {

  constructor(private readonly emailService: EmailService) {}
  getData(): { message: string } {
    return { message: 'Hello API' };
  }

  convertTableToCSV(tableEntries: TableEntry[]): string {
    // Check if there are entries
    if (tableEntries.length === 0) {
      return '';
    }

    // Extract headers
    const headers = Object.keys(tableEntries[0]).join(',');

    // Map each entry to a CSV row
    const rows = tableEntries.map((entry) =>
      Object.values(entry)
        .map((value) =>
          // Handle values that contain commas by enclosing them in double quotes
          typeof value === 'string' && value.includes(',')
            ? `"${value}"`
            : value
        )
        .join(',')
    );

    // Combine headers and rows into a single CSV string
    const csv = [headers, ...rows].join('\n');
    return csv;
  }

  async emailCSV(csv: string, email: string): Promise<void> {
    // Send the CSV to the email address
    console.log(`Sending CSV to ${email}`);
    console.log(csv);
    // In your controller or service where you want to send the email

    const recipientEmail = 'recipient@example.com'; // The recipient's email address
    const emailSubject = 'Your CSV File';
    const emailText = 'Please find the attached CSV file.';
    const csvFilePath = '/path/to/your/file.csv'; // The path to the CSV file you want to send

    return await this.emailService.sendEmailWithCSV(
      recipientEmail,
      emailSubject,
      emailText,
      csvFilePath
    );
  }
  
}
