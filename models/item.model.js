import mongoose from 'mongoose';
import { itemModalName } from './constants';
import ItemSchema from '../schemas/tune';

export const Tunes = mongoose.model(itemModalName, ItemSchema);
