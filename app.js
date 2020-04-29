import express from 'express';
import router from './routes';
import cors from 'cors';

export const app = express();

app.use((req, res, next) => {
  req.user = { _id: '5e0efe265ae4232f32541f56' };
  next();
});

app.use(cors());
app.use(express.json());
app.use(router);
