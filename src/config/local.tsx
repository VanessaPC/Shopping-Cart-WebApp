export default {
  findSingleItem: (id) => `http://localhost:3100/api/shop/get-item/${id}`,
  getProductList: 'http://localhost:3100/api/shop',
  getShoppingCart: 'http://localhost:3100/api/shop/cart',
  addItem: 'http://localhost:3100/api/shop/add-item',
};
