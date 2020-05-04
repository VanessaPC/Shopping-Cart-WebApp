import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import config from '../../../config';
import { Product } from '../../../interfaces';
import useAxios from 'axios-hooks';
import ProductRow from '../../../components/product-row';

const Checkout = () => {
  const [{ data: cartData, loading: loadingCart, error: cartError }, refetchCart] = useAxios(config.getShoppingCart);
  const [{ data: postData, loading: postLoading, error: postError }, executePost] = useAxios(
    {
      url: config.removeItem,
      method: 'POST',
    },
    { manual: true }
  );

  if (loadingCart) {
    return <p>Loading</p>;
  }

  if (cartError) {
    return <p>There's been an issue with this cart.</p>;
  }

  if (cartData.cartItems.length === 0) {
    return (
      <>
        <h3>Your cart its empty, why don't you see our list of products?</h3>
        <Link href="/shop" as="/shop">
          <a>Go to shop!</a>
        </Link>
      </>
    );
  }
  const handleItemRemove = async (product) => {
    await executePost({ data: product });
    refetchCart();
  };

  const getItemInCart = (productId: number) => cartData.cartItems.find((item) => item._id === productId);
  const getCurrentQuantity = (product: Product) => (getItemInCart(product._id) ? getItemInCart(product._id).quantity : 0);

  return (
    <>
      <h2>Checkout</h2>
      <h3>Your cart here:</h3>
      <p>Total items: {cartData.totalItems}</p>
      <p>Total price: {cartData.totalPrice} Euros</p>
      {cartData.cartItems.map((product) => (
        <div key={product._id}>
          <p>Item name: {product.name}</p>
          <p>Total item/s price: {product.price}</p>
          <ProductRow product={product} savedQuantity={getCurrentQuantity(product)} onCartUpdate={refetchCart} />
          <button type="submit" onClick={(e) => handleItemRemove(product)}>
            Remove item from basket
          </button>
        </div>
      ))}
    </>
  );
};

export default Checkout;
