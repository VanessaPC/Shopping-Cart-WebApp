import mongoose from 'mongoose';
import { userModelName } from './constants';
import { UserSchema } from '../schemas/user';

export const User = mongoose.model(userModelName, UserSchema);
