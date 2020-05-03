const API_BASE = '/api';
const SHOPPING_CART_BASE = `${API_BASE}/shop`;

const URL = {
  BASE: API_BASE,
  SHOPPING_CART: {
    BASE: SHOPPING_CART_BASE,
    CART: `${SHOPPING_CART_BASE}/cart`,
    GET_ONE_ITEM: `${SHOPPING_CART_BASE}/get-item/:id`,
    ADD_ITEM: `${SHOPPING_CART_BASE}/add-item`,
    REMOVE_ITEM: `${SHOPPING_CART_BASE}/remove-item`,
    CHECKOUT: `${SHOPPING_CART_BASE}/checkout`,
  },
  USER: {
    BASE: `${API_BASE}/user`,
  },
};

export default URL;
