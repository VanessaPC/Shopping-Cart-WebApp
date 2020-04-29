import mongoose from 'mongoose';
import { config } from '../config';
import { createMockData, createShoppingItemsData } from '../utils/createMockData';

mongoose.set('debug', true);

const connectDb = () =>
  mongoose.connect(config.mongoDBUri, { useFindAndModify: false, useNewUrlParser: true, useUnifiedTopology: true });

mongoose.connection.once('open', () => {
  console.log('Connection opened here', config);
  createMockData();
  createShoppingItemsData();
});

export { connectDb };
