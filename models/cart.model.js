// import fs from 'fs';
import mongoose from 'mongoose';
import { cartModelName } from './constants';
import { CartSchema } from '../schemas/cart';

export const CartModel = mongoose.model(cartModelName, CartSchema);

// const products = JSON.parse(fs.readFileSync('./dataset/shopping-cart.json', 'utf8'));

// const emptyItem = { id: 0, name: '', price: 0 };
// const emptyCart = new Cart({ cartItems: [emptyItem] });
// emptyCart.save((err) => (err ? err : null));

// Cart.create = () => (
//   emptyCart,
//   () => {
//     Cart.price = 0;
//     Cart.removedItems = 0;
//     Cart.id = 'abc';
//   }
// );

// Cart.addItem = () => (
//   emptyCart,
//   (item, id) => {
//     let cartItem = Cart.cartItems[id] || {};

//     if (!cartItem) {
//       cartItem = Cart.cartItems[id] = { item: item, quantity: 0, price: item.price };
//     }

//     cartItem.quantity++;
//     cartItem.price = cartItem.price * cartItem.quantity;
//     Cart.totalItems++;
//     Cart.price += cartItem.item.price;
//   }
// );

// Cart.removeItem((item, id) => {
//   let removedItems = Cart.removedItems[id] || {};

//   if (!removedItems) {
//     removedItems = Cart.removedItems[id] = { item: item, quantity: 0, price: item.price };
//   }
//   Cart.removedItemsQuantity++;
//   removedItems.quantity++;
//   Cart.totalItems -= removedItems[id].quantity;
//   Cart.price -= removedItems[id].price;
// });

// Cart.getItems = () => {
//   let allItems = [];
//   return allItems;
// };
