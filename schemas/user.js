import mongoose from 'mongoose';
import { CartSchema } from '../schemas/cart';
import { cartModelName } from '../models/constants';

export const UserSchema = new mongoose.Schema({
  name: {
    type: String,
    required: false,
  },
  cart: CartSchema,
  removedItems: {
    type: Array,
    required: true,
  },
  previousOrders: [
    {
      type: mongoose.Schema.Types.ObjectId,
      ref: cartModelName,
      required: false,
    },
  ],
});
