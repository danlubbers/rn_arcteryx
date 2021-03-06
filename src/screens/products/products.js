import React, {useContext} from 'react';
import {View} from 'react-native';
import styles from './productsStyles';
import useContentful from '../../hooks/use-contentful';
import {query} from '../../utils/contentful-query';
import {GlobalContext} from '../../context/Provider';
import RenderProducts from '../../components/RenderProducts/RenderProducts';

const Products = ({navigation}) => {
  const {globalState, globalDispatch} = useContext(GlobalContext);
  const {products} = useContentful(query, null);
  const gender = globalState.gender;

  return (
    <View style={styles.productsContainer}>
      <RenderProducts
        navigation={navigation}
        products={products}
        gender={gender}
        globalDispatch={globalDispatch}
      />
    </View>
  );
};

export default Products;
