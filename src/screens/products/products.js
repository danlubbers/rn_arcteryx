import React, {useContext} from 'react';
import {View} from 'react-native';
import styles from './productsStyles';
import useContentful from '../../hooks/use-contentful';
import {query} from '../../utils/contentful-query';
import {GlobalContext} from '../../context/Provider';
import RenderProducts from '../../components/RenderProducts/RenderProducts';

const Products = ({navigation}) => {
  const {initialState} = useContext(GlobalContext);
  const {products} = useContentful(query, null);

  const gender = initialState.globalState.gender;

  return (
    <View style={styles.productsContainer}>
      <RenderProducts
        navigation={navigation}
        products={products}
        gender={gender}
      />
    </View>
  );
};

export default Products;
