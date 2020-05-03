import React, { useState, useEffect } from 'react';
import config from '../../config';
import Link from 'next/link';
import useAxios from 'axios-hooks';
import { Product } from '../../interfaces';
import ProductRow from '../../components/product-row';

const ShopList = () => {
  const [{ data, loading, error }, refetch] = useAxios(config.getProductList);
  const [{ data: cartData, loading: loadingCart, error: cartError }, refetchCart] = useAxios(config.getShoppingCart);

  if (loading || loadingCart) {
    return <p>loading</p>;
  }

  if (error || cartError) {
    return <p>Our list broke!</p>;
  }
  const getItemInCart = (productId: number) => cartData.cartItems.find((item) => item._id === productId);
  const getCurrentQuantity = (product) => (getItemInCart(product._id) ? getItemInCart(product._id).quantity : 0);

  return (
    <div>
      <Link href="/shop/checkout/" as={`/shop/checkout`}>
        <a>Go to checkout</a>
      </Link>
      <h2>Product List</h2>
      {data.map((product: Product) => (
        <div key={product._id}>
          <ProductRow
            product={product}
            savedQuantity={getItemInCart(product._id) ? getItemInCart(product._id).quantity : 0}
            onCartUpdate={refetchCart}
          />
          <Link href="/shop/product/[id]" as={`/shop/product/${product._id}`}>
            <a>View product</a>
          </Link>
        </div>
      ))}
    </div>
  );
};

export default ShopList;
