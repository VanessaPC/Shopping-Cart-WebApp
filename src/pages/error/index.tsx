import React from 'react';
import Link from 'next/link';

const Error = () => (
  <div>
    <h2> Something has gone wrong. </h2>
    <Link href="/shop" as={`/shop`}>
      <a>Return to our shop to see more products!</a>
    </Link>
  </div>
);

export default Error;
