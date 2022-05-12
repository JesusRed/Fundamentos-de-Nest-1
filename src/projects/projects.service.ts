import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Project } from './interfaces/Projects';
import { Model } from 'mongoose';
import { CreateProjectDTO } from './dto/create-project.dto';

@Injectable()
export class ProjectsService {
  // projects: Project[] = [
  //   {
  //     id: 1,
  //     title: 'Title-testing',
  //     summary: 'testing summary',
  //     done: true,
  //   },
  //   {
  //     id: 2,
  //     title: 'Title-testing2',
  //     summary: 'testing summar2y',
  //     done: false,
  //   },
  //   {
  //     id: 3,
  //     title: 'Title-testing3',
  //     summary: 'testing summ3ary',
  //     done: true,
  //   },
  // ];

  // getProjects(): Project[] {
  //   return this.projects;
  // }

  // getProject(id: number): Project {
  //   return this.projects.find((project) => project.id === id);
  // }

  constructor(@InjectModel('Project') private projectModel: Model<Project>) {}

  async getProjects() {
    return await this.projectModel.find();
  }

  async getProject(id: string) {
    return await this.projectModel.findById(id);
  }

  async createProject(project: CreateProjectDTO) {
    const newProject = new this.projectModel(project);
    return await newProject.save();
  }
}
