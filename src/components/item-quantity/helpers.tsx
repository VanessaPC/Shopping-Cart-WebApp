export const getButtonText = (quantity: number) => {
  if (quantity > 0) {
    return 'Update';
  }
  return 'Add';
};
