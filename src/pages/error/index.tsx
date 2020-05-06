import React from 'react';
import { ShopContainer } from '../../styles/base';
import Link from 'next/link';

const Error = () => (
  <ShopContainer>
    <h2> Something has gone wrong. </h2>
    <Link href="/shop">Go to the shop</Link>
  </ShopContainer>
);

export default Error;
