import { User } from '../../models/user.model';
import { Items } from '../../models/item.model';
import { updateCart } from './helpers';

export const addItem = async (req, res) => {
  const user = await User.findOne({ _id: req.user._id });
  const { cart } = user;
  const requestedItem = req.body;

  try {
    const stockItem = await Items.findOne({ _id: requestedItem._id });
    if (!stockItem) {
      return res.send({ message: 'Item does not exist' });
    }

    const cartItem = cart.cartItems.find((savedItem) => stockItem._id === savedItem._id);
    let previousCartItem;

    if (!cartItem) {
      cart.cartItems.push(requestedItem);
    } else {
      if (requestedItem.quantity <= stockItem.quantity) {
        previousCartItem = cartItem.quantity;
        cartItem.quantity = requestedItem.quantity;
      } else {
        return res.send({ message: 'error' });
      }
    }

    updateCart(user, cart, requestedItem, previousCartItem);

    user.save();
    res.status(200).send({ message: 'Item saved' });
  } catch (err) {
    console.log('errrrr', err);
    res.send({ error: 'here?' });
  }
};
