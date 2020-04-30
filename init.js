import next from 'next';
import { config as CONFIG} from './config';

export const app = next({
  dir: CONFIG.CLIENT_SRC,
});
