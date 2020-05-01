import React from 'react';
import config from '../../../config';
import Item from '../../../components/item';
import { useRouter } from 'next/router';
import useAxios from 'axios-hooks';

const Product = (product) => {
  const router = useRouter();
  const { id } = router.query;
  const [{ data, loading, error }, refetch] = useAxios(config.findSingleItem(id));

  if (loading) {
    return <p>loading</p>;
  }
  if (error) {
    return <p> error</p>;
  }
  return <Item product={data} />;
};

export default Product;
