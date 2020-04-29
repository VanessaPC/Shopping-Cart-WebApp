import fs from 'fs';
import { User } from '../../models/user.model';
import { Items } from '../../models/item.model';
import shop_products from '../../dataset/shopping-cart';
// const shop_products = JSON.parse(fs.readFileSync('./dataset/shopping-cart.json', 'utf8'));

export const AddItem = async (req, res, next) => {
  const user = await User.findOne({ _id: req.user._id });
  const { cart } = user;
  // const item = await Items.findOne({ _id: req.body._id });
  // const item = await shop_products.findOne({ _id: req.body._id });
  console.log('do i even get here', shop_products);

  // get the item in the request,
  // find the item in the product list
  // if it doesn't exist, throw an error
  // otherwise add it to the cart.

  // const productId = req.params.id;
  // const product = shop_products.filter((item) => item.id === product.id);
  // cart.addItem(product[0], productId);
  // req.session.cart = cart;
  // res.redirect('/');
};
