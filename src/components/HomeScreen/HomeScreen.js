import React from 'react';
import {ImageBackground, View, Text, TouchableOpacity} from 'react-native';
import styles from './HomeScreenStyles';
import useContentful from '../../hooks/use-contentful';
import {query} from '../../utils/contentful-query';
import image from '../../assets/images/20200307_F20WinterMerch_MtCurrie_Percival_DSC00066shrp-mobile.jpg';
import ImageComponent from '../Image/Image';
import Header from '../Header/Header';

const HomeScreen = ({navigation}) => {
  const {products} = useContentful(query, null);
  const randomProduct = products[Math.floor(Math.random() * products.length)];

  return (
    <View style={styles.homescreenContainer}>
      <Header navigation={navigation} />

      <ImageBackground source={image} resizeMode="cover" style={styles.image}>
        <TouchableOpacity style={styles.heroWrapper}>
          <Text style={styles.titleText}>{randomProduct?.title}</Text>
          <ImageComponent src={randomProduct?.imagesCollection.items[0].url} />
        </TouchableOpacity>
      </ImageBackground>
    </View>
  );
};

export default HomeScreen;
