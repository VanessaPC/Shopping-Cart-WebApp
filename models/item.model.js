import mongoose from 'mongoose';
import { itemModalName } from './constants';
import { ItemSchema } from '../schemas/item';

export const Items = mongoose.model(itemModalName, ItemSchema);
