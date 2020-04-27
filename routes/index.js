import express from 'express';
import { ShoppingCartController } from '../controllers/shopping-cart';
import URL from './constants';

const router = new express.Router();

router.post(URL.SHOPPING_CART.ADD_ITEM, ShoppingCartController.AddItem);

router.get('*', (req, res) => {
  res.sendStatus(404);
});

export default router;
