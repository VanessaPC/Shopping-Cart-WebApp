import React from 'react';
import Link from 'next/link';
import { NavigationContainer, NavigationLinks } from './styles';

const Navigation = () => (
  <NavigationContainer>
    <Link href="/shop" passHref>
      <NavigationLinks>Shop</NavigationLinks>
    </Link>
    <Link href="/shop/checkout" passHref>
      <NavigationLinks>Checkout</NavigationLinks>
    </Link>
  </NavigationContainer>
);

export default Navigation;
