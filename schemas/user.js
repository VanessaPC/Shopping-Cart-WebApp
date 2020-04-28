import mongoose from 'mongoose';
import { ItemSchema } from './item';

export const UserSchema = new mongoose.Schema({
  checkout: {
    type: Array,
    ref: ItemSchema,
    required: true,
  },
});
