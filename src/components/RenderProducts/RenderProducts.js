import React from 'react';
import styles from './RenderProductsStyles';
import {TouchableOpacity, Image, View, Text, FlatList} from 'react-native';

const RenderProducts = ({products, gender}) => {
  const renderItem = ({item}) => {
    const image = item.imagesCollection.items[0].url;
    if (item.gender === gender || item.gender === 'unisex') {
      return (
        <TouchableOpacity onPress={() => console.log(`item.slug`, item.slug)}>
          <View style={styles.itemWrapper}>
            <Image source={{uri: image}} style={styles.image} />
            <Text style={styles.titleText}>{item.title}</Text>
          </View>
        </TouchableOpacity>
      );
    }
  };
  return (
    <FlatList
      data={products}
      renderItem={renderItem}
      keyExtractor={item => item.slug}
    />
  );
};

export default RenderProducts;
