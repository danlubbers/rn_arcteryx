import React from 'react';
import styles from './RenderProductsStyles';
import {TouchableOpacity, Image, View, Text, FlatList} from 'react-native';
import Header from '../Header/Header';

const RenderProducts = ({navigation, products}) => {
  console.log(`products`, products);

  const renderItem = ({item}) => {
    const image = item.imagesCollection.items[0].url;
    return (
      <TouchableOpacity>
        <View style={styles.itemWrapper}>
          <Image source={{uri: image}} style={styles.image} />
          <Text style={styles.titleText}>{item.title}</Text>
        </View>
      </TouchableOpacity>
    );
  };
  return (
    <View style={styles.productsContainer}>
      <Header navigation={navigation} />
      <FlatList
        data={products}
        renderItem={renderItem}
        keyExtractor={item => item.slug}
      />
    </View>
  );
};

export default RenderProducts;
