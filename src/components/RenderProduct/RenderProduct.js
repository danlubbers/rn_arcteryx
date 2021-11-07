import React from 'react';
import styles from './RenderProductStyles';
import {TouchableOpacity, Image, View, Text, FlatList} from 'react-native';

const RenderProduct = ({product, gender}) => {
  // console.log(`product`, product);
  // const image = product.imagesCollection.items[0].url;

  return (
    <View style={styles.itemWrapper}>
      {/* <Image source={{uri: image}} style={styles.image} />
      <Text style={styles.titleText}>{product.title}</Text> */}
    </View>
  );
};

export default RenderProduct;
