import { User } from '../models/user.model';
import { Items } from '../models/item.model';
import { shopping_cart } from '../dataset/shopping-cart';

const newUserData = {
  _id: '5e0efe265ae4232f32541f56',
  name: 'Joseph Shopper',
  cart: {
    _id: '5e6e49b901109e15788ebe53',
    price: 0,
    cartItems: [],
    removedItems: [],
    quantity: 0,
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
  shopping_cart.map((item) =>
    Items.findOneAndUpdate({ _id: item._id }, item, { upsert: true }, (err, item) => {
      if (err) return { error: err };
    })
  );
};
