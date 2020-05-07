import mongoose from 'mongoose';
import { cartModelName } from './constants';
import { CartSchema } from '../schemas/cart';

export const CartModel = mongoose.model(cartModelName, CartSchema);
