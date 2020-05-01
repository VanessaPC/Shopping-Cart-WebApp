import { Items } from '../../models/item.model';

export const getOneItem = async (req, res) => {
  const itemId = req.params.id;
  try {
    const item = await Items.findOne({ _id: itemId });
    if (!item) {
      return res.send({ message: 'Item does not exist' });
    }
    res.status(200).send(item);
  } catch (err) {
    res.status(500).send({ error: err });
  }
};
