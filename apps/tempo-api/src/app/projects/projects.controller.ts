import { Controller, Get, UseGuards } from '@nestjs/common';
import { ProjectsService } from './projects.service';
import { AuthGuard } from '@nestjs/passport';

@Controller('projects')
export class ProjectsController {
        
        constructor(private readonly projectsService: ProjectsService) {}

        @Get()
        @UseGuards(AuthGuard('jira'))
        getAllProjects() {
            console.log('getAllProjects');
            return this.projectsService.getAllProjects();
        }
    
        @Get("issueTypeSchemes")
        @UseGuards(AuthGuard('jira'))
        getIssueTypeSchemes() {
            return this.projectsService.getIssueTypeSchemes();
        }

        @Get("projectRoles")
        @UseGuards(AuthGuard('jira'))
        getProjectRoles() {
            return this.projectsService.getProjectRoles();
        }

        @Get("projectComponents")
        @UseGuards(AuthGuard('jira'))
        getProjectComponents() {
            return this.projectsService.getProjectComponents();
        }
}
