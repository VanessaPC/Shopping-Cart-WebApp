import express from 'express';
import { AppStartUp } from '../controllers/index';
import { ShoppingCartController } from '../controllers/shopping-cart';
import { UserController } from '../controllers/user';
import URL from './constants';

const router = new express.Router();

router.post(URL.SHOPPING_CART.ADD_ITEM, ShoppingCartController.addItem);
router.get(URL.SHOPPING_CART.REMOVE_ITEM, ShoppingCartController.removeItem);
router.get(URL.SHOPPING_CART.CHECKOUT, ShoppingCartController.Checkout);

router.get(URL.USER.BASE, UserController.getUser);

router.get(URL.BASE, AppStartUp);

router.get('*', (req, res) => {
  res.sendStatus(404);
});

export default router;
