import React, { useState, useEffect } from 'react';
import config from '../../config';
import router from 'next/router';
import useAxios from 'axios-hooks';
import { Product } from '../../interfaces';
import ItemQuantity from '../../components/item-quantity';
import ItemDetails from '../../components/item-details';
import Loader from '../../components/loader';
import Navigation from '../../components/navigation';
import { ListContainer, ItemContainer, ShopContainer } from './styles';

const ShopList = () => {
  const [{ data, loading, error }, refetch] = useAxios(config.getProductList);
  const [{ data: cartData, loading: loadingCart, error: cartError }, refetchCart] = useAxios(config.getShoppingCart);

  if (loading || loadingCart) {
    return <Loader />;
  }

  if (error || cartError) {
    return router.push('/error');
  }
  const getItemInCart = (productId: number) => cartData.cartItems.find((item) => item._id === productId);
  const getCurrentQuantity = (product: Product) => (getItemInCart(product._id) ? getItemInCart(product._id).quantity : 0);

  return (
    <>
      <Navigation />
      <ShopContainer>
        <h2>Product List</h2>
        <ListContainer>
          {data.map((product: Product) => (
            <ItemContainer key={product._id}>
              <ItemDetails product={product} />
              <ItemQuantity product={product} savedQuantity={getCurrentQuantity(product)} onCartUpdate={refetchCart} />
              <span>In stock {product.inStockQuantity}</span>
            </ItemContainer>
          ))}
        </ListContainer>
      </ShopContainer>
    </>
  );
};

export default ShopList;
