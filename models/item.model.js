import mongoose from 'mongoose';
import { itemModelName } from './constants';
import { ItemSchema } from '../schemas/item';

export const Items = mongoose.model(itemModelName, ItemSchema);
