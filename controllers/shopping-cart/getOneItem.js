import { Items } from '../../models/item.model';

/**
 * Get one item:
 * Retrieves details about one item to the client side.
 * @param {*} req
 * @param {*} res
 */
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
