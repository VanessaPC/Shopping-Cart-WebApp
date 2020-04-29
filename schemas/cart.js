import mongoose from 'mongoose';
import { itemModelName } from '../models/constants';
import { ItemSchema } from '../schemas/item';

export const CartSchema = new mongoose.Schema({
  _id: {
    type: String,
    required: true,
  },
  totalPrice: {
    type: Number,
    required: true,
  },
  cartItems: [ItemSchema],
  removedItems: [
    {
      type: mongoose.Schema.Types.ObjectId,
      ref: itemModelName,
      required: true,
    },
  ],
  removedItemsQuantity: {
    type: Number,
    required: false,
  },
  totalItems: {
    type: Number,
    required: true,
  },
});
