import React from 'react';
import { Product } from '../../interfaces';

const ItemDetails = ({ product }) => {
  const { name, price, _id } = product;
  const productExists = product && _id;
  if (!productExists) {
    return null;
  }
  return (
    <>
      <h3>{name}</h3>
      <p>{price} Euros</p>
    </>
  );
};

export default ItemDetails;
