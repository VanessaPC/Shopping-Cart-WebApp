import React from 'react';
import router from 'next/router';
import config from '../../../config';
import { Product } from '../../../interfaces';
import useAxios from 'axios-hooks';
import ItemQuantity from '../../../components/item-quantity';
import ItemDetails from '../../../components/item-details';
import Button from '../../../components/button';
import Loader from '../../../components/loader';
import Redirect from '../../../components/redirect';
import {
  PageTitle,
  ListContainer,
  ItemContainer,
  ShopContainer,
  CheckoutContainer,
  ImportantInformation,
} from '../../../styles/base';

const Checkout = () => {
  const [{ data: cartData, loading: loadingCart, error: cartError }, refetchCart] = useAxios(config.getShoppingCart, {
    useCache: false,
  });
  const [{ data: postData, loading: postLoading, error: postError }, executePost] = useAxios(
    {
      url: config.removeItem,
      method: 'POST',
    },
    { manual: true }
  );

  if (loadingCart) {
    return <Loader />;
  }

  if (cartError) {
    return router.push('/error');
  }

  if (cartData.cartItems.length === 0) {
    return <Redirect />;
  }

  const handleItemRemove = async (product) => {
    await executePost({ data: product });
    refetchCart();
  };

  const getItemInCart = (productId: number) => cartData.cartItems.find((item) => item._id === productId);
  const getCurrentQuantity = (product: Product) => (getItemInCart(product._id) ? getItemInCart(product._id).quantity : 0);

  return (
    <ShopContainer>
      <PageTitle>Checkout</PageTitle>
      <CheckoutContainer>
        <p>
          Total items: <ImportantInformation>{cartData.totalItems}</ImportantInformation>
        </p>
        <p>
          Total price: <ImportantInformation>{cartData.totalPrice} Euros</ImportantInformation>
        </p>
      </CheckoutContainer>
      <ListContainer>
        {cartData.cartItems.map((product) => (
          <ItemContainer key={product._id}>
            <ItemDetails product={product} />
            <ItemQuantity product={product} savedQuantity={getCurrentQuantity(product)} onCartUpdate={refetchCart} />
            <Button type="submit" secondary onClick={(e) => handleItemRemove(product)}>
              Remove item from basket
            </Button>
          </ItemContainer>
        ))}
      </ListContainer>
    </ShopContainer>
  );
};

export default Checkout;
