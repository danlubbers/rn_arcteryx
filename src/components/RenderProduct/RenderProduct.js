import React from 'react';
import styles from './RenderProductStyles';
import {TouchableOpacity, FlatList, Image, View, Text} from 'react-native';

const RenderProduct = ({
  image,
  description,
  price,
  color,
  changeColor,
  thumbnailImages,
}) => {
  const renderItem = item => {
    const thumbnailImage = item.item.url;
    const colorDescriptions = item.item.description;

    return (
      <TouchableOpacity
        onPress={() => {
          changeColor(colorDescriptions);
        }}>
        <View style={styles.thumbnailWrapper}>
          <Image source={{uri: thumbnailImage}} style={styles.thumbnailImage} />
        </View>
      </TouchableOpacity>
    );
  };
  const numColumns = 5;

  return (
    <View style={styles.itemWrapper}>
      <Text style={styles.description}>{description}</Text>
      <Image source={{uri: image}} style={styles.image} />
      <Text style={styles.price}>${price}</Text>
      <Text style={styles.colorText}>Select a colour: {color}</Text>
      <FlatList
        data={thumbnailImages}
        renderItem={renderItem}
        keyExtractor={item => item.url}
        numColumns={numColumns}
      />
    </View>
  );
};

export default RenderProduct;
