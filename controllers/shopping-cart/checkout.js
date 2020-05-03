import { User } from '../../models/user.model';

export const getCart = async (req, res) => {
  const user = await User.findOne({ _id: req.user._id });
  const { cart } = user;

  res.send(cart);
};
