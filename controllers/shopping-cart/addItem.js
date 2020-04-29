import { User } from '../../models/user.model';
import { Items } from '../../models/item.model';

const updateCart = (cart, item) => {
  cart.totalItems += item.quantity;
  cart.totalPrice += item.price * item.quantity;
};

export const addItem = async (req, res) => {
  const user = await User.findOne({ _id: req.user._id });
  const { cart } = user;
  const requestedItem = req.body;

  try {
    const item = await Items.findOne({ _id: requestedItem._id });
    if (!item) {
      return res.send({ message: 'Item does not exist' });
    }

    const itemInCart = cart.cartItems.find((savedItem) => item._id === savedItem._id);

    if (!itemInCart) {
      cart.cartItems.push(requestedItem);
    } else {
      itemInCart.quantity += requestedItem.quantity;
    }

    updateCart(cart, requestedItem);
    user.save();
    res.status(200).send({ message: 'Item saved' });
  } catch (err) {
    res.send({ error: err });
  }
};
