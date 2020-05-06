export const updateCart = (user, cart, item, previousQuantity = 0) => {
  try {
    cart.totalItems = cart.totalItems - previousQuantity + item.quantity;
    cart.totalPrice = cart.totalPrice - previousQuantity * item.price + item.price * item.quantity;
    if (previousQuantity > item.quantity) {
      updateRemovedItems(user, item, previousQuantity - item.quantity);
    }
  } catch (error) {
    return error;
  }
};

export const updateRemovedItems = (user, item, deletedQuantity) => {
  const { removedItems } = user;
  const removedItem = removedItems.find((savedItem) => item._id === savedItem._id);
  if (!removedItem) {
    item.quantity = deletedQuantity;
    removedItems.push(item);
  } else {
    removedItem.quantity += deletedQuantity;
  }
};
