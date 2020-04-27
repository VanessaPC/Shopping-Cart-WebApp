import { Item } from '../../models/index';

const getItem = (req, res, item) => {
  if (!item) {
    res.send(404);
  } else {
    try {
      Item.findOne({
        id: item.id,
      }).then(() => {
        res.status(200).send({
          message: 'item exists',
        });
      });
    } catch (err) {
      return err;
    }
  }
};
export const AddItem = (req, res) => {
  const item = req.body;
  return getItem(req, res, item);
};
