import React, { useState, useEffect } from 'react';
import { useRouter } from 'next/router';
import config from '../../../config';
import useAxios from 'axios-hooks';

const Checkout = () => {
  const router = useRouter();
  const [{ data: cartData, loading: loadingCart, error: cartError }, refetchCart] = useAxios(config.getShoppingCart);

  console.log('router:', cartData);
  return <p>here</p>;
};

export default Checkout;
