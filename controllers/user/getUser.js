import { User } from '../../models/user.model';

export const getUser = async (req, res) => {
  // Mocking user id for the moment being.
  const id = '5e0efe265ae4232f32541f56';
  const user = await User.findOne({ _id: id });
  user ? res.send(user) : res.status(404).send({ message: 'User not found' });
};
