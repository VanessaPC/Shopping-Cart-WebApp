import { User } from '../models/user.model';
import { Items } from '../models/item.model';
import { stock } from '../dataset/stock';

/**
 * This file is mocking all the needed data for the server.
 */

const newUserData = {
  _id: '5e0efe265ae4232f32541f56',
  status: 'logged_in',
  name: 'Joseph Shopper',
  cart: {
    _id: '5e6e49b901109e15788ebe53',
    totalPrice: 0,
    cartItems: [],
    totalItems: 0,
  },
  removedItems: [],
};

export const createMockData = () => {
  User.findOneAndUpdate({ _id: '5e0efe265ae4232f32541f56' }, newUserData, { upsert: true }, (err, user) => {
    if (err) return { error: err };
    return;
  });
};

export const createShoppingItemsData = () => {
  stock.map((item) =>
    Items.findOneAndUpdate({ _id: item._id }, item, { upsert: true }, (err, item) => {
      if (err) return { error: err };
    })
  );
};
