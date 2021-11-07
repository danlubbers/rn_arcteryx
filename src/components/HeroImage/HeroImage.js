import React from 'react';
import {TouchableOpacity, Text} from 'react-native';
import styles from './HeroImageStyles';
import ImageComponent from '../Image/Image';

const HeroImage = ({navigation, randomProduct}) => {
  return (
    <TouchableOpacity
      style={styles.heroWrapper}
      onPress={() => {
        navigation.navigate('Product');
      }}>
      <Text style={styles.titleText}>{randomProduct?.title}</Text>
      <ImageComponent src={randomProduct?.imagesCollection.items[0].url} />
    </TouchableOpacity>
  );
};

export default HeroImage;
