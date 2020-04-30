import express from 'express';
import router from './routes';
import cors from 'cors';

import next from 'next';
import { config as CONFIG} from './config';

export const nextApp = next({
  dir: CONFIG.CLIENT_SRC,
});

const handler = nextApp.getRequestHandler();

router.all('*', (req, res) => {
  handler(req, res);
});

export const app = express();

app.use((req, res, next) => {
  req.user = { _id: '5e0efe265ae4232f32541f56' };
  next();
});

app.use(cors());
app.use(express.json());
app.use(router);
