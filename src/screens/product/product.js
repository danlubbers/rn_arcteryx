import React, {useContext} from 'react';
import {View} from 'react-native';
import styles from './productStyles';
import {GlobalContext} from '../../context/Provider';
import RenderProduct from '../../components/RenderProduct/RenderProduct';

const Product = () => {
  const {globalState} = useContext(GlobalContext);

  return (
    <View style={styles.productsContainer}>
      <RenderProduct filteredProduct={globalState.filteredProduct} />
    </View>
  );
};

export default Product;
