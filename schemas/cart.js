import mongoose from 'mongoose';
import { itemModelName } from '../models/constants';

export const CartSchema = new mongoose.Schema({
  name: {
    type: String,
    required: false,
  },
  price: {
    type: Number,
    required: true,
  },
  cartItems: [
    {
      type: mongoose.Schema.Types.ObjectId,
      ref: itemModelName,
      required: true,
    },
  ],
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
  quantity: {
    type: Number,
    required: true,
  },
  totalItems: {
    type: Number,
    required: true,
  },
});
