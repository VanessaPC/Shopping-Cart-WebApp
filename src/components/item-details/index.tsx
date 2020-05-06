import React from 'react';
import { Product } from '../../interfaces';
import { ItemImage, ItemImageWrapper } from './styles';

const ItemDetails = ({ product }: { product: Product }) => {
  const { name, price, _id, image } = product;
  const productExists = product && _id;
  if (!productExists) {
    return null;
  }
  return (
    <>
      <h3>{name}</h3>
      <ItemImageWrapper>
        <ItemImage src={image} />
      </ItemImageWrapper>
      <p>{price} Euros</p>
    </>
  );
};

export default ItemDetails;
