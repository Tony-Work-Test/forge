import { Controller, Get } from '@nestjs/common';
import { ProjectsService } from './projects.service';

@Controller('projects')
export class ProjectsController {
        
        constructor(private readonly projectsService: ProjectsService) {}

        @Get()
        getAllProjects() {
            console.log('getAllProjects');
            return this.projectsService.getAllProjects();
        }
    
        @Get("issueTypeSchemes")
        getIssueTypeSchemes() {
            return this.projectsService.getIssueTypeSchemes();
        }

        @Get("projectRoles")
        getProjectRoles() {
            return this.projectsService.getProjectRoles();
        }

        @Get("projectComponents")
        getProjectComponents() {
            return this.projectsService.getProjectComponents();
        }
}
