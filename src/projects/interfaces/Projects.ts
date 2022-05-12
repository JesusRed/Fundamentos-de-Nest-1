import { Document } from 'mongoose';

export interface Project extends Document {
  id?: number;
  title: string;
  summary: string;
  done: boolean;
}
