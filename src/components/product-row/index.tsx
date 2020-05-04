import React, { useState, useEffect } from 'react';
import config from '../../config';
import useAxios from 'axios-hooks';
import Item from '../item';
import { getStockQuantityError, stopReloadOnItemNotAdded, getButtonText } from './helpers';

const ProductRow = ({ product, savedQuantity, onCartUpdate }) => {
  const [selectedQuantity, setSelectedQuantity] = useState(savedQuantity || 1);
  const [itemAdded, setItemAdded] = useState(true);
  const [{ data: postData, loading: postLoading, error: postError }, executePost] = useAxios(
    {
      url: config.addItem,
      method: 'POST',
    },
    { manual: true }
  );

  useEffect(() => {
    getStockQuantityError(postData);
  }, [postData]);

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

  stopReloadOnItemNotAdded(itemAdded);

  return (
    <div>
      <label id="quantity-select">Select a quantity:</label>
      <select
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
      </select>
      <button type="submit" onClick={onItemUpdate}>
        {getButtonText(savedQuantity)}
      </button>
    </div>
  );
};

export default ProductRow;
