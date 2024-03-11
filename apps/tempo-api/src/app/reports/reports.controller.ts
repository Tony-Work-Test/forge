import { Controller, Get, UseGuards } from '@nestjs/common';
import { ReportsService } from './reports.service';
import { AuthGuard } from '@nestjs/passport';

@Controller('reports')
export class ReportsController {
    constructor(private readonly reportService: ReportsService) {}

    @Get()
    @UseGuards(AuthGuard('jira'))
    getReports() {
        return this.reportService.getUserWorklogDictionary();
    }
}
