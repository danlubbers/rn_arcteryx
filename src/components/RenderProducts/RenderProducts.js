import React from 'react';
import styles from './RenderProductsStyles';
import {TouchableOpacity, Image, View, Text, FlatList} from 'react-native';
import {FILTERED_PRODUCT} from '../../constants/actionTypes';

const RenderProducts = ({
  navigation,
  products,
  gender,
  globalDispatch,
  filteredProductsArray,
}) => {
  const renderItem = ({item}) => {
    const image = item.imagesCollection.items[0].url;
    if (!filteredProductsArray) {
      if (item.gender === gender || item.gender === 'unisex') {
        return (
          <TouchableOpacity
            onPress={() => {
              globalDispatch({type: FILTERED_PRODUCT, payload: item});
              navigation.navigate('Product');
            }}>
            <View style={styles.itemWrapper}>
              <Image source={{uri: image}} style={styles.image} />
              <Text style={styles.titleText}>{item.title}</Text>
            </View>
          </TouchableOpacity>
        );
      }
    }
    if (filteredProductsArray) {
      return (
        <TouchableOpacity
          onPress={() => {
            globalDispatch({type: FILTERED_PRODUCT, payload: item});
            navigation.navigate('Product');
          }}>
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
      data={products || filteredProductsArray}
      renderItem={renderItem}
      keyExtractor={item => item.slug}
    />
  );
};

export default RenderProducts;
