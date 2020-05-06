import { Items } from '../../models/item.model';

/**
 * Get all items list:
 * Retrieves tot he client side all the stock items
 * from the shop.
 * @param {*} req
 * @param {*} res
 */
export const getAllItemsList = async (req, res) => {
  const itemList = await Items.find();
  res.status(200).send(itemList);
};
