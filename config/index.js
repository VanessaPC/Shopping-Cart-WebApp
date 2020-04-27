import { config as devConfig } from './dev';
import { config as prodConfig } from './prod';

export const config = process.env.NODE_ENV === 'production' ? prodConfig : devConfig;
