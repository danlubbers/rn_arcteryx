import React from 'react';
import {ImageBackground, View} from 'react-native';
import styles from './HomeScreenStyles';
import image from '../../assets/images/20200307_F20WinterMerch_MtCurrie_Percival_DSC00066shrp-mobile.jpg';
import HeaderComponent from '../Header/Header';
import HeroImageComponent from '../HeroImage/HeroImage';

const HomeScreen = ({navigation, randomProduct}) => {
  return (
    <View style={styles.homescreenContainer}>
      <HeaderComponent navigation={navigation} />

      <ImageBackground source={image} resizeMode="cover" style={styles.image}>
        <HeroImageComponent randomProduct={randomProduct} />
      </ImageBackground>
    </View>
  );
};

export default HomeScreen;
