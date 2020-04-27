import express from 'express';
// import { AuthorisationController } from '../controllers/authorisation';
// import { TuneController } from '../controllers/tunes';
// import { UserController } from '../controllers/user';
import URL from './constants';

const router = new express.Router();

router.get('*', (req, res) => {
  res.sendStatus(404);
});

export default router;
