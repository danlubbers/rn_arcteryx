import React from 'react';
import {
  ImageBackground,
  Image,
  View,
  Text,
  TouchableOpacity,
} from 'react-native';
import styles from './HomeScreenStyles';
import useContentful from '../../hooks/use-contentful';
import {query} from '../../utils/contentful-query';
import logo from '../../assets/logo/arcteryx.png';
import image from '../../assets/images/20200307_F20WinterMerch_MtCurrie_Percival_DSC00066shrp-mobile.jpg';
import Icon from '../Icon/Icon';
import ImageComponent from '../Image/Image';

const HomeScreen = ({navigation}) => {
  const {products} = useContentful(query, null);
  const randomProduct = products[Math.floor(Math.random() * products.length)];

  return (
    <View style={styles.homescreenContainer}>
      <View style={styles.headerWrapper}>
        <Image source={logo} style={styles.logo} />
        <View style={styles.navigationWrapper}>
          <TouchableOpacity
            onPress={() => {
              navigation.navigate('Products');
            }}>
            <Text style={styles.genderText}>Mens</Text>
          </TouchableOpacity>
          <TouchableOpacity
            onPress={() => {
              navigation.navigate('Products');
            }}>
            <Text style={styles.genderText}>Womens</Text>
          </TouchableOpacity>
          <TouchableOpacity
            onPress={() => {
              navigation.navigate('Search');
            }}>
            <Icon name="search" type="material" size={21} />
          </TouchableOpacity>
        </View>
      </View>
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
