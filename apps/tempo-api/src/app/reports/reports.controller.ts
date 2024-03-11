import { Controller, Get, UseGuards } from '@nestjs/common';
import { ReportsService } from './reports.service';
import { OAuth2AuthGuard } from '../authentication/Oauth-auth.guard';

@Controller('reports')
export class ReportsController {
    constructor(private readonly reportService: ReportsService) {}

    @Get()
    @UseGuards(OAuth2AuthGuard)
    getReports() {
        return this.reportService.getUserWorklogDictionary();
    }
}
