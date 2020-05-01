import React from 'react';

const Item = ({ product }) => {
  const { name, price, _id } = product;
  const productExists = product && _id;
  return productExists ? (
    <>
      <p>{name}</p>
      <p>{price}</p>
    </>
  ) : (
    <p>Empty</p>
  );
};

export default Item;
