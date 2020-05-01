import React from 'react';
import config from '../../config';
import Link from 'next/link';
import useAxios from 'axios-hooks';
import Item from '../../components/item';

const ShopList = () => {
  const [{ data, loading, error }, refetch] = useAxios(config.getProductList);

  if (loading) {
    return <p>loading</p>;
  }

  if (error) {
    return <p>Our list broke!</p>;
  }

  return (
    <div>
      <h2>Product List</h2>
      {data.map((product: Product) => (
        <div key={product._id}>
          <Item product={product} />
          <Link href="/shop/product/[id]" as={`/shop/product/${product._id}`}>
            Add
          </Link>
        </div>
      ))}
    </div>
  );
};

type Product = {
  _id: number;
  name: string;
  quantity: number;
  price: number;
};
export default ShopList;
