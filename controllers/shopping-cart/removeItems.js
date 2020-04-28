import { Item } from '../../models/index';

const addRemovedItems = (req, res, items) => {
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

export const RemovedItems = (req, res) => {
  const item = req.body;
  return addRemovedItems(req, res, item);
};
