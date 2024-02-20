// src/email/email.service.ts

import { Injectable } from '@nestjs/common';
import * as nodemailer from 'nodemailer';

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
}
