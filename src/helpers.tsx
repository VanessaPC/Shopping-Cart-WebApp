export const formatMoney = (quantity: number) =>
  new Intl.NumberFormat('en-GB', { style: 'currency', currency: 'EUR' }).format(quantity);
