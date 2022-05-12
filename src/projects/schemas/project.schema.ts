import { Schema } from 'mongoose';

export const ProjectSchema = new Schema({
  title: String,
  summary: String,
  done: Boolean,
});
