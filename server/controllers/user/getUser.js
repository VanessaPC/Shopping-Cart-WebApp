import { User } from '../../models/user.model';

/**
 * Get user:
 * Gets the user details of a user. At the moment is mocking
 * the user details to the server.
 * @param {*} req
 * @param {*} res
 */
export const getUser = async (req, res) => {
  const id = '5e0efe265ae4232f32541f56';
  const user = await User.findOne({ _id: id });
  user ? res.send(user) : res.status(404).send({ message: 'User not found' });
};
