import { User } from '../../models/user.model';
import { updateRemovedItems } from './helpers';

export const removeItem = async (req, res) => {
  const user = await User.findOne({ _id: req.user._id });
  const { cart } = user;
  const itemToDelete = req.body;

  try {
    const itemInCart = cart.cartItems.find((item) => itemToDelete._id === item._id);
    if (!itemInCart) {
      return res.send({ message: 'Item does not exist in user cart' });
    }

    cart.totalPrice -= itemToDelete.quantity * itemToDelete.price;
    cart.totalItems -= itemToDelete.quantity;
    updateRemovedItems(user, itemToDelete, itemToDelete.quantity);

    await User.update({ _id: user._id }, { $pull: { 'cart.cartItems': { _id: itemToDelete._id } } });

    user.save();
    res.status(200).send({ message: 'Item deleted' });
  } catch (err) {
    res.send({ message: err });
  }
};
