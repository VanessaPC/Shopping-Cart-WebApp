import React from 'react';
import useAxios from 'axios-hooks';
import config from '../config';
import dynamic from 'next/dynamic';
const ShopPage = dynamic(() => import('../pages/shop'));

const USER_STATUS = {
  LOGGED_IN: 'logged_in',
  NULL: 'null',
};

const LandingPage = () => {
  const [{ data, loading, error }, refetch] = useAxios(config.getUser);
  console.log('USER: ', data);
  if (loading) {
    <p>loading</p>;
  }
  if (error) {
    <p>error</p>;
  }

  switch (data.status) {
    case USER_STATUS.LOGGED_IN:
      return ShopPage;
    default:
      return;
  }
};

export default LandingPage;
