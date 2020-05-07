import { User } from '../../models/user.model';

/**
 * Get Cart:
 * Retrieves the users shopping cart with all the items.
 * @param {*} req
 * @param {*} res
 */
export const getCart = async (req, res) => {
  const user = await User.findOne({ _id: req.user._id });
  const { cart } = user;

  res.send(cart);
};
