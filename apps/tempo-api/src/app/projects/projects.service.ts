import { Injectable } from '@nestjs/common';
import { GetAllProjects, GetIssueTypeScheme, GetProjectComponents, GetProjectRoles } from './projects';

@Injectable()
export class ProjectsService {
    async getIssueTypeSchemes() {
        return await GetIssueTypeScheme();
    }

    async getProjectRoles() {
        return await GetProjectRoles();
    }

    async getProjectComponents() {
        return await GetProjectComponents;
    }
    
    async getAllProjects(){
        return await GetAllProjects();
    }
}
