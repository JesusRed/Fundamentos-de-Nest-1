import {
  Controller,
  Get,
  Post,
  Put,
  Delete,
  Body,
  Param,
} from '@nestjs/common';

import { CreateProjectDTO } from './dto/create-project.dto';
import { Project } from './interfaces/Projects';
import { ProjectsService } from './projects.service';

@Controller('projects')
export class ProjectsController {
  constructor(private projectService: ProjectsService) {}

  @Get()
  getProjects(): Promise<Project[]> {
    return this.projectService.getProjects();
  }
  //   getProject(@Req() req, @Res() res): Response {
  //     return res.send('Hi Worldy!');
  //   }

  @Get(':projectId')
  getProject(@Param('projectId') projectId: string) {
    return this.projectService.getProject(projectId);
  }

  @Post()
  createProject(@Body() project: CreateProjectDTO): Promise<Project> {
    // console.log(project.done, project.title, project.summary);
    // return 'Creating a project';
    return this.projectService.createProject(project);
  }

  @Delete(':id')
  deleteProject(@Param('id') id): string {
    console.log(id);
    return `Deleting a project number: ${id}`;
  }

  @Put(':id')
  updatePorject(@Body() project: CreateProjectDTO, @Param('id') id): string {
    console.log(project);
    console.log(id);
    return 'Updating a project';
  }
}
