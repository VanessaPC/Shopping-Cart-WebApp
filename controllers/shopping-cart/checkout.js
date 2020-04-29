import { Cart } from '../../models/cart.model';

export const Checkout = (req, res) => {
  if (!req.session.cart) {
    res.send('cart', {
      products: null,
    });
  }
  const cart = new Cart(req.session.cart);
  res.send('cart', {
    products: cart.getItems(),
    totalPrice: cart.getTotalPrice,
  });
};
