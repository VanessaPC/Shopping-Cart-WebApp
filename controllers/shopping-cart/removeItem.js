import { User } from '../../models/user.model';
import { updateRemovedItems, updateCart } from './helpers';

export const removeItem = async (req, res) => {
  const user = await User.findOne({ _id: req.user._id });
  const { cart } = user;
  const deleteItem = req.body;

  try {
    const itemInCart = cart.cartItems.find((item) => deleteItem._id === item._id);
    if (!itemInCart) {
      return res.send({ message: 'Item does not exist in user cart' });
    }
    itemInCart.quantity -= deleteItem.quantity;

    updateCart(user, cart, deleteItem);
    updateRemovedItems(user, deleteItem, deleteItem.quantity);

    user.save();
    res.status(200).send({ message: 'Item deleted' });
  } catch (err) {
    res.send({ message: err });
  }
};
