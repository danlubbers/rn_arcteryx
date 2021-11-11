import React from 'react';
import styles from './RenderProductStyles';
import {Image, View, Text} from 'react-native';

const RenderProduct = ({filteredProduct}) => {
  const image = filteredProduct.imagesCollection.items[0].url;

  return (
    <View style={styles.itemWrapper}>
      <Image source={{uri: image}} style={styles.image} />
      {/* <Text style={styles.titleText}>{filteredProduct.title}</Text> */}
    </View>
  );
};

export default RenderProduct;
