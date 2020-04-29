import { Cart } from '../../models/cart.model';

export const RemoveItems = (req, res) => {
  const productId = req.params.id;
  let cart = new Cart(req.session.cart ? req.session.cart : {});

  cart.remove(productId);
  req.session.cart = cart;
  res.status(200).send(req.session.cart).redirect('/cart');
};
