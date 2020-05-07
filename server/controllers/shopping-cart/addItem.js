import { User } from '../../models/user.model';
import { Items } from '../../models/item.model';
import { updateCart } from './helpers';

/**
 * Add Item:
 * Adds items to the user's shopping cart.
 * @param {*} req
 * @param {*} res
 */
export const addItem = async (req, res) => {
  const user = await User.findOne({ _id: req.user._id });
  const { cart } = user;
  const requestedItem = req.body;

  try {
    const stockItem = await Items.findOne({ _id: requestedItem._id });

    if (!stockItem) {
      return res.send({ message: 'Item does not exist' });
    }

    const stockQuantity = stockItem.inStockQuantity;
    const cartItem = cart.cartItems.find((savedItem) => stockItem._id === savedItem._id);
    let previousCartItem;
    if (!cartItem) {
      requestedItem.inStockQuantity = stockQuantity;
      cart.cartItems.push(requestedItem);
    } else {
      if (requestedItem.quantity <= stockQuantity) {
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
    res.send({ error: err });
  }
};
