// src/lib/zod.ts
import { z } from 'zod';

export const courseSchema = z.object({
  title: z.string().min(1),
  description: z.string().min(1),
  price: z.number().nonnegative(),
  videoUrl: z.string().url(),
  // Add more fields as needed
});

export const userSchema = z.object({
  name: z.string().min(1),
  email: z.string().email(),
  // Add more fields as needed
});
