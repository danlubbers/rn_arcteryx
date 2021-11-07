import React, {useContext} from 'react';
import {View} from 'react-native';
import styles from './productStyles';
import useContentful from '../../hooks/use-contentful';
import {query} from '../../utils/contentful-query';
import {GlobalContext} from '../../context/Provider';
import RenderProduct from '../../components/RenderProduct/RenderProduct';

const Product = ({navigation}) => {
  const {globalState} = useContext(GlobalContext);
  const {products} = useContentful(query, null);
  // console.log(`products`, products);

  const gender = globalState.gender;

  return (
    <View style={styles.productsContainer}>
      <RenderProduct
        navigation={navigation}
        products={products}
        gender={gender}
      />
    </View>
  );
};

export default Product;
