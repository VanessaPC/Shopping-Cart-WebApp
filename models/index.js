import mongoose from 'mongoose';
import { config } from '../config';

const connectDb = () => {
  return mongoose.connect(config.mongoDBUri, { useNewUrlParser: true, useUnifiedTopology: true });
};

mongoose.connection.once('open', function () {
  console.log('Connection opened here');
});

export { connectDb };
