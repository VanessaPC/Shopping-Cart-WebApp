import React, { useState, useEffect } from 'react';
import config from '../../config';
import useAxios from 'axios-hooks';
import Button from '../../components/button';
import { getButtonText } from './helpers';
import { SelectorContainer, SelectorLabel, Selector } from './styles';

const ItemQuantity = ({ product, savedQuantity, onCartUpdate }) => {
  const [selectedQuantity, setSelectedQuantity] = useState(savedQuantity || 1);
  const [itemAdded, setItemAdded] = useState(true);
  const [{ data: postData, loading: postLoading, error: postError }, executePost] = useAxios(
    {
      url: config.addItem,
      method: 'POST',
    },
    { manual: true }
  );

  const onQuantityUpdate = (value: number) => {
    setSelectedQuantity(value);
    setItemAdded(false);
  };

  const onItemUpdate = async () => {
    const updatedItem = {
      ...product,
      quantity: selectedQuantity,
    };
    await executePost({ data: updatedItem });
    setItemAdded(true);
    onCartUpdate();
  };

  return (
    <>
      <SelectorLabel id="quantity-select">Select a quantity:</SelectorLabel>
      <SelectorContainer>
        <Selector
          name="item-quantity"
          id="quantity-select"
          value={selectedQuantity}
          onChange={(e) => onQuantityUpdate(parseInt(e.target.value))}
        >
          {[...Array(product.inStockQuantity)].map((u, i) => (
            <option key={i} value={i + 1}>
              {i + 1}
            </option>
          ))}
        </Selector>
        <Button type="submit" onClick={onItemUpdate}>
          {getButtonText(savedQuantity)}
        </Button>
      </SelectorContainer>
    </>
  );
};

export default ItemQuantity;
