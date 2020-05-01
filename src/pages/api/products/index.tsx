import { NextApiRequest, NextApiResponse } from 'next';

type ShopItems = {
  name: String;
  price: Number;
};

export default (req: NextApiRequest, res: NextApiResponse<Array<ShopItems>>) => {
  res.json([
    {
      name: 'Pioneer DJ Mixer',
      price: 699,
    },
    {
      name: 'Roland Wave Sampler',
      price: 485,
    },
    {
      name: 'Reloop Headphone',
      price: 159,
    },
    {
      name: 'Rokit Monitor',
      price: 189.9,
    },
    {
      name: 'Fisherprice Baby Mixer',
      price: 120,
    },
  ]);
};
