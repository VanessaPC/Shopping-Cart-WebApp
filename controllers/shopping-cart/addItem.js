import { Item } from '../../models/index';

const getItems = (req, res, items) => {
  if (!items) {
    res.send(404);
  } else {
    try {
      items.map(
        items,
        Item.findOne({
          id: items.id,
        }).then(() => {
          res.status(200).send({
            message: 'item exists',
          });
        })
      );
    } catch (err) {
      return err;
    }
  }
};

export const AddItems = (req, res) => {
  const item = req.body;
  return getItems(req, res, item);
};
