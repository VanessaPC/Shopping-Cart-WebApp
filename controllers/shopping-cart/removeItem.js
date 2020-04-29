import { User } from '../../models/user.model';

const updateCart = (cart, item) => {
  cart.totalItems -= item.quantity;
  cart.totalPrice -= item.price * item.quantity;
};

const updateRemovedItems = (user, deletedItems) => {
  const { removedItems } = user;
  const removedItem = removedItems.find((savedItem) => deletedItems._id === savedItem._id);
  console.log('deleteditems: ', deletedItems);
  if (!removedItem) {
    removedItems.push(deletedItems);
  } else {
    removedItem.quantity += deletedItems.quantity;
  }
};

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

    updateCart(cart, deleteItem);
    updateRemovedItems(user, deleteItem);

    user.save();
    res.status(200).send({ message: 'Item deleted' });
  } catch (err) {
    console.log('ERROR: ', err);
    res.send({ message: err });
  }
};
