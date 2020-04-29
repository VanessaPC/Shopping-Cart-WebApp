export const MULTIPLIER = {
  ADD: 1,
  REMOVE: -1,
};

export const updateCart = (cart, item, multiplier) => {
  cart.totalItems += multiplier * item.quantity;
  cart.totalPrice += multiplier * item.price * item.quantity;
};

export const updateRemovedItems = (user, deletedItems) => {
  const { removedItems } = user;
  const removedItem = removedItems.find((savedItem) => deletedItems._id === savedItem._id);
  if (!removedItem) {
    removedItems.push(deletedItems);
  } else {
    removedItem.quantity += deletedItems.quantity;
  }
};
