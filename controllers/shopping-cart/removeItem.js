import { Cart } from '../../models/cart.model';
import { User } from '../../models/user.model';
import { Items } from '../../models/item.model';

const updateCart = (cart, item) => {
  cart.totalItems -= item.quantity;
  cart.totalPrice -= item.price * item.quantity;
};

const updateRemovedItems = (user, deletedItems) => {
  // check if there are items, if not, i just push a new one,
  // if there are any items stored in there i check whether there is one,
  // if so, then I add to that the new delted itesm.
};

export const removeItems = async (req, res) => {
  const user = await User.findOne({ _id: req.user._id });
  const { cart } = user;
  const deleteItem = req.body;

  try {
    const itemInCart = cart.cartItems.find((item) => deleteItem.id === item.id);

    if (!itemInCart) res.send({ message: 'Item does not exist in user cart' });

    itemInCart.quantity -= deleteItem.quantity;
    user.removedItems.push(deleteItem);
    updateCart(cart, deleteItem);

    user.save();
    res.status(200).send({ message: 'Item deleted' });
  } catch (err) {
    res.send({ message: err });
  }
};
