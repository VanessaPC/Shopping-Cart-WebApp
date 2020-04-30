import React from 'react';
// import { useQuery } from 'react-query';
// import { ListRow } from './components/ListRow';

// const fetchTunes = async () => fetch('http://localhost:3100/tunes').then(res => res.json());

const ShopList = () => {
  //   const { status, data, error } = useQuery('tunes', fetchTunes);
  console.log('rendering stuff');

  //   if (status === 'loading') {
  //     return <div>Loading...</div>;
  //   }

  return (
    <div>
      <h2>Tunes</h2>
      <p>Wooop</p>
    </div>
  );
};

export default ShopList;
