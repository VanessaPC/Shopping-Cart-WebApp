interface shopItems {
  name: String;
  price: Number;
}
interface bodyResponse {
  [json: string]: any;
  pages: Array<shopItems>;
}

interface bodyRequest {
  body: any;
}

export default (req: bodyRequest, res: bodyResponse) => {
  res.json({
    pages: [
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
    ],
  });
};
