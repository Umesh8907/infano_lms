// src/models/Course.ts
import mongoose, { Schema, model, models, Document } from 'mongoose';

export interface ICourse extends Document {
  title: string;
  description: string;
  price: number;
  videoUrl: string;
  createdBy: mongoose.Types.ObjectId;
  // Add more fields as needed
}

const CourseSchema = new Schema<ICourse>(
  {
    title: { type: String, required: true },
    description: { type: String, required: true },
    price: { type: Number, required: true },
    videoUrl: { type: String, required: true },
    createdBy: { type: Schema.Types.ObjectId, ref: 'User', required: true },
    // Add more fields as needed
  },
  { timestamps: true }
);

const Course = models.Course || model<ICourse>('Course', CourseSchema);

export default Course;
