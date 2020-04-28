const SHOPPING_CART_BASE = '/shopping-cart';

const URL = {
  BASE: '/',
  SHOPPING_CART: {
    BASE: SHOPPING_CART_BASE,
    ADD_ITEMS: `${SHOPPING_CART_BASE}/add-items`,
    REMOVED_ITEMS: `${SHOPPING_CART_BASE}/removed_items`,
    CHECKOUT: `${SHOPPING_CART_BASE}/checkout`,
  },
};

export default URL;
