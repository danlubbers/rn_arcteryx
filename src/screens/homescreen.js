import React from 'react';
import useContentful from '../hooks/use-contentful';
import {query} from '../utils/contentful-query';
import HomeScreenComponent from '../components/HomeScreen/HomeScreen';

const Homescreen = ({navigation}) => {
  const {products} = useContentful(query, null);
  const randomProduct = products[Math.floor(Math.random() * products.length)];

  return (
    <HomeScreenComponent
      navigation={navigation}
      randomProduct={randomProduct}
    />
  );
};

export default Homescreen;
