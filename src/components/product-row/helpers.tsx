type DataError = {
  message: string;
};

export const getStockQuantityError = (data: DataError) => {
  if (data && data.message && data.message === 'error') {
    alert('We do not have that much stock, please adjust quantity');
  }
};

export const stopReloadOnItemNotAdded = (itemAdded: boolean) => {
  window.addEventListener('onbeforeunload', (event) => {
    if (!itemAdded) {
      alert('You have not added to your basket all the items, add them to not loose the information.');
    }
  });
};

export const getButtonText = (quantity: number) => {
  if (quantity > 0) {
    return 'Update';
  }
  return 'Add';
};
