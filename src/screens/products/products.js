import React from 'react';
import {View} from 'react-native';
import styles from './productsStyles';
import useContentful from '../../hooks/use-contentful';
import {query} from '../../utils/contentful-query';

import RenderProducts from '../../components/RenderProducts/RenderProducts';

const Products = ({navigation}) => {
  const {products} = useContentful(query, null);

  return (
    <View style={styles.productsContainer}>
      <RenderProducts navigation={navigation} products={products} />
    </View>
  );
};

export default Products;
