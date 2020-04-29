const SHOPPING_CART_BASE = '/shopping-cart';

const URL = {
  BASE: '/',
  SHOPPING_CART: {
    BASE: SHOPPING_CART_BASE,
    ADD_ITEM: `${SHOPPING_CART_BASE}/add-item`,
    REMOVE_ITEM: `${SHOPPING_CART_BASE}/remove-item`,
    CHECKOUT: `${SHOPPING_CART_BASE}/checkout`,
  },
  USER: {
    BASE: '/user',
  },
};

export default URL;
