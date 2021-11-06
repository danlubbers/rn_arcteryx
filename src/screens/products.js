import React from 'react';
import useContentful from '../hooks/use-contentful';
import {query} from '../utils/contentful-query';
import RenderProducts from '../components/RenderProducts/RenderProducts';

const Products = ({navigation}) => {
  const {products} = useContentful(query, null);

  return <RenderProducts navigation={navigation} products={products} />;
};

export default Products;
