import React from 'react';
import {TouchableOpacity, Text} from 'react-native';
import styles from './HeroImageStyles';
import ImageComponent from '../Image/Image';
import {EDIT_SLUG} from '../../constants/actionTypes';

const HeroImage = ({navigation, randomProduct, globalDispatch}) => {
  // console.log(`randomProduct`, randomProduct.slug);
  return (
    <TouchableOpacity
      style={styles.heroWrapper}
      onPress={() => {
        globalDispatch({type: EDIT_SLUG, payload: {slug: randomProduct.slug}});
        navigation.navigate('Product');
      }}>
      <Text style={styles.titleText}>{randomProduct?.title}</Text>
      <ImageComponent src={randomProduct?.imagesCollection.items[0].url} />
    </TouchableOpacity>
  );
};

export default HeroImage;
