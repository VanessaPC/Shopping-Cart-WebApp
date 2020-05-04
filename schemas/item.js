import mongoose from 'mongoose';

export const ItemSchema = new mongoose.Schema({
  _id: {
    type: Number,
    required: true,
  },
  name: {
    type: String,
    required: true,
  },
  price: {
    type: Number,
    required: true,
  },
  quantity: {
    type: Number,
    required: false,
  },
  inStockQuantity: {
    type: Number,
    required: false,
  },
});
