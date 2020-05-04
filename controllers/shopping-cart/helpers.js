const getDeletedQuantity = (prevQuantity, currentQuantity) => prevQuantity - currentQuantity;

export const updateCart = (user, cart, item, previousQuantity) => {
  try {
    if (previousQuantity > item.quantity) {
      cart.totalItems -= getDeletedQuantity(previousQuantity, item.quantity);
      updateRemovedItems(user, item, previousQuantity - item.quantity);
      cart.totalPrice -= item.price * previousQuantity;
    } else {
      cart.totalItems += item.quantity;
      cart.totalPrice += item.price * item.quantity;
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
