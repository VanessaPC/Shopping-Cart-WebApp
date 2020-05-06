import React from 'react';
import Link from 'next/link';
import { ShopContainer } from '../../styles/base';

const Redirect = () => (
  <ShopContainer>
    <h3>Your cart its empty, why don't you see our list of products?</h3>
    <Link href="/shop">
      <a>Go to the shop</a>
    </Link>
  </ShopContainer>
);

export default Redirect;
