import React from 'react';
import config from '../../config';
import router from 'next/router';
import useAxios from 'axios-hooks';
import { Product } from '../../interfaces';
import ItemQuantity from '../../components/item-quantity';
import ItemDetails from '../../components/item-details';
import Loader from '../../components/loader';
import { ListContainer, ItemContainer, ShopContainer, PageTitle } from '../../styles/base';

const ShopList = () => {
  const [{ data, loading, error }, refetch] = useAxios(config.getProductList);
  const [{ data: cartData, loading: loadingCart, error: cartError }, refetchCart] = useAxios(config.getShoppingCart);

  if (loading || loadingCart) {
    if (!cartData) return <Loader />;
  }

  if (error || cartError) {
    return router.push('/error');
  }
  const getItemInCart = (productId: number) => cartData.cartItems.find((item) => item._id === productId);
  const getCurrentQuantity = (product: Product) => (getItemInCart(product._id) ? getItemInCart(product._id).quantity : 0);

  return (
    <ShopContainer>
      <PageTitle>Product List</PageTitle>
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
  );
};

export default ShopList;
