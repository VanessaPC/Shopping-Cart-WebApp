import mongoose from 'mongoose';
import { CartSchema } from '../schemas/cart';
import { cartModelName } from '../models/constants';
import { ItemSchema } from '../schemas/item';

export const UserSchema = new mongoose.Schema({
  name: {
    type: String,
    required: false,
  },
  cart: CartSchema,
  removedItems: [ItemSchema],
  previousOrders: [
    {
      type: mongoose.Schema.Types.ObjectId,
      ref: cartModelName,
      required: false,
    },
  ],
});
