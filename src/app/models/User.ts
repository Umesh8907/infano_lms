// src/models/User.ts
import mongoose, { Schema, model, models, Document } from 'mongoose';

export interface IUser extends Document {
  name: string;
  email: string;
  image?: string;
  // Add more fields as needed
}

const UserSchema = new Schema<IUser>(
  {
    name: { type: String, required: true },
    email: { type: String, required: true, unique: true },
    image: { type: String },
    // Add more fields as needed
  },
  { timestamps: true }
);

const User = models.User || model<IUser>('User', UserSchema);

export default User;
