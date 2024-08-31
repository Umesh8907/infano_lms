// src/models/Order.ts
import mongoose, { Schema, model, models, Document } from 'mongoose';

export interface IOrder extends Document {
  userId: mongoose.Types.ObjectId;
  courseId: mongoose.Types.ObjectId;
  purchaseDate: Date;
  // Add more fields as needed
}

const OrderSchema = new Schema<IOrder>(
  {
    userId: { type: Schema.Types.ObjectId, ref: 'User', required: true },
    courseId: { type: Schema.Types.ObjectId, ref: 'Course', required: true },
    purchaseDate: { type: Date, default: Date.now },
    // Add more fields as needed
  },
  { timestamps: true }
);

const Order = models.Order || model<IOrder>('Order', OrderSchema);

export default Order;
