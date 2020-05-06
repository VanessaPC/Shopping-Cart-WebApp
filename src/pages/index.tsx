import React from 'react';
import useAxios from 'axios-hooks';
import config from '../config';
import router from 'next/router';

const USER_STATUS = {
  LOGGED_IN: 'logged_in',
  NULL: 'null',
};

const LandingPage = () => {
  const [{ data, loading, error }, refetch] = useAxios(config.getUser, { useCache: false });

  if (loading) {
    return <p>loading</p>;
  }

  if (error) {
    router.push('/error');
    return null;
  }

  switch (data.status) {
    case USER_STATUS.LOGGED_IN:
      router.push('/shop');
      return null;
    default:
      router.push('/error');
      return null;
  }
};

export default LandingPage;
