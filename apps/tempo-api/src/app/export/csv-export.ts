// src/email/email.service.ts

import { Injectable } from '@nestjs/common';
import * as nodemailer from 'nodemailer';
import { TableEntry } from '../import/interfaces';

@Injectable()
export class EmailService {
  private transporter;

  constructor() {
    // Initialize your transporter - this example uses SMTP
    this.transporter = nodemailer.createTransport({
      host: 'your-smtp-host.com',
      port: 587,
      secure: false, // true for 465, false for other ports
      auth: {
        user: 'your-email@example.com', // your SMTP username
        pass: 'your-smtp-password', // your SMTP password
      },
    });
  }

  public async sendEmailWithCSV(to: string, subject: string, text: string, csvFilePath: string): Promise<void> {
    const mailOptions = {
      from: '"Your Name" <your-email@example.com>', // sender address
      to, // list of receivers
      subject, // Subject line
      text, // plain text body
      attachments: [
        {
          filename: 'file.csv',
          path: csvFilePath,
        },
      ],
    };

    try {
      const info = await this.transporter.sendMail(mailOptions);
      console.log('Message sent: %s', info.messageId);
    } catch (error) {
      console.error('Error sending email', error);
    }
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

    return await this.sendEmailWithCSV(
      recipientEmail,
      emailSubject,
      emailText,
      csvFilePath
    );
  }
}
