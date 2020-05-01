import { Items } from '../../models/item.model';

export const getAllItemsList = async (req, res) => {
  const itemList = await Items.find();
  res.status(200).send(itemList);
};
