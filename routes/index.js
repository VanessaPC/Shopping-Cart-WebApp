import express from 'express';
import { AppStartUp } from '../controllers/index';
import { ShoppingCartController } from '../controllers/shopping-cart';
import { UserController } from '../controllers/user';
import URL from './constants';

const router = new express.Router();

router.get(URL.SHOPPING_CART.BASE, ShoppingCartController.getAllItemsList);
router.get(URL.SHOPPING_CART.GET_ONE_ITEM, ShoppingCartController.getOneItem);
router.post(URL.SHOPPING_CART.ADD_ITEM, ShoppingCartController.addItem);
router.post(URL.SHOPPING_CART.REMOVE_ITEM, ShoppingCartController.removeItem);
router.get(URL.SHOPPING_CART.CHECKOUT, ShoppingCartController.checkout);

router.get(URL.USER.BASE, UserController.getUser);

router.get(URL.BASE, AppStartUp);

export default router;
