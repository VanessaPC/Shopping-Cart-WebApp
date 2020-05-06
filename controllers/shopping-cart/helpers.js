/**
 * Update Cart:
 * Helper function to update the cart price and total items any time the user either
 * adds or removes items.
 * @param {object} user
 * @param {object} cart
 * @param {object} item
 * @param {number} previousQuantity
 */
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

/**
 * Update Removed Items:
 * Updates the number of removed items before checkout.
 * This is called anytime the user removes a n number of items.
 * @param {object} user
 * @param {object} item
 * @param {quantity} deletedQuantity
 */
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
